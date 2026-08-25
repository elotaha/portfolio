export default {
  profile: {
    name: "Taha Elallem",
    role: "Data & AI Engineer",
    status: "status: probably debugging",
    email: "mohammedtahaelallem14@gmail.com",
    phone: "07 82 74 82 44",
    github: "https://github.com/elotaha",
    linkedin: "https://www.linkedin.com/in/taha-el-allem-ab2156225/",
    snowflakeBadge: "https://achieve.snowflake.com/75a700b7-db83-47de-8ff2-991acb845c18#acc.Tu8lpLWh"
  },
  nav: {
    about: "about",
    experience: "experience",
    projects: "projects",
    skills: "skills",
    contact: "contact"
  },
  labels: {
    sectionAbout: "01. about",
    sectionExperience: "02. experience",
    sectionProjects: "03. projects",
    sectionSkills: "04. skills",
    sectionContact: "05. contact",
    problem: "// the problem",
    action: "// what I did",
    takeaway: "// key takeaway:",
    education: "education",
    learnings: "// what I learned:",
    certifications: "certifications & badges",
    officialBadge: "Official badge",
    snowflakeBadge: "❄️ Snowflake Badge",
    expandDetails: "// + read details",
    collapseDetails: "// - hide details",
    filterAll: "All subjects",
    filterData: "Data & ML",
    filterGenAI: "GenAI & RAG",
    filterRealTime: "Real-time & Cyber"
  },
  hero: {
    signature: "data goes in,\nhopefully something useful comes out",
    name: "Taha Elallem",
    role: "Data & AI Engineer",
    description: "I work across Data and AI, focusing on Machine Learning, GenAI, and data systems. I care most about taking a business problem and building something that actually works.",
    ctaPrimary: "Explore experience & projects",
    ctaSecondary: "Get in touch"
  },
  about: {
    title: "01. about",
    text: "Graduated from ENSEEIHT (Toulouse) after engineering prep classes (MPSI/MP*), I work in Data and AI. I've had the chance to touch varied topics: predictive modeling, data pipelines, cybersecurity, RAG, and user-facing tools. What interests me most is bridging the gap between the initial problem and a clean technical solution."
  },
  experiences: [
    {
      id: "diam",
      subject: "data",
      subjectLabel: "Data & ML",
      role: "Data & AI Engineer",
      company: "DIAM Bouchage",
      period: "April 2025 – March 2026",
      problem: "At DIAM, the goal was to better understand and predict cork oak tree growth by combining climate, environmental, and plot data.",
      action: "I centralized the data in BigQuery, prepared datasets using Python and SQL, and structured a medallion architecture in Snowflake. I trained Machine Learning models (Random Forest, XGBoost) and used Vertex AI to serve predictions to a Power BI dashboard.",
      result: "I collaborated closely with the R&D team throughout the project to adapt the model to field constraints. This taught me to focus on actual business needs before technical complexity.",
      techs: ["Python", "SQL", "BigQuery", "Snowflake", "Vertex AI", "MLflow", "Power BI"]
    },
    {
      id: "dataprotect",
      subject: "realtime",
      subjectLabel: "Real-time & Cyber",
      role: "Real-Time Data & ML Engineer",
      company: "DATAPROTECT",
      period: "July 2023 – September 2023",
      problem: "At DataProtect, the problem was straightforward: cybersecurity analysts (SOC) were receiving too many alerts and wasting time picking out the ones that mattered.",
      action: "I worked on the pipeline routing logs from multiple servers into Machine Learning jobs (Filebeat → Kafka → Spark Streaming → Elasticsearch → Kibana). Anomaly detection models (Isolation Forest, XGBoost) assigned risk scores to events, visualized on a real-time Kibana dashboard.",
      result: "This project taught me to think about data throughput and pipeline reliability, not just the Machine Learning model.",
      techs: ["Python", "Kafka", "Spark Streaming", "Elasticsearch", "Kibana", "Linux"]
    },
    {
      id: "euromed",
      subject: "genai",
      subjectLabel: "GenAI & RAG",
      role: "GenAI & NLP Engineer",
      company: "EuroMed University",
      period: "June 2024 – September 2024",
      problem: "Students needed a way to ask precise questions based on internal university documents without manual searches.",
      action: "I built a RAG-based chatbot. Before writing code, I benchmarked several LLMs, vector databases, and orchestration tools to compare answer quality, inference cost, latency, and maintainability. I also added JWT session security.",
      result: "I chose RAG over fine-tuning because administrative documents change frequently. The outcome is a reusable assistant delivering reliable answers.",
      techs: ["Python", "RAG", "LangChain", "HuggingFace", "Vector DBs", "Docker", "JWT"]
    },
    {
      id: "alten",
      subject: "data",
      subjectLabel: "ML & MLOps",
      role: "Machine Learning & Software Engineer",
      company: "ALTEN",
      period: "December 2024 – February 2025",
      problem: "Users needed to configure, launch, and monitor generative model trainings (DCGAN) without tweaking code manually each time.",
      action: "I helped build a native interface to configure hyperparameters (epochs, GPU, datasets), trigger PyTorch training, and visualize performance metrics in real time.",
      result: "This project showed me that a model can be technically great and still painful to use if there isn't a clean tool around it.",
      techs: ["Python", "PyTorch", "Deep Learning", "DCGAN", "MLOps"]
    }
  ],
  education: [
    {
      id: 1,
      school: "ENSEEIHT - Toulouse",
      degree: "Master's Degree in Computer Science & Telecommunications",
      period: "2022 – 2025",
      details: "Specialization in Big Data, AI, High-Performance Computing, and Distributed Systems."
    },
    {
      id: 2,
      school: "CPGE LM6E - Benguerir",
      degree: "Intensive Engineering Prep Classes (MPSI / MP*)",
      period: "2020 – 2022",
      details: "Intensive training in mathematics, physics, and engineering sciences."
    }
  ],
  projects: [
    {
      id: "multi-agent",
      title: "Multi-Agent System (LangGraph & Bedrock)",
      type: "Personal Project",
      description: "I built a system capable of breaking down a natural language request into multiple steps (e.g. fetch UK GDP over 5 years and plot a bar chart). I orchestrated two specialized agents (Researcher and Chart Generator) using LangGraph and Amazon Bedrock with REPL tools.",
      learnings: "This helped me understand the practical limitations of agentic setups: code execution control, REPL safety, and the necessity of human supervision.",
      techs: ["Python", "LangGraph", "LangChain", "Amazon Bedrock"],
      github: "https://github.com/elotaha"
    },
    {
      id: "aws-pipeline",
      title: "AWS Mini-Pipeline (Infrastructure as Code)",
      type: "Personal Project",
      description: "I created an automated pipeline fetching CSV files from AWS S3, running Python cleaning scripts with Lambda functions, and storing cleaned output.",
      learnings: "I used Terraform for IaC to practice setting up reproducible cloud infrastructure without manual clicks in the AWS console.",
      techs: ["Terraform", "AWS S3", "AWS Lambda", "Python"],
      github: "https://github.com/elotaha"
    },
    {
      id: "mlops-weather",
      title: "Weather MLOps Pipeline & Airflow",
      type: "Personal Project",
      description: "Airflow DAG fetching weather data periodically, executing retraining, and tracking metrics with MLflow exposed via FastAPI.",
      learnings: "A hands-on project to practice scheduling, model versioning, and API exposure.",
      techs: ["Airflow", "MLflow", "FastAPI", "Docker"],
      github: "https://github.com/elotaha"
    }
  ],
  skillsGrouped: [
    {
      category: "Data",
      skills: ["Python", "SQL", "BigQuery", "Snowflake", "Databricks"]
    },
    {
      category: "Machine Learning / AI",
      skills: ["Scikit-learn", "PyTorch", "RAG", "LangChain", "LangGraph", "LLMs"]
    },
    {
      category: "Data Engineering",
      skills: ["Kafka", "Spark", "Airflow", "dbt"]
    },
    {
      category: "Cloud",
      skills: ["GCP", "AWS (S3, Lambda, Bedrock)"]
    },
    {
      category: "Dev & Tools",
      skills: ["Git", "Docker", "CI/CD", "FastAPI", "Elasticsearch", "Kibana", "Power BI"]
    }
  ],
  certifications: [
    {
      name: "Snowflake Hands-on Essentials",
      issuer: "Snowflake",
      badgeUrl: "https://achieve.snowflake.com/75a700b7-db83-47de-8ff2-991acb845c18#acc.Tu8lpLWh",
      note: "Certified (pursuing upcoming levels)"
    },
    {
      name: "Introduction to Data Engineering on Google Cloud",
      issuer: "Google Cloud"
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud"
    }
  ],
  contact: {
    pitch: "Got a Data, ML or AI topic you want to discuss?",
    subtext: "Feel free to drop me an email or reach out on LinkedIn.",
    email: "mohammedtahaelallem14@gmail.com",
    linkedin: "https://www.linkedin.com/in/taha-el-allem-ab2156225/",
    github: "https://github.com/elotaha"
  },
  footer: {
    text: "Taha Elallem — Data & AI Engineer"
  }
};
