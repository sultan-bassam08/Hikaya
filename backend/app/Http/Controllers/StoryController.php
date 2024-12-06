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
}
