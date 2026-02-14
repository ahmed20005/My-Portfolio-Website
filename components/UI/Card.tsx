import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Card: React.FC<CardProps> = ({ children, className, title, subtitle }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={clsx(
        "group relative p-6 md:p-8 rounded-2xl overflow-hidden flex flex-col transition-all duration-300",
        // Light Mode: Paper aesthetic
        "bg-white border border-zinc-200 shadow-[0px_2px_4px_rgba(0,0,0,0.02),0px_10px_20px_rgba(0,0,0,0.03)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.06)]",
        className
      )}
    >

      
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-6 relative z-10">
          {title && <h3 className="text-lg font-semibold text-primary tracking-tight">{title}</h3>}
          {subtitle && <p className="text-sm text-secondary font-mono tracking-tight mt-1">{subtitle}</p>}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex-1">
        {children}
      </div>
    </motion.div>
  );
};