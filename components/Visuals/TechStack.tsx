import React from 'react';
import { Terminal, Database, Code2, Cpu, FileJson } from 'lucide-react';

const technologies = [
  { 
    name: "Python", 
    icon: Code2, 
    desc: "Data Processing", 
    // Light Mode: Slightly darker backgrounds/text for visibility
    // Dark Mode: Bright neons
    color: "text-blue-600", 
    bg: "bg-blue-50", 
    border: "border-blue-200" 
  },
  { 
    name: "SQL", 
    icon: Database, 
    desc: "Querying & Modeling", 
    color: "text-cyan-600", 
    bg: "bg-cyan-50", 
    border: "border-cyan-200" 
  },
  { 
    name: "Linux Mint", 
    icon: Terminal, 
    desc: "Environment", 
    color: "text-green-600", 
    bg: "bg-green-50", 
    border: "border-green-200" 
  },
  { 
    name: "Neovim", 
    icon: FileJson, 
    desc: "Editor of Choice", 
    color: "text-emerald-600", 
    bg: "bg-emerald-50", 
    border: "border-emerald-200" 
  },
  { 
    name: "Airflow", 
    icon: Cpu, 
    desc: "Orchestration", 
    color: "text-rose-600", 
    bg: "bg-rose-50", 
    border: "border-rose-200" 
  },
];

export const TechStack: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 mt-2">
      {technologies.map((tech, index) => (
        <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-black/5 transition-colors group cursor-default">
          <div className={`p-2 rounded-md ${tech.bg} border ${tech.border} ${tech.color} transition-all duration-300 group-hover:scale-110`}>
            <tech.icon size={18} />
          </div>
          <div>
            <div className="text-sm font-medium text-primary">{tech.name}</div>
            <div className="text-xs text-secondary/70">{tech.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};