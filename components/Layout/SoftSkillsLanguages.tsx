import React from 'react';
import { Card } from '../UI/Card';
import { Brain, Lightbulb, TrendingUp, Languages as LangIcon } from 'lucide-react';

export const SoftSkillsLanguages: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Soft Skills */}
      <Card title="Soft Skills">
        <div className="space-y-6 mt-2">
          {[
            { 
              icon: Brain, 
              title: "Analytical Thinking", 
              desc: "Adept at breaking down complex problems and identifying core issues." 
            },
            { 
              icon: Lightbulb, 
              title: "Problem Solving", 
              desc: "Creative and effective solutions to technical challenges." 
            },
            { 
              icon: TrendingUp, 
              title: "Continuous Learning", 
              desc: "Committed to staying updated with latest industry trends." 
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="mt-1">
                <item.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary">{item.title}</h4>
                <p className="text-sm text-secondary leading-snug mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Languages */}
      <Card title="Languages" className="flex flex-col justify-center">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-zinc-50 border border-zinc-100 gap-4">
            <div className="flex items-center gap-3">
              <LangIcon className="w-5 h-5 text-zinc-400" />
              <span className="font-medium text-primary">Arabic</span>
            </div>
            <span className="text-sm text-secondary shrink-0">Native Speaker</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-zinc-50 border border-zinc-100 gap-4">
            <div className="flex items-center gap-3">
              <LangIcon className="w-5 h-5 text-zinc-400" />
              <span className="font-medium text-primary">English</span>
            </div>
            <span className="text-sm text-secondary shrink-0">Fluent (Reading/Writing)</span>
          </div>
        </div>
      </Card>
    </section>
  );
};
