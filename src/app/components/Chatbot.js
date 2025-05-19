'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm your portfolio assistant. How can I help?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, sender: 'user' }]);

    // Simple bot responses
    const botResponses = {
      'hello': 'Hello! How can I assist you today?',
      'projects': 'You can view my projects in the Projects section.',
      'contact': 'Feel free to email me at shubspatil17@gmail.com',
      'default': 'I can help you navigate this portfolio. Try asking about projects, skills, or how to contact me.'
    };

    const responseKey = Object.keys(botResponses).find(key =>
      input.toLowerCase().includes(key)
    ) || 'default';

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponses[responseKey], sender: 'bot' }]);
    }, 500);

    setInput('');
  };

  return (
    <div className=" absolute left-[50%] top-4 translate-x-[-50%] z-50">
      {isOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-80 h-96 bg-[var(--color-light)] dark:bg-[var(--color-dark)] shadow-xl rounded-t-lg flex flex-col border border-[var(--color-dark)] dark:border-[var(--color-light)] dark:text-[var(--color-light)]"
        >
          <div className="p-4 bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-light)] dark:text-[var(--color-dark)] rounded-t-lg">
            <h3 className="font-bold">Portfolio Assistant</h3>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-2 rounded-lg ${msg.sender === 'user'
                  ? 'bg-[var(--color-primary)] text-[var(--color-light)]'
                  : 'bg-[var(--color-dark)/10] dark:bg-[var(--color-light)/10]'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-[var(--color-dark)] dark:border-[var(--color-light)]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="w-full p-2 border border-[var(--color-dark)] dark:border-[var(--color-light)] rounded dark:text-[var(--color-light)]"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="mt-2 w-full bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-light)] py-2 rounded dark:text-[var(--color-dark)] font-bold"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-light)] rounded-full shadow-lg flex items-center justify-center dark:text-[var(--color-dark)] border border-[var(--color-dark)] dark:border-[var(--color-light)] hover:cursor-pointer"
      >
        {isOpen ? '✕' : '🤖'}
      </button>
    </div>
  );
};

export default Chatbot;