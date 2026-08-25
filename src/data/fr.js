export default {
  profile: {
    name: "Taha Elallem",
    role: "Ingénieur Data & IA",
    status: "status: probably debugging",
    email: "mohammedtahaelallem14@gmail.com",
    phone: "07 82 74 82 44",
    github: "https://github.com/elotaha",
    linkedin: "https://www.linkedin.com/in/taha-el-allem-ab2156225/",
    snowflakeBadge: "https://achieve.snowflake.com/75a700b7-db83-47de-8ff2-991acb845c18#acc.Tu8lpLWh"
  },
  nav: {
    about: "à propos",
    experience: "parcours",
    projects: "projets",
    skills: "technologies",
    contact: "contact"
  },
  labels: {
    sectionAbout: "01. à propos",
    sectionExperience: "02. parcours",
    sectionProjects: "03. projets",
    sectionSkills: "04. technologies",
    sectionContact: "05. contact",
    problem: "// le problème",
    action: "// ce que j'ai fait",
    takeaway: "// ce que j'en retiens :",
    education: "formation",
    learnings: "// ce que j'en ai appris :",
    certifications: "certifications & badges",
    officialBadge: "Badge officiel",
    snowflakeBadge: "❄️ Snowflake Badge",
    expandDetails: "// + voir les détails",
    collapseDetails: "// - masquer les détails",
    filterAll: "Tous les sujets",
    filterData: "Data & ML",
    filterGenAI: "GenAI & RAG",
    filterRealTime: "Temps Réel & Cyber"
  },
  hero: {
    signature: "data goes in,\nhopefully something useful comes out",
    name: "Taha Elallem",
    role: "Ingénieur Data & IA",
    description: "Je travaille dans la Data et l'IA, avec un intérêt particulier pour le Machine Learning, la GenAI et les systèmes de données. J'aime surtout les projets où il faut passer d'un problème métier à quelque chose qui fonctionne réellement.",
    ctaPrimary: "Parcourir mes projets & expériences",
    ctaSecondary: "Me contacter"
  },
  about: {
    title: "01. à propos",
    text: "Diplômé de l'ENSEEIHT (Toulouse) après des classes préparatoires (MPSI/MP*), je travaille dans la Data et l'IA. J'ai eu l'occasion de toucher à des sujets assez différents : prédiction, pipelines de données, cybersécurité, RAG et outils pour utilisateurs. Ce qui m'intéresse surtout, c'est le passage entre le problème de départ et la solution technique."
  },
  experiences: [
    {
      id: "diam",
      subject: "data",
      subjectLabel: "Data & ML",
      role: "Ingénieur Data & IA",
      company: "DIAM Bouchage",
      period: "Avril 2025 – Mars 2026",
      problem: "Chez DIAM, l'objectif était de mieux comprendre et prédire la croissance des chênes-lièges en exploitant les données climatiques, environnementales et parcelles.",
      action: "J'ai centralisé les données nécessaires dans BigQuery, préparé les datasets avec Python et SQL, puis structuré une architecture médaillon dans Snowflake. J'ai ensuite entraîné des modèles de Machine Learning (Random Forest, XGBoost) et utilisé Vertex AI pour exposer les prédictions sur un dashboard Power BI.",
      result: "J'ai beaucoup échangé avec l'équipe R&D tout au long du projet pour adapter le modèle aux contraintes du terrain. Cela m'a appris à ne pas penser uniquement à la technique, mais d'abord au besoin métier réel.",
      techs: ["Python", "SQL", "BigQuery", "Snowflake", "Vertex AI", "MLflow", "Power BI"]
    },
    {
      id: "dataprotect",
      subject: "realtime",
      subjectLabel: "Temps Réel & Cyber",
      role: "Ingénieur Data & ML temps réel",
      company: "DATAPROTECT",
      period: "Juillet 2023 – Septembre 2023",
      problem: "Chez DataProtect, le problème était très concret : les analystes en cybersécurité (SOC) recevaient trop d'alertes et perdaient du temps à identifier celles qui méritaient leur attention.",
      action: "J'ai travaillé sur l'architecture d'acheminement des logs (Filebeat → Kafka → Spark Streaming → Elasticsearch → Kibana). Les modèles de détection d'anomalies (Isolation Forest, XGBoost) attribuaient un score de risque aux événements, visualisés sur un dashboard Kibana temps réel.",
      result: "Ce projet m'a surtout appris à penser à la volumétrie et à la fiabilité des traitements en continu, pas seulement au modèle Machine Learning.",
      techs: ["Python", "Kafka", "Spark Streaming", "Elasticsearch", "Kibana", "Linux"]
    },
    {
      id: "euromed",
      subject: "genai",
      subjectLabel: "GenAI & RAG",
      role: "Ingénieur GenAI & NLP",
      company: "Université Euromed",
      period: "Juin 2024 – Septembre 2024",
      problem: "Les étudiants avaient besoin de pouvoir poser des questions précises sur les documents internes et administratifs de l'université.",
      action: "J'ai développé un chatbot basé sur une architecture RAG. Avant d'écrire le code, j'ai benchmarké plusieurs modèles LLM, bases vectorielles et outils d'orchestration pour comparer la qualité des réponses, le coût, la latence et la maintenabilité. J'ai aussi ajouté la gestion des sessions sécurisée par JWT.",
      result: "J'ai choisi une approche RAG plutôt qu'un fine-tuning car les documents administratifs évoluent souvent. Le résultat est un assistant réutilisable donnant des réponses fiables.",
      techs: ["Python", "RAG", "LangChain", "HuggingFace", "Bases Vectorielles", "Docker", "JWT"]
    },
    {
      id: "alten",
      subject: "data",
      subjectLabel: "ML & MLOps",
      role: "Ingénieur Machine Learning & Développement",
      company: "ALTEN",
      period: "Décembre 2024 – Février 2025",
      problem: "Les utilisateurs devaient pouvoir lancer et suivre des entraînements de modèles génératifs (DCGAN) sans avoir à modifier directement le code à chaque essai.",
      action: "J'ai participé au développement d'une interface native pour configurer les hyperparamètres (époques, GPU, datasets), lancer les entraînements PyTorch et suivre visuellement les métriques en temps réel.",
      result: "Ce projet m'a fait comprendre qu'un modèle peut être techniquement bon et quand même être pénible à utiliser s'il n'y a pas un bon outil autour.",
      techs: ["Python", "PyTorch", "Deep Learning", "DCGAN", "MLOps"]
    }
  ],
  education: [
    {
      id: 1,
      school: "ENSEEIHT - Toulouse",
      degree: "Diplôme d'Ingénieur en Informatique et Télécommunications",
      period: "2022 – 2025",
      details: "Spécialisation Big Data, IA, Calcul Haute Performance et Systèmes Distribués."
    },
    {
      id: 2,
      school: "CPGE LM6E - Benguerir",
      degree: "Classes Préparatoires aux Grandes Écoles (MPSI / MP*)",
      period: "2020 – 2022",
      details: "Formation intensive en mathématiques, physique et sciences de l'ingénieur."
    }
  ],
  projects: [
    {
      id: "multi-agent",
      title: "Système Multi-Agents (LangGraph & Bedrock)",
      type: "Projet Personnel",
      description: "J'ai construit un système capable de décomposer une demande en langage naturel en plusieurs étapes (ex: récupérer le PIB d'un pays sur 5 ans puis générer un graphique). J'ai orchestré deux agents spécialisés (Researcher et Chart Generator) via LangGraph et Amazon Bedrock avec des outils REPL.",
      learnings: "Ce projet m'a permis de comprendre concrètement les limites des architectures agentiques : contrôle du code exécuté, sécurité du REPL et besoin de supervision humaine.",
      techs: ["Python", "LangGraph", "LangChain", "Amazon Bedrock"],
      github: "https://github.com/elotaha"
    },
    {
      id: "aws-pipeline",
      title: "AWS Mini-Pipeline (Infrastructure as Code)",
      type: "Projet Personnel",
      description: "J'ai créé un pipeline automatisé qui récupère des fichiers CSV sur AWS S3, déclenche des traitements Python avec des fonctions Lambda et stocke les données nettoyées.",
      learnings: "J'ai utilisé Terraform pour tout déployer en IaC afin de pratiquer la création d'infrastructures reproductibles sans faire de manipulations manuelles dans la console AWS.",
      techs: ["Terraform", "AWS S3", "AWS Lambda", "Python"],
      github: "https://github.com/elotaha"
    },
    {
      id: "mlops-weather",
      title: "Pipeline MLOps Météo & Airflow",
      type: "Projet Personnel",
      description: "Mise en place d'un DAG Airflow pour récupérer automatiquement des données météo, exécuter le réentraînement et suivre les métriques avec MLflow exposé via FastAPI.",
      learnings: "Un cas pratique pour travailler la planification, le versionnement de modèles et l'exposition d'API.",
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
      category: "Dev & Outils",
      skills: ["Git", "Docker", "CI/CD", "FastAPI", "Elasticsearch", "Kibana", "Power BI"]
    }
  ],
  certifications: [
    {
      name: "Snowflake Hands-on Essentials",
      issuer: "Snowflake",
      badgeUrl: "https://achieve.snowflake.com/75a700b7-db83-47de-8ff2-991acb845c18#acc.Tu8lpLWh",
      note: "Certifié (modules suivants en cours)"
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
    pitch: "Un projet Data, ML ou IA dont tu veux discuter ?",
    subtext: "N'hésite pas à m'envoyer un message par email ou sur LinkedIn.",
    email: "mohammedtahaelallem14@gmail.com",
    linkedin: "https://www.linkedin.com/in/taha-el-allem-ab2156225/",
    github: "https://github.com/elotaha"
  },
  footer: {
    text: "Taha Elallem — Data & AI Engineer"
  }
};
