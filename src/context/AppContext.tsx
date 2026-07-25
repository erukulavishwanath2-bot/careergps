import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavTab, UserProfile, ResumeData } from '../types';
import confetti from 'canvas-confetti';

interface AppContextType {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  addXP: (amount: number, reason?: string) => void;
  toggleRoadmapStep: (stepId: string) => void;
  toggleSavedOpportunity: (oppId: string) => void;
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
  showNotification: (msg: string, type?: 'success' | 'info') => void;
  notification: { message: string; type: 'success' | 'info' } | null;
  triggerConfetti: () => void;
}

const DEFAULT_PROFILE: UserProfile = {
  name: 'Alex Morgan',
  gradeLevel: 'Grade 11 Student',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  xp: 450,
  level: 3,
  streakDays: 5,
  completedAssessment: false,
  personalityType: 'Strategic Innovator (INTJ-A)',
  strengths: ['Logical Analysis', 'System Architecture', 'Creative Problem Solving'],
  weaknesses: ['Public Speaking', 'Overthinking Edge Cases'],
  interests: ['Artificial Intelligence', 'Full Stack Dev', 'Design Systems'],
  aptitudeScore: 88,
  learningStyle: 'Kinesthetic & Visual',
  values: ['High Innovation', 'Work Autonomy', 'Intellectual Impact'],
  targetCareerId: 'ai-engineer',
  badges: [
    { id: 'b1', name: 'Explorer', description: 'Started your Career GPS journey', icon: '🚀', unlockedAt: 'Today' },
    { id: 'b2', name: 'Logic Champion', description: 'Scored 85%+ on Aptitude Assessment', icon: '🧠', unlockedAt: 'Yesterday' }
  ],
  unlockedRoadmapSteps: ['ai-step-1'],
  completedQuizzes: [],
  savedOpportunities: ['opp-1', 'opp-2']
};

const DEFAULT_RESUME: ResumeData = {
  fullName: 'Alex Morgan',
  email: 'alex.morgan@student.edu',
  phone: '+1 (555) 234-5678',
  location: 'Seattle, WA',
  linkedin: 'linkedin.com/in/alexmorgan',
  github: 'github.com/alexmorgan-dev',
  summary: 'Passionate grade 11 student building modern web applications and exploring Python AI algorithms. Looking for summer tech internships.',
  education: [
    { institution: 'Westlake High School', degree: 'High School Diploma (Focus in AP Math & CS)', year: '2023 - 2026', gpa: '3.9 / 4.0' }
  ],
  skills: ['Python', 'TypeScript', 'React.js', 'Figma', 'Git & GitHub', 'Data Structures'],
  projects: [
    { title: 'Career Path AI Visualizer', techStack: 'React, TypeScript, CSS', description: 'Built an interactive timeline generator mapping student skills to career milestones.' }
  ],
  experience: [
    { role: 'Robotics Club Lead Programmer', company: 'Westlake High', period: '2024 - Present', details: 'Programmed autonomous navigation routines using Python and C++.' }
  ],
  certifications: ['Python for Data Science (Kaggle)', 'freeCodeCamp Responsive Web Design']
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  // Persistent user state
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('career_gps_profile');
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  });

  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    const saved = localStorage.getItem('career_gps_resume');
    return saved ? JSON.parse(saved) : DEFAULT_RESUME;
  });

  useEffect(() => {
    localStorage.setItem('career_gps_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('career_gps_resume', JSON.stringify(resumeData));
  }, [resumeData]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showNotification = (message: string, type: 'success' | 'info' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const addXP = (amount: number, reason?: string) => {
    setUserProfile(prev => {
      const newXP = prev.xp + amount;
      const newLevel = Math.floor(newXP / 200) + 1;
      const leveledUp = newLevel > prev.level;

      if (leveledUp) {
        triggerConfetti();
        showNotification(`🎉 LEVEL UP! You reached Level ${newLevel}!`, 'success');
      } else if (reason) {
        showNotification(`+${amount} XP: ${reason}`, 'info');
      }

      return {
        ...prev,
        xp: newXP,
        level: newLevel
      };
    });
  };

  const toggleRoadmapStep = (stepId: string) => {
    setUserProfile(prev => {
      const exists = prev.unlockedRoadmapSteps.includes(stepId);
      const updated = exists
        ? prev.unlockedRoadmapSteps.filter(s => s !== stepId)
        : [...prev.unlockedRoadmapSteps, stepId];

      if (!exists) {
        addXP(50, 'Roadmap Milestone Completed');
      }

      return { ...prev, unlockedRoadmapSteps: updated };
    });
  };

  const toggleSavedOpportunity = (oppId: string) => {
    setUserProfile(prev => {
      const exists = prev.savedOpportunities.includes(oppId);
      const updated = exists
        ? prev.savedOpportunities.filter(o => o !== oppId)
        : [...prev.savedOpportunities, oppId];

      showNotification(exists ? 'Removed from saved items' : 'Saved to your Opportunity Hub', 'info');
      return { ...prev, savedOpportunities: updated };
    });
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        userProfile,
        setUserProfile,
        theme,
        toggleTheme,
        addXP,
        toggleRoadmapStep,
        toggleSavedOpportunity,
        resumeData,
        setResumeData,
        showNotification,
        notification,
        triggerConfetti
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
