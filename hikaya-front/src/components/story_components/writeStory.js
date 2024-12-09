import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import "./writeStory.css";

const WriteStory = () => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [category, setCategory] = useState("");
  const [imagePreview, setImagePreview] = useState("/images/omar.jpg");
  const [image, setImage] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);
  const [isMagicGenerating, setIsMagicGenerating] = useState(false);

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const handleMagicIdeas = async () => {
    if (!title || !category) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please provide a title and select a category before using Magic Ideas.",
      });
      return;
    }

    setIsMagicGenerating(true);

    Swal.fire({
      title: "Please wait...",
      text: "Generating magic ideas may take 1–2 minutes.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const delay = Math.floor(Math.random() * 20 + 20) * 1000;
    await new Promise((resolve) => setTimeout(resolve, delay));

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/stories/magic-ideas",
        {
          title,
          category,
          content: story,
        }
      );

      const {
        success,
        title: apiTitle,
        content: apiContent,
        images,
      } = response.data;

      if (success) {
        Swal.fire({
          title: "Magic Ideas Generated!",
          html: `
            <strong>Title:</strong> ${apiTitle}<br/><br/>
            <strong>Content:</strong> <p>${apiContent}</p>
            <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
              ${images
                .map(
                  (img, index) => `
                <div style="margin-bottom: 20px; text-align: center;">
                  <input type="radio" id="image${index}" name="selectedImage" value="${img}" ${
                    index === 0 ? "checked" : ""
                  } />
                  <label for="image${index}">
                    <img src="${img}" alt="Generated Image" style="width: 150px; height: auto; margin-top: 10px; border-radius: 5px; border: 2px solid #ddd;" />
                  </label>
                </div>
              `
                )
                .join("")}
            </div>
          `,
          showCancelButton: true,
          confirmButtonText: "Apply Changes",
          cancelButtonText: "Cancel",
          width: "600px",
          preConfirm: () => {
            const selectedImage = document.querySelector(
              'input[name="selectedImage"]:checked'
            );
            if (selectedImage) {
              const selectedImageUrl = selectedImage.value;
              setTitle(apiTitle);
              setStory(apiContent);
              setImagePreview(selectedImageUrl);
              setImage(selectedImageUrl);
            } else {
              Swal.fire({
                icon: "error",
                title: "No Image Selected",
                text: "Please select an image to apply changes.",
              });
            }
          },
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to Fetch Magic Ideas",
          text: "Something went wrong while fetching the ideas.",
        });
      }
    } catch (error) {
      console.error("Error fetching magic ideas:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while trying to fetch the ideas.",
      });
    } finally {
      setIsMagicGenerating(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSaveDraft = async () => {
    if (!title || !category || !story) {
      Swal.fire({
        icon: "error",
        title: "Failed to Save Draft",
        text: "Please fill in all required fields before saving the draft.",
      });
      return;
    }

    setIsSaving(true);
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const formData = new FormData();
      formData.append("user_id", user?.id);
      formData.append("title", title);
      formData.append("content", story);
      formData.append("category_id", category);
      if (image) {
        formData.append("story_picture", image);
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/api/stories/draft",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setDraftSaved(true);
      Swal.fire({
        icon: "success",
        title: "Draft Published!",
        text: "Your draft has been published successfully.",
      });
    } catch (error) {
      console.error("Error saving draft:", error);
      Swal.fire({
        icon: "error",
        title: "Error Saving Draft",
        text: "Something went wrong while saving your draft.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div id="writeStory-container">
      <div id="writeStory-sidebar">
        <h2>Write Your Story</h2>
        <div>
          <label htmlFor="writeStory-titleInput">Title</label>
          <input
            type="text"
            id="writeStory-titleInput"
            placeholder="Enter your story title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="writeStory-category">Category</label>
          <select
            id="writeStory-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="1">Adventure</option>
            <option value="2">Drama</option>
            <option value="3">Fantasy</option>
            <option value="4">Horror</option>
            <option value="5">Romance</option>
            <option value="6">Sci-Fi</option>
          </select>

          <label htmlFor="writeStory-image">Upload Image</label>
          <input
            type="file"
            id="writeStory-image"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label
            htmlFor="writeStory-image"
            className="custom-file-upload"
            style={{
              background:
                "radial-gradient(ellipse farthest-corner at right bottom, #37A0FE 0%, #318EFD 8%, #28799F 30%, #2F6E8A 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #ACFFFF 8%, #64D1B4 25%, #1F5D4A 62.5%, #1F5D4A 100%)",
            }}
          >
            Choose Image
          </label>
        </div>

        <div>
          <button
            style={{
              background:
                "linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))",
            }}
            onClick={handleMagicIdeas}
            id="writeStory-magicIdeasButton"
            disabled={isMagicGenerating}
          >
            {isMagicGenerating ? "Generating Magic Ideas..." : "Magic Ideas"}
          </button>
          <button
            onClick={handleSaveDraft}
            id="writeStory-saveDraftButton"
            style={{ background: "linear-gradient(to right, #32a852, #6bcf5e" }}
          >
            {isSaving ? "Saving..." : "Publish"}
          </button>
        </div>
      </div>

      <div id="writeStory-main">
        <div id="writeStory-editorContainer">
          <ReactQuill
            value={story}
            onChange={setStory}
            modules={quillModules}
            placeholder="Start writing your story..."
            id="writeStory-editor"
          />
        </div>

        <div id="writeStory-imageContainer">
          <img src={imagePreview} alt="Preview" className="image-preview" />
        </div>
      </div>
    </div>
  );
};

export default WriteStory;
