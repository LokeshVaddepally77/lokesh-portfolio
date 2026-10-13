export const profile = {
  name: "Lokesh Vaddepally",
  role: "Full Stack Developer",
  location: "Vancouver, BC, Canada",
  phone: "+1 236-862-5987",
  email: "lokesh.vaddepally.ca@gmail.com",
  linkedin: "https://linkedin.com/in/lokesh-vaddepally-32a69a212",
  authorization: "Full Canadian work authorization, no sponsorship required",
  resumeFile: "/Lokesh_Vaddepally_Resume.pdf",
  tagline: "Full-stack systems, drafted and built.",
  github: "https://github.com/LokeshVaddepally77",
  summary:
    "Full Stack Developer with 3 years at Tata Consultancy Services and Canadian experience as a Software Developer at Aisha Home Services, building web applications in React, TypeScript, C#, and ASP.NET Core over SQL Server and PostgreSQL. Works across the stack: React front ends (Redux, React Query), REST APIs in ASP.NET Core and Node.js (OAuth2 / JWT), schema design, automated testing, and CI/CD (Azure DevOps, GitHub Actions). M.S. in Information Systems from Northeastern University.",
};

// A plain "mailto:email" shows as a bare, duplicated address in some
// clients (Outlook shows "email <email>" with no name attached). Encoding
// the display name alongside it fixes that in Outlook/Gmail/Apple Mail.
export const mailtoLink = `mailto:${encodeURIComponent(`${profile.name} <${profile.email}>`)}`;

// Mirrors the "Technical Skills" section of the résumé PDF.
export const skillGroups = [
  { label: "Languages", items: ["C#", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"] },
  {
    label: "Front End",
    items: ["React 18", "Redux", "React Query", "React Router", "KnockoutJS", "Tailwind CSS", "Vite"],
  },
  {
    label: "Back End",
    items: [
      ".NET 8",
      ".NET Framework 4.x",
      "ASP.NET Core (MVC, Web API)",
      "Entity Framework Core",
      "REST APIs",
      "Node.js",
      "Express",
    ],
  },
  {
    label: "Databases",
    items: ["SQL Server", "PostgreSQL (Supabase)", "Oracle SQL / PL/SQL", "MongoDB", "Firestore"],
  },
  {
    label: "Security & Messaging",
    items: ["OAuth2 / JWT", "Row Level Security (RLS)", "RabbitMQ", "Elasticsearch"],
  },
  {
    label: "Testing & Quality",
    items: [
      "Unit, integration, and end-to-end testing",
      "Playwright",
      "Postman",
      "Cross-browser debugging",
      "Code reviews",
    ],
  },
  {
    label: "DevOps & Cloud",
    items: ["Azure DevOps", "GitHub Actions (CI/CD)", "Azure App Service", "Vercel", "Git", "GitHub"],
  },
  {
    label: "Practices",
    items: [
      "Agile / Scrum",
      "Object-oriented design",
      "Refactoring and technical-debt reduction",
      "Technical documentation",
    ],
  },
];

// The "works across the stack" areas from the résumé summary, shown as chips
// in the home-page hero.
export const focusAreas = [
  "React front ends (Redux, React Query)",
  "REST APIs (ASP.NET Core, Node.js)",
  "OAuth2 / JWT",
  "Schema design",
  "Automated testing",
  "CI/CD (Azure DevOps, GitHub Actions)",
];

// Oldest first; the pages reverse it to show the most recent entry on top.
export const timeline = [
  {
    rev: "R1",
    kind: "work",
    date: "Dec 2021 – Sep 2024",
    title: "Full Stack Developer",
    org: "Tata Consultancy Services (client: Infineon Technologies)",
    place: "Hyderabad, India",
    bullets: [
      "Developed and maintained full-stack web applications in C#, ASP.NET, and ASP.NET Core across .NET Framework 4.x and modern .NET, with React and KnockoutJS front ends and SQL Server data access, working across the stack within a Scrum team.",
      "Refactored legacy C# services in a production codebase using object-oriented design to cut technical debt and improve testability.",
      "Designed, built, and consumed REST APIs and web services (JSON over HTTP) with OAuth2 / JWT authentication and data-privacy controls.",
      "Fixed production defects across C#, JavaScript, and SQL, progressing from guided tasks to owning scoped features end to end.",
      "Wrote unit, integration, and end-to-end tests (Playwright, Postman), did cross-browser debugging, and took part in code reviews.",
      "Turned designer and product manager requirements into technical designs, delivering in Scrum sprints on Azure DevOps with CI/CD.",
    ],
  },
  {
    rev: "R2",
    kind: "education",
    date: "2024 – May 2026",
    title: "M.S. in Information Systems",
    org: "Northeastern University",
    place: "Vancouver, BC, Canada",
    bullets: [
      "Graduated with a 3.4 / 4.0 GPA.",
      "Built full stack projects alongside coursework (see Projects).",
    ],
  },
  {
    rev: "R3",
    kind: "work",
    date: "Jan 2026 – Apr 2026",
    title: "Software Developer (Capstone)",
    org: "Aisha Home Services (AHS)",
    place: "Ottawa, ON",
    blurb:
      "Full-stack marketplace connecting homeowners, tenants, and property managers with verified home service professionals across Canada.",
    bullets: [
      "Developed React 18 / TypeScript features, including role-based dashboards for service seekers, individual providers, and business accounts, in a multi-role user system with protected routes and context-aware navigation.",
      "Built service-request workflows (pending, accepted, declined, completed, cancelled) with service logs and payment tracking.",
      "Built Supabase (PostgreSQL) backend services for auth, profiles, messaging, and notifications, secured with Row Level Security.",
      "Contributed to schema design across 11+ tables, including migrations, foreign keys, ENUM types, performance indexes, and triggers.",
      "Implemented real-time in-app notifications (Supabase Realtime) and location-based service discovery with Google Maps API.",
      "Worked in a Git branching workflow, wrote technical documentation, and helped deploy to Vercel with a production Supabase backend.",
    ],
  },
];

// `slug` is the anchor on /projects (e.g. /projects#task-manager), `hue` tints
// the card cover, and `cover` picks its UI sketch: "grid", "code", or "list".
export const projects = [
  {
    sheet: "01",
    slug: "financetracker",
    hue: 155,
    cover: "grid",
    name: "FinanceTracker — Personal-Finance App",
    subtitle: "Commercial app · Independent, 2026",
    role: "Solo: product research and architecture through implementation and app-store release prep",
    problem:
      "A budgeting app for Canadian users has to handle multiple currencies, local bank statement formats, and privacy law (PIPEDA, BC PIPA, GDPR), on iOS, Android, and the web.",
    outcome:
      "Built a multi-currency financial data model, CSV import for Canadian bank statement formats, and recurring-transaction detection, and worked through PIPEDA, BC PIPA, and GDPR requirements, weighing server-side against on-device processing. Now preparing for app-store release.",
    stack: ["TypeScript", "Capacitor", "Firestore", "On-device OCR", "iOS", "Android", "Web"],
    links: {
      live: null,
      github: null,
    },
  },
  {
    sheet: "02",
    slug: "task-manager",
    hue: 25,
    cover: "list",
    name: "Task Manager — ASP.NET Core MVC",
    subtitle: "Academic project · Northeastern University",
    role: "Solo developer: architected the layered application",
    problem:
      "Teams needed a lightweight task manager with real access control (managers vs. employees) and a full audit trail, not just a CRUD app anyone could edit.",
    outcome:
      "Built a layered app (separate MVC and data-access projects) with role-based access control, custom authorization filters, hashed-password session auth, an audit trail, and Razor Tag Helpers, deployed to Azure App Service via GitHub Actions CI/CD with unit tests.",
    stack: [".NET 8", "C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "GitHub Actions", "Azure App Service"],
    links: {
      live: "https://taskmanager-lokesh-ezaah3c8dmdpbnae.canadacentral-01.azurewebsites.net",
      github: null, // repo is private
    },
  },
  {
    sheet: "03",
    slug: "healthcare-plan-api",
    hue: 250,
    cover: "code",
    name: "Healthcare Plan Management API",
    subtitle: "Secure, event-driven REST API",
    role: "Solo developer: designed and built the API",
    problem:
      "Needed a backend service for managing healthcare plan data that could enforce strict schema validation and secure access, while staying responsive under load.",
    outcome:
      "Built a schema-validated (Ajv) REST API with Google OAuth2 / JWT (RS256), ETag conditional requests, and a RabbitMQ-to-Elasticsearch pipeline for search indexing.",
    stack: ["Node.js", "Express", "RabbitMQ", "Elasticsearch", "OAuth2 / JWT (RS256)", "Ajv"],
    links: {
      live: null,
      github: null,
    },
  },
];

export const companies = [
  {
    name: "Tata Consultancy Services",
    detail: "Client engagement: Infineon Technologies · Hyderabad, India",
  },
  {
    name: "Aisha Home Services",
    detail: "Software Developer (Capstone) · Ottawa, ON",
  },
  {
    name: "Northeastern University",
    detail: "M.S. Information Systems · Vancouver, BC",
  },
];

// Northeastern seal: Wikimedia Commons, CC BY-SA 4.0
// (https://commons.wikimedia.org/wiki/File:NU_RGB_seal_R.png)
export const education = [
  {
    degree: "M.S. in Information Systems",
    school: "Northeastern University",
    place: "Vancouver, BC, Canada",
    detail: "GPA 3.4/4.0",
    date: "May 2026",
    logo: "/northeastern.png",
  },
  {
    degree: "B.Tech in Civil Engineering",
    school: "Malla Reddy Institute of Technology",
    place: "Hyderabad, India",
    detail: "GPA 7.3/10",
    date: "Jul 2021",
    logo: "/MRIT.jpeg",
  },
];

export const certifications = [
  {
    name: "SQL – MySQL for Data Analytics",
    file: "/certificates/sql-mysql-certificate.pdf",
  },
  {
    name: "Introduction to OpenAI API",
    file: "/certificates/openai-api-certificate.pdf",
  },
  {
    name: "The Complete Prompt Engineering for AI Bootcamp",
    file: "/certificates/prompt-engineering-certificate.pdf",
  },
];
