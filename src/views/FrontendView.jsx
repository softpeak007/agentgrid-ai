import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import NeonButton from '../components/NeonButton';
import { Folder, File, ChevronDown, ChevronRight, Code, Cpu, Smartphone, Monitor, Tablet } from 'lucide-react';

export default function FrontendView() {
  const [activeTab, setActiveTab] = useState('structure'); // 'structure' | 'state' | 'responsive'
  const [expandedFolders, setExpandedFolders] = useState({
    src: true,
    components: true,
    views: false,
  });

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  };

  // Mock State Log Array
  const [stateLogs, setStateLogs] = useState([
    { id: 1, action: "AGENT_BOOT_REQUEST", payload: { agent: "ResearchAgent" }, timestamp: "03:04:12" },
    { id: 2, action: "AGENT_BOOT_SUCCESS", payload: { id: "agt_1", speed: "124ms" }, timestamp: "03:04:13" },
    { id: 3, action: "TASK_CREATE", payload: { goal: "Market Scan" }, timestamp: "03:04:15" },
    { id: 4, action: "REALTIME_WS_SUBSCRIBE", payload: { channel: "tasks" }, timestamp: "03:04:16" }
  ]);

  const dispatchMockAction = () => {
    const actions = [
      { action: "MEMORY_BLOCK_PERSISTED", payload: { records: 3, pgvector_dim: 1536 } },
      { action: "LLM_ROUTING_SUCCESS", payload: { elapsed: "312ms", target: "SupportAgent" } },
      { action: "REALTIME_BROADCAST_SEND", payload: { client_count: 1 } },
      { action: "WORKFLOW_STATE_COMPLETE", payload: { pipeline_id: "wf_001" } }
    ];
    
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    
    setStateLogs(prev => [
      ...prev,
      { id: Date.now(), action: randomAction.action, payload: randomAction.payload, timestamp: timeStr }
    ].slice(-6)); // Keep last 6 logs
  };

  const clearLogs = () => {
    setStateLogs([]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Frontend Engineer Sandbox
          </h2>
          <p className="text-sm text-slate-400 font-display">
            Explore components, dynamic state managers, and view responsive systems in action.
          </p>
        </div>
        <div className="flex gap-2 bg-slate-950/60 p-1 rounded-lg border border-white/5 font-orbitron text-xs">
          <button 
            onClick={() => setActiveTab('structure')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'structure' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Folder Structure
          </button>
          <button 
            onClick={() => setActiveTab('state')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'state' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            State Management
          </button>
          <button 
            onClick={() => setActiveTab('responsive')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'responsive' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Responsive Previews
          </button>
        </div>
      </div>

      {/* Folder Structure */}
      {activeTab === 'structure' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GlassCard glow="cyan" className="lg:col-span-2 space-y-4">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 border-b border-white/5 pb-3">
              <Folder className="w-4 h-4" /> Production Folder architecture
            </h3>

            {/* Folder Tree */}
            <div className="font-mono text-xs text-slate-300 space-y-2.5 max-h-[360px] overflow-y-auto pr-2">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Folder className="w-4 h-4" /> <span>AgentGrid AI /</span>
              </div>
              
              {/* SRC */}
              <div className="pl-4 space-y-2">
                <div 
                  onClick={() => toggleFolder('src')}
                  className="flex items-center gap-1.5 cursor-pointer text-emerald-400 hover:text-emerald-300"
                >
                  {expandedFolders.src ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  <Folder className="w-4 h-4 fill-emerald-500/10" /> <span>src/</span>
                </div>

                {expandedFolders.src && (
                  <div className="pl-6 border-l border-white/5 space-y-2 mt-1">
                    {/* COMPONENTS */}
                    <div 
                      onClick={() => toggleFolder('components')}
                      className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-slate-200"
                    >
                      {expandedFolders.components ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                      <Folder className="w-4 h-4 fill-slate-400/10" /> <span>components/</span>
                    </div>

                    {expandedFolders.components && (
                      <div className="pl-6 border-l border-white/5 space-y-2 mt-1 text-slate-400">
                        <div className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-cyan-400/80" /> GlassCard.jsx</div>
                        <div className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-cyan-400/80" /> NeonButton.jsx</div>
                        <div className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-cyan-400/80" /> MatrixBackground.jsx</div>
                      </div>
                    )}

                    {/* VIEWS */}
                    <div 
                      onClick={() => toggleFolder('views')}
                      className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-slate-200"
                    >
                      {expandedFolders.views ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                      <Folder className="w-4 h-4 fill-slate-400/10" /> <span>views/</span>
                    </div>

                    {expandedFolders.views && (
                      <div className="pl-6 border-l border-white/5 space-y-2 mt-1 text-slate-400">
                        <div className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-purple-400/80" /> ArchitectView.jsx</div>
                        <div className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-purple-400/80" /> DesignView.jsx</div>
                        <div className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-purple-400/80" /> FrontendView.jsx</div>
                        <div className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-purple-400/80" /> BackendView.jsx</div>
                        <div className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-purple-400/80" /> AgentView.jsx</div>
                        <div className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-purple-400/80" /> ProductView.jsx</div>
                        <div className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-purple-400/80" /> PitchView.jsx</div>
                        <div className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-purple-400/80" /> QaView.jsx</div>
                      </div>
                    )}

                    <div className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-emerald-400" /> App.jsx</div>
                    <div className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-cyan-400" /> index.css</div>
                    <div className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-emerald-400" /> main.jsx</div>
                  </div>
                )}
              </div>

              <div className="pl-4 flex items-center gap-1.5 text-slate-400"><File className="w-3.5 h-3.5 text-slate-500" /> tailwind.config.js</div>
              <div className="pl-4 flex items-center gap-1.5 text-slate-400"><File className="w-3.5 h-3.5 text-slate-500" /> vite.config.js</div>
              <div className="pl-4 flex items-center gap-1.5 text-slate-400"><File className="w-3.5 h-3.5 text-slate-500" /> index.html</div>
              <div className="pl-4 flex items-center gap-1.5 text-slate-400"><File className="w-3.5 h-3.5 text-slate-500" /> package.json</div>
            </div>
          </GlassCard>

          <GlassCard glow="none" className="flex flex-col justify-between">
            <div>
              <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-emerald-400 mb-2">Build Principles</h3>
              <p className="text-xs text-slate-400 font-display leading-relaxed">
                * <strong>Atomic Design:</strong> Clean isolation between views (agent profiles) and shared hooks.<br />
                * <strong>Asset Bundling:</strong> Tree-shaking configured inside Vite eliminates dead dependencies on compile.<br />
                * <strong>CSS Layer Isolation:</strong> Tailwind utilities separated logically from custom neon filters.
              </p>
            </div>
            <div className="mt-4 border-t border-white/5 pt-3">
              <span className="text-[9px] text-slate-500 font-orbitron uppercase block mb-1">Tech Configuration</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">React 18</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-purple-500/20 bg-purple-500/10 text-purple-400 ml-2">Vite 5</span>
            </div>
          </GlassCard>
        </div>
      )}

      {/* State Management */}
      {activeTab === 'state' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GlassCard glow="cyan" className="lg:col-span-2 flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 animate-pulse" /> Action Dispatcher & State Logger
                </span>
                <div className="flex gap-2">
                  <button onClick={clearLogs} className="text-[10px] text-slate-500 hover:text-slate-300 font-orbitron uppercase">Clear</button>
                </div>
              </div>
              
              <p className="text-xs text-slate-400 font-display mb-4">
                Click "Dispatch Mock Action" to watch state changes update the log structure dynamically.
              </p>

              {/* Console logs */}
              <div className="bg-slate-950 rounded border border-white/5 p-4 min-h-[220px] font-mono text-[10px] space-y-2 overflow-y-auto">
                {stateLogs.length === 0 ? (
                  <p className="text-slate-600 text-center py-10 italic">Console idle. No dispatched actions in queue.</p>
                ) : (
                  stateLogs.map((log) => (
                    <div key={log.id} className="border-b border-white/5 pb-1.5 last:border-0">
                      <span className="text-slate-500 mr-2">[{log.timestamp}]</span>
                      <span className="text-emerald-400 font-bold font-orbitron mr-2">{log.action}</span>
                      <span className="text-slate-400">{JSON.stringify(log.payload)}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <NeonButton onClick={dispatchMockAction} variant="cyan">
                Dispatch Mock Action
              </NeonButton>
            </div>
          </GlassCard>

          <GlassCard glow="none" className="space-y-4">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-emerald-400">Context State Map</h3>
            <p className="text-xs text-slate-400 font-display leading-relaxed">
              Global dashboard state coordinates multiple key context nodes:
            </p>
            <div className="space-y-2 text-xs font-display">
              <div className="p-2.5 rounded border border-white/5 bg-slate-950/40">
                <strong className="text-slate-300 block">AgentContext:</strong> Contains online status flags, WebSocket sockets, and capabilities models.
              </div>
              <div className="p-2.5 rounded border border-white/5 bg-slate-950/40">
                <strong className="text-slate-300 block">TaskStore:</strong> Holds the complete workflow queue, active steps, and progress percentages.
              </div>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Responsive Previews */}
      {activeTab === 'responsive' && (
        <GlassCard glow="cyan" className="space-y-6">
          <div>
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-2">
              <Smartphone className="w-4 h-4 animate-pulse" /> Adaptive Grid Layout System
            </h3>
            <p className="text-xs text-slate-400 font-display">
              The AgentGrid OS is completely responsive and adjusts its sidebar flows, data visualization matrices, and cards cleanly across diverse platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-display text-xs text-center">
            {/* Mobile */}
            <div className="p-4 border border-white/5 bg-slate-950/40 rounded flex flex-col items-center">
              <Smartphone className="w-8 h-8 text-cyan-400 mb-2" />
              <strong className="text-slate-200">Mobile Grid (1 Column)</strong>
              <p className="text-slate-400 text-[11px] mt-1">Sidebar collapses into clean drawer menus; stats cards stack vertically.</p>
            </div>
            {/* Tablet */}
            <div className="p-4 border border-white/5 bg-slate-950/40 rounded flex flex-col items-center">
              <Tablet className="w-8 h-8 text-purple-400 mb-2" />
              <strong className="text-slate-200">Tablet Grid (2 Columns)</strong>
              <p className="text-slate-400 text-[11px] mt-1">Sidebar compresses to icons; tables split into scrolling cards.</p>
            </div>
            {/* Desktop */}
            <div className="p-4 border border-white/5 bg-slate-950/40 rounded flex flex-col items-center">
              <Monitor className="w-8 h-8 text-emerald-400 mb-2" />
              <strong className="text-slate-200">Desktop Grid (3 Columns)</strong>
              <p className="text-slate-400 text-[11px] mt-1">Fully expanded metrics dashboard; multiple charts sit side-by-side.</p>
            </div>
          </div>
        </GlassCard>
      )}
    </div>
  );
}
