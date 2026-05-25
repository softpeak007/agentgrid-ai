import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { TrendingUp, Users, DollarSign, Target, Milestone, ShieldAlert } from 'lucide-react';

export default function ProductView() {
  const [activeTab, setActiveTab] = useState('monetization'); // 'monetization' | 'icp' | 'roadmap'
  
  // Pricing Calculator State variables
  const [agentCount, setAgentCount] = useState(5);
  const [tokenLimit, setTokenLimit] = useState(10); // in millions
  const [hasEnterpriseSso, setHasEnterpriseSso] = useState(false);
  const [hasDedicatedModel, setHasDedicatedModel] = useState(false);

  // Compute licensing revenues and infrastructure expenses
  const licenseRevenue = (agentCount * 19) + (hasEnterpriseSso ? 150 : 0) + (hasDedicatedModel ? 300 : 0);
  const infraCost = Math.round((tokenLimit * 1.5) + (agentCount * 2));
  const grossMarginPercent = licenseRevenue > 0 ? Math.round(((licenseRevenue - infraCost) / licenseRevenue) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">
            Product Strategy Planner
          </h2>
          <p className="text-sm text-slate-400 font-display">
            Startup business model, dynamic SaaS monetization engines, and feature roadmaps.
          </p>
        </div>
        
        <div className="flex gap-2 bg-slate-950/60 p-1 rounded-lg border border-white/5 font-orbitron text-xs">
          <button 
            onClick={() => setActiveTab('monetization')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'monetization' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            SaaS Monetization
          </button>
          <button 
            onClick={() => setActiveTab('icp')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'icp' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Target Audiences
          </button>
          <button 
            onClick={() => setActiveTab('roadmap')} 
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'roadmap' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Feature Roadmap
          </button>
        </div>
      </div>

      {/* Tab: Monetization & Calculator */}
      {activeTab === 'monetization' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Slider Inputs */}
          <GlassCard glow="none" className="space-y-5">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-yellow-400 flex items-center gap-1.5">
              <DollarSign className="w-4 h-4" /> Revenue & Cost Modeler
            </h3>

            <div className="space-y-4 text-xs font-display">
              {/* Agent count slider */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[11px]">
                  <span>Active Specialized Agents</span>
                  <span className="text-yellow-400">{agentCount} Agents</span>
                </div>
                <input 
                  type="range" min="1" max="25" value={agentCount} 
                  onChange={(e) => setAgentCount(parseInt(e.target.value))}
                  className="w-full accent-yellow-500" 
                />
              </div>

              {/* Tokens limit slider */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[11px]">
                  <span>Monthly Context Tokens</span>
                  <span className="text-yellow-400">{tokenLimit}M tokens</span>
                </div>
                <input 
                  type="range" min="1" max="100" value={tokenLimit} 
                  onChange={(e) => setTokenLimit(parseInt(e.target.value))}
                  className="w-full accent-yellow-500" 
                />
              </div>

              {/* Option checkboxes */}
              <div className="space-y-3 border-t border-white/5 pt-4">
                <div className="flex items-center justify-between">
                  <span>SSO & Active Directory (Enterprise)</span>
                  <input 
                    type="checkbox" checked={hasEnterpriseSso} 
                    onChange={(e) => setHasEnterpriseSso(e.target.checked)}
                    className="w-4 h-4 accent-yellow-500" 
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span>Dedicated Fine-Tuned LLM Model</span>
                  <input 
                    type="checkbox" checked={hasDedicatedModel} 
                    onChange={(e) => setHasDedicatedModel(e.target.checked)}
                    className="w-4 h-4 accent-yellow-500" 
                  />
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Computed Output metrics */}
          <GlassCard glow="yellow" className="lg:col-span-2 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-yellow-400 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 animate-pulse" /> Predicted SaaS Monthly Margins
                </span>
                <span className="text-xs text-slate-500 font-mono">Currency: USD</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 text-center">
                <div className="p-3 border border-white/5 bg-slate-950/40 rounded">
                  <span className="text-[10px] text-slate-500 font-orbitron uppercase block mb-1">Monthly Subscription</span>
                  <p className="font-orbitron text-2xl font-black text-slate-100">${licenseRevenue}</p>
                  <p className="text-[9px] text-slate-500 mt-1">Estimated contract license</p>
                </div>
                
                <div className="p-3 border border-white/5 bg-slate-950/40 rounded">
                  <span className="text-[10px] text-slate-500 font-orbitron uppercase block mb-1">Infrastructure cost</span>
                  <p className="font-orbitron text-2xl font-black text-red-400/80">${infraCost}</p>
                  <p className="text-[9px] text-slate-500 mt-1">LLM context + Vector DB cost</p>
                </div>

                <div className="p-3 border border-white/5 bg-slate-950/40 rounded">
                  <span className="text-[10px] text-slate-500 font-orbitron uppercase block mb-1">Gross Profit Margin</span>
                  <p className={`font-orbitron text-2xl font-black ${grossMarginPercent > 70 ? 'text-green-400' : 'text-yellow-400'}`}>{grossMarginPercent}%</p>
                  <p className="text-[9px] text-slate-500 mt-1">Net profit threshold</p>
                </div>
              </div>
            </div>

            <div className="mt-4 border-t border-white/5 pt-3 text-[10px] text-slate-500 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
              <span>Calculations represent <strong>90% confidence index</strong> based on Gemini token pricing vectors.</span>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Tab: ICP */}
      {activeTab === 'icp' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GlassCard glow="none">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-yellow-400 flex items-center gap-1.5 mb-3">
              <Target className="w-4 h-4" /> Ideal Customer Profiles (ICPs)
            </h3>
            <p className="text-xs text-slate-400 font-display leading-relaxed">
              We target high-growth business layers looking to delegate operations and reduce engineering overhead.
            </p>
          </GlassCard>

          <GlassCard glow="yellow" className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-white/5 bg-slate-950/60 rounded space-y-2">
              <span className="px-2 py-0.5 rounded text-[9px] font-mono border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">Profile A</span>
              <h4 className="font-orbitron font-bold text-xs text-slate-200">AI Application Builders & agencies</h4>
              <p className="text-xs text-slate-400 font-display">Fast tech shops building complex agents for clients. They use AgentGrid AI as their low-latency multi-agent runtime environment.</p>
            </div>

            <div className="p-4 border border-white/5 bg-slate-950/60 rounded space-y-2">
              <span className="px-2 py-0.5 rounded text-[9px] font-mono border border-purple-500/20 bg-purple-500/10 text-purple-400">Profile B</span>
              <h4 className="font-orbitron font-bold text-xs text-slate-200">Enterprise Operations Teams</h4>
              <p className="text-xs text-slate-400 font-display">Large corporations seeking to hook corporate databases up to intelligent research nodes. They demand zero-trust SSO parameters.</p>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Tab: Roadmap */}
      {activeTab === 'roadmap' && (
        <GlassCard glow="yellow" className="space-y-6">
          <div>
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-yellow-400 flex items-center gap-1.5 mb-2">
              <Milestone className="w-4 h-4 animate-pulse" /> Launch & Roadmap Phases
            </h3>
            <p className="text-xs text-slate-400 font-display">
              Phased strategy to balance low time-to-market with enterprise architectural robustness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-display text-xs">
            <div className="p-4 border border-white/5 bg-slate-950/40 rounded">
              <span className="text-cyan-400 font-bold block mb-1">Phase 1: Developer MVP</span>
              <span className="text-slate-500 text-[10px] block uppercase font-orbitron mb-2">Q3 2026</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">Launch the open-source React SDK, visual node designer tools, and Gemini Edge function routers.</p>
            </div>

            <div className="p-4 border border-white/5 bg-slate-950/40 rounded">
              <span className="text-purple-400 font-bold block mb-1">Phase 2: Realtime Team sync</span>
              <span className="text-slate-500 text-[10px] block uppercase font-orbitron mb-2">Q4 2026</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">Incorporate Supabase WebSockets integration, real-time shared vector memories, and live analytics dashboards.</p>
            </div>

            <div className="p-4 border border-white/5 bg-slate-950/40 rounded">
              <span className="text-yellow-400 font-bold block mb-1">Phase 3: Enterprise Cloud</span>
              <span className="text-slate-500 text-[10px] block uppercase font-orbitron mb-2">Q1 2027</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">Ship active SSO directories, custom fine-tuned Gemini model connectors, and advanced compliance monitors.</p>
            </div>
          </div>
        </GlassCard>
      )}
    </div>
  );
}
