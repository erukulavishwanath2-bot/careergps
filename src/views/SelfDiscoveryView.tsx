import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ASSESSMENT_SECTIONS } from '../data/assessmentQuestions';
import { 
  UserCheck, 
  Sparkles, 
  Brain, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw,
  Zap,
  Target
} from 'lucide-react';

export const SelfDiscoveryView: React.FC = () => {
  const { userProfile, setUserProfile, addXP, setActiveTab, triggerConfetti } = useApp();

  const [currentSectionIdx, setCurrentSectionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(userProfile.completedAssessment);

  const section = ASSESSMENT_SECTIONS[currentSectionIdx];
  const totalQuestions = ASSESSMENT_SECTIONS.reduce((acc, sec) => acc + sec.questions.length, 0);
  const answeredCount = Object.keys(selectedAnswers).length;

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleNextSection = () => {
    if (currentSectionIdx < ASSESSMENT_SECTIONS.length - 1) {
      setCurrentSectionIdx(prev => prev + 1);
    } else {
      // Calculate assessment result
      finishAssessment();
    }
  };

  const finishAssessment = () => {
    setIsCompleted(true);
    triggerConfetti();

    setUserProfile(prev => ({
      ...prev,
      completedAssessment: true,
      personalityType: 'Strategic Innovator (INTJ-A)',
      strengths: ['Analytical Problem Solving', 'Systems Thinking', 'Creative Design'],
      weaknesses: ['Public Speaking', 'Over-engineering solutions'],
      aptitudeScore: 92,
      learningStyle: 'Visual & Kinesthetic',
      values: ['Intellectual Growth', 'Financial Independence', 'High Impact'],
      badges: prev.badges.some(b => b.id === 'b-self') 
        ? prev.badges 
        : [...prev.badges, { id: 'b-self', name: 'Self-Discovery Master', description: 'Completed full multi-dimensional profile diagnostic', icon: '🧬', unlockedAt: 'Just Now' }]
    }));

    addXP(200, 'Completed Self-Discovery Assessment!');
  };

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Banner */}
      <div className="glass-panel" style={{
        padding: '28px 32px',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(99, 102, 241, 0.1) 100%)',
        border: '1px solid rgba(139, 92, 246, 0.25)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <span className="badge badge-primary" style={{ marginBottom: '8px' }}>
            <UserCheck size={12} /> Phase 1: Self Discovery
          </span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
            Know Yourself Before Choosing Your Path 🧬
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '640px' }}>
            Discover your core personality type, Holland Code interests, logical aptitude, and ideal working values.
          </p>
        </div>

        {isCompleted && (
          <button 
            onClick={() => setIsCompleted(false)} 
            className="btn-secondary"
            style={{ fontSize: '0.85rem' }}
          >
            <RotateCcw size={16} /> Retake Assessment
          </button>
        )}
      </div>

      {!isCompleted ? (
        /* Quiz Active Runner */
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '32px' }}>
            {/* Section Progress Tabs */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', overflowX: 'auto' }}>
              {ASSESSMENT_SECTIONS.map((sec, idx) => (
                <button
                  key={sec.id}
                  onClick={() => setCurrentSectionIdx(idx)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '10px',
                    border: 'none',
                    background: currentSectionIdx === idx ? 'var(--grad-primary)' : 'rgba(255, 255, 255, 0.05)',
                    color: currentSectionIdx === idx ? '#fff' : 'var(--text-muted)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {idx + 1}. {sec.title.split(' ')[0]}
                </button>
              ))}
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '6px' }}>
              {section.title}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '28px' }}>
              {section.description}
            </p>

            {/* Questions List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {section.questions.map((q, qIdx) => (
                <div key={q.id} style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-glass)',
                  borderRadius: '16px',
                  padding: '20px'
                }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '14px', color: '#fff' }}>
                    Q{qIdx + 1}: {q.question}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedAnswers[q.id] === optIdx;
                      return (
                        <div
                          key={optIdx}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          style={{
                            padding: '14px 18px',
                            borderRadius: '12px',
                            border: isSelected ? '1px solid #818cf8' : '1px solid var(--border-glass)',
                            background: isSelected ? 'rgba(99, 102, 241, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                            color: isSelected ? '#ffffff' : 'var(--text-muted)',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: isSelected ? 600 : 400,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <div style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            border: isSelected ? '6px solid #6366f1' : '2px solid var(--text-subtle)',
                            background: '#fff'
                          }} />
                          <span>{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Section {currentSectionIdx + 1} of {ASSESSMENT_SECTIONS.length}
              </div>

              <button
                onClick={handleNextSection}
                className="btn-primary"
                style={{ padding: '12px 28px' }}
              >
                <span>{currentSectionIdx === ASSESSMENT_SECTIONS.length - 1 ? 'Generate My Profile' : 'Next Section'}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Assessment Progress Sidebar */}
          <div className="glass-panel" style={{ padding: '24px', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Brain size={18} color="#818cf8" /> Assessment Progress
            </h3>

            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#38bdf8' }}>
              {Math.round((answeredCount / totalQuestions) * 100)}%
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              {answeredCount} of {totalQuestions} questions answered
            </div>

            <div className="progress-bar-bg" style={{ marginBottom: '20px' }}>
              <div className="progress-bar-fill" style={{ width: `${(answeredCount / totalQuestions) * 100}%` }} />
            </div>

            <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#818cf8', marginBottom: '4px' }}>
                🎁 Reward on Completion
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Earn +200 XP and unlock your personalized AI Career Matches!
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Generated Student Profile Card Output */
        <div className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <span className="badge badge-emerald" style={{ marginBottom: '6px' }}>
                <CheckCircle2 size={12} /> Profile Generated
              </span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>
                Your Comprehensive Student Profile
              </h2>
            </div>

            <button 
              onClick={() => setActiveTab('recommendations')} 
              className="btn-primary"
            >
              <span>View Top 10 Career Matches</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid-3" style={{ marginBottom: '32px' }}>
            {/* Card 1: Personality */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-glass)',
              borderRadius: '18px',
              padding: '24px'
            }}>
              <div style={{ fontSize: '0.8rem', color: '#818cf8', fontWeight: 700, textTransform: 'uppercase' }}>
                Personality Type
              </div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '4px', color: '#fff' }}>
                {userProfile.personalityType}
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                You excel at logical architecture, strategic planning, and building autonomous technical systems.
              </p>
            </div>

            {/* Card 2: Strengths */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-glass)',
              borderRadius: '18px',
              padding: '24px'
            }}>
              <div style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: 700, textTransform: 'uppercase' }}>
                Core Strengths
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                {userProfile.strengths.map((s, i) => (
                  <span key={i} className="badge badge-emerald">{s}</span>
                ))}
              </div>
            </div>

            {/* Card 3: Aptitude & Learning */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-glass)',
              borderRadius: '18px',
              padding: '24px'
            }}>
              <div style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase' }}>
                Aptitude & Learning Style
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '4px', color: '#fbbf24' }}>
                {userProfile.aptitudeScore} / 100
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Style: <strong>{userProfile.learningStyle}</strong>
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '24px', borderRadius: '18px', border: '1px solid rgba(99, 102, 241, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Ready to explore your best career fits?</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Our AI recommendation engine has computed your match percentages across 15+ high-growth industries.
              </p>
            </div>
            <button 
              onClick={() => setActiveTab('recommendations')}
              className="btn-primary"
            >
              <span>Explore AI Career Matches</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
