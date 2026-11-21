/* =========================================================
   Portfolio — Yaye Amanatou NDIAYE
   ---------------------------------------------------------
   👉 Pour modifier le contenu, édite les tableaux ci-dessous :
      SKILLS, PROJECTS, SERVICES, STEPS, JOURNEY, TRAITS, I18N
   ========================================================= */

const GH = "https://github.com/NdiayeAmanatou/";
const EMAIL = "amma03.ndiaye@gmail.com";
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/";
const icon = (name, variant = "original") => `${DEVICON}${name}/${name}-${variant}.svg`;

const COL = { red: "var(--red)", green: "var(--green)", saffron: "var(--saffron)", cobalt: "var(--cobalt)", ink: "var(--ink)" };

/* ---------- Compétences ---------- */
const SKILLS = [
  { color: COL.red, title: { fr: "Langages", en: "Languages" }, items: [
    { n: "Python", i: icon("python") }, { n: "Java", i: icon("java") }, { n: "C", i: icon("c") },
    { n: "JavaScript", i: icon("javascript") }, { n: "SQL / MySQL", i: icon("mysql") },
    { n: "HTML5", i: icon("html5") }, { n: "CSS3", i: icon("css3") } ] },
  { color: COL.saffron, title: { fr: "Data & Visualisation", en: "Data & Visualization" }, items: [
    { n: "NumPy", i: icon("numpy") }, { n: "Pandas", i: icon("pandas") }, { n: "Matplotlib", i: icon("matplotlib") },
    { n: "Seaborn", e: "🌊" }, { n: "Jupyter", i: icon("jupyter") }, { n: "BeautifulSoup", e: "🍲" },
    { n: "Excel (TCD)", e: "📗" }, { n: "Data Cleaning", e: "🧹" } ] },
  { color: COL.green, title: { fr: "Machine & Deep Learning", en: "Machine & Deep Learning" }, items: [
    { n: "scikit-learn", i: icon("scikitlearn") }, { n: "TensorFlow", i: icon("tensorflow") }, { n: "Keras", i: icon("keras") },
    { n: "NLP / TF-IDF", e: "🔤" }, { n: "Computer Vision", e: "🖼️" }, { n: "Feature Engineering", e: "⚙️" } ] },
  { color: COL.red, title: { fr: "IA générative & LLM", en: "Generative AI & LLM" }, items: [
    { n: "LLM", e: "✨" }, { n: "RAG", e: "🔎" }, { n: "Prompt Engineering", e: "💬" },
    { n: "Embeddings", e: "🧬" }, { n: "ChromaDB", e: "🗄️" } ] },
  { color: COL.cobalt, title: { fr: "Web & Back-end", en: "Web & Back-end" }, items: [
    { n: "React", i: icon("react") }, { n: "Bootstrap", i: icon("bootstrap") }, { n: "Spring Boot", i: icon("spring") },
    { n: "JSP", e: "☕" }, { n: "Maven", i: icon("maven") }, { n: "Apache2", i: icon("apache") } ] },
  { color: COL.ink, title: { fr: "Outils, Cloud & Sécurité", en: "Tools, Cloud & Security" }, items: [
    { n: "Git", i: icon("git") }, { n: "GitHub", e: "🐙" }, { n: "Linux", i: icon("linux") }, { n: "Docker", i: icon("docker") },
    { n: "AWS", e: "☁️" }, { n: "Wireshark", e: "🦈" }, { n: "OpenSSL", e: "🔐" }, { n: "Nagios / SNMP", e: "📡" },
    { n: "Agile / Scrum", e: "🔄" }, { n: "VS Code", i: icon("vscode") }, { n: "IntelliJ", i: icon("intellij") } ] },
];

/* ---------- Expertise ---------- */
const SERVICES = [
  { c: "#e8442c", t: { fr: "Analyse & <em>visualisation</em> de données", en: "Data analysis & <em>visualization</em>" },
    d: { fr: "Nettoyer, explorer et faire parler les données : indicateurs clairs, graphiques lisibles et conclusions utiles à la décision.",
         en: "Cleaning, exploring and giving data a voice: clear metrics, readable charts and decision-ready insights." },
    tags: ["Pandas", "NumPy", "Seaborn", "Matplotlib", "Excel"] },
  { c: "#0f7a4f", t: { fr: "Machine & <em>Deep Learning</em>", en: "Machine & <em>Deep Learning</em>" },
    d: { fr: "Modèles de classification et de régression, réseaux de neurones, évaluation rigoureuse et sauvegarde des modèles.",
         en: "Classification and regression models, neural networks, rigorous evaluation and model persistence." },
    tags: ["scikit-learn", "TensorFlow", "Keras", "NLP"] },
  { c: "#2f55d4", t: { fr: "IA générative & <em>LLM</em>", en: "Generative AI & <em>LLMs</em>" },
    d: { fr: "Pipelines RAG, embeddings, bases vectorielles et prompt engineering pour concevoir des assistants fiables.",
         en: "RAG pipelines, embeddings, vector databases and prompt engineering to build reliable assistants." },
    tags: ["RAG", "ChromaDB", "Embeddings", "Prompting"] },
  { c: "#c98a00", t: { fr: "Développement <em>web & back-end</em>", en: "Web & <em>back-end</em> development" },
    d: { fr: "Interfaces responsives et API REST, de la maquette au déploiement dans le cloud.",
         en: "Responsive interfaces and REST APIs, from mock-up to cloud deployment." },
    tags: ["React", "JavaScript", "Spring Boot", "AWS"] },
];

const STEPS = [
  { c: COL.red, ic: "🎯", t: { fr: "Comprendre", en: "Understand" }, d: { fr: "Cerner le besoin métier et poser les bonnes questions.", en: "Frame the business need and ask the right questions." } },
  { c: COL.saffron, ic: "🧹", t: { fr: "Préparer", en: "Prepare" }, d: { fr: "Collecter, nettoyer et structurer des données fiables.", en: "Collect, clean and structure reliable data." } },
  { c: COL.green, ic: "🧠", t: { fr: "Modéliser", en: "Model" }, d: { fr: "Explorer, entraîner, évaluer… puis itérer.", en: "Explore, train, evaluate… then iterate." } },
  { c: COL.cobalt, ic: "🚀", t: { fr: "Livrer", en: "Deliver" }, d: { fr: "Déployer, visualiser et expliquer les résultats.", en: "Deploy, visualize and explain the results." } },
];

const TRAITS = {
  fr: ["Rigueur & organisation", "Autonomie", "Esprit d'équipe", "Adaptabilité", "Esprit d'analyse", "Curiosité", "Sens des responsabilités"],
  en: ["Rigor & organization", "Autonomy", "Team spirit", "Adaptability", "Analytical mind", "Curiosity", "Sense of responsibility"],
};

/* ---------- Parcours ---------- */
const JOURNEY = [
  { c: COL.red, live: true, date: { fr: "Juil. 2026 → auj.", en: "Jul. 2026 → now" },
    t: { fr: "CPS — Certificat de spécialisation Référent IA", en: "CPS — AI Referent Specialization Certificate" },
    o: "Sonatel Academy · Orange Digital Center, Dakar",
    d: { fr: "Formation intensive par projets : préparation de données (tabulaires, images, textes), Machine Learning, Deep Learning, LLM, RAG et prompt engineering.",
         en: "Intensive project-based training: data preparation (tabular, images, text), Machine Learning, Deep Learning, LLMs, RAG and prompt engineering." } },
  { c: COL.saffron, badge: { fr: "🏆 Challenge", en: "🏆 Challenge" }, date: { fr: "2026", en: "2026" },
    t: { fr: "PAS Challenge SALSTIS 2026", en: "PAS Challenge SALSTIS 2026" },
    o: { fr: "JOJ Dakar 2026 — accueil & mobilité des spectateurs", en: "Dakar 2026 Youth Olympic Games — spectator welcome & mobility" },
    d: { fr: "Proposition d'une application mobile et de bornes interactives multilingues dopées à l'IA pour informer en temps réel, fluidifier les déplacements et renforcer la sécurité des spectateurs.",
         en: "Proposed a mobile app and AI-powered multilingual kiosks to deliver real-time information, smoother crowd flow and better spectator safety." } },
  { c: COL.cobalt, badge: { fr: "💼 Expérience", en: "💼 Experience" }, date: { fr: "Mai → Août 2026", en: "May → Aug. 2026" },
    t: { fr: "Stagiaire en gestion de caisse", en: "Cashier Operations Intern" },
    o: "KAY YIWU SHOP · Dakar, Golf Sud",
    d: { fr: "Encaissements multi-moyens de paiement, suivi des ventes sur logiciel de gestion, inventaires, ouverture/clôture de caisse et relation client.",
         en: "Multi-method payment processing, sales tracking in management software, inventories, register opening/closing and customer care." } },
  { c: COL.green, badge: { fr: "🎓 Diplôme", en: "🎓 Degree" }, date: { fr: "2022 → 2026", en: "2022 → 2026" },
    t: { fr: "Licence en Ingénierie Informatique", en: "Bachelor's in Computer Engineering" },
    o: "Université Assane Seck de Ziguinchor (UASZ)",
    d: { fr: "Algorithmique, Java, Python, C, bases de données, web, réseaux & sécurité (Nagios, SNMP, HTTPS), architecture N-Tiers et génie logiciel.",
         en: "Algorithms, Java, Python, C, databases, web, networks & security (Nagios, SNMP, HTTPS), N-tier architecture and software engineering." } },
  { c: COL.ink, badge: { fr: "🎓 Bac", en: "🎓 High school" }, date: { fr: "2021 → 2022", en: "2021 → 2022" },
    t: { fr: "Baccalauréat scientifique (S2)", en: "Scientific Baccalaureate (S2)" },
    o: "Lycée des jeunes filles Ameth Fall · Saint-Louis",
    d: { fr: "Sciences expérimentales — le point de départ d'un goût prononcé pour la logique et la résolution de problèmes.",
         en: "Experimental sciences — where my taste for logic and problem-solving began." } },
];

/* ---------- Projets ---------- */
const CATS = {
  all:  { fr: "Tout", en: "All" },
  ai:   { fr: "IA & LLM", en: "AI & LLM", color: "#e8442c" },
  ml:   { fr: "Machine Learning", en: "Machine Learning", color: "#0f7a4f" },
  data: { fr: "Data & Visualisation", en: "Data & Visualization", color: "#c98a00" },
  dev:  { fr: "Dev & Cloud", en: "Dev & Cloud", color: "#2f55d4" },
};

const PROJECTS = [
  { cat: "ai", emo: "🛡️", featured: true, repo: "Atelier_pratique_LLM",
    title: { fr: "Assistant RAG spécialisé en cybersécurité", en: "Cybersecurity RAG Assistant" },
    desc: { fr: "Une chaîne RAG complète qui transforme des documents PDF de référence en base de connaissances interrogeable : extraction, nettoyage, découpage, embeddings et indexation vectorielle.",
            en: "A complete RAG chain turning reference PDF documents into a searchable knowledge base: extraction, cleaning, chunking, embeddings and vector indexing." },
    hl: { fr: ["5 documents de référence extraits et normalisés", "Chunks de 1 500 caractères, 15 % de chevauchement — choix argumentés", "Index vectoriel ChromaDB prêt pour un LLM"],
          en: ["5 reference documents extracted & normalized", "1,500-char chunks, 15% overlap — reasoned design choices", "ChromaDB vector index ready for an LLM"] },
    tags: ["Python", "LLM", "RAG", "Embeddings", "ChromaDB"] },
  { cat: "ai", emo: "💼", featured: true, repo: "IA_business_assistant",
    title: { fr: "AI Business Assistant", en: "AI Business Assistant" },
    desc: { fr: "Comment obtenir d'un LLM des réponses fiables pour l'entreprise ? Étude appliquée à l'analyse des avis clients, avec des prompts structurés et une comparaison méthodique des techniques.",
            en: "How do you get reliable business answers from an LLM? An applied study on customer review analysis, with structured prompts and a methodical comparison of techniques." },
    hl: { fr: ["Prompt en 5 briques : rôle, tâche, contexte, contraintes, format", "Zero-shot, one-shot, few-shot : comparés sur des cas ambigus", "Sorties tabulaires exploitables directement"],
          en: ["5-block prompts: role, task, context, constraints, format", "Zero-, one- and few-shot compared on ambiguous cases", "Directly usable tabular outputs"] },
    tags: ["LLM", "Prompt Engineering", "NLP", "Sentiment"] },
  { cat: "ml", emo: "⚡", repo: "atelier_tensorflow_1",
    title: { fr: "Prévoir la consommation d'énergie", en: "Forecasting Energy Consumption" },
    desc: { fr: "Un réseau de neurones TensorFlow/Keras entraîné sur les capteurs IoT d'un bâtiment intelligent pour anticiper sa consommation énergétique.",
            en: "A TensorFlow/Keras neural network trained on smart-building IoT sensors to anticipate energy consumption." },
    tags: ["TensorFlow", "Keras", "Regression", "IoT"] },
  { cat: "ml", emo: "📡", repo: "atelier_scikit_learn",
    title: { fr: "Diagnostiquer l'état des capteurs", en: "Diagnosing Sensor Health" },
    desc: { fr: "Un classifieur KNN qui identifie l'état d'un capteur à partir de ses mesures, avec standardisation, split stratifié et évaluation complète.",
            en: "A KNN classifier identifying a sensor's state from its readings, with scaling, stratified split and full evaluation." },
    tags: ["scikit-learn", "KNN", "joblib"] },
  { cat: "data", emo: "🏢", repo: "atelier_preparation_donnees",
    title: { fr: "Données tabulaires prêtes pour le ML", en: "ML-ready Tabular Data" },
    desc: { fr: "D'un jeu brut de bâtiment intelligent à un dataset propre : valeurs manquantes, doublons, One-Hot, standardisation et Pipeline scikit-learn.",
            en: "From a raw smart-building dataset to a clean one: missing values, duplicates, one-hot, scaling and a scikit-learn Pipeline." },
    tags: ["Pandas", "Pipeline", "OneHot"] },
  { cat: "data", emo: "🖼️", repo: "Atelier_prepa_donnees_images",
    title: { fr: "Préparer des images pour la vision", en: "Preparing Images for Vision" },
    desc: { fr: "Nettoyage, redimensionnement, augmentation de données et découpage train / validation / test d'un dataset d'images.",
            en: "Cleaning, resizing, data augmentation and train / validation / test split of an image dataset." },
    tags: ["PIL", "NumPy", "Augmentation"] },
  { cat: "data", emo: "💬", repo: "Atelier_prepa_donnees_textuelles",
    title: { fr: "Faire parler les avis clients", en: "Making Customer Reviews Talk" },
    desc: { fr: "Traitement NLP d'avis clients : stopwords, lemmatisation et vectorisation TF-IDF pour l'analyse de sentiment.",
            en: "NLP processing of customer reviews: stopwords, lemmatization and TF-IDF vectorization for sentiment analysis." },
    tags: ["NLP", "TF-IDF", "Lemmatisation"] },
  { cat: "data", emo: "🐼", repo: "pandas_atelier",
    title: { fr: "Analyse IoT avec Pandas", en: "IoT Analysis with Pandas" },
    desc: { fr: "Exploration, nettoyage et agrégation de mesures de capteurs, puis export propre en CSV et JSON.",
            en: "Exploring, cleaning and aggregating sensor readings, then clean export to CSV and JSON." },
    tags: ["Pandas", "EDA"] },
  { cat: "data", emo: "🔢", repo: "atelier-numpy-iot",
    title: { fr: "Calcul scientifique avec NumPy", en: "Scientific Computing with NumPy" },
    desc: { fr: "Tableaux multidimensionnels, calculs vectorisés et statistiques descriptives sur des données de capteurs.",
            en: "Multidimensional arrays, vectorized computation and descriptive statistics on sensor data." },
    tags: ["NumPy", "Statistiques"] },
  { cat: "data", emo: "📈", repo: "atelier_matplotlib",
    title: { fr: "Raconter les températures", en: "Telling the Temperature Story" },
    desc: { fr: "Visualisations Matplotlib de l'évolution des mesures de capteurs, exportées en PNG et PDF.",
            en: "Matplotlib visualizations of sensor trends, exported to PNG and PDF." },
    tags: ["Matplotlib", "Data Viz"] },
  { cat: "data", emo: "🎨", repo: "atelier_seaborn",
    title: { fr: "Visualisation statistique avec Seaborn", en: "Statistical Viz with Seaborn" },
    desc: { fr: "Plus de 15 graphiques pour comprendre un bâtiment intelligent : heatmap, pairplot, violin plots et régressions.",
            en: "15+ charts to understand a smart building: heatmap, pairplot, violin plots and regressions." },
    tags: ["Seaborn", "Heatmap", "EDA"] },
  { cat: "dev", emo: "☁️", repo: "deploy_api_aws",
    title: { fr: "API REST Spring Boot pour AWS", en: "Spring Boot REST API for AWS" },
    desc: { fr: "Une API back-end en Java avec Spring Boot et Maven, structurée proprement et prête à être déployée sur AWS.",
            en: "A Java back-end API with Spring Boot and Maven, cleanly structured and ready to deploy on AWS." },
    tags: ["Java", "Spring Boot", "AWS"] },
  { cat: "dev", emo: "🧩", repo: "Atelier_technos_web_IA",
    title: { fr: "AI Workspace", en: "AI Workspace" },
    desc: { fr: "Un tableau de bord web responsive pour un espace de travail IA, en HTML, CSS et JavaScript.",
            en: "A responsive web dashboard for an AI workspace, built with HTML, CSS and JavaScript." },
    tags: ["HTML", "CSS", "JavaScript"] },
  { cat: "dev", emo: "🗂️", repo: "datasetManager",
    title: { fr: "Dataset Manager", en: "Dataset Manager" },
    desc: { fr: "Application Python modulaire en ligne de commande pour cataloguer des datasets : ajout, recherche, statistiques, CSV/JSON.",
            en: "Modular command-line Python app to catalog datasets: add, search, statistics, CSV/JSON." },
    tags: ["Python", "POO", "CLI"] },
];

/* ---------- Traductions ---------- */
const I18N = {
  fr: {
    "nav.about": "À propos", "nav.services": "Expertise", "nav.projects": "Projets", "nav.journey": "Parcours", "nav.contact": "Contact",
    "hero.eyebrow": "Portfolio — Data & Intelligence Artificielle", "hero.iam": "Je suis",
    "hero.lead": "Je conçois des solutions data et IA utiles, fiables et compréhensibles — pour aider les organisations à mieux décider, ici en Afrique et au-delà.",
    "hero.cta1": "Découvrir mes projets", "hero.cta2": "Télécharger mon CV",
    "hero.nowLabel": "Actuellement", "hero.now": "CPS Référent IA · Orange Digital Center",
    "hero.basedLbl": "Basée à", "hero.statusLbl": "Statut", "hero.status": "Disponible — stages & opportunités",
    badge: "OUVERTE AUX OPPORTUNITÉS • DATA • IA • ",
    roles: ["Data Analyst", "Data Scientist", "ML Engineer", "Développeuse Web"],
    marquee: [["Données", "décisions"], ["Modèles", "impact"], ["Idées", "solutions"], ["Dakar", "le monde"]],
    "about.label": "À propos", "about.title": "Curieuse de nature, <em>bâtisseuse</em> par passion.",
    "about.p1": "Je m'appelle <strong>Yaye Amanatou Ndiaye</strong>. Après une <strong>Licence en Ingénierie Informatique</strong> à l'Université Assane Seck de Ziguinchor, je me spécialise aujourd'hui en <strong>Intelligence Artificielle</strong> à la <strong>Sonatel Academy</strong>, l'École du Code d'Orange Digital Center, dans le cadre du certificat <strong>CPS Référent IA</strong>.",
    "about.p2": "Ce qui m'anime ? Comprendre ce que racontent les données, puis en faire des outils concrets : analyses claires, modèles prédictifs, assistants basés sur les LLM. J'aborde chaque projet avec rigueur, méthode et beaucoup de curiosité.",
    "about.p3": "Mon cap : mettre la technologie au service d'une <em>Afrique plus innovante et plus inclusive.</em>",
    "about.s1": "projets publiés sur GitHub", "about.s2": "outils & technologies",
    "about.nowK": "En ce moment", "about.now": "CPS Référent IA <em>@ Orange Digital Center</em>", "about.nowS": "Depuis juillet 2026 · Dakar",
    "about.langsK": "Langues", "about.fr": "Français", "about.en": "Anglais", "about.frL": "Courant", "about.enL": "Intermédiaire", "about.woL": "Natif",
    "about.traitsK": "Atouts",
    "services.label": "Expertise", "services.title": "Ce que je fais, <em>et comment.</em>",
    "process.k": "Ma méthode de travail", "skills.k": "Boîte à outils",
    "projects.label": "Projets sélectionnés", "projects.title": "Des idées devenues <em>projets concrets.</em>",
    "projects.all": "Tous mes dépôts sur GitHub", "projects.featured": "★ Projet phare", "projects.code": "Code",
    "projects.moreK": "Et ce n'est qu'un début", "projects.moreT": "D'autres projets <em>sont en cours</em> — suivez-les sur GitHub.",
    "journey.label": "Parcours", "journey.title": "Un chemin <em>pas à pas.</em>",
    "journey.intro": "De Saint-Louis à Dakar en passant par Ziguinchor : chaque étape a renforcé mes bases techniques et mon envie d'innover.",
    "journey.live": "En cours",
    "contact.label": "Contact", "contact.title": "Une idée, un stage, un projet&nbsp;? <em>Parlons-en.</em>",
    "contact.sub": "Je serai ravie d'échanger avec vous autour de la data, de l'IA ou d'une future collaboration.",
    "contact.copy": "Cliquer pour copier", "contact.copied": "Adresse copiée ✓", "contact.cv": "Curriculum vitae",
    "contact.name": "Votre nom", "contact.subject": "Sujet", "contact.message": "Votre message", "contact.send": "Envoyer le message",
    "contact.opening": "Ouverture de votre messagerie… ✉️",
    "footer.made": "Conçu & développé par Amanatou — Dakar, Sénégal", "footer.top": "Haut de page",
  },
  en: {
    "nav.about": "About", "nav.services": "Expertise", "nav.projects": "Work", "nav.journey": "Journey", "nav.contact": "Contact",
    "hero.eyebrow": "Portfolio — Data & Artificial Intelligence", "hero.iam": "I'm a",
    "hero.lead": "I design useful, reliable and understandable data & AI solutions — helping organizations make better decisions, in Africa and beyond.",
    "hero.cta1": "Explore my work", "hero.cta2": "Download my CV",
    "hero.nowLabel": "Currently", "hero.now": "AI Referent Certificate · Orange Digital Center",
    "hero.basedLbl": "Based in", "hero.statusLbl": "Status", "hero.status": "Available — internships & opportunities",
    badge: "OPEN TO OPPORTUNITIES • DATA • AI • ",
    roles: ["Data Analyst", "Data Scientist", "ML Engineer", "Web Developer"],
    marquee: [["Data", "decisions"], ["Models", "impact"], ["Ideas", "solutions"], ["Dakar", "the world"]],
    "about.label": "About", "about.title": "Curious by nature, <em>builder</em> by passion.",
    "about.p1": "My name is <strong>Yaye Amanatou Ndiaye</strong>. After a <strong>Bachelor's in Computer Engineering</strong> at Assane Seck University of Ziguinchor, I'm now specializing in <strong>Artificial Intelligence</strong> at <strong>Sonatel Academy</strong>, Orange Digital Center's coding school, through the <strong>AI Referent (CPS)</strong> certificate.",
    "about.p2": "What drives me? Understanding the stories data tells, then turning them into concrete tools: clear analyses, predictive models, LLM-powered assistants. I approach every project with rigor, method and plenty of curiosity.",
    "about.p3": "My compass: putting technology to work for a <em>more innovative and inclusive Africa.</em>",
    "about.s1": "projects published on GitHub", "about.s2": "tools & technologies",
    "about.nowK": "Right now", "about.now": "AI Referent Certificate <em>@ Orange Digital Center</em>", "about.nowS": "Since July 2026 · Dakar",
    "about.langsK": "Languages", "about.fr": "French", "about.en": "English", "about.frL": "Fluent", "about.enL": "Intermediate", "about.woL": "Native",
    "about.traitsK": "Strengths",
    "services.label": "Expertise", "services.title": "What I do, <em>and how.</em>",
    "process.k": "How I work", "skills.k": "Toolbox",
    "projects.label": "Selected work", "projects.title": "Ideas turned into <em>real projects.</em>",
    "projects.all": "All my repositories on GitHub", "projects.featured": "★ Featured", "projects.code": "Code",
    "projects.moreK": "And this is just the beginning", "projects.moreT": "More projects <em>are in progress</em> — follow them on GitHub.",
    "journey.label": "Journey", "journey.title": "One step <em>at a time.</em>",
    "journey.intro": "From Saint-Louis to Dakar by way of Ziguinchor: every step strengthened my technical foundations and my drive to innovate.",
    "journey.live": "In progress",
    "contact.label": "Contact", "contact.title": "An idea, an internship, a project? <em>Let's talk.</em>",
    "contact.sub": "I'd be delighted to chat about data, AI or a future collaboration.",
    "contact.copy": "Click to copy", "contact.copied": "Address copied ✓", "contact.cv": "Résumé",
    "contact.name": "Your name", "contact.subject": "Subject", "contact.message": "Your message", "contact.send": "Send message",
    "contact.opening": "Opening your mail app… ✉️",
    "footer.made": "Designed & built by Amanatou — Dakar, Senegal", "footer.top": "Back to top",
  },
};

/* =========================================================
   Logique
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
};
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fineHover = matchMedia("(hover: hover) and (pointer: fine)").matches;
const root = document.documentElement;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

let lang = store.get("lang") || ((navigator.language || "fr").startsWith("en") ? "en" : "fr");
if (!I18N[lang]) lang = "fr";
let filter = "all";
const t = (k) => I18N[lang][k] ?? k;
const L = (o) => (typeof o === "string" ? o : o[lang]);

/* ---------- Écran d'intro ---------- */
(function loader() {
  const el = $("#loader");
  let seen = false;
  try { seen = sessionStorage.getItem("intro") === "1"; } catch { /* ignore */ }
  if (reduceMotion || seen) { el.remove(); return; }
  document.body.classList.add("loading");
  const count = $("#loaderCount"), bar = $("#loaderBar");
  const start = performance.now(), dur = 1300;
  const step = (now) => {
    const p = Math.min((now - start) / dur, 1);
    const v = Math.round(100 * (1 - Math.pow(1 - p, 3)));
    count.textContent = v; bar.style.width = v + "%";
    if (p < 1) return requestAnimationFrame(step);
    el.classList.add("done");
    document.body.classList.remove("loading");
    try { sessionStorage.setItem("intro", "1"); } catch { /* ignore */ }
    setTimeout(() => el.remove(), 1200);
  };
  requestAnimationFrame(step);
})();

/* ---------- Horloge de Dakar ---------- */
const clockFmt = new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Dakar" });
const tick = () => { $("#clock").textContent = clockFmt.format(new Date()); };
tick(); setInterval(tick, 15000);

/* ---------- Révélations & compteurs ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    $$("[data-count]", en.target).forEach(countUp);
    io.unobserve(en.target);
  });
}, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

function countUp(el) {
  const end = +el.dataset.count;
  if (reduceMotion) { el.textContent = end; return; }
  const t0 = performance.now(), dur = 1600;
  const f = (now) => {
    const p = Math.min((now - t0) / dur, 1);
    el.textContent = Math.round(end * (1 - Math.pow(1 - p, 4)));
    if (p < 1) requestAnimationFrame(f);
  };
  requestAnimationFrame(f);
}

/* ---------- Rendus ---------- */
function renderMarquee() {
  const items = I18N[lang].marquee.map(([a, b]) => `<span class="mq">${esc(a)} <em>→ ${esc(b)}</em><span class="star">✦</span></span>`).join("");
  $("#marquee").innerHTML = items + items + items + items;
}

let roleIdx = 0, roleTimer;
function renderRoles() {
  const roles = I18N[lang].roles;
  const track = $("#roleTrack");
  track.innerHTML = [...roles, roles[0]].map((r) => `<span>${esc(r)}</span>`).join("");
  roleIdx = 0;
  track.style.transition = "none"; track.style.transform = "translateY(0)";
  clearInterval(roleTimer);
  if (reduceMotion) return;
  roleTimer = setInterval(() => {
    roleIdx++;
    track.style.transition = "";
    track.style.transform = `translateY(-${roleIdx * 1.2}em)`;
    if (roleIdx === roles.length) {
      setTimeout(() => { track.style.transition = "none"; track.style.transform = "translateY(0)"; roleIdx = 0; }, 850);
    }
  }, 2400);
}

function renderTraits() {
  $("#traits").innerHTML = TRAITS[lang].map((x) => `<span class="trait">${esc(x)}</span>`).join("");
}

function renderServices() {
  $("#servicesList").innerHTML = SERVICES.map((s, i) => `
    <article class="svc" style="--svc:${s.c}">
      <span class="svc-n">0${i + 1}</span>
      <h3 class="svc-t">${s.t[lang]}</h3>
      <div><p class="svc-d">${esc(s.d[lang])}</p><div class="svc-tags">${s.tags.map((x) => `<span>${esc(x)}</span>`).join("")}</div></div>
      <span class="svc-arrow"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </article>`).join("");
  $("#steps").innerHTML = STEPS.map((s, i) => `
    <li class="step" style="--c:${s.c}">
      <div class="step-top"><span class="step-n">0${i + 1}</span><span class="step-ic" aria-hidden="true">${s.ic}</span></div>
      <h3>${esc(s.t[lang])}</h3><p>${esc(s.d[lang])}</p>
    </li>`).join("");
  $("#stackRows").innerHTML = SKILLS.map((g) => `
    <div class="srow" style="--c:${g.color}">
      <h3>${esc(g.title[lang])}</h3>
      <div class="chips">${g.items.map((s) => `<span class="chip">${s.i
        ? `<img src="${s.i}" alt="" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'e',textContent:'•'}))">`
        : `<span class="e" aria-hidden="true">${s.e}</span>`}${esc(s.n)}</span>`).join("")}</div>
    </div>`).join("");
}

function renderJourney() {
  $("#timeline").innerHTML = JOURNEY.map((j) => `
    <li class="tl-it" style="--c:${j.c}">
      <span class="tl-date">${esc(L(j.date))}</span>
      <div>
        ${j.live ? `<span class="tl-badge"><span class="live-dot"></span>${t("journey.live")}</span>` : `<span class="tl-badge">${esc(L(j.badge))}</span>`}
        <h3>${esc(L(j.t))}</h3>
        <p class="tl-org">${esc(L(j.o))}</p>
        <p>${esc(L(j.d))}</p>
      </div>
    </li>`).join("");
  $$("#timeline .tl-it").forEach((el) => io.observe(el));
}

/* Mini-graphique déterministe pour chaque couverture de projet */
function chart(seed) {
  let s = seed * 7919;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  const n = 12, pts = [];
  let y = 60 + rnd() * 20;
  for (let i = 0; i < n; i++) { y = Math.max(15, Math.min(90, y + (rnd() - 0.45) * 26)); pts.push([(i / (n - 1)) * 400, y]); }
  const d = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  return `<svg class="chart" viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true">
    <path class="area" d="${d} L400 100 L0 100 Z"/><path class="line" d="${d}" vector-effect="non-scaling-stroke"/></svg>`;
}

function renderFilters() {
  $("#filters").innerHTML = Object.entries(CATS).map(([k, c]) => {
    const n = k === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.cat === k).length;
    return `<button class="filter ${k === filter ? "active" : ""}" data-f="${k}" role="tab" aria-selected="${k === filter}">${esc(c[lang])}<sup>${n}</sup></button>`;
  }).join("");
}

function renderProjects() {
  $("#projectsGrid").innerHTML = PROJECTS.map((p, i) => `
    <a class="pcard" href="${GH}${p.repo}" target="_blank" rel="noopener" data-cat="${p.cat}" data-i="${i}" style="--c:${CATS[p.cat].color}" data-cursor="${t("projects.code")} ↗">
      <div class="cover">
        <div class="cover-top"><span class="cover-idx">${String(i + 1).padStart(2, "0")} / ${PROJECTS.length}</span><span class="cover-emo" aria-hidden="true">${p.emo}</span></div>
        ${chart(i + 3)}
        ${p.featured ? `<span class="cover-star">${t("projects.featured")}</span>` : ""}
      </div>
      <div class="pbody">
        <span class="pcat">${esc(CATS[p.cat][lang])}</span>
        <h3>${esc(p.title[lang])}</h3>
        <p>${esc(p.desc[lang])}</p>
        ${p.hl ? `<ul class="phl">${p.hl[lang].map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
        <div class="pfoot">
          <div class="ptags">${p.tags.map((x) => `<span>${esc(x)}</span>`).join("")}</div>
          <span class="plink" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></span>
        </div>
      </div>
    </a>`).join("") + `
    <a class="pmore" href="https://github.com/NdiayeAmanatou?tab=repositories" target="_blank" rel="noopener" data-cursor="GitHub ↗">
      <span class="mono pmore-k">${t("projects.moreK")}</span>
      <span class="pmore-t">${t("projects.moreT")}</span>
      <span class="pmore-go"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></span>
    </a>`;
  applyFilter(false);
  bindCursorTargets();
}

function applyFilter(animate = true) {
  let k = 0;
  $$(".pcard").forEach((el) => {
    const p = PROJECTS[+el.dataset.i];
    const show = filter === "all" || p.cat === filter;
    el.classList.toggle("hide", !show);
    el.classList.toggle("featured", show && filter === "all" && !!p.featured);
    if (!show) return;
    if (animate) { el.classList.remove("pop"); void el.offsetWidth; el.style.animationDelay = `${(k++ % 6) * 70}ms`; el.classList.add("pop", "in"); }
    else io.observe(el);
  });
  const more = $(".pmore");
  if (more) more.hidden = filter !== "all";
}

$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest(".filter");
  if (!b) return;
  filter = b.dataset.f;
  $$(".filter").forEach((f) => { f.classList.toggle("active", f === b); f.setAttribute("aria-selected", f === b); });
  applyFilter();
});

/* ---------- Langue ---------- */
function applyLang(animate) {
  root.lang = lang;
  $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  $("#langBtn").textContent = lang === "fr" ? "EN" : "FR";
  $("#badgeText").textContent = I18N[lang].badge;
  renderMarquee(); renderRoles(); renderTraits(); renderServices(); renderJourney(); renderFilters(); renderProjects();
  if (animate) { const m = $("main"); m.classList.remove("lang-fade"); void m.offsetWidth; m.classList.add("lang-fade"); }
}
$("#langBtn").addEventListener("click", () => {
  lang = lang === "fr" ? "en" : "fr";
  store.set("lang", lang);
  applyLang(true);
});

/* ---------- Navigation ---------- */
const nav = $("#nav"), burger = $("#burger"), links = $("#navLinks"), progress = $(".progress");
const archImg = $(".arch img");
let lastY = 0;
addEventListener("scroll", () => {
  const y = scrollY, h = document.documentElement;
  progress.style.transform = `scaleX(${y / (h.scrollHeight - h.clientHeight || 1)})`;
  nav.classList.toggle("scrolled", y > 30);
  nav.classList.toggle("hidden", y > lastY && y > 400 && !links.classList.contains("open"));
  lastY = y;
  if (!reduceMotion && y < innerHeight) archImg.style.transform = `scale(1.08) translateY(${y * 0.06}px)`;
}, { passive: true });
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
});
links.addEventListener("click", (e) => {
  if (!e.target.closest("a")) return;
  links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); document.body.style.overflow = "";
});
const navIO = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) $$(".nav-links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
$$("section[id]").forEach((s) => navIO.observe(s));

/* ---------- Curseur personnalisé & boutons magnétiques ---------- */
const cur = $(".cursor"), curDot = $(".cursor-dot"), curLabel = $(".cursor-label");
const useCursor = fineHover && !reduceMotion;
function bindCursorTargets() {
  if (!useCursor) return;
  $$("[data-cursor]").forEach((el) => {
    if (el.dataset.cbound) return;
    el.dataset.cbound = "1";
    el.addEventListener("pointerenter", () => { curLabel.textContent = el.dataset.cursor; cur.classList.add("big"); });
    el.addEventListener("pointerleave", () => cur.classList.remove("big"));
  });
}
if (useCursor) {
  document.body.classList.add("has-cursor");
  let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;
  addEventListener("pointermove", (e) => {
    mx = e.clientX; my = e.clientY;
    if (!document.body.classList.contains("cursor-on")) { cx = mx; cy = my; document.body.classList.add("cursor-on"); }
    curDot.style.transform = `translate(${mx}px, ${my}px)`;
  }, { passive: true });
  (function follow() {
    cx += (mx - cx) * 0.18; cy += (my - cy) * 0.18;
    cur.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(follow);
  })();
  document.addEventListener("pointerover", (e) => {
    const h = e.target.closest("a, button, .chip, .trait, input, textarea");
    cur.classList.toggle("hover", !!h && !h.dataset.cursor);
  });
  document.documentElement.addEventListener("pointerleave", () => { cur.style.opacity = 0; curDot.style.opacity = 0; });
  document.documentElement.addEventListener("pointerenter", () => { cur.style.opacity = 1; curDot.style.opacity = 1; });

  $$(".magnetic").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    b.addEventListener("pointerleave", () => { b.style.transform = ""; });
  });
}

/* ---------- Champ de points interactif (hero) ---------- */
const dots = (function dotfield() {
  const cv = $("#dotfield"), ctx = cv.getContext("2d"), hero = $(".hero");
  const DPR = Math.min(devicePixelRatio || 1, 2);
  const GAP = 30, R = 170;
  let W = 0, H = 0, pts = [], mouse = { x: -9999, y: -9999 }, raf = 0, visible = true;
  let ink = "#15130f", acc = "#e8442c";
  const t0 = performance.now();
  function recolor() {
    const cs = getComputedStyle(root);
    ink = cs.getPropertyValue("--ink").trim() || ink;
    acc = cs.getPropertyValue("--red").trim() || acc;
    if (reduceMotion) draw(performance.now());
  }
  function resize() {
    W = hero.offsetWidth; H = hero.offsetHeight;
    cv.width = W * DPR; cv.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    pts = [];
    for (let y = GAP / 2; y < H; y += GAP) for (let x = GAP / 2; x < W; x += GAP) pts.push([x, y]);
  }
  function draw(now) {
    const time = (now - t0) / 1000;
    ctx.clearRect(0, 0, W, H);
    for (const [x, y] of pts) {
      const dx = x - mouse.x, dy = y - mouse.y, d = Math.hypot(dx, dy);
      const wave = reduceMotion ? 0 : (Math.sin(x * 0.012 + time * 1.2) + Math.cos(y * 0.015 + time)) * 0.25;
      let r = 1 + wave * 0.5, a = 0.13 + wave * 0.05, col = ink, ox = 0, oy = 0;
      if (d < R) {
        const k = 1 - d / R;
        r += k * 2.6; a = 0.13 + k * 0.75; col = k > 0.35 ? acc : ink;
        ox = (dx / (d || 1)) * k * 10; oy = (dy / (d || 1)) * k * 10;
      }
      ctx.globalAlpha = Math.max(0.04, a);
      ctx.fillStyle = col;
      ctx.beginPath(); ctx.arc(x + ox, y + oy, Math.max(0.4, r), 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!reduceMotion && visible) raf = requestAnimationFrame(draw);
  }
  hero.addEventListener("pointermove", (e) => { const r = hero.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  hero.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
  new IntersectionObserver(([en]) => {
    visible = en.isIntersecting;
    cancelAnimationFrame(raf);
    if (visible) raf = requestAnimationFrame(draw);
  }).observe(hero);
  addEventListener("resize", () => { resize(); if (reduceMotion) draw(performance.now()); });
  resize(); recolor();
  if (reduceMotion) draw(performance.now());
  return { recolor };
})();

/* ---------- Thème ---------- */
const syncThemeColor = () => { $('meta[name="theme-color"]').content = root.dataset.theme === "dark" ? "#100f0d" : "#f3eee6"; };
syncThemeColor();
$("#themeBtn").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  store.set("theme", root.dataset.theme);
  syncThemeColor();
  dots.recolor();
});

/* ---------- Contact ---------- */
const toast = (msg) => {
  const el = $("#toast");
  el.textContent = msg; el.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("show"), 2400);
};
$("#copyMail").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(EMAIL); toast(t("contact.copied")); }
  catch { location.href = `mailto:${EMAIL}`; }
});
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  toast(t("contact.opening"));
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.get("subject"))}&body=${encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")}`)}`;
});

$("#year").textContent = new Date().getFullYear();

/* ---------- Initialisation ---------- */
applyLang(false);
$$(".reveal").forEach((el) => io.observe(el));
bindCursorTargets();
