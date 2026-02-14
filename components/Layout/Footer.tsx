import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-secondary text-sm">
        © {new Date().getFullYear()} Ahmed Adel. All rights reserved.
      </div>
      
      <div className="flex items-center gap-6">
        <a 
          href="https://github.com/ahmed20005" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-secondary hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-adel-dataeng"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  );
};