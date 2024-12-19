import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import imojiicone from '/src/assets/icons8-smile-30.png';
import documenticone from '/src/assets/icons8-document-64.png';
import ChatNavbar from './Chatnavbar';

function ChatSection() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      if (editingIndex !== null) {
        // Update the existing message
        const updatedMessages = [...messages];
        updatedMessages[editingIndex] = message;
        setMessages(updatedMessages);
        setEditingIndex(null);
      } else {
        // Add a new message
        setMessages([...messages, message]);
      }
      setMessage(''); // Clear the input field
    }
  };

  const handleEditMessage = (index) => {
    setMessage(messages[index]);
    setEditingIndex(index);
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-900 p-4">
        <ChatNavbar />
        {/* Messages Display */}
        <div className="flex-1 overflow-y-auto bg-gray-100 rounded-b-lg shadow-md p-4">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div
                key={index}
                className="p-2 mb-2 bg-blue-200 text-black rounded-lg shadow flex items-center justify-between"
              >
                <span>{msg}</span>
                <div className="flex gap-2">
                  {/* Edit Button */}
                  <button
                    onClick={() => handleEditMessage(index)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteMessage(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No messages yet...</p>
          )}
        </div>
        {/* Input and Button Section */}
        <div className="mt-4 flex items-center bg-gray-800 p-2 rounded-lg">
          {/* Emoji Icon */}
          <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg mr-2 hover:bg-gray-600 cursor-pointer transition">
            <img src={imojiicone} alt="Emoji" className="w-6 h-6" />
          </div>
          {/* Document Icon */}
          <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg mr-2 hover:bg-gray-600 cursor-pointer transition">
            <img src={documenticone} alt="Document" className="w-6 h-6" />
          </div>
          {/* Input Field */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 p-2 bg-gray-800 text-white border-none rounded-lg focus:outline-none hover:bg-gray-700 cursor-pointer transition"
          />
          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            className="ml-2 p-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition flex items-center justify-center"
          >
            <FiSend size={20} />
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatSection;
