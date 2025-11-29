import { useState } from 'react';
import ChatBubble from '../../components/ChatBubble';

export default function StudentChat() {
  const [messages, setMessages] = useState([
    { id: 1, message: "Hello! How can I help you?", sender: "company" },
    { id: 2, message: "I'm interested in your internship program.", sender: "user" },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), message: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Chat with Companies</h1>
      <div className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
        <div className="h-96 overflow-y-auto mb-4 border rounded-lg p-4 bg-gray-50">
          {messages.map((msg) => (
            <ChatBubble key={msg.id} message={msg.message} sender={msg.sender} />
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
