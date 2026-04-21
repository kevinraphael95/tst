// ============================================================
//  KevinScale — Questions & Configuration
// ============================================================

const AXES = [
  { id: "economie",    label: "Économie",                   color: "#e63946", kevinScore: 72 },
  { id: "societe",     label: "Société & Mœurs",            color: "#ab47bc", kevinScore: 68 },
  { id: "etat",        label: "État & Libertés",            color: "#ffa726", kevinScore: 60 },
  { id: "ecologie",    label: "Écologie",                   color: "#66bb6a", kevinScore: 55 },
  { id: "geopolitique",label: "Géopolitique & Immigration", color: "#29b6f6", kevinScore: 65 },
  { id: "laicite",     label: "Laïcité",                    color: "#ffca28", kevinScore: 70 },
  { id: "justice",     label: "Justice & Sécurité",         color: "#ef5350", kevinScore: 58 },
  { id: "tech",        label: "Technologie",                color: "#26c6da", kevinScore: 75 },
];

// agree:true  = cette réponse va dans le sens de Kévin sur cet axe
// agree:false = cette réponse va à l'opposé de Kévin sur cet axe

const QUESTIONS = [

  // ── ÉCONOMIE ─────────────────────────────────────────────
  {
    id: "eco_1",
    text: "Les services publics stratégiques (énergie, transports, eau) devraient rester dans les mains de l'État.",
    effect: [{ axis: "economie", agree: false }],
  },
  {
    id: "eco_2",
    text: "La concurrence entre entreprises privées est le meilleur moyen d'améliorer la qualité des services.",
    effect: [{ axis: "economie", agree: true }],
  },
  {
    id: "eco_3",
    text: "Un impôt sur la fortune élevé est indispensable pour réduire les inégalités.",
    effect: [{ axis: "economie", agree: false }],
  },
  {
    id: "eco_4",
    text: "Le marché libre, avec peu de régulation, est le système économique le plus efficace.",
    effect: [{ axis: "economie", agree: true }],
  },
  {
    id: "eco_5",
    text: "L'entrepreneur individuel mérite de garder l'essentiel de ce qu'il crée.",
    effect: [{ axis: "economie", agree: true }],
  },

  // ── SOCIÉTÉ & MŒURS ──────────────────────────────────────
  {
    id: "soc_1",
    text: "Le mariage entre personnes du même sexe est un droit fondamental qui ne devrait pas être remis en cause.",
    effect: [{ axis: "societe", agree: true }],
  },
  {
    id: "soc_2",
    text: "Les personnes transgenres doivent pouvoir changer leur état civil librement.",
    effect: [{ axis: "societe", agree: true }],
  },
  {
    id: "soc_3",
    text: "La famille traditionnelle (homme, femme, enfants) est le modèle le plus stable pour la société.",
    effect: [{ axis: "societe", agree: false }],
  },
  {
    id: "soc_4",
    text: "La culture populaire actuelle valorise trop peu les valeurs traditionnelles.",
    effect: [{ axis: "societe", agree: false }],
  },
  {
    id: "soc_5",
    text: "Le droit à l'avortement doit être garanti sans restriction dans les délais légaux.",
    effect: [{ axis: "societe", agree: true }],
  },

  // ── ÉTAT & LIBERTÉS ───────────────────────────────────────
  {
    id: "eta_1",
    text: "La légalisation du cannabis récréatif serait une mesure raisonnable.",
    effect: [{ axis: "etat", agree: true }],
  },
  {
    id: "eta_2",
    text: "La surveillance de masse par l'État est acceptable si elle améliore la sécurité.",
    effect: [{ axis: "etat", agree: false }],
  },
  {
    id: "eta_3",
    text: "Les individus doivent pouvoir prendre des risques pour eux-mêmes sans que l'État intervienne.",
    effect: [{ axis: "etat", agree: true }],
  },
  {
    id: "eta_4",
    text: "L'État devrait avoir le droit de censurer des contenus jugés dangereux sur internet.",
    effect: [{ axis: "etat", agree: false }],
  },

  // ── ÉCOLOGIE ─────────────────────────────────────────────
  {
    id: "ecol_1",
    text: "Le nucléaire doit jouer un rôle central dans la transition énergétique française.",
    effect: [{ axis: "ecologie", agree: true }],
  },
  {
    id: "ecol_2",
    text: "La croissance économique et la protection de l'environnement sont compatibles.",
    effect: [{ axis: "ecologie", agree: true }],
  },
  {
    id: "ecol_3",
    text: "Il faut interdire les vols intérieurs remplaçables par le train.",
    effect: [{ axis: "ecologie", agree: false }],
  },
  {
    id: "ecol_4",
    text: "La décroissance économique est nécessaire pour sauver la planète.",
    effect: [{ axis: "ecologie", agree: false }],
  },

  // ── GÉOPOLITIQUE & IMMIGRATION ────────────────────────────
  {
    id: "geo_1",
    text: "L'immigration est globalement une richesse économique et culturelle pour la France.",
    effect: [{ axis: "geopolitique", agree: true }],
  },
  {
    id: "geo_2",
    text: "La France devrait renforcer les contrôles aux frontières et limiter l'immigration.",
    effect: [{ axis: "geopolitique", agree: false }],
  },
  {
    id: "geo_3",
    text: "La construction européenne est globalement positive pour la France.",
    effect: [{ axis: "geopolitique", agree: true }],
  },
  {
    id: "geo_4",
    text: "La souveraineté nationale doit primer sur les décisions des institutions européennes.",
    effect: [{ axis: "geopolitique", agree: false }],
  },

  // ── LAÏCITÉ ──────────────────────────────────────────────
  {
    id: "lai_1",
    text: "Les signes religieux ostentatoires n'ont pas leur place dans les services publics.",
    effect: [{ axis: "laicite", agree: true }],
  },
  {
    id: "lai_2",
    text: "La religion devrait rester strictement dans la sphère privée.",
    effect: [{ axis: "laicite", agree: true }],
  },
  {
    id: "lai_3",
    text: "Les associations cultuelles ne devraient recevoir aucun financement public.",
    effect: [{ axis: "laicite", agree: true }],
  },
  {
    id: "lai_4",
    text: "La France devrait reconnaître officiellement son héritage chrétien dans son identité nationale.",
    effect: [{ axis: "laicite", agree: false }],
  },

  // ── JUSTICE & SÉCURITÉ ────────────────────────────────────
  {
    id: "jus_1",
    text: "La réinsertion des détenus devrait être la priorité absolue de la politique pénale.",
    effect: [{ axis: "justice", agree: true }],
  },
  {
    id: "jus_2",
    text: "Les peines minimales obligatoires sont nécessaires pour certains crimes graves.",
    effect: [{ axis: "justice", agree: false }],
  },
  {
    id: "jus_3",
    text: "La police a globalement besoin de plus de moyens et d'effectifs.",
    effect: [{ axis: "justice", agree: false }],
  },
  {
    id: "jus_4",
    text: "Les violences policières sont un problème structurel en France qui mérite une réforme profonde.",
    effect: [{ axis: "justice", agree: true }],
  },

  // ── TECHNOLOGIE ──────────────────────────────────────────
  {
    id: "tec_1",
    text: "L'intelligence artificielle va globalement améliorer la qualité de vie des gens.",
    effect: [{ axis: "tech", agree: true }],
  },
  {
    id: "tec_2",
    text: "Les grandes entreprises tech ont trop de pouvoir et devraient être démembrées.",
    effect: [{ axis: "tech", agree: false }],
  },
  {
    id: "tec_3",
    text: "Le progrès technologique est la meilleure réponse aux grands défis de l'humanité.",
    effect: [{ axis: "tech", agree: true }],
  },
  {
    id: "tec_4",
    text: "Il faudrait un moratoire sur certains développements technologiques risqués.",
    effect: [{ axis: "tech", agree: false }],
  },
];

const VERDICTS = [
  { min: 90, title: "Clone de Kévin",       emoji: "🧬", text: "Statistiquement, tu es Kévin. Vérifiez que vous n'êtes pas la même personne." },
  { min: 75, title: "Très proche de Kévin", emoji: "🤝", text: "Vous pourriez passer une soirée entière à vous acquiescer mutuellement." },
  { min: 55, title: "Dans le camp Kevin",   emoji: "✅", text: "Tu partages l'essentiel avec Kévin, quelques désaccords ponctuels." },
  { min: 40, title: "À mi-chemin",          emoji: "⚖️", text: "Vous vous rejoignez sur certains axes, divergez sur d'autres." },
  { min: 25, title: "Éloigné de Kévin",     emoji: "🌊", text: "Des planètes idéologiques assez différentes." },
  { min: 10, title: "Quasi-opposé",         emoji: "❄️", text: "Presque rien en commun. La coexistence est possible." },
  { min: 0,  title: "L'Anti-Kévin",         emoji: "🚨", text: "Tu es l'exact opposé de Kévin sur quasiment tout." },
];

if (typeof module !== "undefined") module.exports = { AXES, QUESTIONS, VERDICTS };
