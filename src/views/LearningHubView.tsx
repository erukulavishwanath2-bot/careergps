import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LEARNING_COURSES } from '../data/learningData';
import { LearningCourse } from '../types';
import { 
  BookOpen, 
  Award, 
  Clock, 
  CheckCircle2, 
  X, 
  ArrowRight, 
  Zap, 
  HelpCircle,
  Sparkles
} from 'lucide-react';

export const LearningHubView: React.FC = () => {
  const { userProfile, setUserProfile, addXP, showNotification, triggerConfetti } = useApp();

  const [activeQuizCourse, setActiveQuizCourse] = useState<LearningCourse | null>(null);
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [selectedOptIdx, setSelectedOptIdx] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);

  const startQuiz = (course: LearningCourse) => {
    setActiveQuizCourse(course);
    setCurrentQuizIdx(0);
    setSelectedOptIdx(null);
    setIsAnswerSubmitted(false);
    setScoreCount(0);
  };

  const handleConfirmAnswer = () => {
    if (selectedOptIdx === null || !activeQuizCourse) return;
    setIsAnswerSubmitted(true);

    const question = activeQuizCourse.quiz[currentQuizIdx];
    if (question.options[selectedOptIdx]?.isCorrect) {
      setScoreCount(prev => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    if (!activeQuizCourse) return;

    if (currentQuizIdx < activeQuizCourse.quiz.length - 1) {
      setCurrentQuizIdx(prev => prev + 1);
      setSelectedOptIdx(null);
      setIsAnswerSubmitted(false);
    } else {
      // Quiz complete!
      triggerConfetti();
      addXP(activeQuizCourse.xpReward, `Passed ${activeQuizCourse.title} Skill Quiz!`);
      showNotification(`🎉 Quiz Mastered! Scored ${scoreCount + 1}/${activeQuizCourse.quiz.length}`, 'success');

      setUserProfile(prev => ({
        ...prev,
        completedQuizzes: [...prev.completedQuizzes, activeQuizCourse.id],
        badges: prev.badges.some(b => b.id === `badge-${activeQuizCourse.id}`)
          ? prev.badges
          : [...prev.badges, {
              id: `badge-${activeQuizCourse.id}`,
              name: `${activeQuizCourse.title.split(' ')[0]} Master`,
              description: `Completed skill assessment for ${activeQuizCourse.title}`,
              icon: '⚡',
              unlockedAt: 'Just Now'
            }]
      }));

      setActiveQuizCourse(null);
    }
  };

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div className="glass-panel" style={{
        padding: '28px 32px',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.12) 100%)',
        border: '1px solid rgba(16, 185, 129, 0.25)'
      }}>
        <span className="badge badge-emerald" style={{ marginBottom: '8px' }}>
          <BookOpen size={12} /> Phase 5 & 6: Learning Hub & Skill Assessments
        </span>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
          Build Industry-Ready Skills & Track Progress 📚
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '680px' }}>
          Take practical micro-courses, test your knowledge with interactive skill quizzes, earn XP rewards, and unlock skill badges.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid-2">
        {LEARNING_COURSES.map(course => {
          const isPassed = userProfile.completedQuizzes.includes(course.id);
          return (
            <div
              key={course.id}
              className="glass-panel"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: isPassed ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-glass)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="badge badge-cyan">{course.category}</span>
                  <span className="badge badge-amber">+{course.xpReward} XP</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                  {course.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.5' }}>
                  {course.description}
                </p>

                <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'var(--text-subtle)', marginBottom: '16px' }}>
                  <span><Clock size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> {course.duration}</span>
                  <span>Level: {course.level}</span>
                  <span>{course.provider}</span>
                </div>
              </div>

              <button
                onClick={() => startQuiz(course)}
                className={isPassed ? "btn-secondary" : "btn-primary"}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>{isPassed ? '✓ Passed (Retake Quiz)' : 'Start Skill Quiz'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Quiz Modal Runner */}
      {activeQuizCourse && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(16px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div className="glass-panel animate-slide-up" style={{
            maxWidth: '640px',
            width: '100%',
            padding: '32px',
            position: 'relative',
            background: 'rgba(15, 23, 42, 0.98)',
            border: '1px solid var(--border-glass-glow)'
          }}>
            <button
              onClick={() => setActiveQuizCourse(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#fff',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            <span className="badge badge-emerald" style={{ marginBottom: '8px' }}>
              Skill Quiz • Question {currentQuizIdx + 1} of {activeQuizCourse.quiz.length}
            </span>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
              {activeQuizCourse.quiz[currentQuizIdx].question}
            </h3>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {activeQuizCourse.quiz[currentQuizIdx].options.map((opt, i) => {
                const isSelected = selectedOptIdx === i;
                let bg = 'rgba(255, 255, 255, 0.04)';
                let border = '1px solid var(--border-glass)';

                if (isSelected) {
                  bg = 'rgba(99, 102, 241, 0.2)';
                  border = '1px solid #818cf8';
                }

                if (isAnswerSubmitted) {
                  if (opt.isCorrect) {
                    bg = 'rgba(16, 185, 129, 0.25)';
                    border = '1px solid #34d399';
                  } else if (isSelected) {
                    bg = 'rgba(244, 63, 94, 0.25)';
                    border = '1px solid #f43f5e';
                  }
                }

                return (
                  <div
                    key={i}
                    onClick={() => !isAnswerSubmitted && setSelectedOptIdx(i)}
                    style={{
                      padding: '14px 18px',
                      borderRadius: '12px',
                      background: bg,
                      border: border,
                      color: '#fff',
                      fontSize: '0.9rem',
                      cursor: isAnswerSubmitted ? 'default' : 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {opt.text}
                  </div>
                );
              })}
            </div>

            {/* Explanation box after answer */}
            {isAnswerSubmitted && activeQuizCourse.quiz[currentQuizIdx].options[selectedOptIdx || 0]?.explanation && (
              <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '14px', borderRadius: '12px', marginBottom: '20px', border: '1px solid rgba(99, 102, 241, 0.25)', fontSize: '0.85rem', color: '#a5b4fc' }}>
                💡 <strong>Explanation:</strong> {activeQuizCourse.quiz[currentQuizIdx].options[selectedOptIdx || 0]?.explanation}
              </div>
            )}

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              {!isAnswerSubmitted ? (
                <button
                  disabled={selectedOptIdx === null}
                  onClick={handleConfirmAnswer}
                  className="btn-primary"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuizQuestion}
                  className="btn-primary"
                >
                  <span>{currentQuizIdx === activeQuizCourse.quiz.length - 1 ? 'Finish & Claim XP' : 'Next Question'}</span>
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
