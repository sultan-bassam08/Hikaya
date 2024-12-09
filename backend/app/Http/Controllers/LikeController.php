<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;
use Auth;

class LikeController extends Controller
{
    public function toggleLike(Request $request, $storyId)
    {
        $userId = $request->input('user_id');  // Get the user_id from the request

        // Check if the user has already liked the story
        $existingLike = Like::where('user_id', $userId)
                            ->where('story_id', $storyId)
                            ->first();

        if ($existingLike) {
            // If a like exists, remove it (unlike)
            $existingLike->delete();
            return response()->json(['message' => 'Like removed successfully']);
        } else {
            // Otherwise, create a new like
            Like::create([
                'user_id' => $userId,
                'story_id' => $storyId
            ]);
            return response()->json(['message' => 'Story liked successfully']);
        }
    }
}
