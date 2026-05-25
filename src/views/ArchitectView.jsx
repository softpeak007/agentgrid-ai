import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import NeonButton from '../components/NeonButton';
import { Server, Database, Cpu, Network, ArrowRight, Terminal, Layers, ShieldCheck, Zap } from 'lucide-react';

export default function ArchitectView() {
  const [activeTab, setActiveTab] = useState('map'); // 'map' | 'db' | 'api' | 'scaling'

  // Mock API Structure Data
  const apiStructures = {
    agentTask: {
      method: "POST",
      endpoint: "/api/v1/orchestration/task",
      desc: "Dispatches a main goal to the AI Router to decompose and delegate.",
      request: `{
  "goal": "Conduct market research on smart rings and draft a competitive report.",
  "workflow_id": "wf_smart_rings_001",
  "priority": "high",
  "agents_allowed": ["research", "analytics", "sales"],
  "memory_context_depth": 5
}`,
      response: `{
  "task_id": "task_98f8a183-c289-4d89-9969-ae68e9344d00",
  "status": "queued",
  "allocated_router": "gemini-3.5-flash-agent-router",
  "realtime_channel": "task_updates:task_98f8a183",
  "estimated_steps": 4,
  "timestamp": "2026-05-25T03:00:00Z"
}`
    },
    agentSync: {
      method: "WS",
      endpoint: "/realtime/v1/agent-handshake",
      desc: "Supabase Realtime WebSockets handshake between collaborating agents.",
      request: `{
  "event": "agent_handshake",
  "payload": {
    "sender_agent": "Research Agent",
    "receiver_agent": "Analytics Agent",
    "session_id": "session_cyber_99",
    "payload_type": "market_raw_data",
    "data_size_bytes": 10420
  }
}`,
      response: `{
  "status": "received",
  "action": "commence_analysis",
  "acknowledged_at": "2026-05-25T03:00:02Z"
}`
    }
  };

  const [activeApi, setActiveApi] = useState('agentTask');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            System Architect Console
          </h2>
          <p className="text-sm text-slate-400 font-display">
            Futuristic scalable architecture plan & live blueprint visualizer for AgentGrid AI OS.
          </p>
        </div>
        <div className="flex gap-2 bg-slate-950/60 p-1 rounded-lg border border-white/5 font-orbitron text-xs">
          <button 
            onClick={() => setActiveTab('map')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'map' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Architecture Map
          </button>
          <button 
            onClick={() => setActiveTab('db')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'db' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Database Schema
          </button>
          <button 
            onClick={() => setActiveTab('api')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'api' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            API Endpoints
          </button>
          <button 
            onClick={() => setActiveTab('scaling')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'scaling' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Scaling Spec
          </button>
        </div>
      </div>

      {/* Main Tab Contents */}
      {activeTab === 'map' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Visual Architecture Map Canvas */}
          <GlassCard glow="cyan" className="lg:col-span-2 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Network className="w-4 h-4 animate-pulse" /> Scalable Blueprint Node Flow
                </span>
                <span className="text-xs text-slate-500 font-mono">Status: Connected</span>
              </div>
              <p className="text-xs text-slate-400 mb-6 font-display">
                This diagram illustrates the flow of a single user request delegated in real-time through the decentralized agent framework.
              </p>
            </div>

            {/* Simulated Architecture Nodes */}
            <div className="relative py-10 px-4 flex flex-col items-center gap-8 md:flex-row md:justify-around md:gap-4">
              {/* Node 1 */}
              <div className="flex flex-col items-center text-center z-10">
                <div className="w-14 h-14 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                  <Terminal className="w-6 h-6 text-slate-400" />
                </div>
                <div className="mt-2">
                  <p className="font-orbitron text-xs font-bold">Client Panel</p>
                  <p className="text-[10px] text-slate-500 font-mono">React / WebSocket</p>
                </div>
              </div>

              <div className="hidden md:block text-cyan-500/40"><ArrowRight className="w-5 h-5 animate-pulse" /></div>

              {/* Node 2 */}
              <div className="flex flex-col items-center text-center z-10 relative">
                <div className="absolute -inset-1 rounded-full bg-cyan-500/20 blur-md radar-glow"></div>
                <div className="w-16 h-16 rounded-full border border-cyan-400/50 bg-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  <Cpu className="w-7 h-7 text-cyan-400" />
                </div>
                <div className="mt-2">
                  <p className="font-orbitron text-xs font-bold text-cyan-400">Gemini Router</p>
                  <p className="text-[10px] text-slate-400 font-mono">Agent Delegation</p>
                </div>
              </div>

              <div className="hidden md:block text-purple-500/40"><ArrowRight className="w-5 h-5 animate-pulse" /></div>

              {/* Node 3 */}
              <div className="flex flex-col items-center text-center z-10 relative">
                <div className="absolute -inset-1 rounded-full bg-purple-500/20 blur-md radar-glow" style={{ animationDelay: '1s' }}></div>
                <div className="w-16 h-16 rounded-full border border-purple-400/50 bg-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(157,78,221,0.2)]">
                  <Server className="w-7 h-7 text-purple-400" />
                </div>
                <div className="mt-2">
                  <p className="font-orbitron text-xs font-bold text-purple-400">Supabase OS</p>
                  <p className="text-[10px] text-slate-400 font-mono">Edge Functions / Sync</p>
                </div>
              </div>

              <div className="hidden md:block text-purple-500/40"><ArrowRight className="w-5 h-5 animate-pulse" /></div>

              {/* Node 4 */}
              <div className="flex flex-col items-center text-center z-10">
                <div className="w-14 h-14 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center">
                  <Database className="w-6 h-6 text-slate-400" />
                </div>
                <div className="mt-2">
                  <p className="font-orbitron text-xs font-bold">Vector Database</p>
                  <p className="text-[10px] text-slate-500 font-mono">Postgres (pgvector)</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 mt-6 grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-[10px] text-slate-500 font-orbitron uppercase">Orchestration</p>
                <p className="font-orbitron text-xs text-slate-300 font-bold">Decentralized Mesh</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-orbitron uppercase">AI Core</p>
                <p className="font-orbitron text-xs text-cyan-400 font-bold">Gemini 1.5/2.0 API</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-orbitron uppercase">Realtime Delay</p>
                <p className="font-orbitron text-xs text-purple-400 font-bold">&lt; 45ms (Supabase)</p>
              </div>
            </div>
          </GlassCard>

          {/* Module Breakdown Sidebar */}
          <div className="space-y-4">
            <GlassCard glow="none">
              <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-purple-400 flex items-center gap-1.5 mb-3">
                <Layers className="w-4 h-4" /> App Stack & Core Modules
              </h3>
              <ul className="space-y-3 font-display text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5"></div>
                  <div>
                    <strong className="text-cyan-300">Cognitive Routing System:</strong> Decodes goals using Gemini embeddings and assigns task subsets to specialized agents.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5"></div>
                  <div>
                    <strong className="text-purple-300">Realtime Sync Layer:</strong> Relies on Supabase WebSockets to stream log changes, messages, and state tokens instantly.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1.5"></div>
                  <div>
                    <strong className="text-pink-300">Unified Memory Buffer:</strong> Coordinates short-term local context buffers alongside long-term semantic embeddings in pgvector database.
                  </div>
                </li>
              </ul>
            </GlassCard>

            <GlassCard glow="none">
              <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-2">
                <ShieldCheck className="w-4 h-4" /> Architecture Compliance
              </h3>
              <p className="text-xs text-slate-400 font-display">
                This architecture complies 100% with the enterprise-ready guidelines of AgentGrid AI.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[9px] font-mono border border-green-500/20 bg-green-500/10 text-green-400">Zero-Trust Auth</span>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">Auto-Scaling</span>
              </div>
            </GlassCard>
          </div>
        </div>
      )}

      {/* Database Schema Inspector */}
      {activeTab === 'db' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="font-orbitron text-sm font-semibold text-slate-300">Relational Database Schemas</h3>
            <p className="text-xs text-slate-400 font-display">
              Enterprise PostgreSQL scheme tailored for vector capabilities, memory consolidation, and scalable orchestration pipelines.
            </p>

            <div className="space-y-2">
              <div className="p-3 border border-cyan-500/20 bg-slate-950/60 rounded-lg cursor-pointer">
                <p className="font-orbitron font-bold text-xs text-cyan-400">tb_agents</p>
                <p className="text-[10px] text-slate-500 font-mono">Stores registered agents, status, configurations, and baseline prompts.</p>
              </div>
              <div className="p-3 border border-white/5 hover:border-cyan-500/20 bg-slate-950/20 rounded-lg cursor-pointer transition-all">
                <p className="font-orbitron font-bold text-xs text-slate-300">tb_memory_blocks</p>
                <p className="text-[10px] text-slate-500 font-mono">pgvector-enabled table keeping track of semantic agent logs.</p>
              </div>
              <div className="p-3 border border-white/5 hover:border-cyan-500/20 bg-slate-950/20 rounded-lg cursor-pointer transition-all">
                <p className="font-orbitron font-bold text-xs text-slate-300">tb_workflow_runs</p>
                <p className="text-[10px] text-slate-500 font-mono">Tracks high-level pipelines, step execution, and time records.</p>
              </div>
            </div>
          </div>

          <GlassCard glow="cyan" className="lg:col-span-2 flex flex-col">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Database className="w-4 h-4" /> schema: public.tb_agents
              </span>
              <span className="text-xs text-slate-500 font-mono">Engine: PostgreSQL</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full font-mono text-[11px] text-slate-300 border-collapse">
                <thead>
                  <tr className="border-b border-white/5 text-slate-500 font-orbitron text-[10px] text-left">
                    <th className="py-2 pr-4 font-bold">Column</th>
                    <th className="py-2 pr-4 font-bold">Type</th>
                    <th className="py-2 pr-4 font-bold">Constraints</th>
                    <th className="py-2 font-bold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-2 pr-4 text-cyan-400 font-bold">id</td>
                    <td className="py-2 pr-4 text-slate-400">UUID</td>
                    <td className="py-2 pr-4 text-purple-400">PRIMARY KEY, DEFAULT gen_random_uuid()</td>
                    <td className="py-2">Unique identifier for each specialized agent.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-cyan-400 font-bold">agent_name</td>
                    <td className="py-2 pr-4 text-slate-400">VARCHAR(64)</td>
                    <td className="py-2 pr-4 text-purple-400">NOT NULL, UNIQUE</td>
                    <td className="py-2">Name of agent (e.g. "Research Agent").</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-cyan-400 font-bold">agent_status</td>
                    <td className="py-2 pr-4 text-slate-400">VARCHAR(24)</td>
                    <td className="py-2 pr-4 text-purple-400">DEFAULT 'idle'</td>
                    <td className="py-2">Status flag ('idle', 'executing', 'offline').</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-cyan-400 font-bold">embedding_vector</td>
                    <td className="py-2 pr-4 text-slate-400">vector(1536)</td>
                    <td className="py-2 pr-4 text-purple-400">NULL</td>
                    <td className="py-2">Baseline semantic capabilities representation vector.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-cyan-400 font-bold">last_active_at</td>
                    <td className="py-2 pr-4 text-slate-400">TIMESTAMPTZ</td>
                    <td className="py-2 pr-4 text-purple-400">DEFAULT now()</td>
                    <td className="py-2">Track activity timestamps.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 border-t border-white/5 pt-4">
              <p className="font-orbitron font-bold text-xs text-slate-400 mb-2">SQL DDL Definition Preview</p>
              <pre className="font-mono text-[10px] bg-slate-950 p-3 rounded border border-white/5 text-slate-300 overflow-x-auto">
{`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "vector"; -- PostgreSQL pgvector extension

CREATE TABLE public.tb_agents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_name VARCHAR(64) NOT NULL UNIQUE,
    agent_status VARCHAR(24) DEFAULT 'idle',
    embedding_vector vector(1536),
    last_active_at TIMESTAMPTZ DEFAULT now()
);`}
              </pre>
            </div>
          </GlassCard>
        </div>
      )}

      {/* API Endpoints */}
      {activeTab === 'api' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="font-orbitron text-sm font-semibold text-slate-300">Modular REST & Realtime APIs</h3>
            <p className="text-xs text-slate-400 font-display mb-4">
              Secure, clean interfaces enabling multi-agent orchestrations, contextual updates, and workflow logs.
            </p>

            <div 
              onClick={() => setActiveApi('agentTask')}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${activeApi === 'agentTask' ? 'border-cyan-500/30 bg-cyan-500/5' : 'border-white/5 bg-slate-950/20'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="px-1.5 py-0.5 text-[9px] font-orbitron font-bold rounded bg-cyan-500/20 text-cyan-400">POST</span>
                <span className="font-mono text-xs font-semibold text-slate-300">/orchestration/task</span>
              </div>
              <p className="text-[10px] text-slate-500">Initiate workflows and distribute them to routers.</p>
            </div>

            <div 
              onClick={() => setActiveApi('agentSync')}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${activeApi === 'agentSync' ? 'border-cyan-500/30 bg-cyan-500/5' : 'border-white/5 bg-slate-950/20'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="px-1.5 py-0.5 text-[9px] font-orbitron font-bold rounded bg-purple-500/20 text-purple-400">WS</span>
                <span className="font-mono text-xs font-semibold text-slate-300">/agent-handshake</span>
              </div>
              <p className="text-[10px] text-slate-500">Supabase Websocket coordination.</p>
            </div>
          </div>

          <GlassCard glow="cyan" className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" /> {apiStructures[activeApi].endpoint}
                </span>
                <span className="text-[10px] text-slate-500 font-mono font-semibold">HTTPS / WSS Protocol</span>
              </div>
              <p className="text-xs text-slate-400 font-display mb-4">{apiStructures[activeApi].desc}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-orbitron text-[10px] text-slate-500 uppercase font-bold mb-1.5">Request Payloads</p>
                  <pre className="font-mono text-[10px] bg-slate-950 p-3 rounded border border-white/5 text-slate-300 overflow-x-auto">
                    {apiStructures[activeApi].request}
                  </pre>
                </div>
                <div>
                  <p className="font-orbitron text-[10px] text-slate-500 uppercase font-bold mb-1.5">Response JSON</p>
                  <pre className="font-mono text-[10px] bg-slate-950 p-3 rounded border border-white/5 text-slate-300 overflow-x-auto">
                    {apiStructures[activeApi].response}
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-4 border-t border-white/5 pt-3 text-[10px] text-slate-500 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Response header `X-AgentGrid-Edge-Latency` average: <strong>12ms</strong>. Authed via Supabase JWT vectors.</span>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Scaling Spec */}
      {activeTab === 'scaling' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard glow="none">
            <h3 className="font-orbitron text-sm font-semibold text-cyan-400 mb-3">Enterprise Scalability Plan</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-display mb-4">
              To support millions of collaborating agents and sub-50ms sync latencies across geographies, AgentGrid AI utilizes a multi-tiered scaling paradigm.
            </p>
            <div className="space-y-3 font-display text-xs">
              <div className="p-3 rounded border border-white/5 bg-slate-950/40">
                <strong className="text-slate-300 block mb-1">1. Decentralized Serverless Edge Routers</strong>
                <span className="text-slate-400 text-[11px]">Deploying the cognitive routing pipelines on edge function instances (Supabase/Deno Edge) closest to users, reducing LLM API proxy hops.</span>
              </div>
              <div className="p-3 rounded border border-white/5 bg-slate-950/40">
                <strong className="text-slate-300 block mb-1">2. Horizontal pgvector Clustering</strong>
                <span className="text-slate-400 text-[11px]">Using read-replicas for memory searches, combined with write-through caches for active transaction threads using in-memory Redis buffers.</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard glow="purple">
            <h3 className="font-orbitron text-sm font-semibold text-purple-400 mb-3">Modular Expansion Strategy</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-display mb-4">
              Developers can append new agent personalities and functional tools by conforming to the unified schema framework.
            </p>
            <div className="space-y-3 font-display text-xs">
              <div className="p-3 rounded border border-purple-500/20 bg-slate-950/40">
                <strong className="text-slate-300 block mb-1">Universal Tool Adaptor Layer</strong>
                <span className="text-slate-400 text-[11px]">Agents interact with external APIs (GitHub, Stripe, Hubspot) using a standard abstract JSON adapter structure that translates model predictions.</span>
              </div>
              <div className="p-3 rounded border border-purple-500/20 bg-slate-950/40">
                <strong className="text-slate-300 block mb-1">Dynamic Prompt Injections</strong>
                <span className="text-slate-400 text-[11px]">Inject specialized skills dynamically at runtime from vector storage without altering base agent configuration logic.</span>
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
