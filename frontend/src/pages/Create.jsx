import React, { useState } from 'react';
import Chatbot from '../components/Chatbot';

export default function Create() {
  const [editableText, setEditableText] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Bot', text: 'Hi there! How can I assist you today?' },
  ]);
  const [fileName, setFileName] = useState(''); // State for file name

  const handleChange = (event) => {
    setEditableText(event.target.value);
  };

  const handleChatInputChange = (event) => {
    setChatInput(event.target.value);
  };

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'User', text: chatInput },
      ]);
      setChatInput(''); // Clear the input after sending
    }
  };

  const handleSave = async () => {
    // Basic validation
    if (!fileName || !editableText) {
      alert("Please enter a file name and content to save.");
      return;
    }

    const fileData = {
      name: fileName,
      content: editableText,
    };

    // Implement save logic here
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fileData),
      });

      if (!response.ok) {
        throw new Error('Failed to save the file.');
      }

      const result = await response.json();
      console.log('File saved successfully:', result);
      // Optionally reset the fields after saving
      setFileName('');
      setEditableText('');
    } catch (error) {
      console.error('Error saving file:', error);
      alert('Error saving file. Please try again.');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Editable Section on the Left */}
      <div className="w-2/3 p-6 border-r border-gray-300 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Create Document</h2>
        {/* Input for the file name */}
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={fileName}
          onChange={handleFileNameChange}
          placeholder="Enter file name..."
        />
        <textarea
          className="w-full h-3/4 p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={editableText}
          onChange={handleChange}
          placeholder="Type here..."
        />
        <button
          onClick={handleSave}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Save
        </button>
      </div>

      {/* Chat Window on the Right */}
      <Chatbot index={{ id: "Knowledge-Base_module_1.pdf" }} />

    </div>
  );
}
