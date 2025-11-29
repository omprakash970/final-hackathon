import React, { useEffect, useRef, useState } from 'react';
import ChatBubble from '../../components/ChatBubble';

export default function StudentChat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'company', message: 'Hello! How can I help you?' },
    { id: 2, sender: 'user', message: "I'm interested in your internship program." },
  ]);
  const [text, setText] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages.length]);

  const onSend = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', message: trimmed }]);
    setText('');
  };

  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      <h1 className="title-xl mb-6">Chat with Companies</h1>
      <div className="card container-narrow">
        <div ref={listRef} className="max-h-400 scroll-y mb-4 section-muted" style={{ padding: 16 }}>
          {messages.map(m => (
            <ChatBubble key={m.id} message={m.message} sender={m.sender} />
          ))}
        </div>
        <form onSubmit={onSend} className="row" style={{ gap: 8 }}>
          <input
            type="text"
            placeholder="Type your message..."
            className="form-field w-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}
