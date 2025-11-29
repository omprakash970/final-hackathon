import React from 'react';

export default function ChatBubble({ message, sender = 'user' }) {
  const isUser = sender === 'user';
  return (
    <div className={`chat-row ${isUser ? 'end' : ''}`}>
      <div className={`bubble ${isUser ? 'user' : ''}`}>
        <p>{message}</p>
      </div>
    </div>
  );
}

