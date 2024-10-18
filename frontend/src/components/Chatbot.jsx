import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Toggle Chatbot Window
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Handle sending messages
  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  // Handle Enter key for sending messages
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Button */}
      <button
        onClick={toggleChatbot}
        className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600"
      >
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-5 w-[28rem] h-[36rem] bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-500 p-4 text-white rounded-t-lg">
            <h2 className="text-lg">Chatbot</h2>
            <button onClick={toggleChatbot} className="text-white text-xl">&times;</button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 flex-1 overflow-y-auto">
            {messages.length === 0 ? (
              <p className="text-gray-500">No messages yet...</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="my-2 p-2 bg-gray-200 rounded-lg">
                  {msg}
                </div>
              ))
            )}
          </div>

          {/* Typing Input and Send Button */}
          <div className="p-4 border-t border-gray-200 flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown} // Handle Enter key press
              placeholder="Type a message..."
              className="w-full border rounded-lg p-2 outline-none"
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
