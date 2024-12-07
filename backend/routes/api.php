<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UserProfileController;//esraa
use App\Http\Controllers\StoryController;
use App\Http\Controllers\LikeController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [RegisterController::class, 'register']);

Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:sanctum');

//esraa
Route::get('/user-profile/{userId}', [UserProfileController::class, 'getUserProfile']);
Route::get('/user-stories/{userId}', [UserProfileController::class, 'getUserStories']);

Route::post('/stories/draft', [StoryController::class, 'saveDraft']);
Route::post('/stories/{id}/publish', [StoryController::class, 'publishStory']);
Route::get('/stories/magic-ideas', [StoryController::class, 'getMagicIdea']);

Route::get('/stories', [StoryController::class, 'index']);  // For listing all stories
Route::get('/stories/{id}', [StoryController::class, 'show']);  // For showing a specific story
Route::post('/stories/magic-ideas', [StoryController::class, 'getMagicIdea']);
Route::post('/stories/{storyId}/toggle-like', [LikeController::class, 'toggleLike']);