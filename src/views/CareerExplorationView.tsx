import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CAREERS_DATA, CAREER_CATEGORIES } from '../data/careersData';
import { CareerItem } from '../types';
import { 
  Search, 
  TrendingUp, 
  DollarSign, 
  GraduationCap, 
  Map, 
  Play, 
  X, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const CareerExplorationView: React.FC = () => {
  const { userProfile, setUserProfile, setActiveTab, showNotification } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalCareer, setActiveModalCareer] = useState<CareerItem | null>(null);

  const filteredCareers = CAREERS_DATA.filter(career => {
    const matchesCategory = selectedCategory === 'All' || career.category === selectedCategory;
    const matchesSearch = career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          career.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          career.coreSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const setAsTargetCareer = (career: CareerItem) => {
    setUserProfile(prev => ({ ...prev, targetCareerId: career.id }));
    showNotification(`🎯 Target Career updated to ${career.title}!`, 'success');
    setActiveModalCareer(null);
    setActiveTab('roadmap');
  };

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Banner */}
      <div className="glass-panel" style={{
        padding: '28px 32px',
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)',
        border: '1px solid rgba(6, 182, 212, 0.25)'
      }}>
        <span className="badge badge-cyan" style={{ marginBottom: '8px' }}>
          <Search size={12} /> Phase 2: Career Exploration
        </span>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
          Discover High-Growth & Emerging Careers 🔍
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '680px' }}>
          Explore salary benchmarks, future demand forecasts, required degrees, and day-in-the-life walkthroughs across 15+ industries.
        </p>

        {/* Search Bar */}
        <div style={{ marginTop: '20px', maxWidth: '580px', position: 'relative' }}>
          <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by career title, skill (Python, Cyber, Design, Law)..."
            style={{
              width: '100%',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-glass-glow)',
              borderRadius: '14px',
              padding: '12px 16px 12px 46px',
              color: '#fff',
              fontSize: '0.92rem',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {CAREER_CATEGORIES.map(cat => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: isActive ? '1px solid #38bdf8' : '1px solid var(--border-glass)',
                background: isActive ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                color: isActive ? '#38bdf8' : 'var(--text-muted)',
                fontSize: '0.85rem',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Career Cards Grid */}
      <div className="grid-3">
        {filteredCareers.map(career => {
          const isTarget = userProfile.targetCareerId === career.id;
          return (
            <div
              key={career.id}
              className="glass-panel glass-card-interactive"
              onClick={() => setActiveModalCareer(career)}
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: isTarget ? '1px solid #818cf8' : '1px solid var(--border-glass)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="badge badge-primary">{career.category}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: '#34d399', fontWeight: 700 }}>
                    <TrendingUp size={14} /> Demand: {career.futureDemandScore}%
                  </div>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                  {career.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px' }}>
                  {career.tagline}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#fbbf24' }}>
                    <DollarSign size={15} /> <span>Mid Salary: <strong>{career.salaryRange.mid}</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <GraduationCap size={15} /> <span>{career.requiredDegrees[0]}</span>
                  </div>
                </div>

                {/* Skills tags preview */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {career.coreSkills.slice(0, 3).map((skill, i) => (
                    <span key={i} style={{
                      fontSize: '0.72rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      color: 'var(--text-subtle)'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid var(--border-glass)' }}>
                <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 600 }}>
                  View Roadmap Details
                </span>
                <ArrowRight size={16} color="#38bdf8" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Detail for Career */}
      {activeModalCareer && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(12px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div className="glass-panel animate-slide-up" style={{
            maxWidth: '780px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '32px',
            position: 'relative',
            background: 'rgba(15, 23, 42, 0.96)',
            border: '1px solid var(--border-glass-glow)'
          }}>
            <button
              onClick={() => setActiveModalCareer(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#fff',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            <span className="badge badge-primary" style={{ marginBottom: '10px' }}>
              {activeModalCareer.category}
            </span>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              {activeModalCareer.title}
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              {activeModalCareer.description}
            </p>

            {/* Metrics */}
            <div className="grid-3" style={{ marginBottom: '24px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Entry Level Salary</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#34d399' }}>{activeModalCareer.salaryRange.entry}</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Senior Level Salary</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fbbf24' }}>{activeModalCareer.salaryRange.senior}</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Future Demand</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8' }}>{activeModalCareer.futureDemand} ({activeModalCareer.futureDemandScore}%)</div>
              </div>
            </div>

            {/* Skills Required */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px' }}>Core Required Skills</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {activeModalCareer.coreSkills.map((skill, i) => (
                  <span key={i} className="badge badge-cyan">{skill}</span>
                ))}
              </div>
            </div>

            {/* Day in the Life */}
            <div style={{ marginBottom: '24px', background: 'rgba(255, 255, 255, 0.02)', padding: '18px', borderRadius: '14px', border: '1px solid var(--border-glass)' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px', color: '#818cf8' }}>
                ☀️ Day in the Life Walkthrough
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {activeModalCareer.dayInTheLife}
              </p>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setAsTargetCareer(activeModalCareer)}
                className="btn-primary"
                style={{ padding: '12px 24px' }}
              >
                <Map size={18} />
                <span>Select as My Career Roadmap Goal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
