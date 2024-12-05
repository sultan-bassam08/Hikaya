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

  // Quill modules and formats for text editor
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']                                         // remove formatting button
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
      // Simulate API call to fetch creative ideas
      const response = await axios.get('/api/magic-ideas'); // Replace with real API
      setIdeas(response.data.ideas);  // Assuming the API returns an array of ideas
    } catch (error) {
      console.error('Error fetching ideas', error);
    }
  };

  // Handler for saving a draft
  const handleSaveDraft = () => {
    // Mock saving draft (or send to backend)
    setDraftSaved(true);
    console.log('Draft saved:', story);
  };

  // Handler for publishing the story
  const handlePublishStory = async () => {
    try {
      // Submit story to backend
      const response = await axios.post('/api/publish-story', { story });
      
      // Get the auto-generated description from the response
      setGeneratedDescription(response.data.description);  // Replace with real data
      console.log('Story published!');
    } catch (error) {
      console.error('Error publishing story', error);
    }
  };

  return (
    <div className="write-story-container">
      <h2>Write Your Story</h2>

      {/* Quill Story Input Section */}
      <ReactQuill 
        value={story}
        onChange={setStory}  // update the story state with Quill content
        modules={quillModules}
        formats={quillFormats}
        placeholder="Start writing your story..."
      />

      {/* Magic Ideas Button */}
      <button onClick={handleMagicIdeas} className="magic-ideas-btn">
        Magic Ideas
      </button>

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
      <div className="story-actions">
        <button onClick={handleSaveDraft} className="save-draft-btn">
          Save Draft
        </button>
        <button onClick={handlePublishStory} className="publish-story-btn">
          Publish Story
        </button>
      </div>

      {/* Draft Saved Message */}
      {draftSaved && <p>Your draft has been saved!</p>}

      {/* Auto-Generated Description */}
      {generatedDescription && (
        <div className="generated-description">
          <h4>Generated Story Description:</h4>
          <p>{generatedDescription}</p>
        </div>
      )}
    </div>
  );
};

export default WriteStory;
