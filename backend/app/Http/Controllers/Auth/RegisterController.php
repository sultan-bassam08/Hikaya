<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        // Check if the email already exists in the database
        if (User::where('email', $request->email)->exists()) {
            return response()->json([
                'message' => 'The email is already registered. Please use a different email or log in.',
            ], 409); // 409 Conflict status code
        }

        // Validation rules including password confirmation
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            Log::warning('Validation failed during registration.', [
                'errors' => $validator->errors()->toArray(),
                'input' => $request->except(['password', 'password_confirmation']),
            ]);

            return response()->json([
                'message' => 'Validation errors occurred.',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            // Create the user with hashed password
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            Log::info('User registered successfully.', [
                'user_id' => $user->id,
                'email' => $user->email,
            ]);

            return response()->json([
                'message' => 'Registration successful. Welcome!',
                'user' => $user,
            ], 201);
        } catch (\Exception $e) {
            Log::error('User registration failed.', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'message' => 'Something went wrong during registration. Please try again later.',
            ], 500);
        }
    }
}