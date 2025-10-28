'use client';

import { useState } from 'react';
import { MessageCircle, MessageSquare, Phone, X, Mail } from 'lucide-react';

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const phoneNumber = '01345903907';
  const whatsappMessageLink = 'https://wa.me/message/QB5ZDFKU4NQBL1';
  const email = 'flashshopbd001@gmail.com';

  return (
    <div className="fixed bottom-6 right-6 z-[9999] pointer-events-auto">
      {/* Floating Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 space-y-3 pointer-events-auto">
          {/* Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-105"
          >
            <Phone size={20} />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappMessageLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-105"
          >
            <MessageSquare size={20} />
            <span>WhatsApp</span>
          </a>

          {/* Messenger/Chat Button */}
          <a
            href={whatsappMessageLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle size={20} />
            <span>Messenger</span>
          </a>

          {/* Email Button */}
          <a
            href={`mailto:${email}`}
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={20} />
            <span>Email Us</span>
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={toggleMenu}
        className="relative w-14 h-14 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer pointer-events-auto"
        type="button"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </button>

      {/* Pulse Animation Background */}
      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-full animate-ping opacity-20 pointer-events-none"></div>
      )}
    </div>
  );
}

