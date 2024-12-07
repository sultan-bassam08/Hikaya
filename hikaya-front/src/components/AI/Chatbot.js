import React, { useState, useEffect } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false); // State to control the visibility of the chat box
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  useEffect(() => {
    // Add the initial assistant message on component mount
    generateMessage(
      "assistant",
      "Hello! I'm Waqtify. How can I help make your day easier?"
    );
  }, []);

  // Toggle the chat box visibility
  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    generateMessage("user", message);

    // Disable the submit button while waiting for a response
    setIsSubmitDisabled(true);

    // Send chat to PHP backend using fetch
    fetch("ai.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chats: [...chats, { role: "user", content: message }],
      }), // Send all chats
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from PHP:", data); // Log the response to debug

        // Assuming the response contains the assistant's message
        generateMessage("assistant", data.message);
        setIsSubmitDisabled(false); // Re-enable the submit button after response
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitDisabled(false); // Re-enable the submit button in case of error
      });

    setMessage(""); // Clear input field after submitting
  };

  const generateMessage = (role, content) => {
    setChats((prevChats) => [...prevChats, { role, content }]);
  };

  return (
    <div id="body">
      <div
        id="chat-circle"
        className="btn btn-raised"
        onClick={handleChatToggle} // Handle the chat box toggle on click
      >
        <div id="chat-overlay"></div>
        <i className="material-icons">speaker_phone</i>
      </div>

      <div className={`chat-box ${isChatOpen ? "open" : ""}`}>
        {" "}
        {/* Chat box visibility controlled by state */}
        <div className="chat-box-header">
          Waqtify
          <span className="chat-box-toggle" onClick={handleChatToggle}>
            <i className="material-icons">close</i>
          </span>
        </div>
        <div className="chat-box-body">
          <div className="chat-box-overlay"></div>
          <div className="chat-logs">
            {/* Display chat messages */}
            {chats.map((chat, index) => (
              <div key={index} className={`chat-msg ${chat.role}`}>
                <span className="msg-avatar">
                  <img src="../img/logo1.png" alt="avatar" />
                </span>
                <div className="cm-msg-text">{chat.content}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="chat-input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="chat-input"
              placeholder="Send a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Handle input change
            />
            <button
              type="submit"
              className="chat-submit"
              id="chat-submit"
              disabled={isSubmitDisabled}
            >
              <i className="material-icons">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
