import React, { useState } from "react";
import "./Messages.css";

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      message: "I found an issue with the payment system on your website.",
      status: "unread",
      timestamp: "2024-11-23 14:32",
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah.smith@example.com",
      message: "The Vegan Burger was amazing, but delivery took too long.",
      status: "sent",
      timestamp: "2024-11-23 10:20",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      message: "Can I have a sample menu before making a bulk order?",
      status: "unread",
      timestamp: "2024-11-22 18:45",
    },
    {
      id: 4,
      name: "Anna White",
      email: "anna.white@example.com",
      message: "Please add more gluten-free options to the menu.",
      status: "sent",
      timestamp: "2024-11-22 15:10",
    },
    {
      id: 5,
      name: "David Clark",
      email: "david.clark@example.com",
      message: "The website’s navigation is a bit confusing on mobile.",
      status: "unread",
      timestamp: "2024-11-21 09:05",
    },
  ]);

  const [filter, setFilter] = useState("all");

  const [activeMessage, setActiveMessage] = useState(null);
  const [reply, setReply] = useState("");

  const filteredMessages = messages.filter((msg) => {
    if (filter === "all") return true;
    if (filter === "unread") return msg.status === "unread";
    if (filter === "sent") return msg.status === "sent";
    return true;
  });

  const handleReply = (id) => {
    const message = messages.find((msg) => msg.id === id);
    setActiveMessage(message);
  };

  const handleSendReply = () => {
    setMessages(messages.filter((msg) => msg.id !== activeMessage.id)); 
    setActiveMessage(null); 
    setReply(""); 
    alert("Reply sent successfully!");
  };

  return (
    <div className="messages-container">
      <div className="messages-header">
        <h1 className="messages-title">Admin Messages</h1>
        <div className="filter-buttons">
          <button
            className={`filter-button ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-button ${filter === "unread" ? "active" : ""}`}
            onClick={() => setFilter("unread")}
          >
            Unread
          </button>
          <button
            className={`filter-button ${filter === "sent" ? "active" : ""}`}
            onClick={() => setFilter("sent")}
          >
            Sent
          </button>
        </div>
      </div>

      <div className="messages-list">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((msg) => (
            <div key={msg.id} className="message-card">
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p className="timestamp"><strong>Submitted:</strong> {msg.timestamp}</p>
              <button
                className="reply-button"
                onClick={() => handleReply(msg.id)}
              >
                Reply
              </button>
            </div>
          ))
        ) : (
          <p className="no-messages">No messages to display.</p>
        )}
      </div>

      {activeMessage && (
        <div className="reply-modal">
          <h2>Reply to Message</h2>
          <p><strong>Name:</strong> {activeMessage.name}</p>
          <p><strong>Email:</strong> {activeMessage.email}</p>
          <p><strong>Message:</strong> {activeMessage.message}</p>
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Write your reply here..."
          />
          <div className="modal-actions">
            <button className="send-button" onClick={handleSendReply}>
              Send Reply
            </button>
            <button
              className="cancel-button"
              onClick={() => setActiveMessage(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
