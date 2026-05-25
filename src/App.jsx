import React, { useState } from 'react';
import MatrixBackground from './components/MatrixBackground';
import ArchitectView from './views/ArchitectView';
import DesignView from './views/DesignView';
import FrontendView from './views/FrontendView';
import BackendView from './views/BackendView';
import AgentView from './views/AgentView';
import ProductView from './views/ProductView';
import PitchView from './views/PitchView';
import QaView from './views/QaView';
import { 
  Server, Palette, Code, Cpu, Users, TrendingUp, Presentation, CheckSquare, 
  Terminal, ShieldCheck, Zap, Activity 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('architect');

  // Sidebar Menu Config representing the 8 Agent Roles
  const sidebarItems = [
    { id: 'architect', name: 'System Architect', view: <ArchitectView />, icon: Server, color: 'text-cyan-400', hoverGlow: 'hover:shadow-[0_0_12px_rgba(0,240,255,0.15)] hover:border-cyan-400/40' },
    { id: 'design', name: 'UI/UX Design', view: <DesignView />, icon: Palette, color: 'text-purple-400', hoverGlow: 'hover:shadow-[0_0_12px_rgba(157,78,221,0.15)] hover:border-purple-400/40' },
    { id: 'frontend', name: 'Frontend Engineer', view: <FrontendView />, icon: Code, color: 'text-emerald-400', hoverGlow: 'hover:shadow-[0_0_12px_rgba(57,255,20,0.15)] hover:border-emerald-400/40' },
    { id: 'backend', name: 'Backend Engineer', view: <BackendView />, icon: Cpu, color: 'text-indigo-400', hoverGlow: 'hover:shadow-[0_0_12px_rgba(99,102,241,0.15)] hover:border-indigo-400/40' },
    { id: 'agents', name: 'AI Agent Engineer', view: <AgentView />, icon: Users, color: 'text-pink-400', hoverGlow: 'hover:shadow-[0_0_12px_rgba(255,0,127,0.15)] hover:border-pink-400/40' },
    { id: 'product', name: 'Product Strategy', view: <ProductView />, icon: TrendingUp, color: 'text-yellow-400', hoverGlow: 'hover:shadow-[0_0_12px_rgba(254,240,138,0.15)] hover:border-yellow-400/40' },
    { id: 'pitch', name: 'Pitch & Demo Deck', view: <PitchView />, icon: Presentation, color: 'text-cyan-400', hoverGlow: 'hover:shadow-[0_0_12px_rgba(0,240,255,0.15)] hover:border-cyan-400/40' },
    { id: 'qa', name: 'QA & Optimization', view: <QaView />, icon: CheckSquare, color: 'text-emerald-400', hoverGlow: 'hover:shadow-[0_0_12px_rgba(57,255,20,0.15)] hover:border-emerald-400/40' },
  ];

  const currentItem = sidebarItems.find(item => item.id === activeTab) || sidebarItems[0];

  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-white font-display overflow-x-hidden scanlines">
      {/* Dynamic digital matrix rainfall backdrop */}
      <MatrixBackground />

      {/* Cybergrid overlay layer */}
      <div className="fixed inset-0 w-full h-full cyber-grid opacity-[0.12] z-[1] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
        {/* Left HUD Navigation Sidebar */}
        <aside className="w-full md:w-64 bg-slate-950/70 border-r border-white/5 backdrop-blur-xl p-5 flex flex-col justify-between shrink-0">
          <div>
            {/* Header Brand HUD */}
            <div className="flex items-center gap-2.5 pb-5 border-b border-white/5 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-400 to-purple-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                <Terminal className="w-4 h-4 text-slate-950" />
              </div>
              <div>
                <h1 className="font-orbitron font-black text-sm tracking-widest text-slate-100 flex items-center gap-1">
                  AGENTGRID <span className="text-cyan-400 font-bold">AI</span>
                </h1>
                <p className="text-[9px] text-slate-500 font-mono tracking-wider font-semibold uppercase">Multi-Agent OS HUD</p>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="space-y-1">
              {sidebarItems.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`
                      w-full flex items-center gap-3 py-2.5 px-3 rounded-lg border font-orbitron text-xs font-semibold tracking-wider transition-all duration-300
                      ${isActive 
                        ? 'border-white/10 bg-white/5 text-slate-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]' 
                        : 'border-transparent text-slate-400 hover:text-slate-200 ' + item.hoverGlow
                      }
                    `}
                  >
                    <Icon className={`w-4 h-4 ${item.color} ${isActive ? 'animate-pulse' : ''}`} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom Security Node widget */}
          <div className="border-t border-white/5 pt-5 mt-6 font-mono text-[9px] text-slate-500 space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> SECURE SHIELD</span>
              <span className="text-emerald-400">ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span>ACTIVE CLUSTER:</span>
              <span className="text-slate-300 font-bold">EDGE_NODE_09</span>
            </div>
          </div>
        </aside>

        {/* Right HUD Main Body Content */}
        <main className="flex-1 flex flex-col">
          {/* Top Bar HUD Widgets */}
          <header className="h-16 border-b border-white/5 bg-slate-950/40 backdrop-blur-xl flex items-center justify-between px-6 shrink-0 z-20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="font-orbitron font-black text-xs tracking-wider text-slate-300 uppercase">SYSTEM CORE STATE</span>
            </div>

            <div className="flex items-center gap-6 font-mono text-[10px] text-slate-500">
              <div className="hidden sm:flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-purple-400" />
                <span>ROUTING DELAY: <strong className="text-slate-300">38ms</strong></span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>MEMORY BLOCKS: <strong className="text-slate-300">1,420</strong></span>
              </div>
              <div className="flex items-center gap-1.5 border border-green-500/20 bg-green-500/5 px-2.5 py-1 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-green-400 font-bold uppercase font-orbitron">OS BOOTED</span>
              </div>
            </div>
          </header>

          {/* Dynamic Content Panel */}
          <div className="flex-1 p-6 overflow-y-auto max-h-[calc(100vh-64px)] z-10 relative">
            <div className="max-w-6xl mx-auto">
              {currentItem.view}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
