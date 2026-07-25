import { AssessmentSection } from '../types';

export const ASSESSMENT_SECTIONS: AssessmentSection[] = [
  {
    id: 'personality',
    title: 'Personality & Behavioral Traits',
    description: 'Understand how you react to problems, collaborate with teams, and process information.',
    questions: [
      {
        id: 'p1',
        question: 'When solving a complex challenge, what is your immediate natural instinct?',
        options: [
          { text: 'Deconstruct it logically into step-by-step algorithms and data.', scoreCategory: 'Analytical' },
          { text: 'Brainstorm creative, out-of-the-box visual or aesthetic concepts.', scoreCategory: 'Creative' },
          { text: 'Discuss with a group to gather diverse human perspectives.', scoreCategory: 'Social' },
          { text: 'Take immediate action, experiment fast, and learn by trial.', scoreCategory: 'Enterprising' }
        ]
      },
      {
        id: 'p2',
        question: 'How do you prefer your ideal working environment?',
        options: [
          { text: 'Quiet, deep-focus environment with high autonomy and code/data.', scoreCategory: 'Analytical' },
          { text: 'Dynamic, fast-paced collaborative environment with big goals.', scoreCategory: 'Enterprising' },
          { text: 'Creative design studio or flexible open workspace.', scoreCategory: 'Creative' },
          { text: 'People-oriented space focused on mentoring and community help.', scoreCategory: 'Social' }
        ]
      }
    ]
  },
  {
    id: 'interests',
    title: 'Interest & Career Drive (Holland Code)',
    description: 'Identify what topics genuine excite you day after day.',
    questions: [
      {
        id: 'i1',
        question: 'Which of these weekend projects would you enjoy most?',
        options: [
          { text: 'Building a smart Python app or training an AI model.', scoreCategory: 'Technical' },
          { text: 'Designing a website layout, brand identity, or 3D art piece.', scoreCategory: 'Design' },
          { text: 'Launching a micro e-commerce store or analyzing stocks.', scoreCategory: 'Business' },
          { text: 'Volunteering, tutoring students, or organizing community events.', scoreCategory: 'Social' }
        ]
      },
      {
        id: 'i2',
        question: 'What type of content do you consume in your free time?',
        options: [
          { text: 'Tech blogs, coding tutorials, science documentaries, AI news.', scoreCategory: 'Technical' },
          { text: 'UI design showcases, art portfolios, architectural trends.', scoreCategory: 'Design' },
          { text: 'Startup pitch teardowns, stock market analysis, business podcasts.', scoreCategory: 'Business' },
          { text: 'Psychology, philosophy, medical advancements, human stories.', scoreCategory: 'Social' }
        ]
      }
    ]
  },
  {
    id: 'aptitude',
    title: 'Aptitude & Logic Reasoning',
    description: 'Evaluate your quantitative reasoning and critical thinking agility.',
    questions: [
      {
        id: 'a1',
        question: 'Sequence Problem: What comes next in the pattern? 3, 7, 15, 31, 63, ...',
        options: [
          { text: '127 (Rule: multiply by 2 and add 1)', isCorrect: true, explanation: 'Each term is 2x + 1. 63 * 2 + 1 = 127.' },
          { text: '125', isCorrect: false },
          { text: '128', isCorrect: false },
          { text: '95', isCorrect: false }
        ]
      },
      {
        id: 'a2',
        question: 'Logic Puzzle: If all A are B, and no B are C, which statement MUST be true?',
        options: [
          { text: 'No A are C', isCorrect: true, explanation: 'Since A is entirely inside B, and B has no overlap with C, A can never touch C.' },
          { text: 'Some A are C', isCorrect: false },
          { text: 'All C are A', isCorrect: false },
          { text: 'None of the above', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'learning_style',
    title: 'Learning Style Assessment',
    description: 'Discover how your brain absorbs and retains new knowledge best.',
    questions: [
      {
        id: 'l1',
        question: 'When learning a brand new software tool, how do you learn fastest?',
        options: [
          { text: 'Watching video tutorials, visual diagrams, and live demos.', scoreCategory: 'Visual' },
          { text: 'Jumping straight in, clicking buttons, and building a test project.', scoreCategory: 'Kinesthetic' },
          { text: 'Reading technical documentation, step-by-step guides, and books.', scoreCategory: 'Read/Write' },
          { text: 'Listening to an instructor explain concepts interactively.', scoreCategory: 'Auditory' }
        ]
      }
    ]
  },
  {
    id: 'values',
    title: 'Work Values & Career Priorities',
    description: 'Pinpoint what matters most to your long-term life fulfillment.',
    questions: [
      {
        id: 'v1',
        question: 'What is your single non-negotiable priority for your future career?',
        options: [
          { text: 'High Earning Potential & Financial Freedom', scoreCategory: 'Wealth' },
          { text: 'Solving High-Impact World Problems & Helping Society', scoreCategory: 'Impact' },
          { text: 'Work-Life Balance, Flexibility & Remote Work', scoreCategory: 'Flexibility' },
          { text: 'Rapid Intellectual Growth & Pushing Technological Boundaries', scoreCategory: 'Innovation' }
        ]
      }
    ]
  }
];
