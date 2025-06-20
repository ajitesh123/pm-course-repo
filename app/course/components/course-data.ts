import { Course } from './types';

// PM Interview Prep Course Data
export const courseData: Course = {
  title: "The Ultimate PM Interview Prep Course",
  modules: [
    {
      id: "fundamentals",
      title: "Interview Fundamentals",
      lessons: [
        {
          id: "intro-course",
          title: "A Simpler Approach to PM Interviews",
          duration: "8:00",
          videoUrl: "https://youtu.be/uszOiXBEp5A",
          mediaType: "youtube",
          description: "Welcome to the course! Learn the three key elements for PM interview success:\n\n1. **PM Mindset** - Understanding interviewer perspectives\n2. **10X Ideas** - Techniques to stand out\n3. **Get Inspired** - For your PM career, not just interviews\n\nDiscover why PM interviews test how you'll operate as a PM - making decisions with limited data, running imperfect A/B tests, and designing market-fit features. Unlike coding interviews, PM questions are easy but with no right answers."
        },
        {
          id: "interview-structure",
          title: "Generic Interview Structure: Beginning, Middle, End",
          duration: "5:30",
          videoUrl: "https://youtu.be/R1UDozyBO1U",
          mediaType: "youtube",
          description: "Master the three-part structure that applies to any interview answer:\n\n**Beginning:** Map the question to a product situation, understand business goals, define scope and constraints. This is where frameworks shine.\n\n**Middle:** The actual work - brainstorming ideas, analyzing tradeoffs, prioritizing solutions. This tests your on-the-feet thinking.\n\n**End:** Step back, conclude, and acknowledge how you could be wrong.\n\n*Most good candidates get the beginning right, but it's the middle and end that set outstanding ones apart.*"
        },
        {
          id: "question-types",
          title: "PM Interview: Different Question Types",
          duration: "7:00",
          videoUrl: "https://youtu.be/zx1X9fS2k7Y",
          mediaType: "youtube",
          description: "Overview of 6 PM interview question categories:\n\n1. **Product Design** - Test ability to define what to build (PRDs)\n2. **Product Strategy** - Assess strategic thinking for 3-year plans and market positioning\n3. **Product Analytical** - Evaluate skills in metrics, A/B tests, and market sizing\n4. **Product Execution** - Test micro-decision making when metrics change\n5. **Technical** - Ensure you can work as engineering's peer\n6. **Behavioral** - Reveal how you handled relevant PM situations before"
        },
        {
          id: "brainstorming-techniques",
          title: "How to Brainstorm 10X Better",
          duration: "10:00",
          videoUrl: "https://youtu.be/Pjz7TZRV-v8",
          mediaType: "youtube",
          description: "Learn 4 powerful brainstorming techniques:\n\n1. **Anchor to emerging tech** (AR/VR, GenAI, blockchain, space tech)\n   - Example: \"How could AR/VR make Google Maps more useful?\"\n\n2. **Use conceptual analogies**\n   - Like Wright brothers comparing flight to bicycle balance\n\n3. **Draw from sci-fi/fiction**\n   - Harry Potter inspired products like invisibility cloaks or VR Pensieve meeting rooms\n\n4. **SCAMPER method**\n   - Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Rearrange\n\n*Includes extensive list of 100+ futuristic technologies to spark ideas.*"
        },
        {
          id: "how-to-conclude",
          title: "How to Conclude Your Answers",
          duration: "5:00",
          videoUrl: "https://youtu.be/94pHgqj4aGI",
          mediaType: "youtube",
          description: "Three critical elements for strong conclusions:\n\n1. **Save time to conclude**\n   - Use active check-ins\n   - Prioritize fast\n   - Say what you'd do with more time\n\n2. **Strong recap**\n   - Highlight key aspects (goals, customer segments, chosen problems, solutions)\n   - Give names to features/pillars for memorability\n\n3. **Acknowledge potential oversights**\n   - Security/privacy implications\n   - AI biases\n   - Competitor responses\n   - False signals in metrics\n   - Primacy/novelty effects in testing"
        },
        {
          id: "general-tips",
          title: "General Interview Tips",
          duration: "4:30",
          videoUrl: "https://youtu.be/9uNF1fJdXic",
          mediaType: "youtube",
          description: "Three essential tips for PM interview success: 1) Do mocks right - quality over quantity, aim for 10-20 sessions with skilled partners, 2) Focus on delivery - use Aristotle's Tell-Them framework, golden rule of three, strategic pauses, 3) Get a practice partner - use online forums, peer groups, or coaches. Emphasizes how AI has changed interview prep landscape. Remember: small tweaks in communication can make a big difference."
        },
        {
          id: "before-interview",
          title: "Before Interview Day Tips",
          duration: "3:30",
          videoUrl: "https://youtu.be/NKL4cvaXiYc",
          mediaType: "youtube",
          description: "Essential pre-interview preparation: Avoid last-minute mocks, research the firm's strategy and challenges, experience their products firsthand, craft 3-4 must-land points about your strengths, prepare thoughtful questions for interviewers (simple, conversational, open-ended), establish your pre-interview ritual (motivators vs process-driven thinkers). Particularly important for on-site rounds at target companies."
        }
      ]
    },
    {
      id: "product-design",
      title: "Product Design & Strategy",
      lessons: [
        {
          id: "design-questions-intro",
          title: "Product Design Questions Overview",
          duration: "8:00",
          videoUrl: "https://youtu.be/OwNuAD5p5AA",
          mediaType: "youtube",
          description: "Learn why product design questions are core to PM interviews (asked 4-5 times in typical 5-6 round interviews). Understand two types: 1) Improvement of existing products - redesign favorites or add features, 2) New product design - leverage hypothetical technologies. Scoring criteria: ask clarifying questions to define scope, solve specific customer problems for well-defined segments, prioritize with limited resources, consider security/privacy/regulations. Examples include designing Uber for visually impaired or products using smell teleportation technology."
        },
        {
          id: "design-how-to-answer",
          title: "How to Answer Product Design Questions",
          duration: "10:00",
          videoUrl: "https://youtu.be/F1lKHY8MFSk",
          mediaType: "youtube",
          description: "Master the structured approach: 1) Goals and constraints - identify goals (market penetration) and constraints (timeline, resources), 2) Customer problem - define specific customer segment and their precise problem, 3) Solution - mix of futuristic and practical features with clear prioritization. Learn how this mirrors writing Product Requirements Documents (PRDs). Use Google's HEART framework (Happiness, Engagement, Adoption, Retention, Task success) to set goals. Always ask about success metrics."
        },
        {
          id: "design-5-tips",
          title: "Product Design - 5 Essential Tips",
          duration: "7:30",
          videoUrl: "https://youtu.be/_01gmuAmtu0",
          mediaType: "youtube",
          description: "Five key tips from ex-Google PM: 1) Solve like a real-life problem - set clear goals and timeline, 2) Customer-problem-solution - keep these distinct, use 'How might we' statements, 3) Go broad to go narrow - enumerate 3 options at each stage (customers, problems, solutions), then prioritize, 4) Build deep customer understanding - avoid generic segments, describe customer journey, 5) Offer variety in solutions - software/hardware, simple to complex, increasing order of complexity."
        },
        {
          id: "favorite-product",
          title: "Answering 'What's Your Favorite Product?'",
          duration: "6:00",
          videoUrl: "https://youtu.be/DLv10vzJucY",
          mediaType: "youtube",
          description: "Master this common opener: Choose products you know well, are passionate about (ideally hobby-related), and avoid mainstream choices. Keep a mix of software/hardware/company products. Explain why in 2-3 minutes concisely, leaving time for redesign portion. When asked to redesign: Don't just list improvements - use the full framework (identify goals/constraints, map customer problems, brainstorm solutions). Apply all previously discussed strategies."
        },
        {
          id: "fitness-app-example",
          title: "Example: Design a Fitness App",
          duration: "15:00",
          videoUrl: "https://youtu.be/GX-k5XQQ8rI",
          mediaType: "youtube",
          description: "Complete walkthrough of answering 'Design a fitness app for Big Tech':\n\n## 1. Clarify Goals & Scope\n- **Goal**: Mass adoption in 2-3 years, monetize later\n- **Scope**: All tech available (hardware, software, ML, AR)\n\n## 2. Customer Segmentation\n- Body-builders (niche, high dropout)\n- **Weight-loss seekers** ✓ (billions of users, high need)\n- Runners/cyclists (passionate but small)\n- Recreational athletes (drops in adulthood)\n\n## 3. Deep Dive on Chosen Persona\n- 35yo working parent\n- Time-scarce, low motivation\n- Confused by conflicting advice\n- **HMW**: Help busy professionals lose weight with minimal time?\n\n## 4. Solution Brainstorming\n1. **Fitness.AI** - LLM chat coach with human trainer\n2. **Fitness.AR** - Project gym into living room\n3. **Spaceless Fit** - Transforming desk-to-gym furniture\n\n## 5. Success Metrics\n- 1M MAU in 12 months\n- 3% body weight loss by week 12"
        },
        {
          id: "google-mock-interview",
          title: "Google PM Mock Interview Demo",
          duration: "20:00",
          videoUrl: "https://youtu.be/n0nBJAtYhv8",
          mediaType: "youtube",
          description: "Watch a former Google PM tackle a full product design interview using Tough Tongue AI. See how to structure responses, handle follow-up questions, demonstrate 10X thinking, and use the debrief feature to improve. Covers Google's emphasis on moonshot ideas, global scale thinking, and 'Googliness' (being coachable, original thinking, avoiding suggesting existing features as new)."
        },
        {
          id: "ai-practice-google-design",
          title: "AI Practice: Google Product Design",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/google-pm-interviewer-676a419fae833c968b618f17?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Practice Google-style product design with focus on 10X thinking and moonshot ideas. The AI interviewer maintains strict interviewer role while testing your ability to design innovative products using Google's principles. Expect questions about hypothetical technologies (teleportation, smell transfer) requiring creative yet practical solutions. Get real-time feedback on structure, creativity, and feasibility."
        },
        {
          id: "ai-practice-generic-design",
          title: "AI Practice: Generic Product Design",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/pm-interview-product-design-interviewer-677e7d04261d3f3e3803b97e?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Build strong foundation in product design with various questions from top tech companies. Practice the customer-problem-solution framework, learn to go broad then narrow, and develop skills in prioritization. Covers both existing product improvements and new product creation. Perfect for mastering the structured approach before company-specific practice."
        },
        {
          id: "ai-practice-favorite-product",
          title: "AI Practice: Favorite Product Question",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/pm-interview-favorite-product-question-677e5dbd261d3f3e3803b968?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Practice the most common PM interview opener. Learn to articulate why you love a product in 2-3 minutes, then seamlessly transition to redesigning it using proper frameworks. The AI helps you avoid common pitfalls like choosing overly mainstream products or just listing features without structure. Get feedback on passion, structure, and improvement ideas."
        },
        {
          id: "strategy-questions-intro",
          title: "Product Strategy Questions Overview",
          duration: "8:00",
          videoUrl: "https://youtu.be/4_0glrf8wq0",
          mediaType: "youtube",
          description: "Learn why strategy questions are crucial for PM roles, especially at big tech where you need backing from leadership and must inspire teams. Understand scoring criteria: 1) Analysis of market forces (customers, competition, trends) for strategic insights, 2) Persuasive, concise product narrative with compelling vision, 3) Balanced details - not too high-level or too detailed. Common at big tech, less emphasis at startups where founders set strategy."
        },
        {
          id: "strategy-how-to-answer",
          title: "How to Answer Strategy Questions",
          duration: "10:00",
          videoUrl: "https://youtu.be/lYvBEuHQmqQ",
          mediaType: "youtube",
          description: "Master the **Why-What-How framework** inspired by Simon Sinek:\n\n## WHY - Analyze Market Forces\n- **Customer segments**: size, growth patterns\n- **Competition**: intensity, key bets, market position\n- **Company**: strengths and weaknesses\n- **Trends**: AI, AR/VR, new technologies\n\n## WHAT - Create Compelling Vision\n- 1-2 line product narrative\n- 3 strategic pillars (no more, no less)\n- Clear direction and inspiration\n\n## HOW - Show Execution Feasibility\n- Concrete features for each pillar\n- Increasing complexity options\n- Avoid proposing existing features as new\n\n*Apply this to general strategy, market entry, and new opportunity questions.*"
        },
        {
          id: "strategy-mock",
          title: "Strategy Mock: Samsung Gaming Console",
          duration: "12:00",
          videoUrl: "https://youtu.be/fHaQJAeFdJc",
          mediaType: "youtube",
          description: "Complete strategy analysis: Should Samsung enter gaming consoles? See how to clarify investment timeframe and resources, analyze customers (hardcore vs beginner gamers), assess competition (Microsoft, Sony, Nintendo, Google Stadia's failure), evaluate trends (cloud gaming, GenAI for content), leverage company strengths (hardware expertise, existing gaming users), and recommend staged approach - software first, then hardware in 2-3 years with content acquisitions."
        },
        {
          id: "ai-practice-strategy",
          title: "AI Practice: Strategy Questions",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/pm-interview-strategy-questions-67781597305e81f4d983300a?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Practice various strategy scenarios: 3-year product strategies, market entry decisions, competitive positioning. Learn to analyze market forces systematically, craft compelling product narratives, and balance strategic vision with execution details. The AI guides you through the Why-What-How framework while challenging your assumptions about markets, competition, and trends."
        },
        {
          id: "ai-practice-gtm",
          title: "AI Practice: Go-to-Market Strategy",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/pm-interview-gtm-strategy-question-677e4fc7261d3f3e3803b94a?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Develop comprehensive GTM strategies coordinating product, marketing, sales, and operations. Practice identifying target segments, defining value propositions, selecting distribution channels, setting pricing strategy, and planning launch sequences. Learn to think holistically about product launches beyond just features. Critical for senior PM roles."
        }
      ]
    },
    {
      id: "analytical-metrics",
      title: "Analytical & Metrics",
      lessons: [
        {
          id: "analytics-intro",
          title: "Product Analytics Questions Overview",
          duration: "7:00",
          videoUrl: "https://youtu.be/83LJtoUH7b0",
          mediaType: "youtube",
          description: "Understand three types of analytical questions:\n\n1. **Estimation**\n   - Market sizing, storage capacity\n   - Using anchoring/proxies/personal references\n\n2. **A/B Testing**\n   - Hypothesis testing\n   - Avoiding novelty/primacy effects\n   - Statistical significance\n\n**Red flags to avoid:**\n- Not showing assumptions\n- Not breaking down problems\n- Not acknowledging uncertainties"
        },
        {
          id: "estimation-framework",
          title: "Estimation Questions Framework",
          duration: "10:00",
          videoUrl: "https://youtu.be/f2QWQWr2Vcc",
          mediaType: "youtube",
          description: "Master the 5-step approach:\n\n1. **Clarify requirements** - Get specific on geography, segments, timeframe\n\n2. **Break down into components**\n   - Formulas (price × quantity)\n   - Segmentation (by age/geography)\n   - Parts-based approach\n\n3. **Estimate using techniques**\n   - Anchoring (city population for cars)\n   - Proxies (consumption to estimate production)\n   - Personal references (last resort)\n\n4. **Quick check** - Order of magnitude, compare to known values\n\n5. **Communicate uncertainties** - State assumptions and limitations\n\n**Handy numbers to remember:**\n- US population: 300M\n- World: 8B\n- US GDP: $23T\n- Smartphone penetration: 80%\n- Average photo: 3MB"
        },
        {
          id: "estimation-mock",
          title: "Estimation Mock: YouTube Storage",
          duration: "15:00",
          videoUrl: "https://youtu.be/QTXe5fqnt58",
          mediaType: "youtube",
          description: "Complete walkthrough estimating YouTube's storage needs. See how to break down by video uploads per day, average video size by quality (720p: 75MB/5min, 1080p: 1.5GB/hour, 4K: 15-20GB/2hours), consider redundancy and CDN requirements. Learn to make reasonable assumptions about creator behavior, viewing patterns, and infrastructure needs. Demonstrates order-of-magnitude checking and clear communication of logic."
        },
        {
          id: "ab-testing-framework",
          title: "A/B Testing Questions",
          duration: "8:00",
          videoUrl: "https://youtu.be/eEQNDqkPBrs",
          mediaType: "youtube",
          description: "Master A/B testing fundamentals:\n\n1. **Define hypotheses**\n   - Null hypothesis: no difference between groups\n   - Alternative hypothesis: measurable difference exists\n\n2. **Use PICOT framework**\n   - **P**opulation: target users\n   - **I**ntervention: variant change\n   - **C**omparison: control group\n   - **O**utcome: key metrics\n   - **T**ime: test duration\n\n3. **Watch for biases**\n   - *Novelty effect*: initial curiosity spike\n   - *Primacy effect*: resistance to change\n   - *Interference*: groups affecting each other\n\n4. **Statistical significance**\n   - p-value < 0.05 standard\n   - Avoid false positives\n\n*Get hands-on with tools like Mixpanel, Amplitude, Optimizely.*"
        },
        {
          id: "metrics-framework",
          title: "Product Metrics Questions",
          duration: "9:00",
          videoUrl: "https://youtu.be/Ix7z-hs51Rs",
          mediaType: "youtube",
          description: "Five tips for metrics mastery:\n\n1. **Ask clarifying questions** about product scope and business goals\n\n2. **Go broad to narrow**\n   - Brainstorm 10+ metrics including unconventional ones\n   - Then prioritize to 3 key metrics\n\n3. **Map metrics to user actions** achieving business goals\n\n4. **Balance metric types**\n   - Include at least one guardrail metric\n   - Mix leading and lagging indicators\n\n5. **Consider pitfalls**\n   - False positives\n   - Industry benchmarks (NRR for SaaS, DAU/MAU for social)\n   - Leading vs lagging indicators\n\n**Example:** ChatGPT launch metrics balancing usefulness with AI safety"
        },
        {
          id: "ai-practice-metrics-coach",
          title: "AI Practice: Metrics Question Coach",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/coach-for-pm-interview-metrics-questions-677800ed305e81f4d9832ff2?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Get personalized coaching on metrics approaches. Learn frameworks for different product stages (launch, growth, maturity), understand metric hierarchies (north star, primary, guardrail), practice balancing acquisition, engagement, retention, and monetization metrics. The AI coach helps you avoid common pitfalls like vanity metrics or missing counter-metrics."
        },
        {
          id: "ai-practice-estimation",
          title: "AI Practice: Estimation Questions",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/pm-interview-estimation-question-677e54ed261d3f3e3803b95e?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Practice various estimation types: market sizing (self-driving cars, shampoo bottles), revenue calculations (Airbnb, Google Play), capacity planning (storage, compute). Learn when to use top-down vs bottom-up approaches, how to make and state reasonable assumptions, and techniques for sanity checking. Builds confidence in handling ambiguous quantitative problems."
        },
        {
          id: "ai-practice-ab-testing",
          title: "AI Practice: A/B Testing",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/pm-interview-a-b-testing-question-677e50fa261d3f3e3803b94c?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Design and analyze A/B tests for real scenarios. Practice forming hypotheses, defining success metrics, calculating sample sizes, avoiding common biases, and interpreting results. Learn to balance statistical rigor with practical considerations like test duration and business impact. Covers both feature tests and growth experiments."
        },
        {
          id: "ai-practice-youtube-metrics",
          title: "AI Practice: YouTube Metrics Analysis",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/pm-interviews-youtube-metrics-679a1c9aea5045dfea91233d?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Deep dive into platform metrics using YouTube as example. Understand creator vs viewer metrics, balance content quality with quantity, design metrics for recommendation algorithms, handle multi-sided marketplace dynamics. Learn to think about ecosystem health, not just user engagement. Excellent for platform/marketplace PM roles."
        }
      ]
    },
    {
      id: "execution",
      title: "Product Execution",
      lessons: [
        {
          id: "execution-intro",
          title: "Execution Questions Overview",
          duration: "7:00",
          videoUrl: "https://youtu.be/aBZELKmACzM",
          mediaType: "youtube",
          description: "Learn how execution questions simulate day-to-day PM work: diagnosing problems, making decisions, working with data. Three types: 1) Problem diagnosis - 'DAU dropped 30%', test systematic analysis, 2) Tradeoff evaluation - 'improve engagement but reduce revenue', test decision-making, 3) Behavioral - 'how do you resolve conflicts?', test collaboration. Scoring: ability to diagnose systematically, critical thinking, clear communication, quantitative skills. Best prep: shadow engineers during outages, do cross-team projects."
        },
        {
          id: "ai-practice-root-cause",
          title: "AI Practice: Root Cause Analysis",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/pm-interview-root-cause-analysis-question-677e5207261d3f3e3803b952?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Master systematic problem diagnosis using process of elimination. Practice breaking down issues into components (technical stack, user journey, internal/external factors), asking targeted questions to eliminate possibilities, avoiding premature conclusions. Learn from real examples like Reddit's traffic drop from API protests affecting Google Search results. Develop skills to handle metric drops calmly and methodically."
        },
        {
          id: "ai-practice-decision-making",
          title: "AI Practice: Decision Making",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/pm-interview-decision-making-question-677e5428261d3f3e3803b958?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Navigate complex tradeoffs using goal-oriented decision making. Practice: agreeing on high-level goals first, defining clear evaluation criteria, weighing options with evidence (data, surveys), acknowledging downsides and planning mitigation. Learn to avoid biases (sunk cost, confirmation, anchoring) and when to escalate vs collaborate vs empower domain experts. Based on real PM scenarios."
        },
        {
          id: "ai-practice-execution-set1",
          title: "AI Practice: Execution Challenges",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/pm-interview-execution-question-set-1-677e8317de365dba3af0055c?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Work through daily PM execution scenarios: handling customer escalations, prioritizing competing requests, managing technical debt vs features, coordinating launches across teams, dealing with resourcing constraints. Practice stakeholder communication, data-driven prioritization, and tactical problem-solving. Builds confidence in operational excellence expected from PMs."
        }
      ]
    },
    {
      id: "technical",
      title: "Technical Skills for PMs",
      lessons: [
        {
          id: "technical-intro",
          title: "Technical Questions for PMs",
          duration: "6:00",
          videoUrl: "https://youtu.be/e_sJQLTghXw",
          mediaType: "youtube",
          description: "Understand why technical credibility matters for PMs - you need to be engineering's peer, not their boss. At Google, technical complexity handled affects promotions. CS degree not required - skills matter more. Four question types: 1) Experience-based - 'tell me about working with engineers', 2) System design - most common, design pastebin/crawler/chat, 3) Algorithm - rarely coding, more pseudocode logic, 4) Tech 101 - 'how does internet work?' for baseline knowledge assessment."
        },
        {
          id: "system-design-101",
          title: "System Design 101 for PMs",
          duration: "18:00",
          videoUrl: "https://youtu.be/602YEv0UbEM",
          mediaType: "youtube",
          description: "Learn system design from simple to scaled architecture. Covers: client-server models, load balancing (round-robin, least connections), caching strategies (Redis, CDN), databases (SQL vs NoSQL, CAP theorem), replication and sharding, API design and rate limiting, event-driven architectures (Kafka, Pub/Sub), cloud-native principles (microservices, containers, serverless). Example: designing web crawler with URL frontier, content deduplication, distributed crawling. Remember: clarify requirements, sketch high-level design, let interviewer guide depth."
        },
        {
          id: "ai-coding-demo",
          title: "AI Coding Interview Demo",
          duration: "10:00",
          videoUrl: "https://youtu.be/GHeRNcDhdXE",
          mediaType: "youtube",
          description: "Watch how Tough Tongue AI guides candidates through technical problems like Two Sum. See how voice-based practice helps build confidence in explaining technical concepts, writing pseudocode, and thinking through edge cases. Useful for PMs who need to demonstrate basic algorithmic thinking without deep coding expertise."
        },
        {
          id: "ai-practice-technical-coach",
          title: "AI Practice: PM Technical Coach",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/pm-technical-interview-coach-67780037305e81f4d9832ff0?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Comprehensive technical coaching covering what PMs need: system design basics, API fundamentals, database tradeoffs, scalability concepts, and communication with engineers. Practice explaining technical decisions in PM context - latency requirements, data consistency needs, infrastructure costs. Builds vocabulary and confidence to be credible technical partner without being an engineer."
        }
      ]
    },
    {
      id: "behavioral",
      title: "Behavioral & Leadership",
      lessons: [
        {
          id: "behavioral-intro",
          title: "Behavioral Interview Questions",
          duration: "5:00",
          videoUrl: "https://youtu.be/E3CTpffLMxo",
          mediaType: "youtube",
          description: "Learn why behavioral questions matter: past behavior predicts future performance. Four types: 1) Pitch - 'tell me about yourself', highlight genuine enthusiasm, 2) Fit - 'why this company?', show informed perspective from research, 3) Experience-based - use STAR/PAR method for 60-90 second stories, 4) Hypothetical - apply goal-oriented decision making. Build story bank of 5-6 recent high-impact situations. Amazon focuses on Leadership Principles, Google on PM competencies, Facebook on hypotheticals."
        },
        {
          id: "ai-practice-amazon-lp",
          title: "AI Practice: Amazon Leadership Principles",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/amazon-pm-interviewer-676b9d4974ab68fd4a5aaf65?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Master Amazon's 16 Leadership Principles through targeted practice. Learn to demonstrate Customer Obsession, Ownership, Invent and Simplify, and more through your experiences. The AI interviewer helps you structure STAR stories that clearly show these principles in action, avoid generic answers, and handle follow-up probes about stakeholder interactions and business impact."
        },
        {
          id: "ai-practice-behavioral",
          title: "AI Practice: General Behavioral Questions",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/pm-interviews-behavioral-question-677e7758261d3f3e3803b972?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Practice common behavioral questions across tech companies using STAR method. Cover collaboration challenges, data-driven decisions, customer insights, conflict resolution, and failure/learning stories. Get feedback on story structure, specificity of details, demonstrated impact, and leadership qualities. Learn to be concise (60-90 seconds) while covering all key elements."
        }
      ]
    },
    {
      id: "bonus-content",
      title: "Bonus: AI Tools & Tips",
      lessons: [
        {
          id: "ai-custom-roles",
          title: "Create Custom AI Roles for Interview Prep",
          duration: "8:00",
          videoUrl: "https://youtu.be/ai4A6yeQijE",
          mediaType: "youtube",
          description: "Learn to create personalized AI practice scenarios tailored to your target companies and roles. Design custom interviewers for specific companies (Google L5 vs Meta E5), practice niche scenarios (marketplace PMs, B2B vs B2C), create negotiation simulations, and build role-specific coaches. Maximize your prep efficiency by focusing on exactly what you need. Includes demo of creating McKinsey case interview bot."
        },
        {
          id: "ai-practice-challenging",
          title: "AI Practice: Challenging Interviewer",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/obnoxious-pm-interviewer-67865693709e6a61e77b451c?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Build resilience with a deliberately difficult interviewer who interrupts, challenges assumptions aggressively, and creates pressure. Learn to maintain composure, think clearly under stress, defend positions diplomatically, and redirect difficult conversations. Based on real 'stress interview' techniques used by some companies. Excellent final prep before important interviews."
        },
        {
          id: "ai-practice-brainstorming",
          title: "AI Practice: Brainstorming Coach",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/pm-interview-coach-brainstorming-new-features-67e771a36201a56a270bd7b4?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Develop creative brainstorming skills beyond conventional solutions. Practice techniques: anchoring to emerging tech (AR/VR, GenAI, quantum), using analogies from other industries, applying SCAMPER method, thinking 10X for moonshots. The coach pushes you past obvious ideas, helps structure creative thinking, and ensures feasibility alongside innovation. Critical for standing out in design questions."
        }
      ]
    }
  ]
}

// Helper function to get all lessons in a flat array
export const getAllLessons = (course: Course) => {
  return course.modules.flatMap(module => module.lessons);
};