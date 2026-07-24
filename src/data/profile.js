export const profile = {
  name: "Lokesh Vaddepally",
  role: "Full Stack Developer",
  location: "Vancouver, BC, Canada",
  phone: "+1 236-862-5987",
  email: "vaddepallylokesh362@gmail.com",
  linkedin: "https://linkedin.com/in/lokesh-vaddepally-32a69a212",
  authorization: "Full Canadian work authorization, no sponsorship required",
  resumeFile: "/Lokesh_Vaddepally_Resume.pdf",
  tagline: "Full-stack systems, drafted and built.",
  github: "https://github.com/LokeshVaddepally77",
  summary:
    "Full Stack Developer with ~3 years of professional experience across .NET/C# and React-based web applications. Recently completed an M.S. in Information Systems at Northeastern University. Hands-on experience building production-grade full stack features with ASP.NET Core, React 18, and Node.js, backed by self-directed study of system design fundamentals (scalability, caching, database replication and sharding, message queues, and API design) applied to real Canadian project work.",
};

export const skillGroups = [
  {
    label: "Languages & Web",
    items: [
      "ASP.NET Core",
      "C#",
      "Java",
      "JavaScript (ES6+)",
      "TypeScript",
      "React 18",
      "HTML5 / CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Node.js",
      "Express",
    ],
  },
  {
    label: "Architecture & Patterns",
    items: ["MVC", "REST API design", "Swing"],
  },
  {
    label: "Databases",
    items: [
      "SQL Server",
      "Oracle SQL / PL-SQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Supabase",
    ],
  },
  {
    label: "System Design",
    items: [
      "Load balancing (L4/L7)",
      "Caching strategies",
      "Replication & sharding",
      "CAP theorem",
      "Message queues (RabbitMQ)",
      "REST vs GraphQL vs gRPC",
      "WebSockets",
      "DNS & elasticity",
    ],
  },
  {
    label: "Cloud & Version Control",
    items: ["Azure", "Azure DevOps", "Git", "Vercel"],
  },
  {
    label: "Tools & Practices",
    items: [
      "Visual Studio / VS Code",
      "Postman",
      "Playwright",
      "Agile / Scrum",
      "Incident Management",
      "Offshore-Onshore Collaboration",
    ],
  },
];

// A short, high-signal list for the Skills section — not every tool on the
// resume, just what's worth a recruiter's few seconds. Full detail lives in
// skillGroups above and shows up naturally through the project write-ups.
export const coreSkills = [
  "C# / ASP.NET Core",
  "React 18 / TypeScript",
  "Node.js / Express",
  "SQL Server / PostgreSQL",
  "REST API design",
  "System design fundamentals",
  "Azure",
  "Git",
];

export const timeline = [
  {
    rev: "R1",
    date: "Dec 2021 – Sep 2024",
    title: "Full Stack Developer",
    org: "Tata Consultancy Services (client: Infineon Technologies)",
    place: "Hyderabad, India",
    bullets: [
      "Developed and maintained full stack features for the Infineon client engagement using ASP.NET Core, C#, and React JS, within Agile/Scrum sprints tracked through Azure DevOps.",
      "Built and consumed REST APIs backed by SQL Server, collaborating with cross-functional teams on feature design and delivery.",
      "Performed API validation and cross-browser UI testing using Postman and Playwright to ensure release quality.",
    ],
  },
  {
    rev: "R2",
    date: "Sep 2024",
    title: "Leave of Absence for Relocation",
    org: "Tata Consultancy Services",
    place: "Hyderabad → Vancouver",
    bullets: [
      "Took leave without pay to relocate to Canada for full-time graduate studies.",
      "Remains a TCS associate exploring re-fitment opportunities.",
    ],
  },
  {
    rev: "R3",
    date: "2024 – May 2026",
    title: "M.S. in Information Systems",
    org: "Northeastern University",
    place: "Vancouver, BC, Canada",
    bullets: [
      "Completed graduate coursework while self-directing study of system design fundamentals.",
      "Delivered three Canada-based full stack projects (see Drawings) applying that theory to real code.",
    ],
  },
];

export const projects = [
  {
    sheet: "01",
    name: "AHS — Home Services Marketplace",
    subtitle: "Capstone Project · Vancouver, BC",
    role: "Solo developer: designed and built the full stack",
    problem:
      "Homeowners, tenants, and property managers across Canada had no single place to find, vet, and message verified home service professionals or track a request end to end.",
    outcome:
      "Shipped a working marketplace with role-based dashboards for seekers, providers, and business accounts, a full request lifecycle (pending → accepted → completed/cancelled) with payment tracking, and real-time messaging. Deployed live on Vercel.",
    stack: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Supabase (Postgres, Auth, Realtime, RLS)",
      "React Query",
      "React Router",
      "Google Maps API",
      "Vercel",
    ],
    links: {
      live: null, // add the Vercel deployment URL
      github: null, // add the repo URL
    },
  },
  {
    sheet: "02",
    name: "Healthcare Plan Management REST API",
    subtitle: "Backend Systems Project",
    role: "Solo developer: designed and built the API",
    problem:
      "Needed a backend service for managing healthcare plan data that could enforce strict schema validation and secure access, while staying responsive under load.",
    outcome:
      "Built a schema-validated (Ajv), OAuth2/JWT-secured REST API that applies message queuing (RabbitMQ) and search indexing (Elasticsearch), turning system design theory into a working service.",
    stack: ["Node.js", "Express", "RabbitMQ", "Elasticsearch", "JWT / OAuth2 (Google, RS256)", "Ajv", "Postman"],
    links: {
      live: null,
      github: null,
    },
  },
  {
    sheet: "03",
    name: "Task Manager — ASP.NET Core MVC",
    subtitle: "Academic Project · Northeastern University",
    role: "Solo developer: architected the layered application",
    problem:
      "Teams needed a lightweight task manager with real access control (managers vs. employees) and a full audit trail, not just a CRUD app anyone could edit.",
    outcome:
      "Delivered a layered MVC + Data Access app with custom authorization filters, secure session-based auth, task history/audit trail, and a GitHub Actions pipeline deploying straight to Azure App Service.",
    stack: ["ASP.NET Core MVC (.NET 8)", "C#", "Entity Framework Core", "SQL Server / MySQL", "GitHub Actions", "Azure App Service"],
    links: {
      live: "https://taskmanager-lokesh-ezaah3c8dmdpbnae.canadacentral-01.azurewebsites.net",
      github: null, // TaskManagerSolution is private again until the leaked secret is rotated and scrubbed from git history
    },
  },
];

export const companies = [
  {
    name: "Tata Consultancy Services",
    detail: "Client engagement: Infineon Technologies · Hyderabad, India",
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
    place: "",
    detail: "GPA 7.3/10",
    date: "",
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
