import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import NeonButton from '../components/NeonButton';
import { Database, Terminal, Shield, Zap, Send, RefreshCw, Cpu } from 'lucide-react';

export default function BackendView() {
  const [activeTab, setActiveTab] = useState('functions'); // 'functions' | 'sync' | 'memory' | 'jwt'
  const [jwtSub, setJwtSub] = useState('agt_research_99');
  const [jwtRole, setJwtRole] = useState('agent');
  
  // States for API sandbox
  const [apiLogs, setApiLogs] = useState([]);
  const [isExecuting, setIsExecuting] = useState(false);

  // States for real-time WebSocket simulator
  const [wsLogs, setWsLogs] = useState([
    { id: 1, event: "auth_ok", msg: "Authenticated Websocket Channel: global_tasks", time: "03:05:01" },
    { id: 2, event: "presence_sync", msg: "Agents Active: Research, Support, Analytics", time: "03:05:02" }
  ]);

  const executeMockEdgeCall = () => {
    setIsExecuting(true);
    setTimeout(() => {
      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      setApiLogs(prev => [
        {
          id: Date.now(),
          endpoint: "POST https://supabase.agentgrid.ai/functions/v1/agent-router",
          status: 200,
          latency: `${Math.floor(Math.random() * 80) + 40}ms`,
          response: `{ "success": true, "routed_to": "AnalyticsAgent", "action": "summarize_raw_metrics" }`,
          time: timeStr
        },
        ...prev
      ].slice(0, 3));
      setIsExecuting(false);
    }, 600);
  };

  const broadcastRealtimeDbChange = () => {
    const events = [
      { event: "postgres_changes", msg: "INSERT in tb_memory_blocks: [UUID 89a8-cc12] dist: 0.14" },
      { event: "postgres_changes", msg: "UPDATE in tb_agents: research_agent status -> 'executing'" },
      { event: "broadcast", msg: "SalesAgent dispatched task 'write_sales_pitch' to SupportAgent" },
      { event: "presence_diff", msg: "SupportAgent joined global cluster" }
    ];
    
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    
    setWsLogs(prev => [
      ...prev,
      { id: Date.now(), event: randomEvent.event, msg: randomEvent.msg, time: timeStr }
    ].slice(-6));
  };

  // Generate Mock JWT
  const mockJwt = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiI${btoa(jwtSub).replace(/=/g, '')}Iiwicm9sZSI6IiR7and0Um9sZX0iLCJpc3MiOiJzdXBhYmFzZSIsImV4cCI6MTgwNzI4OTYwMH0.
signature_hash_verify_key_9918231`;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            Backend Engine Controller
          </h2>
          <p className="text-sm text-slate-400 font-display">
            Supabase, edge endpoints, postgres database logic, and real-time syncing pipelines.
          </p>
        </div>
        <div className="flex gap-2 bg-slate-950/60 p-1 rounded-lg border border-white/5 font-orbitron text-xs">
          <button 
            onClick={() => setActiveTab('functions')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'functions' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Edge Functions
          </button>
          <button 
            onClick={() => setActiveTab('sync')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'sync' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Realtime Sync
          </button>
          <button 
            onClick={() => setActiveTab('memory')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'memory' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Memory Tiering
          </button>
          <button 
            onClick={() => setActiveTab('jwt')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'jwt' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Auth Systems
          </button>
        </div>
      </div>

      {/* Tab: Edge Functions */}
      {activeTab === 'functions' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GlassCard glow="cyan" className="lg:col-span-2 flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" /> Supabase Edge Functions Sandbox
                </span>
                <span className="text-[10px] text-slate-500 font-mono">Status: Sandbox Active</span>
              </div>
              <p className="text-xs text-slate-400 font-display mb-4">
                Simulate triggering Supabase Serverless Edge functions. Runs custom payload matching inside Deno edge.
              </p>

              <div className="bg-slate-950 rounded border border-white/5 p-4 min-h-[160px] font-mono text-[10px] space-y-3 overflow-y-auto">
                {apiLogs.length === 0 ? (
                  <p className="text-slate-600 text-center py-10 italic">Sandbox idle. Trigger an edge function to see outputs.</p>
                ) : (
                  apiLogs.map((log) => (
                    <div key={log.id} className="border-b border-white/5 pb-2 last:border-0">
                      <div className="flex justify-between items-center text-slate-500 mb-1">
                        <span>[{log.time}] {log.endpoint}</span>
                        <span className="text-emerald-400">HTTP {log.status}</span>
                      </div>
                      <div className="flex justify-between items-center text-[9px] text-slate-500 mb-1">
                        <span>Latency: {log.latency}</span>
                        <span>Content-Type: application/json</span>
                      </div>
                      <pre className="bg-slate-900/60 p-2 rounded text-slate-300 font-mono text-[9px]">{log.response}</pre>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <NeonButton onClick={executeMockEdgeCall} disabled={isExecuting} variant="cyan">
                {isExecuting ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                Execute Mock Call
              </NeonButton>
            </div>
          </GlassCard>

          <GlassCard glow="none" className="space-y-4">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" /> Edge Routing Engine
            </h3>
            <p className="text-xs text-slate-400 font-display leading-relaxed">
              Edge functions handle request validation, verify active user JWTs, call the Gemini API router, and update tables in real time.
            </p>
            <div className="p-3 bg-slate-950 border border-white/5 rounded text-[10px] font-mono">
              <span className="text-purple-400 block mb-1">// Deno edge deployment command</span>
              <span className="text-slate-300">supabase functions deploy agent-router --project-ref your-supabase-ref</span>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Tab: Realtime Sync */}
      {activeTab === 'sync' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GlassCard glow="cyan" className="lg:col-span-2 flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <RefreshCw className="w-4 h-4 animate-spin" /> Supabase Realtime Log Stream
                </span>
                <span className="text-[10px] text-slate-500 font-mono">Topic: public.all</span>
              </div>
              <p className="text-xs text-slate-400 font-display mb-4">
                Click "Broadcast Mock Update" to push dynamic database actions to the real-time WebSocket subscriber stack.
              </p>

              <div className="bg-slate-950 rounded border border-white/5 p-4 min-h-[180px] font-mono text-[10px] space-y-2 overflow-y-auto">
                {wsLogs.map((log) => (
                  <div key={log.id} className="flex justify-between gap-4 py-1 border-b border-white/5 last:border-0">
                    <span className="text-cyan-400 font-bold text-[9px] uppercase min-w-[90px] font-orbitron">[{log.event}]</span>
                    <span className="text-slate-300 flex-1">{log.msg}</span>
                    <span className="text-slate-500">{log.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <NeonButton onClick={broadcastRealtimeDbChange} variant="cyan">
                Broadcast Mock Update
              </NeonButton>
            </div>
          </GlassCard>

          <GlassCard glow="none" className="space-y-4">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-purple-400">Sync Architecture</h3>
            <p className="text-xs text-slate-400 font-display leading-relaxed">
              * **CDC (Change Data Capture):** Instantly captures PostgreSQL inserts, updates, and deletes.<br />
              * **Presence:** Syncs active agent execution threads with a distributed WebSocket cluster, providing sub-45ms latency profiles.
            </p>
          </GlassCard>
        </div>
      )}

      {/* Tab: Memory Tiering */}
      {activeTab === 'memory' && (
        <GlassCard glow="cyan" className="space-y-6">
          <div>
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-2">
              <Database className="w-4 h-4" /> Multi-Tier Agent Memory Structure
            </h3>
            <p className="text-xs text-slate-400 font-display">
              Scalable cognitive memory systems are segregated across three high-performance physical tiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-display text-xs">
            <div className="p-4 border border-white/5 bg-slate-950/40 rounded">
              <span className="text-cyan-400 font-bold block mb-1">1. Volatile Cache (Short-term)</span>
              <span className="text-slate-500 text-[10px] block uppercase font-orbitron mb-2">RAM Cache Buffer</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">Keeps active agent message loops, current execution checkpoints, and temporary tokens under volatile buffers to achieve sub-5ms lookup delay.</p>
            </div>

            <div className="p-4 border border-white/5 bg-slate-950/40 rounded">
              <span className="text-purple-400 font-bold block mb-1">2. pgvector Embeddings (Long-term)</span>
              <span className="text-slate-500 text-[10px] block uppercase font-orbitron mb-2">Semantic Indexing</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">Persists critical research logs and factual knowledge bases converted to 1536-dimensional float arrays inside PostgreSQL vectors for rapid distance scans.</p>
            </div>

            <div className="p-4 border border-white/5 bg-slate-950/40 rounded">
              <span className="text-pink-400 font-bold block mb-1">3. Relational Logs (Audit logs)</span>
              <span className="text-slate-500 text-[10px] block uppercase font-orbitron mb-2">Postgres Indexes</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">Traditional structured audit trails (e.g. usage statistics, run timelines, billing metrics) persisted across standard indexed relational databases.</p>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Tab: Auth Systems */}
      {activeTab === 'jwt' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GlassCard glow="none" className="space-y-4">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Shield className="w-4 h-4" /> Zero-Trust Security Configuration
            </h3>
            
            <div className="space-y-3 text-xs font-display">
              <div className="space-y-1.5">
                <label className="text-[10px] text-slate-500 font-mono block">JWT Subject (Subject ID)</label>
                <input 
                  type="text" value={jwtSub} 
                  onChange={(e) => setJwtSub(e.target.value)}
                  className="w-full bg-slate-950 border border-white/5 rounded p-2 text-slate-200 text-xs font-mono focus:border-cyan-400 outline-none" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] text-slate-500 font-mono block">JWT Claim Role</label>
                <select 
                  value={jwtRole} 
                  onChange={(e) => setJwtRole(e.target.value)}
                  className="w-full bg-slate-950 border border-white/5 rounded p-2 text-slate-200 text-xs font-mono focus:border-cyan-400 outline-none"
                >
                  <option value="agent">agent (Strict Node Authentication)</option>
                  <option value="authenticated">authenticated (Standard User JWT)</option>
                  <option value="service_role">service_role (Admin override)</option>
                </select>
              </div>
            </div>
          </GlassCard>

          <GlassCard glow="cyan" className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400">Generated Mock Auth Bearer</span>
                <span className="text-[9px] text-slate-500 font-mono">Algorithm: HS256</span>
              </div>
              <p className="text-xs text-slate-400 font-display mb-3">
                Custom claims are securely hashed and packaged into JWT strings, enabling zero-trust cross-node agent communication.
              </p>
              
              <div className="bg-slate-950 p-3 rounded border border-white/5 text-[10px] font-mono text-cyan-400 break-words mb-4">
                {mockJwt}
              </div>
            </div>

            <div className="border-t border-white/5 pt-3 text-[10px] text-slate-500">
              * Verification: Decoded token exposes claim parameter `role: "${jwtRole}"` authorizing Row Level Security constraints.
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
