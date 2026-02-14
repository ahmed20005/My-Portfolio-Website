import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Cloud, Code2, Target, Rocket } from 'lucide-react';

const timelineItems = [
  {
    icon: GraduationCap,
    title: "The Beginning",
    description: "Curiosity about turning scattered information into clear intelligence led me to CS & AI at Helwan National University.",
    position: "top",
    color: "bg-blue-500"
  },
  {
    icon: Cloud,
    title: "Current Training",
    description: "Training at Microsoft DEPI Data Engineering track, building robust ETL pipelines and automating data workflows.",
    position: "bottom",
    color: "bg-teal-500"
  },
  {
    icon: Code2,
    title: "Technical Skills",
    description: "Expert in Python (Pandas, NumPy), SQL, and Web Scraping with Selenium to extract and structure valuable data.",
    position: "top",
    color: "bg-emerald-500"
  },
  {
    icon: Target,
    title: "The Passion",
    description: "Beyond moving data—building systems that empower decision-making and solve real-world problems.",
    position: "bottom",
    color: "bg-orange-500"
  },
  {
    icon: Rocket,
    title: "Always Learning",
    description: "Constantly expanding my toolkit with PostgreSQL, advanced scraping techniques, and the latest in data engineering.",
    position: "top",
    color: "bg-purple-500"
  }
];

export const AboutMe: React.FC = () => {
  return (
    <section className="w-full py-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-primary tracking-tight text-center mb-12"
      >
        About Me
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative">
        {/* Horizontal Line - Desktop only */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-zinc-300 to-transparent -translate-y-1/2 hidden md:block" />
        
        {/* Vertical Line - Mobile only */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-zinc-300 to-transparent -translate-x-1/2 md:hidden" />
        
        {/* Timeline Items */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: item.position === 'top' ? -30 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center relative w-full md:w-[18%] ${
                item.position === 'bottom' ? 'md:flex-col-reverse' : ''
              }`}
            >
              {/* Icon Circle - Always first on mobile */}
              <div className="relative z-10 mb-4 md:mb-0">
                <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center shadow-lg border-4 border-white`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content Card - Always second on mobile */}
              <div className={`text-center ${item.position === 'bottom' ? 'md:mb-4' : 'md:mt-4'}`}>
                <h3 className="font-semibold text-primary text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-secondary leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
