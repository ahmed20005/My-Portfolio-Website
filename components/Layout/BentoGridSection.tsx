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
        className="w-full"
        title="Distributed Web Scraper"
        subtitle="Pipeline Throughput & Latency Visualization"
      >
        <div className="flex flex-col gap-4">
          {/* Chart Container - Fixed height for mobile visibility */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] p-4 border border-zinc-200 rounded-lg bg-zinc-50 overflow-hidden shadow-inner outline-none focus:outline-none" tabIndex={-1}>
            <div className="absolute top-4 left-4 z-10 flex gap-2 flex-wrap">
              <div className="px-2 py-1 bg-blue-500/10 text-blue-600 text-xs rounded border border-blue-200 font-medium">Python</div>
              <div className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-xs rounded border border-emerald-200 font-medium">AsyncIO</div>
              <div className="px-2 py-1 bg-rose-500/10 text-rose-600 text-xs rounded border border-rose-200 font-medium">Redis</div>
            </div>
            <SalesGraph />
          </div>

          {/* Description and Stats */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-sm text-secondary leading-relaxed max-w-2xl">
              Engineered a high-concurrency scraping cluster using Python AsyncIO and Redis.
              Handles 500+ requests/second with automated rotation proxies and retry logic.
              Integrated real-time monitoring via Grafana (Simulated above).
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 shrink-0">
              <span>Throughput: <span className="text-blue-500">820 rps</span></span>
              <span>Avg Latency: <span className="text-emerald-500">65ms</span></span>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
