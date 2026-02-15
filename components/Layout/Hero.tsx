import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from '../UI/Terminal';
import { Copy, Check, FileText } from 'lucide-react';
import { Toast } from '../UI/Toast';

export const Hero: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);

  const copyEmail = async () => {
    const email = "ahmedelsheriff0@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setShowToast(true);
      setIsGlowing(true);
      
      // Stop glowing after 2 seconds
      setTimeout(() => {
        setIsGlowing(false);
      }, 2000);
      
      // Reset copied state after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-surface text-xs text-secondary font-mono tracking-tight shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available for hire
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
            <span className="text-teal-600">Ahmed Adel</span>
            <br />
            <span className="text-primary">Data Engineer</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
            Specializing in High-Scale <span className="text-primary font-medium">ETL</span>,{" "}
            <span className="text-primary font-medium">Web Scraping</span>, and{" "}
            <span className="text-primary font-medium">Data Pipelines</span>.
            Building robust infrastructure for data-driven decisions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center gap-4 pt-4"
        >
          {/* View Resume Button */}
          <a
            href="/Professional CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-lg font-medium text-sm tracking-tight transition-all hover:bg-zinc-800 hover:shadow-lg"
          >
            <FileText className="w-4 h-4" />
            View Resume
          </a>
          
          {/* Copy My Email Button with Glow Effect */}
          <button
            onClick={copyEmail}
            disabled={isCopied}
            className={`
              relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm tracking-tight 
              transition-all duration-300 overflow-hidden
              ${isCopied 
                ? 'bg-teal-500 text-white' 
                : 'bg-white border border-border text-primary hover:bg-zinc-50'
              }
              ${isGlowing ? 'glowing-button' : ''}
            `}
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy My Email
              </>
            )}
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
        className="flex-1 w-full max-w-xl flex flex-col items-center gap-6"
      >
        <img 
          src="/my_image_cropped.png" 
          alt="Ahmed Adel" 
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-border shadow-2xl"
        />
        <Terminal />
      </motion.div>

      {/* Toast Notification */}
      <Toast 
        message="Email copied! Open your email client and paste." 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />

      {/* Glowing Animation Styles */}
      <style>{`
        @keyframes glow-rotate {
          0% {
            box-shadow: 
              0 0 5px rgba(20, 184, 166, 0.5),
              0 0 10px rgba(20, 184, 166, 0.3),
              0 0 15px rgba(20, 184, 166, 0.2),
              inset 0 0 5px rgba(20, 184, 166, 0.1);
          }
          25% {
            box-shadow: 
              2px 0 5px rgba(20, 184, 166, 0.5),
              4px 0 10px rgba(20, 184, 166, 0.3),
              6px 0 15px rgba(20, 184, 166, 0.2),
              inset 2px 0 5px rgba(20, 184, 166, 0.1);
          }
          50% {
            box-shadow: 
              0 2px 5px rgba(20, 184, 166, 0.5),
              0 4px 10px rgba(20, 184, 166, 0.3),
              0 6px 15px rgba(20, 184, 166, 0.2),
              inset 0 2px 5px rgba(20, 184, 166, 0.1);
          }
          75% {
            box-shadow: 
              -2px 0 5px rgba(20, 184, 166, 0.5),
              -4px 0 10px rgba(20, 184, 166, 0.3),
              -6px 0 15px rgba(20, 184, 166, 0.2),
              inset -2px 0 5px rgba(20, 184, 166, 0.1);
          }
          100% {
            box-shadow: 
              0 0 5px rgba(20, 184, 166, 0.5),
              0 0 10px rgba(20, 184, 166, 0.3),
              0 0 15px rgba(20, 184, 166, 0.2),
              inset 0 0 5px rgba(20, 184, 166, 0.1);
          }
        }
        
        .glowing-button {
          animation: glow-rotate 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
