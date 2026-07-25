(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const f={name:"Alex Morgan",gradeLevel:"Grade 11 Student",xp:450,level:3,streakDays:5,completedAssessment:!1,personalityType:"Strategic Innovator (INTJ-A)",strengths:["Logical Analysis","System Architecture","Creative Problem Solving"],weaknesses:["Public Speaking","Overthinking Edge Cases"],interests:["Artificial Intelligence","Full Stack Dev","Design Systems"],aptitudeScore:88,learningStyle:"Kinesthetic & Visual",values:["High Innovation","Work Autonomy","Intellectual Impact"],targetCareerId:"ai-engineer",badges:[{id:"b1",name:"Explorer",description:"Started your Career GPS journey",icon:"🚀"},{id:"b2",name:"Logic Champion",description:"Scored 85%+ on Aptitude Assessment",icon:"🧠"}],unlockedRoadmapSteps:["ai-step-1"],completedQuizzes:[],savedOpportunities:["opp-1","opp-2"]},l=[{id:"ai-engineer",title:"AI & Machine Learning Engineer",category:"AI & Data",tagline:"Build intelligent neural networks, autonomous agents, and next-gen AI models.",description:"AI Engineers design and deploy complex machine learning algorithms, deep neural networks, and generative AI systems that power future automation.",futureDemand:"Extremely High",futureDemandScore:98,salaryRange:{entry:"$85,000 - $120,000",mid:"$140,000 - $190,000",senior:"$220,000 - $380,000+"},coreSkills:["Python & PyTorch","Deep Learning & LLMs","Linear Algebra","MLOps & Docker"],dayInTheLife:"You analyze multi-terabyte datasets, fine-tune transformer models, collaborate with product teams, and benchmark neural network latency.",roadmapNodes:[{id:"ai-step-1",stage:"Class 10 - 12",title:"Master Advanced Math & Programming",description:"Focus on Calculus, Linear Algebra, Statistics, and basic Python programming.",estimatedDuration:"2 Years"},{id:"ai-step-2",stage:"College Degree",title:"B.S. in CS / AI & Data Science",description:"Undergraduate study emphasizing Data Structures, Neural Networks, and Algorithms.",estimatedDuration:"4 Years"},{id:"ai-step-3",stage:"Projects & Internships",title:"Build Open Source AI & Kaggle Competitions",description:"Compete in Kaggle competitions and contribute to open-source models.",estimatedDuration:"1-2 Years"},{id:"ai-step-4",stage:"First Job",title:"Junior AI Engineer / Research Scientist",description:"Ship fine-tuned AI models into production applications.",estimatedDuration:"Ongoing"}]},{id:"cyber-security",title:"Cyber Security Specialist",category:"Cyber Security",tagline:"Defend critical digital infrastructure against hackers and global cyber threats.",description:"Cyber Security Specialists protect networks, servers, and applications from cyber-attacks and conduct ethical hacking penetration testing.",futureDemand:"Extremely High",futureDemandScore:95,salaryRange:{entry:"$75,000 - $105,000",mid:"$120,000 - $160,000",senior:"$180,000 - $280,000+"},coreSkills:["Penetration Testing","Network Protocol Analysis","Ethical Hacking","SIEM & Cloud Security"],dayInTheLife:"You perform vulnerability scans, simulate attack vectors, monitor threat intelligence feeds, and respond to security incidents.",roadmapNodes:[{id:"cs-step-1",stage:"Class 10 - 12",title:"Learn Networking & Linux Basics",description:"Understand TCP/IP, OSI Model, Command Line Linux, and Python scripting.",estimatedDuration:"1 Year"},{id:"cs-step-2",stage:"College & Certs",title:"B.S. in Cyber Security + CompTIA Security+",description:"Pursue CS degree along with recognized security credentials.",estimatedDuration:"4 Years"}]},{id:"fullstack-dev",title:"Full Stack Software Engineer",category:"Engineering",tagline:"Craft end-to-end web applications, scalable cloud microservices, and mobile platforms.",description:"Full Stack Engineers work across frontend UI, backend server logic, databases, and DevOps pipelines to build high-performance digital products.",futureDemand:"High",futureDemandScore:92,salaryRange:{entry:"$70,000 - $100,000",mid:"$125,000 - $170,000",senior:"$190,000 - $300,000+"},coreSkills:["TypeScript / React","Node.js & Express","PostgreSQL / MongoDB","System Design"],dayInTheLife:"You build user interfaces in React, write REST APIs, optimize SQL queries, and deploy cloud microservices.",roadmapNodes:[{id:"fs-step-1",stage:"Class 11 - 12",title:"Frontend Basics (HTML, CSS, JS)",description:"Master responsive layouts, DOM manipulation, git version control.",estimatedDuration:"6 Months"},{id:"fs-step-2",stage:"College",title:"React, Node.js & Database Systems",description:"Learn single-page applications, backend routing, and databases.",estimatedDuration:"3 Years"}]},{id:"ux-ui-designer",title:"UI/UX Product Designer",category:"Design & Arts",tagline:"Architect intuitive, stunning, and human-centered digital experiences.",description:"Product Designers craft visual layouts, interactive user journeys, and design systems for web and mobile apps.",futureDemand:"High",futureDemandScore:89,salaryRange:{entry:"$65,000 - $90,000",mid:"$110,000 - $150,000",senior:"$165,000 - $250,000+"},coreSkills:["Figma Wireframing","User Research","Design Systems","Prototyping"],dayInTheLife:"You conduct user interviews, wireframe in Figma, test interactive prototypes, and collaborate with developers.",roadmapNodes:[{id:"ux-step-1",stage:"Exploration",title:"Master Figma & Visual Principles",description:"Learn color theory, layout grids, typography, and visual hierarchy.",estimatedDuration:"6 Months"}]}],y=[{id:"c1",title:"Python for AI & Data Science",category:"Coding",duration:"4 Hours",xpReward:150,description:"Master core Python, NumPy, Pandas, and basic Machine Learning algorithms.",quiz:[{question:"Which Python structure is immutable and ordered?",options:["Tuple","List","Dictionary"],correct:0,exp:"Tuples cannot be modified after creation."}]},{id:"c2",title:"Generative AI & Prompt Engineering",category:"AI Tools",duration:"2 Hours",xpReward:100,description:"Learn zero-shot, few-shot, and chain-of-thought prompt engineering.",quiz:[{question:"What is Chain-of-Thought prompting?",options:["Breaking reasoning step-by-step before answering","Connecting multiple API keys"],correct:0,exp:"Chain-of-thought reduces logical errors."}]},{id:"c3",title:"STAR Interview Framework Mastery",category:"Interview Skills",duration:"3 Hours",xpReward:140,description:"Structure high-impact answers for behavioral and technical interviews.",quiz:[{question:"What does STAR stand for?",options:["Situation, Task, Action, Result","Summary, Topic, Answer, Reaction"],correct:0,exp:"STAR ensures structured answers."}]}],b=[{id:"opp-1",title:"Global Future Tech Innovators Scholarship 2026",type:"Scholarship",org:"Global STEM Foundation",reward:"$10,000 Tuition Grant",deadline:"Aug 30, 2026",desc:"Fully funded grant awarded to high-achieving students in AI, Cyber Security, or Bioengineering."},{id:"opp-2",title:"Summer AI & Full Stack Developer Internship",type:"Internship",org:"Antigravity Labs",reward:"$3,500 / month",deadline:"Aug 15, 2026",desc:"Work alongside software engineers to build generative AI tools and web apps."},{id:"opp-3",title:"HackTheFuture Global Student Hackathon",type:"Hackathon",org:"MLH",reward:"$25,000 Cash Pool",deadline:"Sep 10, 2026",desc:"48-hour global sprint to build solutions in climate tech or healthcare."}];let i=JSON.parse(localStorage.getItem("career_gps_profile")||JSON.stringify(f)),s="dashboard",p=!1,u=[{sender:"ai",text:`Hello ${i.name}! 👋 I am your AI Career Counselor. How can I guide your career roadmap today?`}];function c(){localStorage.setItem("career_gps_profile",JSON.stringify(i))}function n(){const e=document.getElementById("app");e&&(e.innerHTML=`
    <!-- Top Navigation Header -->
    <header style="position: sticky; top: 0; z-index: 100; background: rgba(9,13,22,0.88); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border-glass);">
      <div style="max-width: 1440px; margin: 0 auto; padding: 12px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px;">
        <div id="nav-logo" style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
          <div style="width: 42px; height: 42px; border-radius: 12px; background: var(--grad-primary); display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">🎯</div>
          <div>
            <div style="font-family: var(--font-heading); font-weight: 800; font-size: 1.3rem;">CAREER <span class="gradient-text">GPS</span></div>
            <div style="font-size: 0.72rem; color: var(--text-muted);">Step-by-Step Guidance</div>
          </div>
        </div>

        <nav style="display: flex; gap: 4px; background: rgba(255,255,255,0.03); padding: 4px; border-radius: 14px; border: 1px solid var(--border-glass); overflow-x: auto;">
          ${[{id:"dashboard",label:"Dashboard",icon:"⚡"},{id:"self-discovery",label:"Self-Discovery",icon:"🧬"},{id:"exploration",label:"Careers Library",icon:"🔍"},{id:"recommendations",label:"AI Matches",icon:"✨"},{id:"roadmap",label:"Roadmap",icon:"🛣️"},{id:"learning",label:"Learning Hub",icon:"📚"},{id:"resume-builder",label:"Resume Builder",icon:"📄"},{id:"interview-coach",label:"AI Interview",icon:"🎙️"},{id:"opportunities",label:"Opportunities",icon:"🌐"}].map(t=>`
            <button class="nav-tab-btn" data-tab="${t.id}" style="display: flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 10px; border: none; background: ${s===t.id?"var(--grad-primary)":"transparent"}; color: ${s===t.id?"#fff":"var(--text-muted)"}; font-weight: ${s===t.id?700:500}; cursor: pointer; white-space: nowrap;">
              <span>${t.icon}</span> <span>${t.label}</span>
            </button>
          `).join("")}
        </nav>

        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 5px; background: rgba(245,158,11,0.15); border: 1px solid rgba(245,158,11,0.3); color: #fbbf24; padding: 6px 12px; border-radius: 20px; font-size: 0.82rem; font-weight: 700;">
            ⚡ ${i.streakDays} Days
          </div>
          <div style="display: flex; align-items: center; gap: 6px; background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3); color: #818cf8; padding: 6px 14px; border-radius: 20px; font-size: 0.82rem; font-weight: 700;">
            Lvl ${i.level} • ${i.xp} XP
          </div>
          <button id="toggle-ai-btn" class="btn-primary" style="padding: 8px 14px; font-size: 0.85rem;">
            🤖 AI Counselor
          </button>
        </div>
      </div>
    </header>

    <!-- Main View Content -->
    <main class="app-container">
      ${v()}
    </main>

    <!-- AI Floating Chat Drawer -->
    ${p?I():""}
  `,C())}function v(){switch(s){case"dashboard":return m();case"self-discovery":return x();case"exploration":return h();case"recommendations":return w();case"roadmap":return S();case"learning":return k();case"resume-builder":return $();case"interview-coach":return z();case"opportunities":return A();default:return m()}}function m(){const e=l.find(o=>o.id===i.targetCareerId)||l[0],t=Math.round(i.unlockedRoadmapSteps.length/e.roadmapNodes.length*100);return`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div class="glass-panel" style="padding: 32px; background: linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(6,182,212,0.12) 100%); border: 1px solid rgba(99,102,241,0.25); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
        <div>
          <div style="display: flex; gap: 8px; margin-bottom: 8px;">
            <span class="badge badge-primary">✨ Career GPS Platform</span>
            <span class="badge badge-emerald">⚡ ${i.streakDays} Day Learning Streak</span>
          </div>
          <h1 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 8px;">Welcome back, <span class="gradient-text">${i.name}</span>! 🎯</h1>
          <p style="color: var(--text-muted); font-size: 1rem; max-width: 600px;">
            You are building towards becoming a <strong>${e.title}</strong>. Current profile compatibility match is <strong>96%</strong>.
          </p>
          <div style="margin-top: 20px; display: flex; gap: 12px;">
            <button class="btn-primary" onclick="window.switchTab('roadmap')">Continue Roadmap →</button>
            <button class="btn-secondary" onclick="window.switchTab('self-discovery')">Retake Assessment</button>
          </div>
        </div>
        <div style="background: rgba(15,23,42,0.7); border: 1px solid var(--border-glass); padding: 24px 28px; border-radius: 20px; text-align: center;">
          <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Current Level</div>
          <div style="font-size: 3rem; font-weight: 800; color: #818cf8; font-family: var(--font-heading);">Lvl ${i.level}</div>
          <div style="font-size: 0.88rem; color: #38bdf8; font-weight: 700;">${i.xp} XP Earned</div>
        </div>
      </div>

      <div class="grid-4">
        <div class="glass-panel" style="padding: 20px;">
          <div style="font-size: 0.82rem; color: var(--text-muted);">Target Goal</div>
          <div style="font-size: 1.2rem; font-weight: 800; color: #fff; margin-top: 4px;">${e.title}</div>
          <div style="font-size: 0.8rem; color: #34d399; margin-top: 4px;">Salary: ${e.salaryRange.mid}</div>
        </div>
        <div class="glass-panel" style="padding: 20px;">
          <div style="font-size: 0.82rem; color: var(--text-muted);">Roadmap Progress</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: #fff; margin-top: 4px;">${t}%</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${i.unlockedRoadmapSteps.length} of ${e.roadmapNodes.length} milestones done</div>
        </div>
        <div class="glass-panel" style="padding: 20px;">
          <div style="font-size: 0.82rem; color: var(--text-muted);">Resume ATS Score</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">88 / 100</div>
          <div style="font-size: 0.8rem; color: #34d399;">Ready for Internships</div>
        </div>
        <div class="glass-panel" style="padding: 20px;">
          <div style="font-size: 0.82rem; color: var(--text-muted);">Badges Earned</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: #fff; margin-top: 4px;">${i.badges.length} Badges</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">Explorer & Logic Master</div>
        </div>
      </div>
    </div>
  `}function x(){return`
    <div class="glass-panel" style="padding: 32px;">
      <span class="badge badge-primary" style="margin-bottom: 8px;">🧬 Phase 1: Self Discovery</span>
      <h1 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 8px;">Multi-Dimensional Profile Assessment</h1>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 24px;">Discover your personality type, Holland Code interests, logical aptitude, and core working values.</p>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 24px;">
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); padding: 20px; border-radius: 16px;">
          <div style="font-size: 0.8rem; color: #818cf8; font-weight: 700;">PERSONALITY TYPE</div>
          <div style="font-size: 1.3rem; font-weight: 800; color: #fff; margin-top: 4px;">${i.personalityType}</div>
        </div>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); padding: 20px; border-radius: 16px;">
          <div style="font-size: 0.8rem; color: #34d399; font-weight: 700;">STRENGTHS</div>
          <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-top: 6px;">
            ${i.strengths.map(e=>`<span class="badge badge-emerald">${e}</span>`).join("")}
          </div>
        </div>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); padding: 20px; border-radius: 16px;">
          <div style="font-size: 0.8rem; color: #fbbf24; font-weight: 700;">APTITUDE SCORE</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: #fbbf24; margin-top: 4px;">${i.aptitudeScore} / 100</div>
        </div>
      </div>

      <button class="btn-primary" onclick="window.switchTab('recommendations')">View Top AI Career Matches →</button>
    </div>
  `}function h(){return`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div class="glass-panel" style="padding: 28px 32px; background: linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.1) 100%); border: 1px solid rgba(6,182,212,0.25);">
        <span class="badge badge-cyan" style="margin-bottom: 8px;">🔍 Phase 2: Career Exploration</span>
        <h1 style="font-size: 1.8rem; font-weight: 800;">High-Growth Career Library</h1>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Explore future demand scores, salary benchmarks, and day-in-the-life walkthroughs.</p>
      </div>

      <div class="grid-3">
        ${l.map(e=>`
          <div class="glass-panel glass-card-interactive" style="padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span class="badge badge-primary">${e.category}</span>
                <span style="font-size: 0.78rem; color: #34d399; font-weight: 700;">Demand: ${e.futureDemandScore}%</span>
              </div>
              <h3 style="font-size: 1.2rem; font-weight: 800; color: #fff; margin-bottom: 6px;">${e.title}</h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 14px;">${e.tagline}</p>
              <div style="font-size: 0.82rem; color: #fbbf24; font-weight: 700; margin-bottom: 12px;">Mid Salary: ${e.salaryRange.mid}</div>
            </div>
            <button class="btn-primary" style="width: 100%; justify-content: center; font-size: 0.84rem;" onclick="window.setTargetCareer('${e.id}')">Set as My Career Target</button>
          </div>
        `).join("")}
      </div>
    </div>
  `}function w(){return`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div class="glass-panel" style="padding: 28px 32px; background: linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(217,70,239,0.15) 100%);">
        <span class="badge badge-primary" style="margin-bottom: 8px;">✨ Phase 3: AI Recommendation Engine</span>
        <h1 style="font-size: 1.8rem; font-weight: 800;">Top AI Career Matches</h1>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Personalized career choices computed from your interests, aptitude, and personality.</p>
      </div>

      <div class="grid-3">
        ${l.map((e,t)=>`
          <div class="glass-panel" style="padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                <span style="background: var(--grad-primary); color: #fff; font-weight: 800; padding: 4px 12px; border-radius: 20px; font-size: 0.9rem;">${98-t*5}% Match</span>
                <span class="badge badge-emerald">Rank #${t+1}</span>
              </div>
              <h3 style="font-size: 1.25rem; font-weight: 800; color: #fff; margin-bottom: 4px;">${e.title}</h3>
              <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 14px;">${e.tagline}</p>
            </div>
            <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="window.setTargetCareer('${e.id}')">Generate Step Roadmap →</button>
          </div>
        `).join("")}
      </div>
    </div>
  `}function S(){const e=l.find(t=>t.id===i.targetCareerId)||l[0];return`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div class="glass-panel" style="padding: 28px 32px; background: linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(6,182,212,0.12) 100%);">
        <span class="badge badge-primary" style="margin-bottom: 8px;">🛣️ Phase 4: Step-by-Step Roadmap</span>
        <h1 style="font-size: 1.8rem; font-weight: 800;">Roadmap for <span class="gradient-text">${e.title}</span></h1>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Mark milestones as complete to earn +50 XP each!</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px;">
        ${e.roadmapNodes.map((t,o)=>{const d=i.unlockedRoadmapSteps.includes(t.id);return`
            <div class="glass-panel" style="padding: 24px; border: ${d?"1px solid rgba(16,185,129,0.4)":"1px solid var(--border-glass)"}; background: ${d?"rgba(16,185,129,0.04)":"var(--bg-card)"};">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <span class="badge badge-cyan">${t.stage} • ${t.estimatedDuration}</span>
                  <h3 style="font-size: 1.3rem; font-weight: 800; color: #fff; margin-top: 6px;">Step ${o+1}: ${t.title}</h3>
                  <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px;">${t.description}</p>
                </div>
                <button class="${d?"btn-secondary":"btn-primary"}" onclick="window.toggleStep('${t.id}')">
                  ${d?"✓ Done (+50 XP)":"Mark Complete"}
                </button>
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function k(){return`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div class="glass-panel" style="padding: 28px 32px; background: linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(6,182,212,0.12) 100%);">
        <span class="badge badge-emerald" style="margin-bottom: 8px;">📚 Phase 5 & 6: Learning & Skill Assessments</span>
        <h1 style="font-size: 1.8rem; font-weight: 800;">Build Skills & Complete Quizzes</h1>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Test your knowledge, earn XP, and unlock achievement badges.</p>
      </div>

      <div class="grid-3">
        ${y.map(e=>`
          <div class="glass-panel" style="padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span class="badge badge-cyan">${e.category}</span>
                <span class="badge badge-amber">+${e.xpReward} XP</span>
              </div>
              <h3 style="font-size: 1.2rem; font-weight: 800; color: #fff; margin-bottom: 6px;">${e.title}</h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 14px;">${e.description}</p>
            </div>
            <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="window.takeQuiz('${e.id}')">Start Skill Quiz →</button>
          </div>
        `).join("")}
      </div>
    </div>
  `}function $(){return`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div class="glass-panel" style="padding: 28px 32px; background: linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(99,102,241,0.12) 100%); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <span class="badge badge-amber" style="margin-bottom: 8px;">📄 Phase 8: Resume Builder</span>
          <h1 style="font-size: 1.8rem; font-weight: 800;">Interactive AI Resume Builder</h1>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Build an ATS-ready resume with real-time feedback.</p>
        </div>
        <div style="background: rgba(15,23,42,0.8); padding: 16px 24px; border-radius: 16px; text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted);">AI ATS Score</div>
          <div style="font-size: 2rem; font-weight: 800; color: #fbbf24;">88 / 100</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
        <div class="glass-panel" style="padding: 24px;">
          <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 16px;">Edit Student Resume</h3>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div>
              <label style="font-size: 0.8rem; color: var(--text-muted);">Full Name</label>
              <input type="text" value="${i.name}" style="width: 100%; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 8px; padding: 8px 12px; color: #fff;" />
            </div>
            <div>
              <label style="font-size: 0.8rem; color: var(--text-muted);">Summary</label>
              <textarea rows="3" style="width: 100%; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 8px; padding: 8px 12px; color: #fff;">Grade 11 student passionate about Python AI algorithms and Web Development.</textarea>
            </div>
          </div>
        </div>

        <div className="glass-panel" style="padding: 28px; background: #ffffff; color: #0f172a; border-radius: 16px;">
          <h2 style="font-size: 1.6rem; font-weight: 800; color: #0f172a; border-bottom: 2px solid #0f172a; padding-bottom: 8px; margin-bottom: 12px;">${i.name}</h2>
          <div style="font-size: 0.84rem; color: #475569; margin-bottom: 14px;">alex.morgan@student.edu • Seattle, WA</div>
          <h4 style="font-size: 0.85rem; font-weight: 800; color: #6366f1; text-transform: uppercase;">Summary</h4>
          <p style="font-size: 0.84rem; color: #334155; margin-bottom: 14px;">Grade 11 student passionate about Python AI algorithms and Web Development.</p>
          <h4 style="font-size: 0.85rem; font-weight: 800; color: #6366f1; text-transform: uppercase;">Skills</h4>
          <p style="font-size: 0.84rem; color: #334155;">Python • TypeScript • React • Data Structures • Figma</p>
        </div>
      </div>
    </div>
  `}function z(){return`
    <div class="glass-panel" style="padding: 32px;">
      <span class="badge badge-primary" style="margin-bottom: 8px;">🎙️ Phase 8: AI Interview Coach</span>
      <h1 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 12px;">AI Mock Interview Simulator</h1>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 24px;">Practice answering STAR framework behavioral & technical interview questions.</p>

      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); padding: 24px; border-radius: 16px; margin-bottom: 20px;">
        <div style="font-size: 1.2rem; font-weight: 800; color: #fff; margin-bottom: 16px;">
          "Tell me about a time you faced a difficult technical bug or project obstacle and how you overcame it."
        </div>
        <textarea id="interview-ans" rows="4" placeholder="Type your response using STAR framework..." style="width: 100%; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 12px; padding: 14px; color: #fff; outline: none; margin-bottom: 14px;"></textarea>
        <button class="btn-primary" onclick="window.submitInterviewAns()">Submit Answer for AI Review →</button>
      </div>

      <div id="interview-feedback-box" style="display: none; background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.3); padding: 20px; border-radius: 16px;">
        <div style="font-size: 1.1rem; font-weight: 800; color: #34d399;">AI Rating: 94 / 100</div>
        <p style="font-size: 0.88rem; color: #fff; margin-top: 6px;">Great STAR structure! Your action steps were clear and articulate.</p>
      </div>
    </div>
  `}function A(){return`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div class="glass-panel" style="padding: 28px 32px; background: linear-gradient(135deg, rgba(6,182,212,0.18) 0%, rgba(16,185,129,0.12) 100%);">
        <span class="badge badge-cyan" style="margin-bottom: 8px;">🌐 Phase 9: Opportunity Center</span>
        <h1 style="font-size: 1.8rem; font-weight: 800;">Scholarships, Internships & Hackathons</h1>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Connect with global tech opportunities, grants, and bootcamps.</p>
      </div>

      <div class="grid-2">
        ${b.map(e=>`
          <div class="glass-panel" style="padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <span class="badge badge-cyan" style="margin-bottom: 8px;">${e.type}</span>
              <h3 style="font-size: 1.25rem; font-weight: 800; color: #fff; margin-bottom: 4px;">${e.title}</h3>
              <div style="font-size: 0.85rem; color: #818cf8; font-weight: 600; margin-bottom: 10px;">${e.org}</div>
              <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 14px;">${e.desc}</p>
              <div style="font-size: 0.84rem; color: #34d399; font-weight: 700;">Grant / Stipend: ${e.reward}</div>
            </div>
            <button class="btn-primary" style="margin-top: 16px; justify-content: center;" onclick="alert('Application link opened for ${e.title}')">Apply Now ↗</button>
          </div>
        `).join("")}
      </div>
    </div>
  `}function I(){return`
    <div style="position: fixed; bottom: 24px; right: 24px; width: 400px; height: 580px; max-width: calc(100vw - 32px); z-index: 1000; background: rgba(15,23,42,0.96); backdrop-filter: blur(24px); border: 1px solid var(--border-glass-glow); border-radius: 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.6); display: flex; flex-direction: column; overflow: hidden;">
      <div style="padding: 16px 20px; background: linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(6,182,212,0.15) 100%); border-bottom: 1px solid var(--border-glass); display: flex; justify-content: space-between; align-items: center;">
        <div style="font-weight: 800; color: #fff; display: flex; align-items: center; gap: 8px;">
          <span>🤖</span> AI Career Counselor
        </div>
        <button onclick="window.toggleAIChat()" style="background: transparent; border: none; color: #fff; cursor: pointer; font-size: 1.2rem;">✕</button>
      </div>

      <div style="flex: 1; padding: 16px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px;">
        ${u.map(e=>`
          <div style="align-self: ${e.sender==="user"?"flex-end":"flex-start"}; background: ${e.sender==="user"?"var(--grad-primary)":"rgba(30,41,59,0.9)"}; color: #fff; padding: 10px 14px; border-radius: 14px; max-width: 85%; font-size: 0.88rem;">
            ${e.text}
          </div>
        `).join("")}
      </div>

      <form onsubmit="window.sendChatMessage(event)" style="padding: 12px; border-top: 1px solid var(--border-glass); display: flex; gap: 8px;">
        <input id="chat-input-field" type="text" placeholder="Ask AI Career Counselor..." style="flex: 1; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: 10px; padding: 8px 12px; color: #fff; outline: none;" />
        <button type="submit" class="btn-primary" style="padding: 8px 14px;">Send</button>
      </form>
    </div>
  `}function C(){document.querySelectorAll(".nav-tab-btn").forEach(o=>{o.addEventListener("click",()=>{s=o.getAttribute("data-tab"),n()})});const e=document.getElementById("nav-logo");e&&(e.onclick=()=>{s="dashboard",n()});const t=document.getElementById("toggle-ai-btn");t&&(t.onclick=()=>{p=!p,n()})}window.switchTab=e=>{s=e,n()};window.toggleAIChat=()=>{p=!p,n()};window.setTargetCareer=e=>{i.targetCareerId=e,c(),s="roadmap",n()};window.toggleStep=e=>{i.unlockedRoadmapSteps.includes(e)||(i.unlockedRoadmapSteps.push(e),i.xp+=50,i.level=Math.floor(i.xp/200)+1,c(),window.confetti&&window.confetti({particleCount:70,spread:60})),n()};window.takeQuiz=e=>{i.xp+=150,i.level=Math.floor(i.xp/200)+1,i.completedQuizzes.push(e),c(),window.confetti&&window.confetti({particleCount:90,spread:70}),alert("🎉 Skill Quiz Passed! Earned +150 XP!"),n()};window.submitInterviewAns=()=>{if(!document.getElementById("interview-ans").value)return;i.xp+=50,c();const t=document.getElementById("interview-feedback-box");t&&(t.style.display="block"),window.confetti&&window.confetti({particleCount:50})};window.sendChatMessage=e=>{e.preventDefault();const t=document.getElementById("chat-input-field");if(!t||!t.value.trim())return;const o=t.value.trim();u.push({sender:"user",text:o}),t.value="",setTimeout(()=>{u.push({sender:"ai",text:`For your target career in ${i.targetCareerId.toUpperCase()}, I recommend taking python/data courses and applying for top summer internships in the Opportunity Center!`}),n()},400),n()};n();
