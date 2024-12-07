<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UserProfileController extends Controller
{
    // Fetch user profile details
    public function getUserProfile(Request $request)
    {
        $user = $request->user(); // Get logged-in user

        return response()->json([
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'profile_picture' => $user->profile_picture,
        ]);
    }

    // Update user profile
    public function updateUserProfile(Request $request)
    {
        $user = $request->user(); // Get logged-in user

        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'old_password' => 'nullable|string',
            'new_password' => 'nullable|string|min:6',
            'profile_picture' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Check and update password if provided
        if ($request->filled('old_password') && Hash::check($request->old_password, $user->password)) {
            if ($request->filled('new_password')) {
                $user->password = Hash::make($request->new_password);
            } else {
                return response()->json(['error' => 'New password is required'], 400);
            }
        } else {
            return response()->json(['error' => 'Old password is incorrect'], 400);
        }

        // Handle profile picture upload
        if ($request->hasFile('profile_picture')) {
            $file = $request->file('profile_picture');
            $path = $file->storeAs('images1', $file->getClientOriginalName(), 'public');
            $user->profile_picture = $path;
        }

        $user->first_name = $validated['first_name'];
        $user->last_name = $validated['last_name'];
        $user->save();

        return response()->json(['success' => true]);
    }
}