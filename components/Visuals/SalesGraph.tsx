import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', rps: 120, latency: 45 },
  { time: '00:05', rps: 340, latency: 52 },
  { time: '00:10', rps: 520, latency: 68 },
  { time: '00:15', rps: 480, latency: 65 },
  { time: '00:20', rps: 650, latency: 85 },
  { time: '00:25', rps: 590, latency: 75 },
  { time: '00:30', rps: 820, latency: 120 },
  { time: '00:35', rps: 750, latency: 95 },
  { time: '00:40', rps: 680, latency: 80 },
  { time: '00:45', rps: 450, latency: 60 },
];

export const SalesGraph: React.FC = () => {
  return (
    <div className="w-full h-full pt-10" style={{ outline: 'none' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} style={{ outline: 'none' }}>
          <defs>
            <linearGradient id="colorRps" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorLatency" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#737373', fontSize: 9 }}
            dy={10}
            interval={2}
          />
          <YAxis yAxisId="left" hide />
          <YAxis yAxisId="right" hide orientation="right" />

          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e4e4e7',
              borderRadius: '8px',
              fontSize: '12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              padding: '8px 12px',
            }}
            itemStyle={{ color: '#18181b' }}
            labelStyle={{ color: '#52525b', marginBottom: '4px' }}
            cursor={{ stroke: '#d4d4d8', strokeWidth: 1 }}
            formatter={(value, name) => [
              name === 'rps' ? `${value} req/s` : `${value} ms`,
              name === 'rps' ? 'Throughput' : 'Latency'
            ]}
          />

          <Area
            yAxisId="left"
            type="monotone"
            dataKey="rps"
            stroke="#3b82f6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorRps)"
            name="rps"
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="latency"
            stroke="#10b981"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorLatency)"
            name="latency"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
