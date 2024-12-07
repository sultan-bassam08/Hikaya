<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Story extends Model
{
    use HasFactory, SoftDeletes;

    protected $primaryKey = 'story_id';

    // Allow mass assignment for these fields
    protected $fillable = ['user_id', 'title', 'content', 'status', 'category_id', 'story_picture'];

    // Story belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Story belongs to a category
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'category_id');
    }
}
