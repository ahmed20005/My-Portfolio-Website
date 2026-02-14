import React from 'react';
import { Card } from '../UI/Card';
import { SalesGraph } from '../Visuals/SalesGraph';
import { Database } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-primary flex items-center gap-2">
        <Database className="w-5 h-5 text-secondary" />
        Featured Project
      </h2>
      
      <Card 
        className="w-full h-[400px] md:h-[500px] flex flex-col"
        title="Distributed Web Scraper"
        subtitle="Pipeline Throughput & Latency Visualization"
      >
        <div className="flex-1 w-full h-full min-h-[200px] flex flex-col justify-end">
          <div className="relative w-full h-full p-4 border border-zinc-200 rounded-lg bg-zinc-50 overflow-hidden shadow-inner">
             <div className="absolute top-4 left-4 z-10 flex gap-2">
               <div className="px-2 py-1 bg-blue-500/10 text-blue-600 text-xs rounded border border-blue-200 font-medium">Python</div>
               <div className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-xs rounded border border-emerald-200 font-medium">AsyncIO</div>
               <div className="px-2 py-1 bg-rose-500/10 text-rose-600 text-xs rounded border border-rose-200 font-medium">Redis</div>
             </div>
             <SalesGraph />
          </div>
          <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-sm text-secondary leading-relaxed max-w-2xl">
              Engineered a high-concurrency scraping cluster using Python AsyncIO and Redis. 
              Handles 500+ requests/second with automated rotation proxies and retry logic. 
              Integrated real-time monitoring via Grafana (Simulated above).
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
               <span>Throughput: <span className="text-blue-500">820 rps</span></span>
               <span>Avg Latency: <span className="text-emerald-500">65ms</span></span>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};