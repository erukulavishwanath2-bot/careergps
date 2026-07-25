import React from 'react';
import { useApp } from '../context/AppContext';
import { CAREERS_DATA } from '../data/careersData';
import { 
  Zap, 
  Target, 
  MapPin, 
  Award, 
  Flame, 
  ArrowRight, 
  BookOpen, 
  FileText, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2,
  Play
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const { userProfile, setActiveTab, triggerConfetti } = useApp();

  const targetCareer = CAREERS_DATA.find(c => c.id === userProfile.targetCareerId) || CAREERS_DATA[0];
  const totalRoadmapNodes = targetCareer.roadmapNodes.length;
  const completedNodesCount = userProfile.unlockedRoadmapSteps.length;
  const progressPercent = Math.round((completedNodesCount / Math.max(totalRoadmapNodes, 1)) * 100);

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Hero Welcome Banner */}
      <div className="glass-panel" style={{
        padding: '32px',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(139, 92, 246, 0.15) 100%)',
        border: '1px solid rgba(99, 102, 241, 0.25)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        <div style={{ maxWidth: '680px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge badge-primary">
              <Sparkles size={12} /> Career GPS Platform
            </span>
            <span className="badge badge-emerald">
              <Flame size={12} fill="#10b981" /> {userProfile.streakDays} Day Learning Streak
            </span>
          </div>

          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '10px', lineHeight: 1.2 }}>
            Welcome back, <span className="gradient-text">{userProfile.name}</span>! 🎯
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.6 }}>
            You are progressing toward becoming a <strong>{targetCareer.title}</strong>. Your current profile match is <strong>96%</strong>.
          </p>

          <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActiveTab('roadmap')} 
              className="btn-primary"
            >
              <span>Continue Roadmap Timeline</span>
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => setActiveTab('self-discovery')} 
              className="btn-secondary"
            >
              <span>Take Self-Discovery Assessment</span>
            </button>
          </div>
        </div>

        {/* Level Radial Card */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.6)',
          border: '1px solid var(--border-glass)',
          borderRadius: '20px',
          padding: '24px 28px',
          textAlign: 'center',
          minWidth: '220px'
        }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Current Level
          </div>
          <div style={{ fontSize: '3rem', fontWeight: 800, color: '#818cf8', fontFamily: 'var(--font-heading)' }}>
            Lvl {userProfile.level}
          </div>
          <div style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 600, marginTop: '-4px' }}>
            {userProfile.xp} XP Earned
          </div>

          <div style={{ marginTop: '12px' }} className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${(userProfile.xp % 200) / 2}%` }} />
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)', marginTop: '6px' }}>
            {200 - (userProfile.xp % 200)} XP to Level {userProfile.level + 1}
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid-4">
        {/* Metric 1 */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Target Goal</span>
            <Target size={20} color="#818cf8" />
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '8px', color: '#fff' }}>
            {targetCareer.title}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: 600, marginTop: '4px' }}>
            Salary: {targetCareer.salaryRange.mid}
          </div>
        </div>

        {/* Metric 2 */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Roadmap Progress</span>
            <TrendingUp size={20} color="#38bdf8" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '4px', color: '#fff' }}>
            {progressPercent}%
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            {completedNodesCount} of {totalRoadmapNodes} milestones done
          </div>
        </div>

        {/* Metric 3 */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Resume ATS Score</span>
            <FileText size={20} color="#fbbf24" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '4px', color: '#fbbf24' }}>
            88 / 100
          </div>
          <div style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: 600, marginTop: '2px' }}>
            Ready for Internships
          </div>
        </div>

        {/* Metric 4 */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Skill Badges</span>
            <Award size={20} color="#f43f5e" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '4px', color: '#fff' }}>
            {userProfile.badges.length} Badges
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Explorer & Logic Master
          </div>
        </div>
      </div>

      {/* Main Grid: Active Target Roadmap & Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        {/* Active Target Career Roadmap Overview */}
        <div className="glass-panel" style={{ padding: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700 }}>🎯 Active Career Roadmap</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Step-by-step milestones to land your first role as {targetCareer.title}.
              </p>
            </div>
            <button 
              onClick={() => setActiveTab('roadmap')} 
              className="btn-secondary"
              style={{ fontSize: '0.82rem', padding: '6px 14px' }}
            >
              Full Interactive View
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {targetCareer.roadmapNodes.map((node, index) => {
              const isDone = userProfile.unlockedRoadmapSteps.includes(node.id);
              return (
                <div 
                  key={node.id}
                  style={{
                    background: isDone ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                    border: isDone ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-glass)',
                    borderRadius: '14px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: isDone ? 'var(--grad-emerald)' : 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      color: isDone ? '#fff' : 'var(--text-muted)'
                    }}>
                      {isDone ? <CheckCircle2 size={20} /> : index + 1}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#818cf8', fontWeight: 700, textTransform: 'uppercase' }}>
                        {node.stage} • {node.estimatedDuration}
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
                        {node.title}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {node.description}
                      </div>
                    </div>
                  </div>

                  <span className={`badge ${isDone ? 'badge-emerald' : 'badge-primary'}`}>
                    {isDone ? 'Completed' : 'Next Up'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar: Recommended Next Actions & Badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Quick Actions Card */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap size={18} color="#f59e0b" /> Recommended Next Steps
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div 
                onClick={() => setActiveTab('learning')}
                className="glass-card-interactive"
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-glass)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ background: 'rgba(99, 102, 241, 0.2)', padding: '10px', borderRadius: '10px', color: '#818cf8' }}>
                  <BookOpen size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>Python for AI & Data</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>+150 XP • Skill Quiz Ready</div>
                </div>
              </div>

              <div 
                onClick={() => setActiveTab('resume-builder')}
                className="glass-card-interactive"
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-glass)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ background: 'rgba(6, 182, 212, 0.2)', padding: '10px', borderRadius: '10px', color: '#38bdf8' }}>
                  <FileText size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>AI Resume Audit</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Optimize project bullet points</div>
                </div>
              </div>

              <div 
                onClick={() => setActiveTab('interview-coach')}
                className="glass-card-interactive"
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-glass)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '10px', borderRadius: '10px', color: '#fbbf24' }}>
                  <Sparkles size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>AI Mock Interview</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Practice STAR framework answers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Badges Earned */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={18} color="#818cf8" /> Badges & Accomplishments
            </h3>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {userProfile.badges.map(b => (
                <div 
                  key={b.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '14px',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    flex: '1 1 calc(50% - 6px)'
                  }}
                >
                  <div style={{ fontSize: '1.8rem' }}>{b.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>{b.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{b.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
