import { OpportunityItem } from '../types';

export const OPPORTUNITIES_DATA: OpportunityItem[] = [
  {
    id: 'opp-1',
    title: 'Global Future Tech Innovators Scholarship 2026',
    type: 'Scholarship',
    organization: 'Global STEM Foundation',
    location: 'Global / Remote',
    stipendOrReward: '$10,000 Tuition Grant',
    deadline: 'Aug 30, 2026',
    tags: ['STEM', 'College & High School', 'Merit Based'],
    description: 'Fully funded grant awarded to high-achieving students pursuing degrees or projects in AI, Robotics, Cyber Security, or Bioengineering.',
    applyUrl: 'https://example.com/scholarship',
    isFeatured: true
  },
  {
    id: 'opp-2',
    title: 'Summer AI & Full Stack Developer Internship',
    type: 'Internship',
    organization: 'Antigravity Labs & Tech',
    location: 'San Francisco / Remote',
    stipendOrReward: '$3,500 / month',
    deadline: 'Aug 15, 2026',
    tags: ['React', 'Python', 'LLM Agents', 'Paid'],
    description: 'Work alongside world-class software engineers to build generative AI tools and full-stack web applications.',
    applyUrl: 'https://example.com/internship',
    isFeatured: true
  },
  {
    id: 'opp-3',
    title: 'HackTheFuture Global Student Hackathon 2026',
    type: 'Hackathon',
    organization: 'Major League Hacking (MLH)',
    location: 'Online Virtual',
    stipendOrReward: '$25,000 Cash Pool + Cloud Credits',
    deadline: 'Sep 10, 2026',
    tags: ['48 Hours', 'Beginner Friendly', 'Mentorship Available'],
    description: '48-hour global sprint to build solutions addressing climate tech, healthcare accessibility, or education technology.',
    applyUrl: 'https://example.com/hackathon',
    isFeatured: false
  },
  {
    id: 'opp-4',
    title: 'Y Combinator Startup School Bootcamp',
    type: 'Bootcamp',
    organization: 'Y Combinator',
    location: 'Remote Online',
    stipendOrReward: 'Free + YC Office Hours Access',
    deadline: 'Open Admissions',
    tags: ['Entrepreneurship', 'SaaS', 'Pitching'],
    description: 'Free 8-week virtual course teaching student founders how to validate ideas, build MVPs, and launch global startups.',
    applyUrl: 'https://example.com/yc-bootcamp',
    isFeatured: false
  },
  {
    id: 'opp-5',
    title: 'Google Summer of Code (GSoC) Open Source Fellowship',
    type: 'Fellowship',
    organization: 'Google Open Source',
    location: 'Remote',
    stipendOrReward: '$3,000 - $6,000 Stipend',
    deadline: 'Sep 25, 2026',
    tags: ['Open Source', 'Mentorship', 'Git'],
    description: 'Global program connecting student developers with open source organizations to write production code over 12 weeks.',
    applyUrl: 'https://example.com/gsoc',
    isFeatured: true
  }
];
