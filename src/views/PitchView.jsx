import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import NeonButton from '../components/NeonButton';
import { Presentation, ShieldAlert, Award, ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';

export default function PitchView() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AgentGrid AI: The Autonomous Multi-Agent OS",
      subtitle: "Pitch Slide 01 — Executive Summary",
      concept: "Opening Hook",
      description: "Welcome to the future of enterprise automation. AgentGrid AI is a decentralized operating system letting specialized AI agents collaborate with sub-50ms sync times, turning complex workflows into seamless autonomous events.",
      takeaway: "Traditional operations are bottlenecked by human handoffs. AgentGrid AI automates the stack end-to-end."
    },
    {
      title: "The Problem: Sapped Latency & Vector Disconnect",
      subtitle: "Pitch Slide 02 — The Pain Point",
      concept: "Market Friction",
      description: "Building reliable AI systems today is painful. Devs struggle with API routing loops, lack of synchronized memory between agents, and heavy latencies that break the user experience.",
      takeaway: "High latency and disconnected state pools kill investor-grade AI projects."
    },
    {
      title: "The Solution: Decentralized Node Mesh",
      subtitle: "Pitch Slide 03 — The Innovation",
      concept: "System Blueprint",
      description: "By integrating Gemini API routers with serverless Edge Functions and Postgres pgvector databases, AgentGrid AI establishes an ultra-fast, zero-trust collaborative agent architecture.",
      takeaway: "Sub-50ms real-time WebSocket syncing coordinates active multi-agent tasks."
    },
    {
      title: "Market Capture: Premium Cyber-SaaS Modeler",
      subtitle: "Pitch Slide 04 — Monetization Engine",
      concept: "Business Horizon",
      description: "Our high-margin pricing plans scale based on active agents and monthly context tokens. By offering dedicated models and SSO, we target enterprise Operations budgets.",
      takeaway: "Gross profit margins project at >80% at scale, representing huge investor value."
    },
    {
      title: "Winning Roadmap: The Speed-to-Market Curve",
      subtitle: "Pitch Slide 05 — Future Milestones",
      concept: "Execution Path",
      description: "From our open-source React SDK in Q3 2026 to realtime team vector synchronization in Q4, leading up to fully-auditable custom enterprise databases in early 2027.",
      takeaway: "A concrete three-phase growth strategy balancing immediate developer adoption with corporate safety."
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Pitch & Hackathon Presentation Deck
          </h2>
          <p className="text-sm text-slate-400 font-display">
            Sleek investor-ready cinematic presentation slides, narrative hooks, and judge guidelines.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Slide Viewer */}
        <GlassCard glow="cyan" className="lg:col-span-2 flex flex-col justify-between min-h-[380px]">
          <div>
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-6">
              <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Presentation className="w-4 h-4 animate-pulse" /> Slide Simulator
              </span>
              <span className="text-[10px] text-slate-500 font-mono">
                {currentSlide + 1} of {slides.length}
              </span>
            </div>

            {/* Slide Body */}
            <div className="space-y-4 py-3 min-h-[200px]">
              <div>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 uppercase tracking-widest">
                  {slides[currentSlide].concept}
                </span>
                <p className="text-[10px] text-slate-500 font-mono mt-2">{slides[currentSlide].subtitle}</p>
              </div>
              
              <h3 className="font-orbitron font-black text-xl text-slate-100">{slides[currentSlide].title}</h3>
              
              <p className="text-xs text-slate-400 font-display leading-relaxed">
                {slides[currentSlide].description}
              </p>
              
              <div className="p-3 bg-slate-950 border border-white/5 rounded text-xs italic text-slate-300 font-display">
                💡 Key Presenter Line: "{slides[currentSlide].takeaway}"
              </div>
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="mt-6 flex justify-between items-center border-t border-white/5 pt-4">
            <span className="text-[10px] text-slate-500 font-mono">Select slides using indicators</span>
            <div className="flex gap-2">
              <NeonButton 
                onClick={handlePrev} 
                disabled={currentSlide === 0} 
                variant="outline"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </NeonButton>
              <NeonButton 
                onClick={handleNext} 
                disabled={currentSlide === slides.length - 1} 
                variant="cyan"
              >
                Next <ChevronRight className="w-4 h-4" />
              </NeonButton>
            </div>
          </div>
        </GlassCard>

        {/* Narrative & Judge Psychology */}
        <div className="space-y-4">
          <GlassCard glow="none">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-purple-400 flex items-center gap-1.5 mb-3">
              <Bookmark className="w-4 h-4" /> Narrative Hooks
            </h3>
            <div className="space-y-2 text-xs font-display text-slate-400 leading-relaxed">
              <p>
                * <strong>The Contrast Hook:</strong> Contrast the messy fragmented agent configurations of today with AgentGrid AI's clean 50ms sync speeds.
              </p>
              <p>
                * <strong>Investor Blueprint:</strong> Keep focus locked on high SaaS profit margins and concrete architectural blueprints to demonstrate launch readiness.
              </p>
            </div>
          </GlassCard>

          <GlassCard glow="none">
            <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-pink-400 flex items-center gap-1.5 mb-3">
              <Award className="w-4 h-4" /> Hackathon Psychology
            </h3>
            <p className="text-xs text-slate-400 font-display leading-relaxed">
              Judges judge based on perceived architectural feasibility and dynamic visual polish. Presenting a working interactive React control deck shifts confidence metrics exponentially in our favor.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
