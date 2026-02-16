import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../UI/Card';
import { Code2, Globe, Database, Wrench } from 'lucide-react';

const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python (Advanced)", "SQL (PostgreSQL, MySQL)", "Java"],
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50 border-blue-200"
  },
  {
    category: "Web Scraping",
    icon: Globe,
    items: ["BeautifulSoup4", "Selenium", "Scrapy", "Requests"],
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50 border-purple-200"
  },
  {
    category: "Data Engineering",
    icon: Database,
    items: ["ETL Pipeline Development", "Data Cleaning", "JSON/XML Parsing"],
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50 border-emerald-200"
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    items: ["Microsoft Azure (Data Factory)", "Git", "Docker (Learning)", "Linux (Mint/Cinnamon)", "Notion"],
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50 border-orange-200"
  }
];

export const TechnicalSkills: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-primary">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.12, ease: "easeOut" }}
          >
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-md border ${skill.iconBg} ${skill.iconColor}`}>
                  <skill.icon size={18} />
                </div>
                <h3 className="font-medium text-primary">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-sm text-secondary flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-zinc-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};