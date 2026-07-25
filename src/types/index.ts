export type NavTab = 
  | 'dashboard' 
  | 'self-discovery' 
  | 'exploration' 
  | 'recommendations' 
  | 'roadmap' 
  | 'learning' 
  | 'resume-builder' 
  | 'interview-coach' 
  | 'opportunities' 
  | 'community';

export interface UserProfile {
  name: string;
  gradeLevel: string; // e.g. "Grade 11", "College Sophomore", "Fresh Grad"
  avatar: string;
  xp: number;
  level: number;
  streakDays: number;
  completedAssessment: boolean;
  personalityType?: string;
  strengths: string[];
  weaknesses: string[];
  interests: string[];
  aptitudeScore: number;
  learningStyle: string;
  values: string[];
  targetCareerId?: string;
  badges: Badge[];
  unlockedRoadmapSteps: string[];
  completedQuizzes: string[];
  savedOpportunities: string[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

export interface CareerItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  futureDemand: 'Extremely High' | 'High' | 'Moderate';
  futureDemandScore: number; // 1-100
  salaryRange: {
    entry: string;
    mid: string;
    senior: string;
  };
  requiredDegrees: string[];
  coreSkills: string[];
  matchScore?: number; // Calculated dynamically
  whyItMatches?: string;
  dayInTheLife: string;
  videoUrl: string;
  roadmapNodes: RoadmapNode[];
}

export interface RoadmapNode {
  id: string;
  stage: string; // e.g., "Class 10", "Class 11-12", "College", "Projects", "Job"
  title: string;
  description: string;
  recommendedExams?: string[];
  resources: { title: string; link: string; type: 'course' | 'book' | 'video' }[];
  estimatedDuration: string;
  isCompleted?: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: { text: string; scoreCategory?: string; isCorrect?: boolean; explanation?: string }[];
}

export interface AssessmentSection {
  id: 'personality' | 'interests' | 'aptitude' | 'learning_style' | 'values';
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface LearningCourse {
  id: string;
  title: string;
  category: 'Coding' | 'Soft Skills' | 'AI Tools' | 'Aptitude' | 'Interview Skills';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  modulesCount: number;
  xpReward: number;
  provider: string;
  description: string;
  quiz: QuizQuestion[];
}

export interface OpportunityItem {
  id: string;
  title: string;
  type: 'Scholarship' | 'Internship' | 'Hackathon' | 'Bootcamp' | 'Fellowship' | 'Incubator';
  organization: string;
  location: string;
  stipendOrReward: string;
  deadline: string;
  tags: string[];
  description: string;
  applyUrl: string;
  isFeatured?: boolean;
}

export interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  education: { institution: string; degree: string; year: string; gpa?: string }[];
  skills: string[];
  projects: { title: string; techStack: string; description: string; link?: string }[];
  experience: { role: string; company: string; period: string; details: string }[];
  certifications: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  quickReplies?: string[];
}
