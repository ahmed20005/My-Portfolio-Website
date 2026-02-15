import React, { useState, useEffect } from 'react';
import { Check, Copy } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="relative overflow-hidden rounded-xl border border-white/40 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] px-6 py-4 flex items-center gap-3 min-w-[320px]">
        {/* Teal accent border on left */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500" />
        
        {/* Success icon */}
        <div className="p-1.5 rounded-full bg-teal-100 border border-teal-200">
          <Check className="w-4 h-4 text-teal-600" />
        </div>
        
        {/* Message */}
        <p className="text-sm font-medium text-zinc-700">{message}</p>
      </div>
    </div>
  );
};
