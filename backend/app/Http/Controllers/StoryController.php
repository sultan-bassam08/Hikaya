<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class StoryController extends Controller
{
    public function saveDraft(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'user_id' => 'required|exists:users,id', // Ensure user exists
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category_id' => 'required|integer|exists:categories,category_id', // Ensure category exists
            'story_picture' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
    
        $imagePath = null;
        if ($request->hasFile('story_picture')) {
            // Generate a new image name using the current timestamp and the original extension
            $imageName = now()->format('Y-m-d_H-i-s') . '.' . $request->file('story_picture')->getClientOriginalExtension();
    
            // Define the path where the image will be stored
            $imagePath = 'images/' . $imageName;
    
            // Move the file to the 'public/images' directory with the new name
            $request->file('story_picture')->move(public_path('images'), $imageName);
        }
    
        // Create the story in the database
        $story = Story::create([
            'user_id' => $request->user_id,
            'title' => $request->title,
            'content' => $request->content,
            'status' => 'draft',
            'category_id' => $request->category_id, // Use category_id here
            'story_picture' => $imagePath, // Save the relative image path
        ]);
    
        return response()->json([
            'message' => 'Draft saved successfully.',
            'story' => $story,
        ], 201);
    }
    
    public function publishStory($id)
    {
       
        // Find the story and change its status to published
        $story = Story::findOrFail($id);
        $story->status = 'published';
        $story->save();
       
        return response()->json($story);
    }


    public function getMagicIdea(Request $request)
    {
        try {
            $apiKey = env('OPENAI_API_KEY');
            
            $currentTitle = $request->input('title');
            $category = $request->input('category');
            $story = $request->input('content');
            
            if (!$currentTitle || !$category || !$story) {
                return response()->json([
                    'success' => false,
                    'message' => 'Title, category, and content (story) are required.'
                ], 400);
            }
    
            // GPT Prompt for new title and content
            $messages = [
                [
                    'role' => 'system',
                    'content' => 'You are a creative assistant for the Hikaya website. Generate a new title and content for the hikaya ensuring the content is divided into 3 sections: start, middle, and end. Keep the content concise (maximum 200 characters). The content should match the provided category.'
                ],
                [
                    'role' => 'user',
                    'content' => "Current Title: $currentTitle\nCategory: $category\nStory: $story"
                ]
            ];
    
            $data = [
                'model' => 'gpt-3.5-turbo',
                'messages' => $messages,
                'max_tokens' => 300,
                'temperature' => 0.7,
            ];
    
            $options = [
                'http' => [
                    'header' => [
                        'Content-Type: application/json',
                        'Authorization: Bearer ' . $apiKey
                    ],
                    'method' => 'POST',
                    'content' => json_encode($data),
                ],
            ];
    
            $context = stream_context_create($options);
            $response = file_get_contents('https://api.openai.com/v1/chat/completions', false, $context);
    
            if ($response === false) {
                throw new \Exception('Failed to connect to OpenAI API');
            }
    
            $responseData = json_decode($response, true);
    
            if (isset($responseData['choices'][0]['message']['content'])) {
                $generatedContent = $responseData['choices'][0]['message']['content'];
    
                // Split the generated response into title and content
                $lines = explode("\n", trim($generatedContent));
                $newTitle = $lines[0] ?? 'Untitled';
                $newContent = implode("\n", array_slice($lines, 1));
    
                // Ensure content is within 200 characters
                $shortContent = substr($newContent, 0, 200);
    
                // Image generation with the new title and short content
                $imageDescription = "Full HD highly detailed image for hikaya story '$newTitle' in '$category'. Description: $shortContent. Focus on realism, vibrant colors, and detailed environments.";
    
                $imageData = [
                    'prompt' => $imageDescription,
                    'n' => 1,
                    'size' => '512x512',
                ];
    
                $imageOptions = [
                    'http' => [
                        'header' => [
                            'Content-Type: application/json',
                            'Authorization: Bearer ' . $apiKey
                        ],
                        'method' => 'POST',
                        'content' => json_encode($imageData),
                    ],
                ];
    
                $imageContext = stream_context_create($imageOptions);
                $imageResponse = file_get_contents('https://api.openai.com/v1/images/generations', false, $imageContext);
    
                if ($imageResponse === false) {
                    throw new \Exception('Failed to generate image using DALL·E');
                }
    
                $imageResponseData = json_decode($imageResponse, true);
    
                if (isset($imageResponseData['data']) && !empty($imageResponseData['data'])) {
                    $imageUrls = array_map(function ($image) {
                        return $image['url'];
                    }, $imageResponseData['data']);
                } else {
                    throw new \Exception('Failed to get image URLs from DALL·E');
                }
    
                // Return the response with the new title and content
                return response()->json([
                    'success' => true,
                    'title' => $newTitle,
                    'category' => $category,
                    'content' => $newContent,
                    'images' => $imageUrls
                ]);
            } else {
                throw new \Exception('Invalid response from GPT');
            }
    
        } catch (\Exception $e) {
            Log::error('Error generating magic ideas: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong while generating magic ideas. ' . $e->getMessage(),
            ], 500);
        }
    }
    
    public function index()
    {
        // Fetch all published stories with the user and category information
        $stories = Story::with(['user', 'category'])
                        ->where('status', 'published')
                        ->orderBy('created_at', 'desc')
                        ->get();

        // Return the stories as JSON (for API) or pass to view (for Blade template)
        // dd($stories);
        return response()->json($stories);  // For API
    }
    public function show($id)
    {
        // Find the story with the related user and category
        $story = Story::with(['user', 'category'])->findOrFail($id);

        return response()->json($story);  // For API
    }
}

