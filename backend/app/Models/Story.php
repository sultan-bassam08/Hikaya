<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    protected $primaryKey = 'story_id';
    use HasFactory;
    protected $fillable = [
        'user_id',
        'title',
        'content',
        'status',
        'category_id',
        'story_picture',
    ];
}
