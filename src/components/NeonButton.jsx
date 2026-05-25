import React from 'react';

export default function NeonButton({
  children,
  className = '',
  variant = 'cyan', // 'cyan' | 'purple' | 'pink' | 'outline'
  onClick,
  disabled = false,
}) {
  const baseStyle = "relative overflow-hidden font-orbitron text-xs tracking-wider font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2";
  
  const variants = {
    cyan: "bg-cyan-500/10 text-cyan-400 border border-cyan-400/40 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.35)]",
    purple: "bg-purple-500/10 text-purple-400 border border-purple-400/40 hover:bg-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(157,78,221,0.35)]",
    pink: "bg-pink-500/10 text-pink-400 border border-pink-400/40 hover:bg-pink-500/20 hover:border-pink-400 hover:shadow-[0_0_15px_rgba(255,0,127,0.35)]",
    outline: "bg-transparent text-slate-400 border border-white/10 hover:border-white/20 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
