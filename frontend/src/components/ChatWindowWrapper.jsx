import React from 'react';

// Removed the TypeScript annotations to fix the error
export default function ChatWindowWrapper({ children }) {
  return (
    <div className="relative w-full max-w-6xl h-[85vh] rounded-3xl p-[1.5px] overflow-hidden group">
      {/* 1. THE ANIMATED BORDER LAYER */}
      <div className="absolute inset-0 animate-border [background:conic-gradient(from_var(--border-angle),theme(colors.purple.600/.2)_80%,theme(colors.cyan.400)_86%,theme(colors.purple.400)_90%,theme(colors.cyan.400)_94%,theme(colors.purple.600/.2))_border-box]" />
      
      {/* 2. THE MAIN GLASS CONTAINER */}
      <div className="relative w-full h-full bg-slate-950/80 backdrop-blur-xl rounded-[22px] flex flex-col overflow-hidden border border-white/10">
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
        {children}
      </div>
    </div>
  );
}