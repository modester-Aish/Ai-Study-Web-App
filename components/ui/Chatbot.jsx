import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#007bff",
          color: "#fff",
          padding: "10px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            width: "300px",
            height: "400px",
            background: "#fff",
            borderRadius: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Chatbot</h3>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <iframe
            src="https://ai-mini-chatbot.vercel.app/" // 🔹 Apna chatbot link lagao
            width="100%"
            height="100%"
            style={{ border: "none" }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
