import React, { useEffect, useState, useRef } from 'react';

type Line = {
  text: string;
  type: 'command' | 'log' | 'cursor';
  prefix?: string;
  color?: string;
  delay?: number;
};

const SEQUENCE: Line[] = [
  { text: "source venv/bin/activate", type: "command", prefix: "$ ", delay: 800 },
  { text: "import pandas as pd", type: "command", prefix: "(venv) $ ", delay: 400 },
  { text: "import data_pipeline as dp", type: "command", prefix: "(venv) $ ", delay: 600 },
  { text: "Running ETL pipeline...", type: "log", color: "text-blue-400", delay: 800 },
  { text: "Extracting from Postgres...", type: "log", color: "text-gray-400", delay: 1200 },
  { text: "Transformation complete (0.42s)", type: "log", color: "text-green-400", delay: 600 },
  { text: "Loading to Snowflake...", type: "log", color: "text-gray-400", delay: 1000 },
  { text: "", type: "cursor" }
];

export const Terminal: React.FC = () => {
  const [lines, setLines] = useState<Line[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLineIndex >= SEQUENCE.length) return;

    const currentLineDef = SEQUENCE[currentLineIndex];

    if (currentLineDef.type === 'cursor') {
      // Wait 5 seconds, then clear and replay
      const timeout = setTimeout(() => {
        setLines([]);
        setTypedText("");
        setCurrentLineIndex(0);
      }, 5000);
      return () => clearTimeout(timeout);
    }

    if (currentLineDef.type === 'log') {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, currentLineDef]);
        setCurrentLineIndex(prev => prev + 1);
      }, currentLineDef.delay || 100);
      return () => clearTimeout(timeout);
    }

    if (currentLineDef.type === 'command') {
      if (typedText.length < currentLineDef.text.length) {
        const timeout = setTimeout(() => {
          setTypedText(currentLineDef.text.slice(0, typedText.length + 1));
        }, 50 + Math.random() * 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLines(prev => [...prev, { ...currentLineDef, text: typedText }]);
          setTypedText("");
          setCurrentLineIndex(prev => prev + 1);
        }, currentLineDef.delay || 400);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentLineIndex, typedText]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, typedText]);

  return (
    <div role="region" aria-label="Terminal animation demonstrating ETL pipeline commands" className="w-full rounded-xl overflow-hidden border border-white/10 bg-[#0c0c0e] shadow-2xl shadow-black/20 font-mono text-sm md:text-base h-full flex flex-col ring-1 ring-white/5">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-zinc-500 font-medium">ahmed@dev-machine:~</div>
        <div className="w-10"></div>
      </div>

      {/* Terminal Body - Always Dark */}
      <div
        ref={scrollRef}
        className="p-6 space-y-2 overflow-y-auto text-zinc-300 scrollbar-thin scrollbar-thumb-zinc-700 flex-1 min-h-[240px]"
      >
        {lines.map((line, idx) => (
          <div key={idx} className={`${line.type === 'log' ? line.color : ''}`}>
            {line.type === 'command' && (
              <>
                <span className="text-green-500 mr-2">{line.prefix?.includes('(venv)') ? '' : '➜'}</span>
                <span className={line.prefix?.includes('(venv)') ? 'text-purple-400' : 'text-blue-400'}>
                  {line.prefix || '~ '}
                </span>
                <span>{line.text}</span>
              </>
            )}
            {line.type === 'log' && (
              <span>{line.text}</span>
            )}
          </div>
        ))}

        {SEQUENCE[currentLineIndex]?.type === 'command' && (
          <div className="flex items-center">
            <span className="text-green-500 mr-2">{SEQUENCE[currentLineIndex].prefix?.includes('(venv)') ? '' : '➜'}</span>
            <span className={SEQUENCE[currentLineIndex].prefix?.includes('(venv)') ? 'text-purple-400' : 'text-blue-400'}>
              {SEQUENCE[currentLineIndex].prefix || '~ '}
            </span>
            <span>{typedText}</span>
            <span className="w-2 h-5 bg-gray-500 animate-cursor-blink ml-1 align-middle inline-block"></span>
          </div>
        )}

        {SEQUENCE[currentLineIndex]?.type === 'cursor' && (
          <div className="flex items-center mt-2">
            <span className="w-2 h-5 bg-gray-500 animate-cursor-blink align-middle inline-block"></span>
          </div>
        )}
      </div>
    </div>
  );
};