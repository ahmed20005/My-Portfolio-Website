import React from 'react';

export const MeshGradient: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]" />
      <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-emerald-900/5 rounded-full blur-[100px]" />
    </div>
  );
};