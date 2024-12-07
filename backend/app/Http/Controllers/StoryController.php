<?php

namespace App\Http\Controllers;
use App\Models\Story;
use Illuminate\Http\Request;

class StoryController extends Controller
{
    public function saveDraft(Request $request)
    {

        $story = Story::create([
            'user_id'=>1,
            'title' => '$request->title',
            'content' => '$request->content',
            'status' => 'draft',
            'category_id' => 1
        ]);
        dd($story);
        return response()->json($story);
    }

    public function publishStory($id)
    {
        $story = Story::findOrFail($id);
        $story->status = 'published';
        $story->save();

        return response()->json($story);
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
