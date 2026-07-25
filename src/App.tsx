import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { AIChatBot } from './components/AIChatBot';

// Views
import { DashboardView } from './views/DashboardView';
import { SelfDiscoveryView } from './views/SelfDiscoveryView';
import { CareerExplorationView } from './views/CareerExplorationView';
import { AIRecommendationView } from './views/AIRecommendationView';
import { RoadmapView } from './views/RoadmapView';
import { LearningHubView } from './views/LearningHubView';
import { ResumeBuilderView } from './views/ResumeBuilderView';
import { InterviewCoachView } from './views/InterviewCoachView';
import { OpportunityCenterView } from './views/OpportunityCenterView';

const MainContent: React.FC = () => {
  const { activeTab, notification } = useApp();
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  const renderView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'self-discovery':
        return <SelfDiscoveryView />;
      case 'exploration':
        return <CareerExplorationView />;
      case 'recommendations':
        return <AIRecommendationView />;
      case 'roadmap':
        return <RoadmapView />;
      case 'learning':
        return <LearningHubView />;
      case 'resume-builder':
        return <ResumeBuilderView />;
      case 'interview-coach':
        return <InterviewCoachView />;
      case 'opportunities':
        return <OpportunityCenterView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar */}
      <Navbar onToggleAIChat={() => setIsAIChatOpen(prev => !prev)} />

      {/* Main Page Container */}
      <main className="app-container" style={{ flex: 1 }}>
        {renderView()}
      </main>

      {/* Floating AI Chat Bot */}
      <AIChatBot isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />

      {/* Toast Notification */}
      {notification && (
        <div
          className="animate-slide-up"
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '24px',
            zIndex: 10000,
            background: notification.type === 'success' ? 'var(--grad-primary)' : 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '14px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
            fontWeight: 700,
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
