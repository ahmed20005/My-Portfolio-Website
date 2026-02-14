import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from '../UI/Terminal';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
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
          <button className="group px-6 py-3 bg-primary text-background rounded-lg font-medium text-sm tracking-tight transition-all hover:bg-zinc-800">
            View Resume
          </button>
          <button className="px-6 py-3 bg-white border border-border text-primary rounded-lg font-medium text-sm tracking-tight hover:bg-zinc-100 transition-colors">
            Contact Me
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
    </section>
  );
};
