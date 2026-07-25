import React from 'react';
import { useApp } from '../context/AppContext';
import { NavTab } from '../types';
import { 
  Compass, 
  Map, 
  BookOpen, 
  FileText, 
  Briefcase, 
  Zap, 
  Flame, 
  Award, 
  Sun, 
  Moon, 
  Bot, 
  UserCheck, 
  Sparkles,
  Search,
  MessageSquareQuote
} from 'lucide-react';

interface NavbarProps {
  onToggleAIChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleAIChat }) => {
  const { activeTab, setActiveTab, userProfile, theme, toggleTheme } = useApp();

  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <Zap size={18} /> },
    { id: 'self-discovery', label: 'Self-Discovery', icon: <UserCheck size={18} /> },
    { id: 'exploration', label: 'Careers Library', icon: <Search size={18} /> },
    { id: 'recommendations', label: 'AI Matches', icon: <Sparkles size={18} /> },
    { id: 'roadmap', label: 'Roadmap', icon: <Map size={18} /> },
    { id: 'learning', label: 'Learning Hub', icon: <BookOpen size={18} /> },
    { id: 'resume-builder', label: 'Resume Builder', icon: <FileText size={18} /> },
    { id: 'interview-coach', label: 'AI Interview', icon: <MessageSquareQuote size={18} /> },
    { id: 'opportunities', label: 'Opportunities', icon: <Briefcase size={18} /> }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(9, 13, 22, 0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-glass)'
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        {/* Logo */}
        <div 
          onClick={() => setActiveTab('dashboard')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'var(--grad-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <Compass size={24} color="#ffffff" />
          </div>
          <div>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '1.35rem', 
              lineHeight: 1.1,
              letterSpacing: '-0.03em'
            }}>
              CAREER <span className="gradient-text">GPS</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Step-by-Step Guidance
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          background: 'rgba(255, 255, 255, 0.03)',
          padding: '4px',
          borderRadius: '14px',
          border: '1px solid var(--border-glass)',
          overflowX: 'auto'
        }}>
          {navItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  border: 'none',
                  background: isActive ? 'var(--grad-primary)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '0.86rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 14px rgba(99, 102, 241, 0.35)' : 'none'
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Gamification & Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Streak Indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            color: '#fbbf24',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '0.82rem',
            fontWeight: 700
          }}>
            <Flame size={16} fill="#fbbf24" color="#fbbf24" />
            <span>{userProfile.streakDays} Days</span>
          </div>

          {/* XP & Level Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            padding: '6px 14px',
            borderRadius: '20px'
          }}>
            <Award size={16} color="#818cf8" />
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#818cf8' }}>
              Lvl {userProfile.level} • {userProfile.xp} XP
            </div>
          </div>

          {/* AI Floating Chat Toggle */}
          <button
            onClick={onToggleAIChat}
            className="btn-primary"
            style={{
              padding: '8px 14px',
              borderRadius: '12px',
              fontSize: '0.85rem'
            }}
          >
            <Bot size={18} />
            <span>AI Counselor</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            title="Toggle Dark/Light Mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};
