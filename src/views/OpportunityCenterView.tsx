import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { OPPORTUNITIES_DATA } from '../data/opportunitiesData';
import { 
  Briefcase, 
  Search, 
  Bookmark, 
  ExternalLink, 
  Calendar, 
  DollarSign, 
  Award,
  Sparkles
} from 'lucide-react';

export const OpportunityCenterView: React.FC = () => {
  const { userProfile, toggleSavedOpportunity } = useApp();

  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const types = ['All', 'Scholarship', 'Internship', 'Hackathon', 'Bootcamp', 'Fellowship'];

  const filteredOpps = OPPORTUNITIES_DATA.filter(item => {
    const matchesType = selectedType === 'All' || item.type === selectedType;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div className="glass-panel" style={{
        padding: '28px 32px',
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.18) 0%, rgba(16, 185, 129, 0.12) 100%)',
        border: '1px solid rgba(6, 182, 212, 0.3)'
      }}>
        <span className="badge badge-cyan" style={{ marginBottom: '8px' }}>
          <Briefcase size={12} /> Phase 9: Opportunity Center
        </span>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
          Scholarships, Internships & Global Hackathons 🌐
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '680px' }}>
          Connect with high-value student opportunities, tech fellowships, incubators, and fully funded grants.
        </p>

        {/* Search */}
        <div style={{ marginTop: '20px', maxWidth: '540px', position: 'relative' }}>
          <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, organization, tag..."
            style={{
              width: '100%',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-glass)',
              borderRadius: '12px',
              padding: '12px 16px 12px 44px',
              color: '#fff',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Type Filters */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }}>
        {types.map(t => {
          const isActive = selectedType === t;
          return (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: isActive ? '1px solid #38bdf8' : '1px solid var(--border-glass)',
                background: isActive ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                color: isActive ? '#38bdf8' : 'var(--text-muted)',
                fontSize: '0.85rem',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Opportunity Cards Grid */}
      <div className="grid-2">
        {filteredOpps.map(opp => {
          const isSaved = userProfile.savedOpportunities.includes(opp.id);
          return (
            <div
              key={opp.id}
              className="glass-panel"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: opp.isFeatured ? '1px solid #818cf8' : '1px solid var(--border-glass)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span className="badge badge-cyan">{opp.type}</span>
                    {opp.isFeatured && <span className="badge badge-amber">★ Featured</span>}
                  </div>

                  <button
                    onClick={() => toggleSavedOpportunity(opp.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: isSaved ? '#fbbf24' : 'var(--text-subtle)',
                      cursor: 'pointer'
                    }}
                    title={isSaved ? 'Remove from saved' : 'Save opportunity'}
                  >
                    <Bookmark size={20} fill={isSaved ? '#fbbf24' : 'none'} />
                  </button>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
                  {opp.title}
                </h3>
                <div style={{ fontSize: '0.86rem', color: '#818cf8', fontWeight: 600, marginBottom: '12px' }}>
                  {opp.organization} • {opp.location}
                </div>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.5' }}>
                  {opp.description}
                </p>

                <div style={{ display: 'flex', gap: '16px', fontSize: '0.82rem', color: '#34d399', fontWeight: 600, marginBottom: '16px' }}>
                  <span><DollarSign size={14} style={{ display: 'inline' }} /> {opp.stipendOrReward}</span>
                  <span style={{ color: '#fbbf24' }}><Calendar size={14} style={{ display: 'inline' }} /> Deadline: {opp.deadline}</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {opp.tags.map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.72rem', background: 'rgba(255, 255, 255, 0.05)', padding: '3px 8px', borderRadius: '6px', color: 'var(--text-subtle)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'flex-end' }}>
                <a
                  href={opp.applyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.84rem', padding: '8px 16px', textDecoration: 'none' }}
                >
                  <span>Apply Now</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
