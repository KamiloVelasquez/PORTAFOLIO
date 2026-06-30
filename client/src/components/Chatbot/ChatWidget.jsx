import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { sendChatMessage } from '../../services/chatService';
import '../../styles/chatbot.css';

function ChatWidget() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: Date.now(),
        text: t('chatbot.greeting'),
        sender: 'bot',
      }]);
    }
  }, [isOpen, t]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const suggestionPrompts = i18n.language === 'en'
    ? ['Show me your projects', 'What technologies do you use?', 'How can I contact you?']
    : ['Muéstrame tus proyectos', '¿Qué tecnologías usas?', '¿Cómo puedo contactarte?'];

  const handleSend = async (messageText = input.trim()) => {
    const trimmedMessage = messageText?.trim();
    if (!trimmedMessage) return;

    const userMsg = {
      id: Date.now(),
      text: trimmedMessage,
      sender: 'user',
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await sendChatMessage(trimmedMessage, i18n.language);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: response.reply,
        sender: 'bot',
      }]);
    } catch {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: t('chatbot.error'),
        sender: 'bot',
      }]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (prompt) => {
    handleSend(prompt);
  };

  return (
    <div className="chatbot-widget" id="chatbot-widget">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="avatar">🤖</div>
              <div>
                <h6>{t('chatbot.title')}</h6>
                <span className="status">● Online</span>
              </div>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="typing-indicator">
                  <span /><span /><span />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-suggestions">
              {suggestionPrompts.map((prompt) => (
                <button key={prompt} type="button" onClick={() => handleSuggestionClick(prompt)}>
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="chatbot-input">
              <input
                type="text"
                placeholder={t('chatbot.placeholder')}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                id="chatbot-input-field"
              />
              <button onClick={() => handleSend()} disabled={!input.trim()} aria-label="Send">
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle chatbot"
        id="chatbot-toggle"
      >
        {isOpen ? <FaTimes /> : <FaCommentDots />}
      </motion.button>
    </div>
  );
}

export default ChatWidget;
