<?php

// UserProfileController.php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserProfileController extends Controller
{
    public function getUserProfile($id)
    {
        $user = User::with('Stories')->find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Categorize Stories
        $completedStories = $user->Stories->where('status', 'completed');
        $draftStories = $user->Stories->where('status', 'draft');
        $activityStories = $user->Stories->where('status', 'activity');

        return response()->json([
            'user' => [
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'profile_picture' => $user->profile_picture,
                'bio' => $user->bio,
                'email' => $user->email,
            ],
            'Stories' => [
                'completed' => $completedStories,
                'draft' => $draftStories,
                'activity' => $activityStories,
            ],
        ]);
    }
}