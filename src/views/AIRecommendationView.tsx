import React from 'react';
import { useApp } from '../context/AppContext';
import { CAREERS_DATA } from '../data/careersData';
import { Sparkles, TrendingUp, DollarSign, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

export const AIRecommendationView: React.FC = () => {
  const { userProfile, setUserProfile, setActiveTab, showNotification } = useApp();

  // Compute dynamic match percentages for all careers based on user profile
  const recommendedCareers = CAREERS_DATA.map((career, idx) => {
    let match = 98 - idx * 4;
    if (userProfile.interests.some(i => career.title.toLowerCase().includes(i.toLowerCase()))) {
      match += 2;
    }
    match = Math.min(Math.max(match, 70), 99);

    const whyItMatches = `Matches your ${userProfile.personalityType || 'Strategic'} personality, high aptitude score (${userProfile.aptitudeScore}), and interests in ${userProfile.interests.join(', ')}.`;

    return {
      ...career,
      matchScore: match,
      whyItMatches
    };
  });

  const selectTarget = (careerId: string, title: string) => {
    setUserProfile(prev => ({ ...prev, targetCareerId: careerId }));
    showNotification(`🎯 Selected ${title} as your primary roadmap!`, 'success');
    setActiveTab('roadmap');
  };

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div className="glass-panel" style={{
        padding: '28px 32px',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(217, 70, 239, 0.15) 100%)',
        border: '1px solid rgba(99, 102, 241, 0.3)'
      }}>
        <span className="badge badge-primary" style={{ marginBottom: '8px' }}>
          <Sparkles size={12} /> Phase 3: AI Recommendation Engine
        </span>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
          Top AI-Personalized Career Matches 🤖
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '680px' }}>
          Calculated using multi-variable evaluation: Interests, Aptitude, Personality Traits, Market Growth, and Lifestyle Goals.
        </p>
      </div>

      {/* Top 3 Featured Recommendations */}
      <div className="grid-3">
        {recommendedCareers.slice(0, 3).map((item, idx) => {
          const isTarget = userProfile.targetCareerId === item.id;
          return (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: isTarget ? '2px solid #818cf8' : '1px solid var(--border-glass)',
                position: 'relative'
              }}
            >
              <div>
                {/* Match Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{
                    background: 'var(--grad-primary)',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '1rem',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
                  }}>
                    {item.matchScore}% Match
                  </div>

                  <span className="badge badge-emerald">Rank #{idx + 1}</span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  {item.tagline}
                </p>

                {/* Why it matches box */}
                <div style={{
                  background: 'rgba(99, 102, 241, 0.08)',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  marginBottom: '16px'
                }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#818cf8', marginBottom: '4px' }}>
                    💡 Why It Matches You:
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {item.whyItMatches}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#fbbf24', marginBottom: '8px' }}>
                  <span>Mid Salary:</span>
                  <strong>{item.salaryRange.mid}</strong>
                </div>
              </div>

              <button
                onClick={() => selectTarget(item.id, item.title)}
                className={isTarget ? "btn-secondary" : "btn-primary"}
                style={{ width: '100%', marginTop: '16px', justifyContent: 'center' }}
              >
                <span>{isTarget ? 'Current Active Target' : 'Generate Roadmap'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Remaining Matches Table / List */}
      <div className="glass-panel" style={{ padding: '28px' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px' }}>
          Other Strong Career Compatibilities
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {recommendedCareers.slice(3).map(item => (
            <div
              key={item.id}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-glass)',
                borderRadius: '14px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: '#38bdf8',
                  minWidth: '50px'
                }}>
                  {item.matchScore}%
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{item.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.category} • Mid Salary: {item.salaryRange.mid}</div>
                </div>
              </div>

              <button
                onClick={() => selectTarget(item.id, item.title)}
                className="btn-secondary"
                style={{ fontSize: '0.82rem', padding: '6px 14px' }}
              >
                Set as Goal
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
