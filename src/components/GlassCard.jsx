import React from 'react';

export default function GlassCard({ 
  children, 
  className = '', 
  glow = 'none', // 'cyan' | 'purple' | 'pink' | 'none'
  hover = false,
  onClick 
}) {
  const glowClasses = {
    none: 'border-white/10 bg-slate-950/80',
    cyan: 'border-cyan-500/30 bg-slate-950/80 shadow-[0_0_20px_rgba(0,240,255,0.04)]',
    purple: 'border-purple-500/30 bg-slate-950/80 shadow-[0_0_20px_rgba(157,78,221,0.04)]',
    pink: 'border-pink-500/30 bg-slate-950/80 shadow-[0_0_20px_rgba(255,0,127,0.04)]',
  };

  const hoverClasses = hover 
    ? 'hover:scale-[1.01] hover:border-white/20 transition-all duration-300 ease-out cursor-pointer'
    : '';

  return (
    <div 
      onClick={onClick}
      className={`
        backdrop-blur-xl rounded-xl border p-5 text-slate-200
        ${glowClasses[glow]}
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
