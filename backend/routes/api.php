<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\StoryController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\UserProfileController;


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


Route::post('/stories/draft', [StoryController::class, 'saveDraft']);
Route::post('/stories/{id}/publish', [StoryController::class, 'publishStory']);
Route::get('/stories/magic-ideas', [StoryController::class, 'getMagicIdea']);

Route::get('/stories', [StoryController::class, 'index']);  // For listing all stories
Route::get('/stories/{id}', [StoryController::class, 'show']);  // For showing a specific story
Route::post('/stories/magic-ideas', [StoryController::class, 'getMagicIdea']);
Route::post('/stories/{storyId}/toggle-like', [LikeController::class, 'toggleLike']);
Route::get('/user-profile/{id}', [UserProfileController::class, 'getUserProfile']);
Route::put('/user-profile/{id}', [UserProfileController::class, 'updateUserProfile']);