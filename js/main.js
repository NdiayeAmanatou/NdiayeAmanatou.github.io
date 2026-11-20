/* =========================================================
   Portfolio — Yaye Amanatou NDIAYE
   ---------------------------------------------------------
   👉 Pour modifier tes projets ou compétences, édite
      simplement les tableaux PROJECTS et SKILLS ci-dessous.
   ========================================================= */

const GH = "https://github.com/NdiayeAmanatou/";
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/";
const icon = (name, variant = "original") => `${DEVICON}${name}/${name}-${variant}.svg`;

/* ---------- Compétences ---------- */
const SKILLS = [
  {
    emo: "💻", color: "#8b5cf6", title: { fr: "Langages", en: "Languages" },
    items: [
      { n: "Python", i: icon("python") },
      { n: "Java", i: icon("java") },
      { n: "C", i: icon("c") },
      { n: "JavaScript", i: icon("javascript") },
      { n: "SQL / MySQL", i: icon("mysql") },
      { n: "HTML5", i: icon("html5") },
      { n: "CSS3", i: icon("css3") },
    ],
  },
  {
    emo: "📊", color: "#22d3ee", title: { fr: "Data Science & Visualisation", en: "Data Science & Visualization" },
    items: [
      { n: "NumPy", i: icon("numpy") },
      { n: "Pandas", i: icon("pandas") },
      { n: "Matplotlib", i: icon("matplotlib") },
      { n: "Seaborn", e: "🌊" },
      { n: "Jupyter", i: icon("jupyter") },
      { n: "BeautifulSoup", e: "🍲" },
      { n: "Excel (TCD)", e: "📗" },
      { n: "Data Cleaning", e: "🧹" },
    ],
  },
  {
    emo: "🧠", color: "#ec4899", title: { fr: "Machine & Deep Learning", en: "Machine & Deep Learning" },
    items: [
      { n: "scikit-learn", i: icon("scikitlearn") },
      { n: "TensorFlow", i: icon("tensorflow") },
      { n: "Keras", i: icon("keras") },
      { n: "NLP / TF-IDF", e: "🔤" },
      { n: "Computer Vision", e: "🖼️" },
      { n: "Feature Engineering", e: "⚙️" },
    ],
  },
  {
    emo: "🤖", color: "#f97316", title: { fr: "IA Générative & LLM", en: "Generative AI & LLM" },
    items: [
      { n: "LLM", e: "✨" },
      { n: "RAG", e: "🔎" },
      { n: "Prompt Engineering", e: "💬" },
      { n: "Embeddings", e: "🧬" },
      { n: "ChromaDB", e: "🗄️" },
    ],
  },
  {
    emo: "🌐", color: "#a78bfa", title: { fr: "Développement Web & Back-end", en: "Web & Back-end Development" },
    items: [
      { n: "React", i: icon("react") },
      { n: "Bootstrap", i: icon("bootstrap") },
      { n: "Spring Boot", i: icon("spring") },
      { n: "JSP", e: "☕" },
      { n: "Maven", i: icon("maven") },
      { n: "Apache2", i: icon("apache") },
    ],
  },
  {
    emo: "🛠️", color: "#34d399", title: { fr: "Outils, Cloud & Sécurité", en: "Tools, Cloud & Security" },
    items: [
      { n: "Git", i: icon("git") },
      { n: "GitHub", e: "🐙" },
      { n: "Linux", i: icon("linux") },
      { n: "Docker", i: icon("docker") },
      { n: "AWS", e: "☁️" },
      { n: "Wireshark", e: "🦈" },
      { n: "OpenSSL", e: "🔐" },
      { n: "Nagios / SNMP", e: "📡" },
      { n: "Agile / Scrum", e: "🔄" },
      { n: "VS Code", i: icon("vscode") },
      { n: "IntelliJ", i: icon("intellij") },
    ],
  },
];

/* ---------- Projets ---------- */
const CATS = {
  all:  { fr: "Tous", en: "All" },
  ai:   { fr: "IA & LLM", en: "AI & LLM", color: "#f97316" },
  ml:   { fr: "Machine Learning", en: "Machine Learning", color: "#ec4899" },
  data: { fr: "Data & Visualisation", en: "Data & Visualization", color: "#22d3ee" },
  dev:  { fr: "Dev & Cloud", en: "Dev & Cloud", color: "#8b5cf6" },
};

const PROJECTS = [
  {
    cat: "ai", emo: "🛡️", featured: true, repo: "Atelier_pratique_LLM",
    title: { fr: "Pipeline RAG — Assistant Cybersécurité", en: "RAG Pipeline — Cybersecurity Assistant" },
    desc: {
      fr: "Pipeline de Retrieval-Augmented Generation construit de bout en bout : ingestion de documents PDF de référence en cybersécurité, nettoyage du texte, découpage en chunks, génération d'embeddings et indexation dans une base vectorielle pour la recherche sémantique par un LLM.",
      en: "End-to-end Retrieval-Augmented Generation pipeline: ingestion of reference cybersecurity PDF documents, text cleaning, chunking, embedding generation and indexing in a vector database for LLM-powered semantic search.",
    },
    hl: {
      fr: ["Extraction et normalisation du texte de 5 PDF (pypdf, Unicode)", "Chunks de 1 500 caractères, 15 % de chevauchement — choix justifiés et documentés", "Base vectorielle ChromaDB prête à être interrogée"],
      en: ["Text extraction & normalization from 5 PDFs (pypdf, Unicode)", "1,500-char chunks with 15% overlap — documented design choices", "ChromaDB vector store ready for querying"],
    },
    tags: ["Python", "LLM", "RAG", "Embeddings", "ChromaDB", "Pandas"],
  },
  {
    cat: "ai", emo: "💼", featured: true, repo: "IA_business_assistant",
    title: { fr: "AI Business Assistant — Prompt Engineering", en: "AI Business Assistant — Prompt Engineering" },
    desc: {
      fr: "Étude pratique du prompt engineering appliquée à un cas métier : l'analyse des retours clients. Conception de prompts structurés et comparaison rigoureuse des techniques de prompting sur une tâche de classification de sentiment.",
      en: "Hands-on prompt engineering study applied to a real business case: customer feedback analysis. Design of structured prompts and rigorous comparison of prompting techniques on a sentiment classification task.",
    },
    hl: {
      fr: ["Anatomie d'un prompt : rôle, tâche, contexte, contraintes, format", "Benchmark zero-shot vs one-shot vs few-shot sur des avis ambigus", "Sorties tabulaires directement exploitables par l'entreprise"],
      en: ["Prompt anatomy: role, task, context, constraints, output format", "Zero-shot vs one-shot vs few-shot benchmark on ambiguous reviews", "Tabular outputs ready to be used by the business"],
    },
    tags: ["LLM", "Prompt Engineering", "NLP", "Sentiment Analysis"],
  },
  {
    cat: "ml", emo: "⚡", repo: "atelier_tensorflow_1",
    title: { fr: "Prédiction de consommation énergétique", en: "Energy Consumption Forecasting" },
    desc: {
      fr: "Réseau de neurones TensorFlow/Keras entraîné sur les mesures de capteurs IoT d'un bâtiment intelligent pour prédire la consommation d'énergie. Modèle exporté au format .keras.",
      en: "TensorFlow/Keras neural network trained on smart-building IoT sensor data to predict energy consumption. Model exported in .keras format.",
    },
    tags: ["TensorFlow", "Keras", "Deep Learning", "Regression", "IoT"],
  },
  {
    cat: "ml", emo: "📡", repo: "atelier_scikit_learn",
    title: { fr: "Classification de l'état des capteurs IoT", en: "IoT Sensor State Classification" },
    desc: {
      fr: "Modèle K-Nearest Neighbors qui prédit l'état d'un capteur à partir de ses mesures : nettoyage, standardisation, split stratifié, évaluation (accuracy, matrice de confusion, rapport de classification) et sauvegarde du modèle.",
      en: "K-Nearest Neighbors model predicting a sensor's state from its readings: cleaning, scaling, stratified split, evaluation (accuracy, confusion matrix, classification report) and model persistence.",
    },
    tags: ["scikit-learn", "KNN", "StandardScaler", "joblib"],
  },
  {
    cat: "data", emo: "🏢", repo: "atelier_preparation_donnees",
    title: { fr: "Préparation de données tabulaires — Smart Building", en: "Tabular Data Preparation — Smart Building" },
    desc: {
      fr: "Transformation d'un jeu de données brut de bâtiment intelligent en dataset prêt pour le ML : valeurs manquantes, doublons, encodage One-Hot, standardisation et Pipeline scikit-learn, avec une cible de détection d'alertes.",
      en: "Turning a raw smart-building dataset into an ML-ready one: missing values, duplicates, one-hot encoding, scaling and a scikit-learn Pipeline, targeting alert detection.",
    },
    tags: ["Pandas", "scikit-learn", "Pipeline", "OneHotEncoder"],
  },
  {
    cat: "data", emo: "🖼️", repo: "Atelier_prepa_donnees_images",
    title: { fr: "Préparation de données images", en: "Image Data Preparation" },
    desc: {
      fr: "Chaîne de préparation d'un dataset d'images pour la vision par ordinateur : nettoyage, redimensionnement (PIL), augmentation de données et découpage train / validation / test.",
      en: "Image dataset preparation pipeline for computer vision: cleaning, resizing (PIL), data augmentation and train / validation / test splitting.",
    },
    tags: ["PIL", "NumPy", "Data Augmentation", "Computer Vision"],
  },
  {
    cat: "data", emo: "💬", repo: "Atelier_prepa_donnees_textuelles",
    title: { fr: "Préparation de données textuelles — Avis clients", en: "Text Data Preparation — Customer Reviews" },
    desc: {
      fr: "Traitement NLP d'avis clients : nettoyage, suppression des stopwords, lemmatisation, vectorisation TF-IDF et split stratifié pour l'analyse de sentiment.",
      en: "NLP processing of customer reviews: cleaning, stopword removal, lemmatization, TF-IDF vectorization and stratified split for sentiment analysis.",
    },
    tags: ["NLP", "TF-IDF", "Lemmatization", "Seaborn"],
  },
  {
    cat: "data", emo: "🐼", repo: "pandas_atelier",
    title: { fr: "Analyse de données IoT avec Pandas", en: "IoT Data Analysis with Pandas" },
    desc: {
      fr: "Exploration, nettoyage et agrégation de mesures de capteurs IoT avec Pandas, puis export des données propres en CSV et JSON.",
      en: "Exploration, cleaning and aggregation of IoT sensor readings with Pandas, then export of clean data to CSV and JSON.",
    },
    tags: ["Pandas", "EDA", "CSV / JSON"],
  },
  {
    cat: "data", emo: "🔢", repo: "atelier-numpy-iot",
    title: { fr: "Calcul scientifique IoT avec NumPy", en: "IoT Scientific Computing with NumPy" },
    desc: {
      fr: "Manipulation de tableaux multidimensionnels, calculs vectorisés et statistiques descriptives sur des données de capteurs.",
      en: "Multidimensional array manipulation, vectorized computation and descriptive statistics on sensor data.",
    },
    tags: ["NumPy", "Statistics", "Jupyter"],
  },
  {
    cat: "data", emo: "📈", repo: "atelier_matplotlib",
    title: { fr: "Data visualisation avec Matplotlib", en: "Data Visualization with Matplotlib" },
    desc: {
      fr: "Visualisation de l'évolution des températures et des mesures de capteurs, avec export des graphiques en PNG et PDF.",
      en: "Visualizing temperature trends and sensor readings, with charts exported to PNG and PDF.",
    },
    tags: ["Matplotlib", "Data Viz", "IoT"],
  },
  {
    cat: "data", emo: "🎨", repo: "atelier_seaborn",
    title: { fr: "Visualisation statistique avec Seaborn", en: "Statistical Visualization with Seaborn" },
    desc: {
      fr: "Plus de 15 visualisations statistiques pour comprendre un bâtiment intelligent : heatmap de corrélations, pairplot, violin plots, boxplots et régressions par bâtiment.",
      en: "15+ statistical visualizations to understand a smart building: correlation heatmap, pairplot, violin plots, boxplots and per-building regressions.",
    },
    tags: ["Seaborn", "Heatmap", "Pairplot", "EDA"],
  },
  {
    cat: "dev", emo: "☁️", repo: "deploy_api_aws",
    title: { fr: "API REST Spring Boot déployée sur AWS", en: "Spring Boot REST API deployed on AWS" },
    desc: {
      fr: "API back-end développée en Java avec Spring Boot et Maven, structurée de façon professionnelle et préparée pour un déploiement dans le cloud AWS.",
      en: "Back-end API built in Java with Spring Boot and Maven, professionally structured and prepared for deployment on the AWS cloud.",
    },
    tags: ["Java", "Spring Boot", "Maven", "AWS"],
  },
  {
    cat: "dev", emo: "🧩", repo: "Atelier_technos_web_IA",
    title: { fr: "AI Workspace — Tableau de bord web", en: "AI Workspace — Web Dashboard" },
    desc: {
      fr: "Interface web d'un espace de travail IA avec tableau de bord : mise en page responsive, composants interactifs et intégration de visuels en HTML, CSS et JavaScript.",
      en: "Web interface for an AI workspace with a dashboard: responsive layout, interactive components and visuals built with HTML, CSS and JavaScript.",
    },
    tags: ["HTML5", "CSS3", "JavaScript", "UI"],
  },
  {
    cat: "dev", emo: "🗂️", repo: "datasetManager",
    title: { fr: "Dataset Manager — Application Python", en: "Dataset Manager — Python App" },
    desc: {
      fr: "Application Python en ligne de commande, à l'architecture modulaire, pour gérer un catalogue de datasets : ajout, recherche, statistiques et persistance en CSV et JSON.",
      en: "Modular command-line Python application to manage a dataset catalog: add, search, statistics and persistence in CSV and JSON.",
    },
    tags: ["Python", "POO", "CSV / JSON", "CLI"],
  },
];

/* ---------- Traductions ---------- */
const I18N = {
  fr: {
    "nav.about": "À propos", "nav.skills": "Compétences", "nav.projects": "Projets", "nav.journey": "Parcours", "nav.contact": "Contact",
    "hero.hello": "Bonjour, je suis",
    "hero.tagline": "Je transforme les données en décisions et les idées en solutions d'IA à impact — avec une ambition : faire rayonner l'innovation numérique en Afrique.",
    "hero.cta1": "Voir mes projets", "hero.cta2": "Télécharger mon CV", "hero.available": "Ouverte aux opportunités",
    "about.title": "À propos de moi",
    "about.p1": "Je suis <strong>Amanatou Ndiaye</strong>, diplômée d'une <strong>Licence en Ingénierie Informatique</strong> de l'Université Assane Seck de Ziguinchor (UASZ). Actuellement, je poursuis une formation en <strong>Intelligence Artificielle</strong> à la <strong>Sonatel Academy – École du Code d'Orange Digital Center</strong>.",
    "about.p2": "Passionnée par le numérique, l'innovation et les nouvelles technologies, je m'intéresse particulièrement à l'<span class=\"hl\">Intelligence Artificielle</span>, à la <span class=\"hl\">Data Science</span> et au développement de solutions technologiques. Curieuse et animée par l'envie d'apprendre, j'aime relever des défis, explorer de nouvelles idées et transformer les connaissances en solutions concrètes à impact positif.",
    "about.p3": "Mon ambition est de contribuer à un écosystème numérique <strong>innovant, inclusif et porteur de changement</strong>, particulièrement en Afrique. 🌍",
    "about.s1": "Projets publiés", "about.s2": "Technologies", "about.s3": "Domaines d'expertise", "about.s4": "Curiosité",
    "skills.title": "Compétences",
    "projects.title": "Projets",
    "projects.sub": "Une sélection de mes travaux en IA, Machine Learning, Data et développement. Filtre par domaine 👇",
    "projects.featured": "★ À la une", "projects.code": "Voir le code",
    "journey.title": "Parcours", "journey.now": "En cours", "journey.done": "🎓 Diplômée",
    "journey.challenge": "🏆 Challenge", "journey.exp": "💼 Expérience",
    "journey.j1.date": "Depuis juil. 2026",
    "journey.j1.title": "CPS — Certificat de spécialisation Référent IA",
    "journey.j1.desc": "Parcours intensif orienté projets : préparation de données (tabulaires, images, textes), Machine Learning, Deep Learning, LLM, RAG et prompt engineering.",
    "journey.j2.title": "Licence en Ingénierie Informatique",
    "journey.j2.desc": "Algorithmique, programmation (Java, Python, C), bases de données, développement web, réseaux et sécurité (supervision Nagios / SNMP, serveur web HTTPS), architecture N-Tiers et génie logiciel.",
    "journey.j3.title": "Baccalauréat Sciences expérimentales (S2)",
    "journey.j4.date": "Mai — août 2026",
    "journey.j4.title": "Stagiaire en gestion de caisse",
    "journey.j4.desc": "Encaissements et moyens de paiement, suivi des ventes sur logiciel de gestion, participation aux inventaires, ouverture et clôture de caisse, relation client et gestion des réclamations.",
    "journey.j5.title": "PAS Challenge SALSTIS 2026 — Innovation numérique",
    "journey.j5.org": "JOJ Dakar 2026 · Accueil & mobilité des spectateurs",
    "journey.j5.desc": "Conception d'une solution combinant une application mobile intuitive et des bornes interactives multilingues enrichies par l'IA, pour améliorer l'information en temps réel, la fluidité des déplacements, la sécurité et le confort des spectateurs.",
    "about.fr": "Français — courant", "about.en": "Anglais — intermédiaire", "about.wo": "Wolof — langue maternelle",
    "contact.title": "Construisons quelque chose <span class=\"gradient-text\">d'incroyable</span> ensemble.",
    "contact.sub": "Stage, opportunité, collaboration ou simple échange autour de la data et de l'IA : ma boîte mail est toujours ouverte.",
    "contact.copy": "Copier", "contact.copied": "Adresse e-mail copiée ✓",
    "contact.name": "Votre nom", "contact.subject": "Sujet", "contact.message": "Message", "contact.send": "Envoyer",
    "contact.opening": "Ouverture de votre messagerie… ✉️",
    "footer.made": "Conçu avec passion à Dakar",
    roles: ["Data Analyst", "Data Scientist Junior", "ML Engineer", "Développeuse Web", "Passionnée d'IA 🤖"],
  },
  en: {
    "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects", "nav.journey": "Journey", "nav.contact": "Contact",
    "hero.hello": "Hi, I'm",
    "hero.tagline": "I turn data into decisions and ideas into impactful AI solutions — with one ambition: helping digital innovation shine across Africa.",
    "hero.cta1": "View my projects", "hero.cta2": "Download my CV", "hero.available": "Open to opportunities",
    "about.title": "About me",
    "about.p1": "I'm <strong>Amanatou Ndiaye</strong>, holder of a <strong>Bachelor's degree in Computer Engineering</strong> from Assane Seck University of Ziguinchor (UASZ). I'm currently pursuing an <strong>Artificial Intelligence</strong> program at <strong>Sonatel Academy – Orange Digital Center's Coding School</strong>.",
    "about.p2": "Passionate about digital technology and innovation, I'm especially interested in <span class=\"hl\">Artificial Intelligence</span>, <span class=\"hl\">Data Science</span> and building tech solutions. Curious and driven by a love of learning, I enjoy taking on challenges, exploring new ideas and turning knowledge into concrete solutions with positive impact.",
    "about.p3": "My ambition is to contribute to an <strong>innovative, inclusive and transformative</strong> digital ecosystem, especially in Africa. 🌍",
    "about.s1": "Published projects", "about.s2": "Technologies", "about.s3": "Areas of expertise", "about.s4": "Curiosity",
    "skills.title": "Skills",
    "projects.title": "Projects",
    "projects.sub": "A selection of my work in AI, Machine Learning, Data and development. Filter by domain 👇",
    "projects.featured": "★ Featured", "projects.code": "View code",
    "journey.title": "Journey", "journey.now": "In progress", "journey.done": "🎓 Graduated",
    "journey.challenge": "🏆 Challenge", "journey.exp": "💼 Experience",
    "journey.j1.date": "Since Jul. 2026",
    "journey.j1.title": "CPS — Professional Specialization Certificate: AI Referent",
    "journey.j1.desc": "Intensive project-based program: data preparation (tabular, images, text), Machine Learning, Deep Learning, LLMs, RAG and prompt engineering.",
    "journey.j2.title": "Bachelor's in Computer Engineering",
    "journey.j2.desc": "Algorithms, programming (Java, Python, C), databases, web development, networks and security (Nagios / SNMP monitoring, HTTPS web server), N-tier architecture and software engineering.",
    "journey.j3.title": "Scientific Baccalaureate (S2 — Experimental Sciences)",
    "journey.j4.date": "May — Aug. 2026",
    "journey.j4.title": "Cashier Operations Intern",
    "journey.j4.desc": "Payment processing, sales tracking in management software, inventory support, register opening and closing, customer relations and complaint handling.",
    "journey.j5.title": "PAS Challenge SALSTIS 2026 — Digital Innovation",
    "journey.j5.org": "Dakar 2026 Youth Olympic Games · Spectator welcome & mobility",
    "journey.j5.desc": "Designed a solution combining an intuitive mobile app and AI-powered multilingual interactive kiosks to improve real-time information, crowd flow, safety and spectator comfort.",
    "about.fr": "French — fluent", "about.en": "English — intermediate", "about.wo": "Wolof — native",
    "contact.title": "Let's build something <span class=\"gradient-text\">amazing</span> together.",
    "contact.sub": "Internship, opportunity, collaboration or just a chat about data and AI: my inbox is always open.",
    "contact.copy": "Copy", "contact.copied": "Email address copied ✓",
    "contact.name": "Your name", "contact.subject": "Subject", "contact.message": "Message", "contact.send": "Send",
    "contact.opening": "Opening your mail app… ✉️",
    "footer.made": "Crafted with passion in Dakar",
    roles: ["Data Analyst", "Junior Data Scientist", "ML Engineer", "Web Developer", "AI Enthusiast 🤖"],
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
const canHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

let lang = store.get("lang") || (navigator.language || "fr").slice(0, 2);
if (!I18N[lang]) lang = "fr";
let currentFilter = "all";
const t = (k) => I18N[lang][k] ?? k;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- Thème ---------- */
const root = document.documentElement;
const savedTheme = store.get("theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
root.dataset.theme = savedTheme;
$("#themeBtn").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  store.set("theme", next);
});

/* ---------- Rendu : compétences ---------- */
function renderSkills() {
  $("#skillsGrid").innerHTML = SKILLS.map((g) => `
    <div class="skill-card glass reveal in" style="--c:${g.color}">
      <h3><span class="emo">${g.emo}</span>${esc(g.title[lang])}</h3>
      <div class="skill-list">
        ${g.items.map((s) => `<span class="skill">${s.i
          ? `<img src="${s.i}" alt="" loading="lazy" onerror="this.replaceWith(document.createTextNode('•'))">`
          : `<span aria-hidden="true">${s.e}</span>`}${esc(s.n)}</span>`).join("")}
      </div>
    </div>`).join("");
}

/* ---------- Rendu : bandeau ---------- */
function renderMarquee() {
  const items = SKILLS.flatMap((g) => g.items).filter((s) => s.i);
  const html = items.map((s) => `<span class="marquee-item"><img src="${s.i}" alt="" loading="lazy">${esc(s.n)}</span>`).join("");
  $("#marquee").innerHTML = html + html;
}

/* ---------- Rendu : projets ---------- */
const ghIcon = `<svg viewBox="0 0 24 24" class="fill"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>`;

function renderFilters() {
  $("#filters").innerHTML = Object.entries(CATS).map(([k, c]) => {
    const n = k === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.cat === k).length;
    return `<button class="filter ${k === currentFilter ? "active" : ""}" data-f="${k}" role="tab" aria-selected="${k === currentFilter}">${esc(c[lang])}<span class="count">${n}</span></button>`;
  }).join("");
}

function renderProjects() {
  $("#projectsGrid").innerHTML = PROJECTS.map((p) => {
    const c = CATS[p.cat];
    return `
    <article class="project ${p.featured ? "featured" : ""}" data-cat="${p.cat}" style="--c:${c.color}">
      ${p.featured ? `<span class="p-star">${t("projects.featured")}</span>` : ""}
      <div class="p-top">
        <div class="p-icon" aria-hidden="true">${p.emo}</div>
        <div class="p-links">
          <a href="${GH}${p.repo}" target="_blank" rel="noopener" aria-label="${t("projects.code")} — ${esc(p.title[lang])}" title="${t("projects.code")}">${ghIcon}</a>
        </div>
      </div>
      <span class="p-cat">${esc(c[lang])}</span>
      <h3>${esc(p.title[lang])}</h3>
      <p>${esc(p.desc[lang])}</p>
      ${p.hl ? `<ul class="p-highlights">${p.hl[lang].map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
      <div class="p-tags">${p.tags.map((tg) => `<span>${esc(tg)}</span>`).join("")}</div>
    </article>`;
  }).join("");
  applyFilter(false);
  bindCards();
}

function applyFilter(animate = true) {
  $$(".project").forEach((el, i) => {
    const show = currentFilter === "all" || el.dataset.cat === currentFilter;
    el.classList.toggle("hide", !show);
    // "À la une" en double largeur seulement dans la vue "Tous"
    el.classList.toggle("featured", show && currentFilter === "all" && !!PROJECTS[i].featured);
    if (show && animate) {
      el.classList.remove("pop");
      void el.offsetWidth;
      el.style.animationDelay = `${(i % 6) * 60}ms`;
      el.classList.add("pop");
    }
  });
}

$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest(".filter");
  if (!b) return;
  currentFilter = b.dataset.f;
  $$(".filter").forEach((f) => { f.classList.toggle("active", f === b); f.setAttribute("aria-selected", f === b); });
  applyFilter();
});

/* ---------- Effets cartes : spotlight + tilt 3D ---------- */
function bindCards() {
  if (!canHover || reduceMotion) return;
  $$(".project").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
      const rx = ((y / r.height) - 0.5) * -6, ry = ((x / r.width) - 0.5) * 6;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

/* ---------- Langue ---------- */
function applyLang(animate) {
  root.lang = lang;
  $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  $("#langBtn").textContent = lang === "fr" ? "EN" : "FR";
  renderSkills();
  renderFilters();
  renderProjects();
  restartTyping();
  if (animate) {
    $$("main, .nav-links").forEach((el) => { el.classList.remove("lang-fade"); void el.offsetWidth; el.classList.add("lang-fade"); });
  }
}
$("#langBtn").addEventListener("click", () => {
  lang = lang === "fr" ? "en" : "fr";
  store.set("lang", lang);
  applyLang(true);
});

/* ---------- Texte qui s'écrit ---------- */
let typingTimer;
function restartTyping() {
  clearTimeout(typingTimer);
  const el = $("#typed");
  const roles = I18N[lang].roles;
  if (reduceMotion) { el.textContent = roles.join(" · "); return; }
  let r = 0, i = 0, del = false;
  const tick = () => {
    const word = roles[r];
    i += del ? -1 : 1;
    el.textContent = word.slice(0, i);
    let delay = del ? 40 : 85;
    if (!del && i === word.length) { del = true; delay = 1700; }
    else if (del && i === 0) { del = false; r = (r + 1) % roles.length; delay = 350; }
    typingTimer = setTimeout(tick, delay);
  };
  tick();
}

/* ---------- Apparition au défilement + compteurs ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    $$("[data-count]", en.target).forEach(countUp);
    io.unobserve(en.target);
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
$$(".reveal").forEach((el) => io.observe(el));

function countUp(el) {
  const end = +el.dataset.count;
  if (reduceMotion) { el.textContent = end; return; }
  const start = performance.now(), dur = 1400;
  const step = (now) => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- Navigation ---------- */
const nav = $("#nav"), burger = $("#burger"), links = $("#navLinks"), progress = $(".scroll-progress");
addEventListener("scroll", () => {
  const h = document.documentElement;
  progress.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`;
  nav.classList.toggle("scrolled", h.scrollTop > 20);
}, { passive: true });
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => {
  if (e.target.closest("a")) { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
});
const navIO = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) $$(".nav-links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
$$("section[id]").forEach((s) => navIO.observe(s));

/* ---------- Curseur lumineux, portrait 3D, boutons magnétiques ---------- */
if (canHover && !reduceMotion) {
  const glow = $(".cursor-glow");
  addEventListener("pointermove", (e) => { glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; }, { passive: true });

  const portrait = $(".portrait");
  $(".hero").addEventListener("pointermove", (e) => {
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
    portrait.style.transform = `rotateY(${x * 14}deg) rotateX(${y * -14}deg)`;
  });
  $(".hero").addEventListener("pointerleave", () => { portrait.style.transform = ""; });

  $$(".magnetic").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    b.addEventListener("pointerleave", () => { b.style.transform = ""; });
  });
}

/* ---------- Contact ---------- */
const EMAIL = "amma03.ndiaye@gmail.com";
const toast = (msg) => {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove("show"), 2400);
};
$("#copyMail").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(EMAIL); toast(t("contact.copied")); }
  catch { location.href = `mailto:${EMAIL}`; }
});
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get("message")}\n\n— ${f.get("name")}`;
  toast(t("contact.opening"));
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.get("subject"))}&body=${encodeURIComponent(body)}`;
});

$("#year").textContent = new Date().getFullYear();

/* ---------- Fond : réseau de neurones animé ---------- */
(function neural() {
  const cv = $("#neural"), ctx = cv.getContext("2d");
  let W, H, pts = [], mouse = { x: -999, y: -999 }, raf;
  const DPR = Math.min(devicePixelRatio || 1, 2);
  const colors = ["139,92,246", "236,72,153", "34,211,238", "249,115,22"];

  function resize() {
    W = cv.width = innerWidth * DPR; H = cv.height = innerHeight * DPR;
    cv.style.width = innerWidth + "px"; cv.style.height = innerHeight + "px";
    const n = Math.min(90, Math.floor((innerWidth * innerHeight) / 16000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35 * DPR, vy: (Math.random() - 0.5) * 0.35 * DPR,
      r: (Math.random() * 1.6 + 0.8) * DPR, c: colors[Math.floor(Math.random() * colors.length)],
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    const light = root.dataset.theme === "light";
    const max = 140 * DPR;
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < max) {
          ctx.strokeStyle = `rgba(${p.c},${(1 - d / max) * (light ? 0.22 : 0.28)})`;
          ctx.lineWidth = DPR * 0.8;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
      const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      if (dm < max * 1.4) {
        ctx.strokeStyle = `rgba(236,72,153,${(1 - dm / (max * 1.4)) * 0.55})`;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
      ctx.fillStyle = `rgba(${p.c},${light ? 0.55 : 0.85})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
    if (!reduceMotion) raf = requestAnimationFrame(draw);
  }
  addEventListener("resize", () => { cancelAnimationFrame(raf); resize(); draw(); });
  addEventListener("pointermove", (e) => { mouse.x = e.clientX * DPR; mouse.y = e.clientY * DPR; }, { passive: true });
  document.addEventListener("visibilitychange", () => {
    cancelAnimationFrame(raf);
    if (!document.hidden) draw();
  });
  resize(); draw();
})();

/* ---------- Initialisation ---------- */
renderMarquee();
applyLang(false);
