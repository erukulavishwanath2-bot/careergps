import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  FileText, 
  Sparkles, 
  Download, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  User, 
  Mail, 
  Briefcase, 
  GraduationCap
} from 'lucide-react';

export const ResumeBuilderView: React.FC = () => {
  const { resumeData, setResumeData, showNotification } = useApp();

  // Dynamic ATS Score Calculation
  let atsScore = 60;
  if (resumeData.fullName) atsScore += 5;
  if (resumeData.email) atsScore += 5;
  if (resumeData.summary.length > 50) atsScore += 10;
  if (resumeData.skills.length >= 5) atsScore += 10;
  if (resumeData.projects.length >= 1) atsScore += 10;
  if (resumeData.experience.length >= 1) atsScore += 10;

  const handleUpdate = (field: string, val: any) => {
    setResumeData(prev => ({ ...prev, [field]: val }));
  };

  const addSkill = (skill: string) => {
    if (!skill.trim()) return;
    setResumeData(prev => ({ ...prev, skills: [...prev.skills, skill.trim()] }));
  };

  const removeSkill = (index: number) => {
    setResumeData(prev => ({ ...prev, skills: prev.skills.filter((_, i) => i !== index) }));
  };

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div className="glass-panel" style={{
        padding: '28px 32px',
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(99, 102, 241, 0.12) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.25)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <span className="badge badge-amber" style={{ marginBottom: '8px' }}>
            <FileText size={12} /> Phase 8: Career Preparation & Resume Builder
          </span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
            Interactive AI Resume & Portfolio Builder 📄
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '680px' }}>
            Build an ATS-optimized, high-impact resume with real-time AI scoring feedback.
          </p>
        </div>

        {/* ATS Score Radial */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.7)',
          padding: '16px 24px',
          borderRadius: '16px',
          border: '1px solid var(--border-glass)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            AI ATS Score
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fbbf24' }}>
            {atsScore} / 100
          </div>
          <div style={{ fontSize: '0.78rem', color: '#34d399' }}>
            Ready for Internships & Jobs
          </div>
        </div>
      </div>

      {/* Editor & Live Preview Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Form Editor */}
        <div className="glass-panel" style={{ padding: '28px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px' }}>
            ✏️ Edit Resume Content
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Personal Details */}
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Full Name</label>
              <input
                type="text"
                value={resumeData.fullName}
                onChange={(e) => handleUpdate('fullName', e.target.value)}
                style={{ width: '100%', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass)', borderRadius: '10px', padding: '10px 14px', color: '#fff' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Email</label>
                <input
                  type="text"
                  value={resumeData.email}
                  onChange={(e) => handleUpdate('email', e.target.value)}
                  style={{ width: '100%', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass)', borderRadius: '10px', padding: '10px 14px', color: '#fff' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Phone</label>
                <input
                  type="text"
                  value={resumeData.phone}
                  onChange={(e) => handleUpdate('phone', e.target.value)}
                  style={{ width: '100%', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass)', borderRadius: '10px', padding: '10px 14px', color: '#fff' }}
                />
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Professional Summary</label>
              <textarea
                rows={3}
                value={resumeData.summary}
                onChange={(e) => handleUpdate('summary', e.target.value)}
                style={{ width: '100%', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass)', borderRadius: '10px', padding: '10px 14px', color: '#fff', outline: 'none' }}
              />
            </div>

            {/* Technical Skills */}
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Technical & Soft Skills</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
                {resumeData.skills.map((s, idx) => (
                  <span key={idx} className="badge badge-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    {s}
                    <X size={12} style={{ cursor: 'pointer' }} onClick={() => removeSkill(idx)} />
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Type skill & press Enter..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    addSkill(e.currentTarget.value);
                    e.currentTarget.value = '';
                  }
                }}
                style={{ width: '100%', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass)', borderRadius: '10px', padding: '8px 12px', color: '#fff' }}
              />
            </div>
          </div>
        </div>

        {/* Live Resume Sheet Preview */}
        <div className="glass-panel" style={{
          padding: '32px',
          background: '#ffffff',
          color: '#0f172a',
          borderRadius: '18px',
          minHeight: '520px',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
        }}>
          {/* Header */}
          <div style={{ borderBottom: '2px solid #0f172a', paddingBottom: '16px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>
              {resumeData.fullName || 'Your Name'}
            </h2>
            <div style={{ fontSize: '0.85rem', color: '#475569', display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '4px' }}>
              <span>{resumeData.email}</span> • <span>{resumeData.phone}</span> • <span>{resumeData.location}</span>
            </div>
          </div>

          {/* Summary */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', color: '#6366f1', letterSpacing: '0.05em', marginBottom: '4px' }}>
              Professional Summary
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#334155', lineHeight: '1.5' }}>
              {resumeData.summary}
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', color: '#6366f1', letterSpacing: '0.05em', marginBottom: '6px' }}>
              Education
            </h4>
            {resumeData.education.map((edu, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: '#1e293b' }}>
                <div>
                  <strong>{edu.institution}</strong> — {edu.degree}
                </div>
                <div style={{ color: '#64748b' }}>{edu.year}</div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', color: '#6366f1', letterSpacing: '0.05em', marginBottom: '6px' }}>
              Skills & Competencies
            </h4>
            <div style={{ fontSize: '0.86rem', color: '#334155' }}>
              {resumeData.skills.join(' • ')}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', color: '#6366f1', letterSpacing: '0.05em', marginBottom: '6px' }}>
              Key Projects
            </h4>
            {resumeData.projects.map((proj, i) => (
              <div key={i} style={{ marginBottom: '8px' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>
                  {proj.title} ({proj.techStack})
                </div>
                <div style={{ fontSize: '0.84rem', color: '#475569' }}>
                  {proj.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
