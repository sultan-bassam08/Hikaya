<?php

// UserProfileController.php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Http\Request;

class UserProfileController extends Controller
{
    public function getUserProfile($id)
    {
        // Find the user by ID
        $user = User::find($id);

        // Check if user exists
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Return user data as JSON
        return response()->json([
            'id' => $user->id,
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'email' => $user->email,
            'bio' => $user->bio,
            'profile_picture' => $user->profile_picture,
        ]);
    }
    public function updateUserProfile(Request $request, $id)
    {
        $user = User::find($id);
    
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
    
        // Validate the input data
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'profile_picture' => 'nullable|image|mimes:jpeg,  png,jpg,gif|max:2048',
            'bio' => 'nullable|string|max:1000', // Add validation for bio
        ]);
    
    
        // Update user data
        $user->first_name = $validated['first_name'];
        $user->last_name = $validated['last_name'];
        $user->bio = $validated['bio']; // Update the bio
    
    
        // Handle profile picture upload (if any)
        if ($request->hasFile('profile_picture')) {
            $imagePath = $request->file('profile_picture')->store('profile_pics', 'public');
            $user->profile_picture = $imagePath;
        }
    
        $user->save();
    
        return response()->json(['message' => 'Profile updated successfully']);
    }
    
}