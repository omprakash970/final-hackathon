import React from 'react';
import ChatBubble from '../../components/ChatBubble';

export default function StudentChat() {
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <h1 className="title-xl mb-6">Chat with Companies</h1>
      <div className="card container-narrow">
        <div className="max-h-400 scroll-y mb-4 section-muted" style={{ padding: 16 }}>
          <ChatBubble message="Hello! How can I help you?" sender="company" />
          <ChatBubble message="I'm interested in your internship program." sender="user" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="row" style={{ gap: 8 }}>
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="form-field w-full"
          />
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}
