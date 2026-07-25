import { CareerItem } from '../types';

export const CAREER_CATEGORIES = [
  'All',
  'AI & Data',
  'Engineering',
  'Medicine & Bio',
  'Business & Finance',
  'Design & Arts',
  'Law & Policy',
  'Cyber Security',
  'Content & Media',
  'Entrepreneurship'
];

export const CAREERS_DATA: CareerItem[] = [
  {
    id: 'ai-engineer',
    title: 'AI & Machine Learning Engineer',
    category: 'AI & Data',
    tagline: 'Build intelligent neural networks, autonomous agents, and next-gen AI models.',
    description: 'AI Engineers design and deploy complex machine learning algorithms, deep neural networks, and generative AI systems that power future automation, robotics, and smart software.',
    futureDemand: 'Extremely High',
    futureDemandScore: 98,
    salaryRange: {
      entry: '$85,000 - $120,000',
      mid: '$140,000 - $190,000',
      senior: '$220,000 - $380,000+'
    },
    requiredDegrees: ['B.S. in Computer Science / AI', 'M.S. in Data Science / Machine Learning', 'Math & Statistics Certification'],
    coreSkills: ['Python & PyTorch', 'Deep Learning & LLMs', 'Mathematics & Linear Algebra', 'MLOps & Docker', 'Algorithm Optimization'],
    dayInTheLife: 'You analyze multi-terabyte datasets, fine-tune transformer models, collaborate with software product teams, and benchmark neural network latency.',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    roadmapNodes: [
      {
        id: 'ai-step-1',
        stage: 'Class 10 - 12',
        title: 'Master Advanced Math & Fundamentals',
        description: 'Focus heavily on Calculus, Linear Algebra, Statistics, and basic Python programming.',
        recommendedExams: ['AP Computer Science', 'SAT Math', 'National Olympiads'],
        resources: [
          { title: 'Python for Beginners (Kaggle)', link: 'https://kaggle.com/learn/python', type: 'course' },
          { title: '3Blue1Brown Linear Algebra', link: 'https://youtube.com', type: 'video' }
        ],
        estimatedDuration: '2 Years'
      },
      {
        id: 'ai-step-2',
        stage: 'College Degree',
        title: 'B.S. in CS / AI & Data Science',
        description: 'Undergraduate study emphasizing Data Structures, Algorithms, Neural Networks, and Probability.',
        resources: [
          { title: 'Andrew Ng Machine Learning Specialization', link: 'https://coursera.org', type: 'course' },
          { title: 'Hands-On Machine Learning Book', link: '#', type: 'book' }
        ],
        estimatedDuration: '4 Years'
      },
      {
        id: 'ai-step-3',
        stage: 'Internships & Projects',
        title: 'Build Open Source AI Models & Kaggle',
        description: 'Compete in Kaggle competitions, contribute to HuggingFace models, and intern at AI research labs.',
        resources: [
          { title: 'Hugging Face Open Source Course', link: 'https://huggingface.co', type: 'course' }
        ],
        estimatedDuration: '1-2 Years'
      },
      {
        id: 'ai-step-4',
        stage: 'First Role & Specialization',
        title: 'Junior AI Engineer / Research Scientist',
        description: 'Ship fine-tuned AI models into production applications and continuously optimize inference costs.',
        resources: [],
        estimatedDuration: 'Ongoing',
      }
    ]
  },
  {
    id: 'cyber-security-analyst',
    title: 'Cyber Security Specialist',
    category: 'Cyber Security',
    tagline: 'Defend critical digital infrastructure against hackers and global cyber threats.',
    description: 'Cyber Security Specialists protect networks, servers, and applications from cyber-attacks, conduct penetration testing, and build zero-trust security architecture.',
    futureDemand: 'Extremely High',
    futureDemandScore: 95,
    salaryRange: {
      entry: '$75,000 - $105,000',
      mid: '$120,000 - $160,000',
      senior: '$180,000 - $280,000+'
    },
    requiredDegrees: ['B.S. in Cyber Security / CS', 'CompTIA Security+', 'CEH (Certified Ethical Hacker)'],
    coreSkills: ['Penetration Testing', 'Network Protocol Analysis', 'Ethical Hacking', 'Cryptography', 'SIEM & Cloud Security'],
    dayInTheLife: 'You perform vulnerability scans, simulate attack vectors, monitor real-time threat intelligence feeds, and respond to security incidents.',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    roadmapNodes: [
      {
        id: 'cs-step-1',
        stage: 'Class 10 - 12',
        title: 'Learn Networking & Linux Basics',
        description: 'Understand TCP/IP, OSI Model, Command Line Linux, and basic scripting in Bash or Python.',
        resources: [
          { title: 'TryHackMe Cyber Basics', link: 'https://tryhackme.com', type: 'course' }
        ],
        estimatedDuration: '1 Year'
      },
      {
        id: 'cs-step-2',
        stage: 'Certifications & Higher Ed',
        title: 'Degree or CompTIA Security+ / CEH',
        description: 'Pursue CS or Cyber Security degree along with industry recognized security credentials.',
        resources: [
          { title: 'CompTIA Security+ Exam Guide', link: '#', type: 'book' }
        ],
        estimatedDuration: '3-4 Years'
      },
      {
        id: 'cs-step-3',
        stage: 'Hands-on Labs',
        title: 'Capture The Flag (CTF) & Bug Bounties',
        description: 'Participate in global CTF security events and report security flaws on HackerOne.',
        resources: [],
        estimatedDuration: '1 Year'
      }
    ]
  },
  {
    id: 'fullstack-developer',
    title: 'Full Stack Software Engineer',
    category: 'Engineering',
    tagline: 'Craft end-to-end web applications, scalable cloud microservices, and mobile platforms.',
    description: 'Full Stack Engineers work across the frontend UI, backend server logic, databases, and DevOps pipelines to build high-performance digital products.',
    futureDemand: 'High',
    futureDemandScore: 92,
    salaryRange: {
      entry: '$70,000 - $100,000',
      mid: '$125,000 - $170,000',
      senior: '$190,000 - $300,000+'
    },
    requiredDegrees: ['B.S. in Computer Science or Software Engineering', 'Full Stack Bootcamp Certification'],
    coreSkills: ['TypeScript / JavaScript', 'React & Next.js', 'Node.js & Express', 'PostgreSQL / MongoDB', 'System Design'],
    dayInTheLife: 'You build user interface components, write REST API endpoints, optimize SQL queries, and deploy cloud infrastructure.',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    roadmapNodes: [
      {
        id: 'fs-step-1',
        stage: 'Class 11 - 12',
        title: 'Frontend Fundamentals (HTML, CSS, JS)',
        description: 'Master web layouts, DOM manipulation, git version control, and responsive web design.',
        resources: [
          { title: 'freeCodeCamp Responsive Web Design', link: 'https://freecodecamp.org', type: 'course' }
        ],
        estimatedDuration: '6 Months'
      },
      {
        id: 'fs-step-2',
        stage: 'College / Self-Taught Path',
        title: 'React, Node.js & Database Systems',
        description: 'Learn modern single page app frameworks, backend routing, state management, and SQL/NoSQL databases.',
        resources: [],
        estimatedDuration: '2 Years'
      },
      {
        id: 'fs-step-3',
        stage: 'Portfolio & Internship',
        title: 'Ship 3 Full-Stack SaaS Apps',
        description: 'Deploy real applications to Vercel/AWS with user authentication, database integration, and payment gateways.',
        resources: [],
        estimatedDuration: '1 Year'
      }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Lead Data Scientist & Analytics Architect',
    category: 'AI & Data',
    tagline: 'Transform massive data into actionable business intelligence and predictive insights.',
    description: 'Data Scientists combine statistical rigor, data mining, and machine learning to uncover hidden patterns and drive strategic executive decisions.',
    futureDemand: 'Extremely High',
    futureDemandScore: 94,
    salaryRange: {
      entry: '$80,000 - $110,000',
      mid: '$130,000 - $175,000',
      senior: '$200,000 - $320,000+'
    },
    requiredDegrees: ['B.S. or M.S. in Data Science, Statistics, or Applied Math'],
    coreSkills: ['Python & R', 'SQL & Data Warehousing', 'Statistical Analysis', 'Data Visualization (Tableau/PowerBI)', 'A/B Testing'],
    dayInTheLife: 'You clean complex datasets, write SQL queries, construct predictive regression models, and present interactive data dashboards to stakeholders.',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    roadmapNodes: [
      {
        id: 'ds-step-1',
        stage: 'Foundations',
        title: 'Statistics, Probability & Python Pandas',
        description: 'Build fluency in hypothesis testing, data wrangling with Pandas and NumPy.',
        resources: [],
        estimatedDuration: '1 Year'
      },
      {
        id: 'ds-step-2',
        stage: 'University / Specialization',
        title: 'Degree in Data Analytics or Computer Science',
        description: 'Deep dive into predictive analytics, SQL databases, and machine learning algorithms.',
        resources: [],
        estimatedDuration: '4 Years'
      }
    ]
  },
  {
    id: 'ux-ui-product-designer',
    title: 'UI/UX Product Designer',
    category: 'Design & Arts',
    tagline: 'Architect intuitive, stunning, and human-centered digital experiences.',
    description: 'Product Designers craft the visual look, interactive feel, user journeys, and design systems for mobile apps, software platforms, and websites.',
    futureDemand: 'High',
    futureDemandScore: 89,
    salaryRange: {
      entry: '$65,000 - $90,000',
      mid: '$110,000 - $150,000',
      senior: '$165,000 - $250,000+'
    },
    requiredDegrees: ['B.A. or B.S. in Interaction Design, HCI, or Fine Arts', 'Google UX Certificate'],
    coreSkills: ['Figma & Wireframing', 'User Research & Testing', 'Design Systems & Tokens', 'Interaction Prototyping', 'Visual Hierarchy'],
    dayInTheLife: 'You conduct user interviews, design wireframes in Figma, test interactive prototypes, and collaborate closely with frontend developers.',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    roadmapNodes: [
      {
        id: 'ux-step-1',
        stage: 'Exploration',
        title: 'Master Figma & Graphic Principles',
        description: 'Learn color theory, grid systems, typography scale, and layout fundamentals.',
        resources: [],
        estimatedDuration: '6 Months'
      },
      {
        id: 'ux-step-2',
        stage: 'Portfolio Building',
        title: 'Create 3 End-to-End Case Studies',
        description: 'Solve real user pain points, document design research, wireframes, and high-fidelity interactive Figma prototypes.',
        resources: [],
        estimatedDuration: '1 Year'
      }
    ]
  },
  {
    id: 'biomedical-engineer',
    title: 'Biomedical & Neural Engineer',
    category: 'Medicine & Bio',
    tagline: 'Develop revolutionary medical devices, artificial organs, and neural interfaces.',
    description: 'Biomedical Engineers combine biology, healthcare, and engineering principles to build prosthetics, diagnostic equipment, and life-saving technology.',
    futureDemand: 'High',
    futureDemandScore: 91,
    salaryRange: {
      entry: '$70,000 - $95,000',
      mid: '$115,000 - $155,000',
      senior: '$175,000 - $260,000+'
    },
    requiredDegrees: ['B.S. or Ph.D. in Biomedical Engineering or Bioengineering'],
    coreSkills: ['Biomechanics', 'Medical Device Regulatory Compliance', 'Bio-signal Processing', 'CAD 3D Modeling', 'Tissue Engineering'],
    dayInTheLife: 'You design biocompatible implants, run laboratory simulations, test medical sensor hardware, and analyze clinical trial telemetry.',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    roadmapNodes: [
      {
        id: 'bme-step-1',
        stage: 'High School',
        title: 'Biology, Physics & Chemistry Mastery',
        description: 'Excel in AP Biology, Physics, and Advanced Mathematics.',
        resources: [],
        estimatedDuration: '2 Years'
      },
      {
        id: 'bme-step-2',
        stage: 'College Degree',
        title: 'B.S. in Biomedical Engineering',
        description: 'Complete hands-on laboratory courses in biomaterials, biomechanics, and medical imaging.',
        resources: [],
        estimatedDuration: '4 Years'
      }
    ]
  },
  {
    id: 'fintech-investment-analyst',
    title: 'Fintech & Quantitative Investment Analyst',
    category: 'Business & Finance',
    tagline: 'Analyze global financial markets, build algorithmic trading models, and evaluate venture capital deals.',
    description: 'Quantitative Investment Analysts evaluate financial data, build predictive market algorithms, analyze corporate valuations, and structure investment portfolios.',
    futureDemand: 'High',
    futureDemandScore: 90,
    salaryRange: {
      entry: '$85,000 - $130,000',
      mid: '$150,000 - $240,000',
      senior: '$280,000 - $500,000+'
    },
    requiredDegrees: ['B.S. in Finance, Financial Engineering, or Economics', 'CFA (Chartered Financial Analyst)'],
    coreSkills: ['Financial Modeling', 'Valuation & Accounting', 'Python for Finance', 'Risk Assessment', 'Market Research'],
    dayInTheLife: 'You evaluate company financial statements, construct discounted cash flow (DCF) models, and brief fund managers on investment strategies.',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    roadmapNodes: [
      {
        id: 'fin-step-1',
        stage: 'Foundations',
        title: 'Accounting & Economics Basics',
        description: 'Understand macroeconomics, balance sheets, income statements, and cash flows.',
        resources: [],
        estimatedDuration: '1 Year'
      },
      {
        id: 'fin-step-2',
        stage: 'College & CFA',
        title: 'B.S. in Finance / Quant Economics + CFA Level 1',
        description: 'Master corporate finance, financial derivatives, and quantitative portfolio management.',
        resources: [],
        estimatedDuration: '4 Years'
      }
    ]
  },
  {
    id: 'digital-marketing-strategist',
    title: 'Digital Growth & Performance Marketer',
    category: 'Content & Media',
    tagline: 'Scale global brands through viral campaigns, SEO, paid acquisition, and data analytics.',
    description: 'Growth Strategists plan digital ad campaigns, search engine optimization (SEO), conversion rate optimization, and brand storytelling across viral marketing channels.',
    futureDemand: 'High',
    futureDemandScore: 87,
    salaryRange: {
      entry: '$55,000 - $75,000',
      mid: '$90,000 - $130,000',
      senior: '$150,000 - $220,000+'
    },
    requiredDegrees: ['B.A. in Marketing, Communications, or Business', 'Google Ads & Meta Certifications'],
    coreSkills: ['Performance Ads (Meta/Google/TikTok)', 'SEO & Content Strategy', 'Google Analytics 4', 'A/B Testing', 'Copywriting'],
    dayInTheLife: 'You analyze ad funnel conversion rates, write persuasive campaign copy, run multivariate ad split tests, and optimize return on ad spend (ROAS).',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    roadmapNodes: [
      {
        id: 'mkt-step-1',
        stage: 'Basics',
        title: 'SEO & Copywriting Fundamentals',
        description: 'Learn audience research, keyword strategy, and storytelling principles.',
        resources: [],
        estimatedDuration: '6 Months'
      }
    ]
  },
  {
    id: 'startup-founder-entrepreneur',
    title: 'Tech Founder & Entrepreneur',
    category: 'Entrepreneurship',
    tagline: 'Build disruptive startups, solve massive market problems, and scale high-growth ventures.',
    description: 'Founders build innovative companies from zero to one. They validate market ideas, recruit co-founders, raise venture capital, and drive business model execution.',
    futureDemand: 'Extremely High',
    futureDemandScore: 96,
    salaryRange: {
      entry: 'Equity Based / Variable',
      mid: '$100,000 - $200,000',
      senior: 'High Equity / Multi-Million Exit Potential'
    },
    requiredDegrees: ['Any background (Engineering, Business, Design)', 'Y Combinator Startup School'],
    coreSkills: ['Product Strategy & Validation', 'Venture Fundraising & Pitching', 'Leadership & Team Building', 'Sales & Customer Discovery', 'Agile Execution'],
    dayInTheLife: 'You pitch angel investors, conduct customer interviews, test minimum viable products (MVP), and iterate on go-to-market strategies.',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    roadmapNodes: [
      {
        id: 'ent-step-1',
        stage: 'Ideation',
        title: 'Identify Problems & Build MVPs',
        description: 'Validate market demand, launch rapid prototypes, and talk to 100 prospective users.',
        resources: [],
        estimatedDuration: '1 Year'
      }
    ]
  },
  {
    id: 'corporate-lawyer',
    title: 'Corporate & Tech Policy Attorney',
    category: 'Law & Policy',
    tagline: 'Navigate international corporate law, IP protection, AI regulation, and venture deals.',
    description: 'Corporate Lawyers structure mergers and acquisitions, negotiate enterprise contracts, protect intellectual property (IP), and ensure regulatory compliance for technology companies.',
    futureDemand: 'Moderate',
    futureDemandScore: 85,
    salaryRange: {
      entry: '$90,000 - $140,000',
      mid: '$160,000 - $250,000',
      senior: '$300,000 - $600,000+'
    },
    requiredDegrees: ['Bachelor Degree (Pre-Law / History / Pol Sci)', 'J.D. (Juris Doctor) or LL.B.', 'State Bar Exam License'],
    coreSkills: ['Legal Contract Drafting', 'Negotiation & Litigation', 'Intellectual Property Law', 'Regulatory Policy', 'Critical Analysis'],
    dayInTheLife: 'You draft financing term sheets, review technology licensing agreements, advise founders on IP protection, and analyze regulatory legislation.',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    roadmapNodes: [
      {
        id: 'law-step-1',
        stage: 'Undergraduate',
        title: 'Bachelor Degree & LSAT Preparation',
        description: 'Maintain high GPA and score competitively on the Law School Admission Test (LSAT).',
        resources: [],
        estimatedDuration: '4 Years'
      },
      {
        id: 'law-step-2',
        stage: 'Law School',
        title: 'J.D. Degree & Law Review',
        description: 'Complete contracts, torts, constitutional law, and corporate IP specialization.',
        resources: [],
        estimatedDuration: '3 Years'
      }
    ]
  }
];
