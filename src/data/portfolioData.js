export const portfolioData = {
  personal: {
    name: "Tushar Shukla",
    role: "Full Stack & AI Developer",
    avatar: "/profile.jpg",
    statusBadge: "Available for Full-time Roles & Projects",
    location: "Bhopal, Madhya Pradesh, India",
    email: "shukla.tushar0219@gmail.com",
    phone: "+91 93699 90604",
    phoneFormatted: "+91 93699 90604",
    github: "https://github.com/tusharshukla2004",
    linkedin: "https://linkedin.com/in/tushar-shukla-11441924b",
    tagline: "Building scalable web architectures and bridging modern full-stack systems with Generative AI & Vector Search.",
    about: [
      "I am a passionate Full Stack Developer with strong foundations in the MERN stack, RESTful APIs, and responsive design systems. My focus is on creating high-performance, user-centric web applications that solve real-world problems.",
      "Beyond standard web engineering, I specialize in combining modern full-stack development with cutting-edge AI—architecting Retrieval-Augmented Generation (RAG) pipelines, integrating large language models (LLMs like Gemini and OpenAI), and leveraging vector databases like Pinecone to create intelligent applications.",
      "Currently contributing to product engineering at Star Chain Labs while continuously experimenting with modern frameworks, high-throughput micro-backends, and automated workflows."
    ],
    stats: [
      { label: "Experience & Internships", value: "3+" },
      { label: "Core Stacks", value: "MERN + AI" },
      { label: "Education", value: "B.Tech CSE" },
      { label: "Code Quality & ATS Match", value: "95%+" },
    ]
  },

  skills: {
    categories: [
      {
        id: "languages",
        title: "Programming Languages",
        icon: "Code2",
        items: [
          { name: "JavaScript (ES6+)", level: "Advanced", badge: "Core" },
          { name: "C / C++", level: "Data Structures & Algorithms", badge: "DSA" },
          { name: "HTML5 & CSS3", level: "Semantic & Modern", badge: "Web" },
          { name: "SQL", level: "Relational Queries", badge: "Database" },
        ]
      },
      {
        id: "frontend",
        title: "Frontend Engineering",
        icon: "Layout",
        items: [
          { name: "React.js", level: "Advanced Component Architecture", badge: "Primary" },
          { name: "Redux Toolkit", level: "Global State Management", badge: "State" },
          { name: "Zustand", level: "Lightweight State Store", badge: "State" },
          { name: "Tailwind CSS", level: "Modern Utility-first Styling", badge: "Styling" },
          { name: "Context API", level: "Scoped State & Hooks", badge: "React" },
          { name: "Recharts", level: "Data Visualization & Heatmaps", badge: "Charts" },
          { name: "Responsive Design", level: "Mobile-First & Fluid UX", badge: "UX" },
        ]
      },
      {
        id: "backend",
        title: "Backend & Databases",
        icon: "Server",
        items: [
          { name: "Node.js", level: "High-Throughput Runtime", badge: "Runtime" },
          { name: "Express.js", level: "Robust RESTful APIs", badge: "Framework" },
          { name: "MongoDB", level: "NoSQL & Mongoose ODM", badge: "Database" },
          { name: "MySQL", level: "Relational Schema & Queries", badge: "Database" },
          { name: "WebSockets (Socket.io)", level: "Real-time Bi-directional Events", badge: "Real-time" },
          { name: "RESTful Architecture", level: "Scalable API Contracts", badge: "Architecture" },
        ]
      },
      {
        id: "ai",
        title: "AI & Vector Search",
        icon: "Sparkles",
        items: [
          { name: "RAG Architecture", level: "Contextual Retrieval Augmented Generation", badge: "AI Arch" },
          { name: "LLM Integration", level: "Google Gemini API & OpenAI", badge: "GenAI" },
          { name: "Pinecone", level: "Vector Database & Indexing", badge: "Vector DB" },
          { name: "Vector Embeddings", level: "Semantic Search & Similarity", badge: "Search" },
          { name: "Prompt Engineering", level: "Structured Output & Context Injection", badge: "Prompts" },
        ]
      },
      {
        id: "tools",
        title: "Tools & DevOps",
        icon: "Wrench",
        items: [
          { name: "Git & GitHub", level: "Version Control & CI/CD Workflows", badge: "VCS" },
          { name: "Postman", level: "API Testing & Documentation", badge: "Testing" },
          { name: "Puppeteer", level: "Automated PDF & Headless Scraping", badge: "Automation" },
          { name: "VS Code", level: "Productivity & Debugging Setup", badge: "Dev" },
        ]
      }
    ]
  },

  experience: [
    {
      company: "Star Chain Labs",
      location: "Bhopal, MP",
      role: "Full Stack Development Trainee",
      period: "September 2026 – Present",
      status: "Current",
      type: "Traineeship",
      points: [
        "Working in core development team on frontend and full-stack projects using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Contributing to product feature development, reusable UI components, and real-time state synchronization.",
        "Collaborating effectively with cross-functional team members using Git-based version control workflows and code reviews."
      ],
      skillsUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "Git", "Tailwind CSS"]
    },
    {
      company: "New Rise Technosys Pvt. Ltd.",
      location: "Bhopal, MP (On-site)",
      role: "Full Stack Developer Intern",
      period: "June 2026 – September 2026",
      status: "Completed",
      type: "Internship",
      points: [
        "Contributed to the development and maintenance of a high-traffic e-commerce web application using React.js, Node.js, Express.js, and MySQL.",
        "Implemented role-based authentication, secure authorization pipelines, and backend query performance optimizations.",
        "Engineered end-to-end debugging, unit & module testing, and collaborated via Git/GitHub while actively participating in team sprints."
      ],
      skillsUsed: ["React.js", "Node.js", "Express.js", "MySQL", "Authentication", "Git"]
    },
    {
      company: "ZenExim Pvt. Ltd.",
      location: "Ahmedabad, Gujarat (On-site)",
      role: "Full Stack Developer Intern",
      period: "June 2025 – September 2025",
      status: "Completed",
      type: "Internship",
      points: [
        "Contributed to the 'Smart Study Platform', a MERN-based collaborative web application for student interaction, study group management, and task tracking.",
        "Implemented secure CRUD functionality and RESTful API endpoints for dynamic resource management.",
        "Debugged critical application issues and conducted comprehensive module testing in an agile team environment."
      ],
      skillsUsed: ["MERN Stack", "RESTful APIs", "Student Collaboration", "Agile Testing", "MongoDB"]
    }
  ],

  projects: [
    {
      id: "sovereign-barbershop",
      title: "Sovereign Barbershop – Luxury Salon & Queue Management Platform",
      tagline: "Luxury Salon & Digital Queue Management Platform with Deterministic Scheduling",
      category: "Full Stack & E-Commerce",
      featured: true,
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
      description: "Developed Sovereign Barbershop, a full-stack salon management platform using React, Node.js, Express, and MongoDB, featuring real-time appointment booking, a live digital walk-in queue, dynamic pricing, and role-based staff dashboards.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
      metrics: [
        { label: "Scheduling Engine", value: "Zero Double-Booking" },
        { label: "Booking Pipeline", value: "Frictionless 4-Step" },
        { label: "Security & Mgmt", value: "Passwordless Tokenized" }
      ],
      highlights: [
        "Developed Sovereign Barbershop, a full-stack salon management platform using React, Node.js, Express, and MongoDB, featuring real-time appointment booking, a live digital walk-in queue, dynamic pricing, and role-based staff dashboards.",
        "Engineered a frictionless 4-step booking flow with promo code validation and calendar sync, implementing secure cryptographic tokenized links for passwordless customer appointment management (rescheduling and cancellations).",
        "Implemented a deterministic scheduling engine to eliminate double-booking conflicts, interactive business analytics using Recharts (revenue and peak-hour heatmaps), and 1-tap WhatsApp reminder workflows."
      ],
      links: {
        github: "https://github.com/tusharshukla2004",
        live: "https://barbershop123-roan.vercel.app/"
      }
    },
    {
      id: "ai-resume-optimizer",
      title: "AI Resume Optimizer",
      tagline: "Intelligent ATS scoring, context-aware rewriting & automated PDF generator",
      category: "AI & LLM",
      featured: true,
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
      description: "An AI-powered web platform that bridges job seekers and Applicant Tracking Systems. It parses job descriptions, analyzes user resumes, computes automated ATS compatibility scores, and uses Google Gemini to rewrite resume sections contextually.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Puppeteer", "Tailwind CSS"],
      metrics: [
        { label: "AI Rewriter", value: "Gemini 1.5/Pro" },
        { label: "Export Engine", value: "Pixel-Perfect PDF" },
        { label: "Compatibility", value: "Real-time ATS Score" }
      ],
      highlights: [
        "Built intelligent parser that extracts key skill requirements and compares candidate resumes against job descriptions.",
        "Integrated Google Gemini API for context-aware, metric-driven bullet point enhancements.",
        "Implemented automated pixel-perfect PDF resume generation with Puppeteer and instant client-side real-time preview."
      ],
      links: {
        github: "https://github.com/tusharshukla2004",
        live: "#"
      }
    },
    {
      id: "shopwave",
      title: "ShopWave – Full Stack E-Commerce",
      tagline: "Scalable modern online store with secure payments & multi-role dashboards",
      category: "Full Stack & E-Commerce",
      featured: true,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
      description: "Comprehensive end-to-end e-commerce solution featuring product browsing, advanced filtering, persistent cart & wishlist, Razorpay checkout, and separate administrative dashboards for vendors and site managers.",
      tags: ["React.js", "Node.js", "Express.js", "MySQL", "Razorpay", "JWT", "Tailwind CSS"],
      metrics: [
        { label: "Payment Gateway", value: "Razorpay Live" },
        { label: "Access Control", value: "Role-Based (Admin/Seller)" },
        { label: "Security", value: "JWT & Token Guard" }
      ],
      highlights: [
        "Developed full product catalog with responsive filters, wishlist management, and live inventory validation.",
        "Integrated secure Razorpay payment gateway handling webhooks and transaction status tracking.",
        "Engineered role-based authentication dashboards for merchants to track analytics, sales, and order fulfilment."
      ],
      links: {
        github: "https://github.com/tusharshukla2004",
        live: "https://shopwave-nine.vercel.app/"
      }
    },
    {
      id: "smart-study",
      title: "Smart Study Platform",
      tagline: "Collaborative student workspace for task tracking & group study sessions",
      category: "MERN Application",
      featured: false,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      description: "A centralized platform designed to empower students to create study groups, assign and track collaborative milestones, share curated study materials, and monitor real-time group productivity.",
      tags: ["React.js", "MongoDB", "Express.js", "Node.js", "REST APIs", "Socket.io"],
      metrics: [
        { label: "Architecture", value: "MERN Stack" },
        { label: "Collaboration", value: "Real-time Tasks" },
        { label: "API Design", value: "RESTful Endpoints" }
      ],
      highlights: [
        "Designed real-time collaborative task board with dynamic status cards and drag-and-drop workflow.",
        "Engineered RESTful endpoints for group management, meeting agendas, and resource exchange.",
        "Built intuitive dashboard tracking individual study hours, streak milestones, and team deliverables."
      ],
      links: {
        github: "https://github.com/tusharshukla2004",
        live: "https://smart-study-xqyl.vercel.app/"
      }
    }
  ],

  education: [
    {
      institution: "United College of Engineering and Research",
      location: "Prayagraj, Uttar Pradesh",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      duration: "2022 – 2026",
      score: "CGPA: 7.5",
      type: "Undergraduate",
      description: "Focusing on Core Computer Science principles, Data Structures & Algorithms, Database Management Systems, Computer Networks, and Object-Oriented Software Design."
    },
    {
      institution: "Jwala Devi Saraswati Vidya Mandir Inter College",
      location: "Prayagraj, Uttar Pradesh",
      degree: "Class XII (Senior Secondary)",
      field: "UP Board (PCM)",
      duration: "2021",
      score: "88.8%",
      type: "Schooling",
      description: "Completed higher secondary education with distinction, demonstrating solid foundations in Physics, Chemistry, and Mathematics."
    }
  ]
};
