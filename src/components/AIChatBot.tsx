import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ChatMessage } from '../types';
import { Bot, Send, X, Sparkles, User, Lightbulb } from 'lucide-react';

interface AIChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChatBot: React.FC<AIChatBotProps> = ({ isOpen, onClose }) => {
  const { userProfile, setActiveTab } = useApp();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'ai',
      text: `Hello ${userProfile.name}! 👋 I am your Career GPS AI Counselor. I've analyzed your profile (${userProfile.personalityType || 'Student'}). What would you like guidance on today?`,
      timestamp: 'Just now',
      quickReplies: [
        'Analyze my skill gap for AI Engineer',
        'Recommend top scholarships for me',
        'How can I improve my resume score?',
        'What entrance exams do I need for CS?'
      ]
    }
  ]);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Generate dynamic intelligent AI response
    setTimeout(() => {
      let aiText = '';
      const lower = query.toLowerCase();

      if (lower.includes('skill gap') || lower.includes('ai engineer')) {
        aiText = `Based on your profile, for **AI & Machine Learning Engineering**, your current strengths in ${userProfile.strengths.join(', ')} give you a solid foundation! \n\n🎯 **Key Skill Gaps to Bridge:**\n1. Deep Learning with PyTorch / TensorFlow\n2. MLOps & Model Deployment (Docker, FastAPI)\n3. Advanced Linear Algebra & Vector Databases\n\nI recommend taking the **Python for Artificial Intelligence** course in our Learning Hub!`;
      } else if (lower.includes('scholarship') || lower.includes('opportunity')) {
        aiText = `Here are 2 top recommended opportunities for you right now:\n\n✨ **Global Future Tech Innovators Scholarship 2026** ($10,000 grant)\n✨ **Google Summer of Code (GSoC) Fellowship** ($3,000+ stipend)\n\nYou can bookmark and apply directly inside the **Opportunity Center** tab!`;
      } else if (lower.includes('resume')) {
        aiText = `To boost your Resume ATS score past 90%:\n1. Quantify your projects (e.g. "Improved algorithm performance by 35%").\n2. Add GitHub project links and key technical keywords (TypeScript, Python, Docker).\n3. Try our **Interactive Resume Builder** tab for real-time ATS optimization!`;
      } else if (lower.includes('exam') || lower.includes('entrance') || lower.includes('cs')) {
        aiText = `For Computer Science & AI pathways, critical exams include:\n• **AP Computer Science A** & Calculus BC (High School)\n• **SAT Math** (Score 750+ target)\n• **National Olympiad in Informatics (IOI)**\n\nCheck out the step-by-step timeline in the **Roadmap** view!`;
      } else {
        aiText = `Great question! As a ${userProfile.gradeLevel}, focusing on building practical projects while keeping your academic GPA strong is the single best strategy. Explore our **Career Library** to see exact salaries, required degrees, and roadmap steps for 10+ career fields!`;
      }

      const aiReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiReply]);
    }, 600);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      width: '420px',
      height: '620px',
      maxWidth: 'calc(100vw - 32px)',
      maxHeight: 'calc(100vh - 48px)',
      zIndex: 1000,
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(24px)',
      border: '1px solid var(--border-glass-glow)',
      borderRadius: '24px',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      animation: 'slideUp 0.3s ease-out'
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 20px',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)',
        borderBottom: '1px solid var(--border-glass)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '12px',
            background: 'var(--grad-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Bot size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>
              AI Career Counselor
            </div>
            <div style={{ fontSize: '0.75rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }} />
              Active & Personalized
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#fff',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1,
        padding: '16px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
      }}>
        {messages.map(msg => {
          const isAI = msg.sender === 'ai';
          return (
            <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', alignItems: isAI ? 'flex-start' : 'flex-end' }}>
              <div style={{
                display: 'flex',
                gap: '8px',
                maxWidth: '88%',
                flexDirection: isAI ? 'row' : 'row-reverse'
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: isAI ? 'var(--grad-primary)' : 'rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {isAI ? <Sparkles size={14} color="#fff" /> : <User size={14} color="#fff" />}
                </div>
                <div style={{
                  background: isAI ? 'rgba(30, 41, 59, 0.9)' : 'var(--grad-primary)',
                  color: '#fff',
                  padding: '12px 16px',
                  borderRadius: isAI ? '4px 18px 18px 18px' : '18px 4px 18px 18px',
                  fontSize: '0.88rem',
                  lineHeight: '1.5',
                  whiteSpace: 'pre-line',
                  border: isAI ? '1px solid var(--border-glass)' : 'none'
                }}>
                  {msg.text}
                </div>
              </div>

              {/* Quick Replies */}
              {msg.quickReplies && (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px', width: '100%', paddingLeft: '36px' }}>
                  {msg.quickReplies.map((reply, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(reply)}
                      style={{
                        background: 'rgba(99, 102, 241, 0.12)',
                        border: '1px solid rgba(99, 102, 241, 0.25)',
                        color: '#a5b4fc',
                        padding: '8px 12px',
                        borderRadius: '10px',
                        fontSize: '0.8rem',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Lightbulb size={14} color="#f59e0b" />
                      <span>{reply}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
        style={{
          padding: '14px',
          borderTop: '1px solid var(--border-glass)',
          background: 'rgba(15, 23, 42, 0.98)',
          display: 'flex',
          gap: '8px'
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about careers, skills, roadmaps..."
          style={{
            flex: 1,
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-glass)',
            borderRadius: '12px',
            padding: '10px 14px',
            color: '#fff',
            fontSize: '0.88rem',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          className="btn-primary"
          style={{ padding: '10px 16px', borderRadius: '12px' }}
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
};
