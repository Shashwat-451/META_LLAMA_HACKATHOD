import React, { useEffect, useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [sessionId, setSessionId] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const initializeSession = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("accept", "application/json");
      myHeaders.append("X-App", "generic_poll");
      myHeaders.append("source", "web");
      myHeaders.append("X-Conversation-Id", "dummy");
      myHeaders.append("Authorization", "Basic Z2VuZXJpY191c2VyOnBhc3N3b3Jk");

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };

      const response = await fetch("http://localhost:8080/chat/init?contact_number=99999&mock=True&use_case=ray_dashboard_v2&conversation_id=1234&merchant_id=AwPtzAJaaChm5O&user_role=demo", requestOptions);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Session ID:', data.session_id); 
      setSessionId(data.session_id); 

    } catch (error) {
      console.error("Failed to initialize session:", error);
    }
  };

  useEffect(() => {
    initializeSession(); 
  }, []); 

  const sendMessage = async () => {
    if (inputValue.trim() && sessionId) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'User', text: inputValue }
      ]);

      try {
        const formData = new FormData();
        formData.append('message', inputValue);
        formData.append('action', '');
        formData.append('step_group', '');
        formData.append('step', '');
        formData.append('file', '');

        const response = await fetch('http://localhost:8080/chat/process_message', {
          method: 'POST',
          headers: {
            'X-App': 'generic_poll',
            'session-id': sessionId,
            'source': 'web',
            'Authorization': 'Basic Z2VuZXJpY191c2VyOnBhc3N3b3Jk',
            'accept': 'application/json'
          },
          body: formData
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setInputValue(''); // Clear input after sending

      } catch (error) {
        console.error("Failed to send message:", error);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  const fetchMessages = async () => {
    if (sessionId) {
      try {
        const response = await fetch('http://localhost:8080/chat/retrieve_messages', {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'X-App': 'generic_poll',
            'session-id': sessionId,
            'source': 'web',
            'Authorization': 'Basic Z2VuZXJpY191c2VyOnBhc3N3b3Jk',
          }
        });

        if (response.ok) {
          const data = await response.json();
          const botMessages = data.messages.map((msg) => ({ sender: 'Bot', text: msg }));
          
       
          if (botMessages.length > 0) {
            setMessages((prevMessages) => [
              ...prevMessages,
              ...botMessages.filter(message => message.text.trim() !== '')
            ]);
          }
        } else {
          console.error("Failed to retrieve messages:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessages();
    }, 2000);

    return () => clearInterval(interval);
  }); 

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={toggleChatbot}
        className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600"
      >
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>

      {isOpen && (
        <div className="fixed bottom-16 right-5 w-[32rem] h-[40rem] bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col">
          <div className="flex justify-between items-center bg-blue-500 p-4 text-white rounded-t-lg">
            <h2 className="text-lg">Chatbot</h2>
            <button onClick={toggleChatbot} className="text-white text-xl">&times;</button>
          </div>

          <div className="p-4 flex-1 overflow-y-auto">
            {messages.length === 0 ? (
              <p className="text-gray-500">No messages yet...</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`my-2 p-2 rounded-lg ${msg.sender === 'User' ? 'bg-blue-100' : 'bg-gray-200'}`}>
                  <strong>{msg.sender}: </strong>{msg.text}
                </div>
              ))
            )}
          </div>

          <div className="p-4 border-t border-gray-200 flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
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
