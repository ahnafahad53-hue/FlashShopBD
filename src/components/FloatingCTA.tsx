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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] pointer-events-auto">
      {/* Floating Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 space-y-2 sm:space-y-3 pointer-events-auto">
          {/* Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg flex items-center gap-2 sm:gap-3 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <Phone size={16} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappMessageLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg flex items-center gap-2 sm:gap-3 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <MessageSquare size={16} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Messenger/Chat Button */}
          <a
            href={whatsappMessageLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg flex items-center gap-2 sm:gap-3 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <MessageCircle size={16} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Messenger</span>
            <span className="sm:hidden">Chat</span>
          </a>

          {/* Email Button */}
          <a
            href={`mailto:${email}`}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg flex items-center gap-2 sm:gap-3 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <Mail size={16} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Email Us</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={toggleMenu}
        className="relative bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center gap-3 px-4 py-3 transition-all duration-300 transform hover:scale-105 cursor-pointer pointer-events-auto min-w-[120px] sm:min-w-[140px]"
        type="button"
      >
        {/* Phone Icon in White Circle */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center border-2 border-blue-500">
          <Phone size={16} className="sm:w-5 sm:h-5 text-blue-500" />
        </div>
        
        {/* Contact Text */}
        <span className="font-bold text-sm sm:text-base text-white">
          Contact
        </span>
        
        {/* Close Icon (when menu is open) */}
        {isOpen && (
          <X size={16} className="sm:w-5 sm:h-5 text-white ml-1" />
        )}
      </button>

      {/* Pulse Animation Background */}
      {!isOpen && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-full animate-ping opacity-20 pointer-events-none"></div>
      )}
    </div>
  );
}

