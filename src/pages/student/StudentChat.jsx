import React from 'react';
import StudentLayout from '../../layouts/StudentLayout';
import ChatBubble from '../../components/ChatBubble';

export default function StudentChat() {
  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold mb-6">Chat</h1>
      <div className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
        <div className="h-96 overflow-y-auto mb-4 border rounded p-4 bg-gray-50">
          <ChatBubble message="Hello! How can I help you?" sender="company" />
          <ChatBubble message="I'm interested in your internship program." sender="user" />
        </div>
        <input 
          type="text" 
          placeholder="Type your message..." 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
        />
      </div>
    </StudentLayout>
  );
}
