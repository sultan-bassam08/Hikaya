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


  // Validation rules including password confirmation
  $validator = Validator::make($request->all(), [
      'name' => 'required|string|max:255',
      'email' => 'required|string|email|max:255|unique:users',
      'password' => 'required|string|min:8|confirmed', // `confirmed` ensures password_confirmation matches
  ]);

  // Check for validation failure
  if ($validator->fails()) {
      Log::error('Validation failed: ', $validator->errors()->toArray());
      return response()->json(['errors' => $validator->errors()], 422);
  }

  try {
      // Create user and hash password
      $user = User::create([
          'name' => $request->name,
          'email' => $request->email,
          'password' => Hash::make($request->password), // Hash the password for security
      ]);

      // Respond with success message and user details
      return response()->json([
          'message' => 'Registration successful. Welcome!',
          'user' => $user,
      ], 201);

  } catch (\Exception $e) {
      // Log any unexpected errors that occur during user creation
      Log::error('User creation failed: ' . $e->getMessage());

      // Return a generic error message for unexpected errors
      return response()->json([
          'error' => 'Something went wrong. Please try again later.',
          'details' => $e->getMessage(), // You can remove this in production for security reasons
      ], 500);
  }

}


}