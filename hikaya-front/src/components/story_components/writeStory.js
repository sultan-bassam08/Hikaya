import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './writeStory.css';

const WriteStory = () => {
  // States for managing the story, draft status, and magic ideas
  const [story, setStory] = useState('');
  const [draftSaved, setDraftSaved] = useState(false);
  const [ideas, setIdeas] = useState([]);
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [storyId, setStoryId] = useState(null); // To store the story ID for publishing later

  // Quill modules and formats for text editor
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['clean']
    ]
  };

  const quillFormats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  // Handler for the "Magic Ideas" button
  const handleMagicIdeas = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/stories/magic-ideas'); // Adjust the API route
      setIdeas(response.data.idea);  // Assuming the API returns a single idea, update accordingly
    } catch (error) {
      console.error('Error fetching ideas', error);
    }
  };

  // Handler for saving a draft
  const handleSaveDraft = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/stories/draft', { title: 'My Story Title', content: story });
      setDraftSaved(true);
      console.log('Draft saved:', response.data);
    } catch (error) {
      console.error('Error saving draft', error);
    }
  };

  // Handler for publishing the story
  const handlePublishStory = async () => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/stories/${storyId}/publish`, { story });
      setGeneratedDescription(response.data.description);  // Replace with real data from your API
      console.log('Story published!');
    } catch (error) {
      console.error('Error publishing story', error);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Write Your Story</h2>

      {/* Quill Story Input Section */}
      <ReactQuill 
        value={story}
        onChange={setStory}  // update the story state with Quill content
        modules={quillModules}
        formats={quillFormats}
        placeholder="Start writing your story..."
        className="mb-4"
      />

      {/* Magic Ideas Button */}
      <div className="d-flex justify-content-center mb-4">
        <button onClick={handleMagicIdeas} className="btn btn-info">
          Magic Ideas
        </button>
      </div>

      {/* Display fetched ideas (if any) */}
      {ideas.length > 0 && (
        <div className="ideas-list">
          <h4>Here are some ideas to spark your creativity:</h4>
          <ul>
            {ideas.map((idea, index) => (
              <li key={index}>{idea}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Buttons */}
      <div className="d-flex justify-content-between mb-4">
        <button onClick={handleSaveDraft} className="btn btn-warning">
          Save Draft
        </button>
        <button onClick={handlePublishStory} className="btn btn-success">
          Publish Story
        </button>
      </div>

      {/* Draft Saved Message */}
      {draftSaved && <p className="alert alert-success">Your draft has been saved!</p>}

      {/* Auto-Generated Description */}
      {generatedDescription && (
        <div className="alert alert-info">
          <h4>Generated Story Description:</h4>
          <p>{generatedDescription}</p>
        </div>
      )}
    </div>
  );
};

export default WriteStory;
