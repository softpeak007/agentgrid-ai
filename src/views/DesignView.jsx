import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import NeonButton from '../components/NeonButton';
import { Eye, Code, Palette, Move, Activity, Sliders, Layers } from 'lucide-react';

export default function DesignView() {
  const [activeTab, setActiveTab] = useState('palette'); // 'palette' | 'spacing' | 'components' | 'animations'
  
  // Custom states for the interactive component sandbox
  const [glassOpacity, setGlassOpacity] = useState(75);
  const [blurRadius, setBlurRadius] = useState(16);
  const [glowColor, setGlowColor] = useState('cyan'); // 'cyan' | 'purple' | 'pink'
  const [showBorder, setShowBorder] = useState(true);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            UI/UX Design System Studio
          </h2>
          <p className="text-sm text-slate-400 font-display">
            A premium cinematic dashboard visualizer and design system token sandbox.
          </p>
        </div>
        <div className="flex gap-2 bg-slate-950/60 p-1 rounded-lg border border-white/5 font-orbitron text-xs">
          <button 
            onClick={() => setActiveTab('palette')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'palette' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Design Tokens
          </button>
          <button 
            onClick={() => setActiveTab('spacing')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'spacing' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Spacing Specs
          </button>
          <button 
            onClick={() => setActiveTab('components')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'components' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Component System
          </button>
          <button 
            onClick={() => setActiveTab('animations')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'animations' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Motion Systems
          </button>
        </div>
      </div>

      {/* Palette Tab */}
      {activeTab === 'palette' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GlassCard glow="purple" className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-purple-400 flex items-center gap-1.5 mb-2">
                <Palette className="w-4 h-4" /> Cinematic Cyberpunk Color Space
              </h3>
              <p className="text-xs text-slate-400 font-display">
                Harmonious dark values paired with intense saturated accent frequencies to capture premium investor interest.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <p className="font-orbitron text-[10px] text-slate-500 uppercase font-bold">Base Dark Aesthetics</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 bg-[#07070a] border border-white/5 rounded">
                    <div className="w-8 h-8 rounded bg-[#07070a] border border-white/10 shadow-lg"></div>
                    <div>
                      <p className="font-mono text-xs text-slate-200">#07070a</p>
                      <p className="text-[10px] text-slate-500">Matte Black (Primary background)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-[#0d0d12] border border-white/5 rounded">
                    <div className="w-8 h-8 rounded bg-[#0d0d12] border border-white/10 shadow-lg"></div>
                    <div>
                      <p className="font-mono text-xs text-slate-200">#0d0d12</p>
                      <p className="text-[10px] text-slate-500">Card Charcoal (Volatile sheets, tables)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-orbitron text-[10px] text-slate-500 uppercase font-bold">Neon Hologram Anchors</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 border border-cyan-500/20 bg-cyan-500/5 rounded text-center">
                    <div className="w-full h-6 rounded bg-cyan-400 mb-1"></div>
                    <p className="font-mono text-[10px] font-bold text-cyan-400">#00f0ff</p>
                    <p className="text-[9px] text-slate-500">Neon Cyan</p>
                  </div>
                  <div className="p-2 border border-purple-500/20 bg-purple-500/5 rounded text-center">
                    <div className="w-full h-6 rounded bg-purple-500 mb-1"></div>
                    <p className="font-mono text-[10px] font-bold text-purple-400">#9d4edd</p>
                    <p className="text-[9px] text-slate-500">Electric Violet</p>
                  </div>
                  <div className="p-2 border border-pink-500/20 bg-pink-500/5 rounded text-center">
                    <div className="w-full h-6 rounded bg-pink-500 mb-1"></div>
                    <p className="font-mono text-[10px] font-bold text-pink-400">#ff007f</p>
                    <p className="text-[9px] text-slate-500">Hot Cyber-Pink</p>
                  </div>
                  <div className="p-2 border border-green-500/20 bg-green-500/5 rounded text-center">
                    <div className="w-full h-6 rounded bg-emerald-500 mb-1"></div>
                    <p className="font-mono text-[10px] font-bold text-emerald-400">#39ff14</p>
                    <p className="text-[9px] text-slate-500">Toxic Green</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard glow="none" className="space-y-4">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-pink-400 flex items-center gap-1.5">
              <palette className="w-4 h-4" /> Typography & Layout Scale
            </h3>
            <p className="text-xs text-slate-400 font-display">
              Futuristic technical sans-serifs coupled with clean display shapes to convey structural precision.
            </p>
            <div className="space-y-3 font-display">
              <div className="border-l-2 border-cyan-400 pl-3">
                <span className="text-[9px] text-slate-500 font-orbitron uppercase">Display Headlines</span>
                <p className="font-orbitron text-lg font-black tracking-wide text-slate-200">ORBITRON FONTS</p>
              </div>
              <div className="border-l-2 border-purple-400 pl-3">
                <span className="text-[9px] text-slate-500 font-orbitron uppercase">Body Sans-Serif</span>
                <p className="font-display text-sm text-slate-200">Space Grotesk & Inter</p>
              </div>
              <div className="border-l-2 border-pink-400 pl-3">
                <span className="text-[9px] text-slate-500 font-orbitron uppercase">Code & Console Sheets</span>
                <p className="font-mono text-xs text-slate-200">Space Mono & JetBrains</p>
              </div>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Spacing Specs Tab */}
      {activeTab === 'spacing' && (
        <GlassCard glow="purple" className="space-y-6">
          <div>
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-purple-400 flex items-center gap-1.5 mb-2">
              <Move className="w-4 h-4" /> Pixel-Perfect Layout spacing rules
            </h3>
            <p className="text-xs text-slate-400 font-display">
              Strict spatial layouts based on an 8px grid constraint system, ensuring modular layout cohesion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center font-mono">
            <div className="p-4 border border-white/5 bg-slate-950/40 rounded">
              <span className="text-purple-400 font-bold block text-sm">4px / 8px</span>
              <span className="text-[10px] text-slate-500 block uppercase font-orbitron mt-1">Micro Units</span>
              <p className="text-[11px] text-slate-400 mt-2">Paddings, labels, indicators.</p>
            </div>
            <div className="p-4 border border-white/5 bg-slate-950/40 rounded">
              <span className="text-cyan-400 font-bold block text-sm">16px / 24px</span>
              <span className="text-[10px] text-slate-500 block uppercase font-orbitron mt-1">Container Paddings</span>
              <p className="text-[11px] text-slate-400 mt-2">Standard glass card contents.</p>
            </div>
            <div className="p-4 border border-white/5 bg-slate-950/40 rounded">
              <span className="text-pink-400 font-bold block text-sm">32px / 48px</span>
              <span className="text-[10px] text-slate-500 block uppercase font-orbitron mt-1">Component Gaps</span>
              <p className="text-[11px] text-slate-400 mt-2">Grid spacing & sections.</p>
            </div>
            <div className="p-4 border border-white/5 bg-slate-950/40 rounded">
              <span className="text-emerald-400 font-bold block text-sm">64px / 96px</span>
              <span className="text-[10px] text-slate-500 block uppercase font-orbitron mt-1">Page Gutters</span>
              <p className="text-[11px] text-slate-400 mt-2">Outer layout margin scopes.</p>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Component System Tab */}
      {activeTab === 'components' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Interactive controls */}
          <GlassCard glow="none" className="space-y-5">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
              <Sliders className="w-4 h-4" /> Component Token Sandbox
            </h3>
            
            <div className="space-y-4 text-xs font-display">
              {/* Opacity */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[11px]">
                  <span>Glass Opacity</span>
                  <span className="text-purple-400">{glassOpacity}%</span>
                </div>
                <input 
                  type="range" min="10" max="95" value={glassOpacity} 
                  onChange={(e) => setGlassOpacity(parseInt(e.target.value))}
                  className="w-full accent-purple-500" 
                />
              </div>

              {/* Blur */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[11px]">
                  <span>Backdrop Blur</span>
                  <span className="text-purple-400">{blurRadius}px</span>
                </div>
                <input 
                  type="range" min="0" max="40" value={blurRadius} 
                  onChange={(e) => setBlurRadius(parseInt(e.target.value))}
                  className="w-full accent-purple-500" 
                />
              </div>

              {/* Glow Accent */}
              <div className="space-y-2">
                <span className="font-mono text-[11px] block">Glow Border Accent</span>
                <div className="grid grid-cols-3 gap-2">
                  {['cyan', 'purple', 'pink'].map((col) => (
                    <button 
                      key={col} onClick={() => setGlowColor(col)}
                      className={`py-1 rounded font-orbitron text-[10px] border capitalize ${glowColor === col ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400' : 'border-white/5 bg-slate-900/40 text-slate-400'}`}
                    >
                      {col}
                    </button>
                  ))}
                </div>
              </div>

              {/* Show Border */}
              <div className="flex items-center justify-between border-t border-white/5 pt-3">
                <span className="font-mono text-[11px]">Show Subtracted Borders</span>
                <input 
                  type="checkbox" checked={showBorder} 
                  onChange={(e) => setShowBorder(e.target.checked)}
                  className="w-4 h-4 accent-cyan-500" 
                />
              </div>
            </div>
          </GlassCard>

          {/* Sandbox Preview */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 pl-1">
              <Eye className="w-4 h-4 animate-pulse" /> Sandbox Live Render Sheet
            </h3>

            {/* Simulated interactive Card */}
            <div 
              style={{
                backgroundColor: `rgba(13, 13, 18, ${glassOpacity / 100})`,
                backdropFilter: `blur(${blurRadius}px)`,
                border: showBorder ? `1px solid ${glowColor === 'cyan' ? 'rgba(0, 240, 255, 0.25)' : glowColor === 'purple' ? 'rgba(157, 78, 221, 0.25)' : 'rgba(255, 0, 127, 0.25)'}` : 'none',
                boxShadow: `0 0 20px ${glowColor === 'cyan' ? 'rgba(0, 240, 255, 0.05)' : glowColor === 'purple' ? 'rgba(157, 78, 221, 0.05)' : 'rgba(255, 0, 127, 0.05)'}`
              }}
              className="p-6 rounded-xl min-h-[160px] flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                  <span className="font-orbitron font-bold text-xs tracking-widest text-slate-300 uppercase">Live Canvas</span>
                </div>
                <h4 className="font-orbitron font-black text-lg text-slate-100">Futuristic Hologram Grid Card</h4>
                <p className="text-xs text-slate-400 font-display mt-1">
                  Adjust standard inputs in the sandbox panel to view real-time changes to the backdrop-filters.
                </p>
              </div>

              <div className="flex gap-2 mt-4">
                <NeonButton variant={glowColor}>Primary Action</NeonButton>
                <NeonButton variant="outline">Dismiss</NeonButton>
              </div>
            </div>

            {/* Generated CSS Preview */}
            <GlassCard glow="none" className="p-3">
              <span className="font-orbitron font-bold text-[10px] uppercase text-slate-500 flex items-center gap-1 mb-2">
                <Code className="w-3.5 h-3.5" /> Compiled Tailwind CSS
              </span>
              <pre className="font-mono text-[10px] bg-slate-950 p-3 rounded border border-white/5 text-slate-300 overflow-x-auto">
{`/* CSS Glassmorphic Properties */
background: rgba(13, 13, 18, ${glassOpacity / 100});
backdrop-filter: blur(${blurRadius}px);
${showBorder ? `border: 1px solid rgba(${glowColor === 'cyan' ? '0, 240, 255' : glowColor === 'purple' ? '157, 78, 221' : '255, 0, 127'}, 0.25);` : ''}
box-shadow: 0 0 20px rgba(${glowColor === 'cyan' ? '0, 240, 255' : glowColor === 'purple' ? '157, 78, 221' : '255, 0, 127'}, 0.05);`}
              </pre>
            </GlassCard>
          </div>
        </div>
      )}

      {/* Motion Systems Tab */}
      {activeTab === 'animations' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GlassCard glow="none" className="lg:col-span-2 space-y-4">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
              <Activity className="w-4 h-4" /> Motion Language Framework
            </h3>
            <p className="text-xs text-slate-400 font-display leading-relaxed">
              Subtle, dynamic transitions built to respond directly to user hover hooks. Heavy layouts use CSS properties to limit CPU triggers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-white/5 bg-slate-950/40 rounded flex items-center justify-between">
                <div>
                  <p className="font-orbitron text-xs font-bold text-cyan-400">Pulsing Glow</p>
                  <p className="text-[10px] text-slate-500 font-mono">2.5s infinite alternate</p>
                </div>
                <div className="w-8 h-8 rounded border border-cyan-500/20 bg-slate-950 shadow-md animate-pulse"></div>
              </div>

              <div className="p-4 border border-white/5 bg-slate-950/40 rounded flex items-center justify-between group cursor-pointer hover:border-purple-500/40 transition-all duration-300">
                <div>
                  <p className="font-orbitron text-xs font-bold text-purple-400">Scale Bump</p>
                  <p className="text-[10px] text-slate-500 font-mono">1.02 hover factor</p>
                </div>
                <div className="w-8 h-8 rounded border border-white/10 bg-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard glow="purple" className="flex flex-col justify-between">
            <div>
              <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-pink-400 mb-2">Motion Principles</h3>
              <p className="text-xs text-slate-400 font-display leading-relaxed">
                1. <strong>Responsiveness:</strong> Micro-animations respond instantly to gestures (scale click downs).<br />
                2. <strong>Low Weight:</strong> Pure CSS keyframes over heavy JavaScript animation wrappers.
              </p>
            </div>
            <div className="mt-4 border-t border-white/5 pt-3 text-[10px] text-slate-500">
              Target Frame Rate: <strong>60 FPS</strong> across mobile Safari and desktop Chrome.
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
