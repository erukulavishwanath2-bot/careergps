import { LearningCourse } from '../types';

export const LEARNING_COURSES: LearningCourse[] = [
  {
    id: 'course-python-ai',
    title: 'Python for Artificial Intelligence & Data',
    category: 'Coding',
    level: 'Beginner',
    duration: '4 Hours',
    modulesCount: 6,
    xpReward: 150,
    provider: 'Career GPS Academy',
    description: 'Master core Python syntax, NumPy arrays, Pandas dataframes, and basic Machine Learning algorithms.',
    quiz: [
      {
        id: 'py-q1',
        question: 'Which Python data structure is immutable and ordered?',
        options: [
          { text: 'Tuple', isCorrect: true, explanation: 'Tuples are ordered collections enclosed in parentheses () that cannot be modified after creation.' },
          { text: 'List', isCorrect: false },
          { text: 'Dictionary', isCorrect: false },
          { text: 'Set', isCorrect: false }
        ]
      },
      {
        id: 'py-q2',
        question: 'What library is primarily used for multi-dimensional numerical array computation in Python?',
        options: [
          { text: 'NumPy', isCorrect: true, explanation: 'NumPy provides high performance C-based array calculations.' },
          { text: 'Flask', isCorrect: false },
          { text: 'Requests', isCorrect: false },
          { text: 'BeautifulSoup', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'course-ui-ux-design',
    title: 'UI/UX Design Systems & Figma Essentials',
    category: 'Soft Skills',
    level: 'Intermediate',
    duration: '3.5 Hours',
    modulesCount: 5,
    xpReward: 120,
    provider: 'Career GPS Design Lab',
    description: 'Learn wireframing, color contrast accessibility, visual hierarchy, auto-layout in Figma, and micro-interactions.',
    quiz: [
      {
        id: 'ui-q1',
        question: 'What is the primary purpose of auto-layout in Figma?',
        options: [
          { text: 'To create responsive components that grow or shrink automatically with content.', isCorrect: true, explanation: 'Auto-layout models CSS flexbox behavior inside Figma.' },
          { text: 'To export PNG files faster.', isCorrect: false },
          { text: 'To change color themes automatically.', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'course-ai-prompting',
    title: 'Generative AI & Prompt Engineering Mastery',
    category: 'AI Tools',
    level: 'Beginner',
    duration: '2 Hours',
    modulesCount: 4,
    xpReward: 100,
    provider: 'Career GPS AI Hub',
    description: 'Learn system prompt design, zero-shot/few-shot prompting, chain-of-thought reasoning, and LLM workflow automation.',
    quiz: [
      {
        id: 'ai-q1',
        question: 'What is "Chain-of-Thought" prompting?',
        options: [
          { text: 'Instructing the AI model to break down reasoning step-by-step before producing the final answer.', isCorrect: true, explanation: 'Chain-of-thought dramatically reduces reasoning errors in complex tasks.' },
          { text: 'Connecting multiple AI API keys together.', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'course-interview-mastery',
    title: 'Behavioral & Technical Interview Blueprint',
    category: 'Interview Skills',
    level: 'Advanced',
    duration: '3 Hours',
    modulesCount: 5,
    xpReward: 140,
    provider: 'Career GPS Career Prep',
    description: 'Master the STAR framework (Situation, Task, Action, Result) for behavioral questions and live problem solving.',
    quiz: [
      {
        id: 'int-q1',
        question: 'What does STAR stand for in interview answer structuring?',
        options: [
          { text: 'Situation, Task, Action, Result', isCorrect: true, explanation: 'STAR ensures structured, high-impact answers.' },
          { text: 'Summary, Topic, Answer, Reaction', isCorrect: false }
        ]
      }
    ]
  }
];
