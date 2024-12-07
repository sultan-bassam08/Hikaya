<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stories', function (Blueprint $table) {
            $table->id('story_id'); 
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); 
            $table->string('title', 255); 
            $table->text('content');
            $table->enum('status', ['draft', 'published']);
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade'); 
            $table->timestamps(); 
            $table->softDeletes(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stories');
    }
};
