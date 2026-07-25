import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CAREERS_DATA } from '../data/careersData';
import { 
  Map, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  ExternalLink, 
  Sparkles, 
  ChevronDown,
  Award,
  Zap
} from 'lucide-react';

export const RoadmapView: React.FC = () => {
  const { userProfile, setUserProfile, toggleRoadmapStep, addXP } = useApp();

  const selectedCareer = CAREERS_DATA.find(c => c.id === userProfile.targetCareerId) || CAREERS_DATA[0];

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Banner */}
      <div className="glass-panel" style={{
        padding: '28px 32px',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(6, 182, 212, 0.12) 100%)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <span className="badge badge-primary" style={{ marginBottom: '8px' }}>
            <Map size={12} /> Phase 4: Step-by-Step Career Roadmap
          </span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
            Interactive Master Roadmap for <span className="gradient-text">{selectedCareer.title}</span> 🛣️
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '680px' }}>
            Follow this clear step-by-step path from school stream selection to landing your first job and achieving career growth.
          </p>
        </div>

        {/* Career Selector Dropdown */}
        <div style={{ position: 'relative' }}>
          <select
            value={selectedCareer.id}
            onChange={(e) => setUserProfile(prev => ({ ...prev, targetCareerId: e.target.value }))}
            style={{
              background: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid var(--border-glass-glow)',
              borderRadius: '12px',
              padding: '10px 16px',
              color: '#fff',
              fontSize: '0.9rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {CAREERS_DATA.map(c => (
              <option key={c.id} value={c.id} style={{ background: '#0f172a', color: '#fff' }}>
                Roadmap: {c.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Timeline Steps Stack */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Vertical Connecting Line */}
        <div style={{
          position: 'absolute',
          left: '28px',
          top: '32px',
          bottom: '32px',
          width: '4px',
          background: 'linear-gradient(180deg, #6366f1 0%, #06b6d4 100%)',
          borderRadius: '4px',
          zIndex: 1
        }} />

        {selectedCareer.roadmapNodes.map((node, index) => {
          const isDone = userProfile.unlockedRoadmapSteps.includes(node.id);
          return (
            <div
              key={node.id}
              className="glass-panel"
              style={{
                marginLeft: '60px',
                padding: '28px',
                position: 'relative',
                border: isDone ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-glass)',
                background: isDone ? 'rgba(16, 185, 129, 0.04)' : 'var(--bg-card)'
              }}
            >
              {/* Timeline Node Badge Icon on line */}
              <div
                onClick={() => toggleRoadmapStep(node.id)}
                style={{
                  position: 'absolute',
                  left: '-60px',
                  top: '24px',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: isDone ? 'var(--grad-emerald)' : 'var(--grad-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  cursor: 'pointer',
                  boxShadow: '0 0 16px rgba(99, 102, 241, 0.5)',
                  zIndex: 2,
                  transition: 'all 0.25s ease'
                }}
                title={isDone ? 'Mark as incomplete' : 'Click to complete step & earn +50 XP'}
              >
                {isDone ? <CheckCircle2 size={24} /> : <span style={{ fontWeight: 800 }}>{index + 1}</span>}
              </div>

              {/* Node Content */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span className="badge badge-cyan">{node.stage}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {node.estimatedDuration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                    {node.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                    {node.description}
                  </p>
                </div>

                <button
                  onClick={() => toggleRoadmapStep(node.id)}
                  className={isDone ? "btn-secondary" : "btn-primary"}
                  style={{ fontSize: '0.84rem', padding: '8px 16px' }}
                >
                  {isDone ? '✓ Completed (+50 XP)' : 'Mark Step Complete'}
                </button>
              </div>

              {/* Exams section if present */}
              {node.recommendedExams && (
                <div style={{ marginBottom: '16px', background: 'rgba(255, 255, 255, 0.02)', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fbbf24', marginBottom: '6px' }}>
                    📝 Targeted Entrance Exams & Certifications:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {node.recommendedExams.map((exam, i) => (
                      <span key={i} className="badge badge-amber">{exam}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommended Resources */}
              {node.resources && node.resources.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#818cf8', marginBottom: '8px' }}>
                    📚 Curated Learning Resources:
                  </div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {node.resources.map((res, i) => (
                      <a
                        key={i}
                        href={res.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-glass)',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          color: '#38bdf8',
                          fontSize: '0.8rem',
                          textDecoration: 'none'
                        }}
                      >
                        <BookOpen size={14} />
                        <span>{res.title}</span>
                        <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
