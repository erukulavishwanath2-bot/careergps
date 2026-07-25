import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  MessageSquareQuote, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Bot, 
  User, 
  Volume2, 
  Award,
  Zap
} from 'lucide-react';

export const InterviewCoachView: React.FC = () => {
  const { userProfile, addXP, triggerConfetti } = useApp();

  const [questionIdx, setQuestionIdx] = useState(0);
  const [answerInput, setAnswerInput] = useState('');
  const [feedback, setFeedback] = useState<{ score: number; praise: string; tip: string } | null>(null);

  const mockQuestions = [
    {
      id: 'q1',
      category: 'Behavioral STAR',
      question: 'Tell me about a time you faced a difficult technical bug or project obstacle and how you overcame it.'
    },
    {
      id: 'q2',
      category: 'Technical Concept',
      question: 'Explain the difference between supervised and unsupervised machine learning in simple terms.'
    },
    {
      id: 'q3',
      category: 'Career Vision',
      question: 'Where do you see your technical career in 3 to 5 years, and what skills are you prioritizing right now?'
    }
  ];

  const handleSubmitAnswer = () => {
    if (!answerInput.trim()) return;

    // Simulate AI feedback evaluation
    const score = Math.min(75 + answerInput.length / 5, 98);
    setFeedback({
      score: Math.round(score),
      praise: 'Great structure! You clearly articulated your action steps and outcome.',
      tip: 'Try incorporating quantifiable metrics (e.g. "improved efficiency by 30%") to maximize impact.'
    });

    addXP(50, 'Completed AI Mock Interview Question');
    triggerConfetti();
  };

  const nextQuestion = () => {
    if (questionIdx < mockQuestions.length - 1) {
      setQuestionIdx(prev => prev + 1);
      setAnswerInput('');
      setFeedback(null);
    }
  };

  const currentQ = mockQuestions[questionIdx];

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div className="glass-panel" style={{
        padding: '28px 32px',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.18) 0%, rgba(6, 182, 212, 0.12) 100%)',
        border: '1px solid rgba(139, 92, 246, 0.3)'
      }}>
        <span className="badge badge-primary" style={{ marginBottom: '8px' }}>
          <MessageSquareQuote size={12} /> Phase 8: AI Interview Coach
        </span>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
          Master Behavioral & Technical Mock Interviews 🎙️
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '680px' }}>
          Practice answering real-world company interview questions with instant AI feedback on your structure, confidence, and keyword density.
        </p>
      </div>

      {/* Main Practice Container */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px' }}>
        {/* Question & Answer Box */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          <span className="badge badge-cyan" style={{ marginBottom: '10px' }}>
            {currentQ.category} • Question {questionIdx + 1} of {mockQuestions.length}
          </span>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '20px', lineHeight: '1.4' }}>
            "{currentQ.question}"
          </h2>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
              Your Response (Use STAR format: Situation, Task, Action, Result)
            </label>
            <textarea
              rows={6}
              value={answerInput}
              onChange={(e) => setAnswerInput(e.target.value)}
              placeholder="Type your answer here..."
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-glass-glow)',
                borderRadius: '14px',
                padding: '16px',
                color: '#fff',
                fontSize: '0.92rem',
                outline: 'none',
                lineHeight: '1.6'
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
              Earn +50 XP per answered interview question
            </div>
            <button
              onClick={handleSubmitAnswer}
              className="btn-primary"
              disabled={!answerInput.trim()}
            >
              <Sparkles size={16} />
              <span>Get AI Review</span>
            </button>
          </div>

          {/* AI Feedback Box */}
          {feedback && (
            <div style={{ marginTop: '28px', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '16px', padding: '24px' }} className="animate-slide-up">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, color: '#fff', fontSize: '1.1rem' }}>
                  <Bot size={20} color="#818cf8" /> AI Interview Coach Evaluation
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34d399' }}>
                  Score: {feedback.score} / 100
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: '#34d399', marginBottom: '8px' }}>
                ✅ <strong>Praise:</strong> {feedback.praise}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#fbbf24', marginBottom: '16px' }}>
                💡 <strong>Coaching Tip:</strong> {feedback.tip}
              </p>

              {questionIdx < mockQuestions.length - 1 && (
                <button onClick={nextQuestion} className="btn-secondary" style={{ fontSize: '0.85rem' }}>
                  Next Interview Question →
                </button>
              )}
            </div>
          )}
        </div>

        {/* Sidebar Tips */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={18} color="#fbbf24" /> STAR Framework Guide
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <div><strong style={{ color: '#fff' }}>S — Situation:</strong> Describe the context and background.</div>
            <div><strong style={{ color: '#fff' }}>T — Task:</strong> What was your exact goal or problem?</div>
            <div><strong style={{ color: '#fff' }}>A — Action:</strong> Detail your specific technical contributions.</div>
            <div><strong style={{ color: '#fff' }}>R — Result:</strong> Quantify the positive outcome!</div>
          </div>
        </div>
      </div>
    </div>
  );
};
