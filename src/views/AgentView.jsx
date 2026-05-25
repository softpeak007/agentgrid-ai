import React, { useState, useEffect } from 'react';
import GlassCard from '../components/GlassCard';
import NeonButton from '../components/NeonButton';
import { Play, RotateCcw, Cpu, Users, Eye, ArrowRight, Activity, Terminal } from 'lucide-react';

export default function AgentView() {
  const [selectedWorkflow, setSelectedWorkflow] = useState('research'); // 'research' | 'support'
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [simulationLogs, setSimulationLogs] = useState([]);
  
  // 5 Specialized Agents
  const agentsList = [
    { name: 'Research Agent', role: 'LLM Synthesizer', color: 'text-cyan-400', border: 'border-cyan-500/20' },
    { name: 'Analytics Agent', role: 'Data Cruncher', color: 'text-purple-400', border: 'border-purple-500/20' },
    { name: 'Sales Agent', role: 'Pitch Specialist', color: 'text-pink-400', border: 'border-pink-500/20' },
    { name: 'Support Agent', role: 'Quality Audit', color: 'text-emerald-400', border: 'border-emerald-500/20' },
    { name: 'Automation Agent', role: 'Workflow Trigger', color: 'text-yellow-400', border: 'border-yellow-500/20' },
  ];

  // Simulation Steps Data
  const workflowData = {
    research: [
      {
        agent: 'Research Agent',
        status: 'searching',
        reasoning: 'Analyzing user request "Conduct market research on smart rings". Querying Google Search & Patent indexes via Gemini search tools...',
        tool: 'google_search_v2({ query: "smart ring market share 2026 specs" })',
        output: 'Retrieved 8 sources detailing active players (Oura, Samsung Galaxy Ring) and core patent files.'
      },
      {
        agent: 'Analytics Agent',
        status: 'calculating',
        reasoning: 'Consolidating pricing specs and market dimensions fetched by Research Agent. Distance matrix matching pgvector contexts...',
        tool: 'calculate_metrics_matrix({ dataset: raw_retrieval_1 })',
        output: 'Calculated Oura at 52% market share; Galaxy Ring at 28%. Projected CAGR: 18.2% through 2030.'
      },
      {
        agent: 'Sales Agent',
        status: 'drafting',
        reasoning: 'Synthesizing market specs and CAGR statistics into a premium investor-ready sales report outline. Accessing memory logs...',
        tool: 'draft_pitch_template({ metrics: dataset_cagr })',
        output: 'Created 10-slide competitive pitch deck draft focusing on smart ring enterprise integrations.'
      },
      {
        agent: 'Support Agent',
        status: 'verifying',
        reasoning: 'Reviewing sales report for compliance and tone precision. Performing semantic similarity analysis against baseline SaaS templates...',
        tool: 'verify_content_compliance({ text: sales_report_draft })',
        output: 'Verification successful. Style matches investor guidelines. 0 alignment errors flagged.'
      },
      {
        agent: 'Automation Agent',
        status: 'broadcasting',
        reasoning: 'Pipeline successfully approved. Encoding final report outputs, triggering Zapier webhooks, and pushing real-time DB sync events...',
        tool: 'broadcast_workflow_results({ webhook: "hook_sales_ring" })',
        output: 'Pipeline run complete. Relational database updated. Broadcast payload published to client channel.'
      }
    ],
    support: [
      {
        agent: 'Support Agent',
        status: 'reviewing',
        reasoning: 'Received critical system alert "Serverless Edge latency spike 450ms". Accessing volatile memory log pools...',
        tool: 'query_supabase_logs({ filter: "latency > 300" })',
        output: 'Identified 3 nested edge function calls causing circular database handshakes.'
      },
      {
        agent: 'Automation Agent',
        status: 'executing',
        reasoning: 'Executing mitigation script to spin up secondary serverless clusters and override cached memory threads...',
        tool: 'reboot_cluster_node({ cluster: "edge_region_west" })',
        output: 'Redirection successful. Traffic balanced. Database caches consolidated.'
      },
      {
        agent: 'Analytics Agent',
        status: 'auditing',
        reasoning: 'Verifying system recovery latency metrics. Distance matching response vectors against threshold averages...',
        tool: 'measure_ping_cycles({ count: 50 })',
        output: 'Average node response latency restored to 38ms. Performance index rated optimal.'
      }
    ]
  };

  useEffect(() => {
    let timer;
    if (isRunning && currentStep < workflowData[selectedWorkflow].length) {
      timer = setTimeout(() => {
        const stepDetails = workflowData[selectedWorkflow][currentStep];
        setSimulationLogs(prev => [
          ...prev,
          {
            id: Date.now(),
            agent: stepDetails.agent,
            reasoning: stepDetails.reasoning,
            tool: stepDetails.tool,
            output: stepDetails.output
          }
        ]);
        setCurrentStep(prev => prev + 1);
      }, 2500); // 2.5s step intervals
    } else if (currentStep >= workflowData[selectedWorkflow].length) {
      setIsRunning(false);
    }
    return () => clearTimeout(timer);
  }, [isRunning, currentStep]);

  const startSimulation = () => {
    setIsRunning(true);
    setCurrentStep(0);
    setSimulationLogs([]);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentStep(-1);
    setSimulationLogs([]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
            AI Agent Collaborator Simulator
          </h2>
          <p className="text-sm text-slate-400 font-display">
            Watch multiple specialized AI agents communicate, pass context, and solve complex goals in real-time.
          </p>
        </div>
        
        <div className="flex gap-2">
          <select 
            value={selectedWorkflow}
            onChange={(e) => {
              setSelectedWorkflow(e.target.value);
              resetSimulation();
            }}
            disabled={isRunning}
            className="bg-slate-950/80 border border-white/10 rounded px-3 py-1.5 text-slate-200 text-xs font-orbitron focus:border-cyan-400 outline-none"
          >
            <option value="research">Enterprise Research Workflow (5 steps)</option>
            <option value="support">Cluster Latency Mitigation (3 steps)</option>
          </select>

          <NeonButton 
            onClick={startSimulation} 
            disabled={isRunning} 
            variant="pink"
          >
            <Play className="w-3.5 h-3.5" /> Run Flow
          </NeonButton>
          
          <NeonButton 
            onClick={resetSimulation} 
            variant="outline"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </NeonButton>
        </div>
      </div>

      {/* Visual Agent Communication Canvas */}
      <GlassCard glow="pink" className="p-6">
        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-6">
          <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-pink-400 flex items-center gap-1.5">
            <Users className="w-4 h-4" /> Cognitive Network Mesh
          </span>
          <span className="text-[10px] text-slate-500 font-mono">
            {isRunning ? 'Orchestration Running...' : 'System Status: Active'}
          </span>
        </div>

        {/* 5 Agent Circle Network */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative py-4">
          {agentsList.map((agt, idx) => {
            const isAgentActive = isRunning && currentStep === idx;
            const isAgentCompleted = isRunning ? currentStep > idx : currentStep >= workflowData[selectedWorkflow].length;

            return (
              <div 
                key={agt.name} 
                className={`p-4 rounded-xl border bg-slate-950/60 flex flex-col items-center text-center transition-all duration-300 relative ${
                  isAgentActive 
                    ? 'border-pink-500 shadow-[0_0_15px_rgba(255,0,127,0.3)] scale-[1.03]' 
                    : isAgentCompleted 
                      ? 'border-green-500/40 opacity-80' 
                      : 'border-white/5 opacity-40'
                }`}
              >
                {/* Visual glow indicator inside active agent */}
                {isAgentActive && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                )}

                <div className="w-12 h-12 rounded-full border border-white/5 bg-slate-900 flex items-center justify-center mb-3">
                  <Cpu className={`w-5 h-5 ${isAgentActive ? 'text-pink-400 animate-spin' : isAgentCompleted ? 'text-green-400' : 'text-slate-500'}`} />
                </div>
                
                <h4 className={`font-orbitron text-xs font-bold ${agt.color}`}>{agt.name}</h4>
                <p className="text-[9px] text-slate-500 font-mono mt-1">{agt.role}</p>
                
                <div className="mt-2 text-[9px] font-mono">
                  {isAgentActive ? (
                    <span className="text-pink-400 uppercase font-bold tracking-wider animate-pulse">thinking...</span>
                  ) : isAgentCompleted ? (
                    <span className="text-green-400 uppercase font-semibold">Complete</span>
                  ) : (
                    <span className="text-slate-600 uppercase">Idle</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>

      {/* Live Collaboration Console */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard glow="none" className="lg:col-span-2 flex flex-col justify-between min-h-[320px]">
          <div>
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-pink-400 flex items-center gap-1.5 border-b border-white/5 pb-3 mb-4">
              <Terminal className="w-4 h-4" /> Unified Collaboration Terminal
            </h3>

            <div className="bg-slate-950 rounded border border-white/5 p-4 min-h-[200px] max-h-[300px] overflow-y-auto font-mono text-[10px] space-y-3">
              {simulationLogs.length === 0 ? (
                <div className="text-slate-600 text-center py-12 italic">
                  Console awaiting execution. Click "Run Flow" to stream active logs.
                </div>
              ) : (
                simulationLogs.map((log, idx) => (
                  <div key={log.id} className="border-b border-white/5 pb-3 last:border-0">
                    <div className="flex justify-between items-center text-pink-400 font-orbitron font-bold mb-1">
                      <span>STEP {idx + 1}: {log.agent}</span>
                      <span className="text-emerald-400 text-[9px] uppercase border border-emerald-500/20 bg-emerald-500/5 px-1.5 py-0.5 rounded">
                        Tool: {log.tool.split('(')[0]}
                      </span>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-2 font-display">{log.reasoning}</p>
                    <div className="bg-slate-900/60 p-2 rounded border border-white/5 space-y-1">
                      <p className="text-slate-500 font-mono text-[9px]">TOOL EXECUTION: <span className="text-yellow-400">{log.tool}</span></p>
                      <p className="text-slate-300 font-mono text-[9px]"><span className="text-slate-500">OUTPUT:</span> {log.output}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-4 border-t border-white/5 pt-3 text-[10px] text-slate-500 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <span>Shared semantic context dimension: <strong>1536 float arrays</strong> passed securely between nodes.</span>
          </div>
        </GlassCard>

        {/* Cognitive & Memory System Info */}
        <div className="space-y-4">
          <GlassCard glow="none">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-yellow-400 flex items-center gap-1.5 mb-3">
              <Eye className="w-4 h-4" /> Dynamic Orchestration Model
            </h3>
            <p className="text-xs text-slate-400 font-display leading-relaxed">
              AgentGrid AI operates on a **decentralized task-distribution model**. Rather than relying on a static manager agent, the **Gemini API Router** dynamically assigns goals into distinct executable sub-tasks, letting the agents collaborate asynchronously using shared pgvector memories.
            </p>
          </GlassCard>

          <GlassCard glow="none">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-pink-400 mb-2">Cognitive Reasoning Chain</h3>
            <div className="space-y-2 text-[11px] font-mono text-slate-400">
              <div className="flex gap-2">
                <span className="text-pink-400">1.</span>
                <span>Goal Decomposition (LLM Router)</span>
              </div>
              <div className="flex gap-2">
                <span className="text-pink-400">2.</span>
                <span>Context Lookup (Semantic memory search)</span>
              </div>
              <div className="flex gap-2">
                <span className="text-pink-400">3.</span>
                <span>Local Tool Execution (Custom APIs)</span>
              </div>
              <div className="flex gap-2">
                <span className="text-pink-400">4.</span>
                <span>Result Validation & Broadcast (WS Sync)</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
