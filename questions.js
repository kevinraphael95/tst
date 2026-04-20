// ============================================================
//  KevinScale — Questions & Configuration
//  Modifier ce fichier pour changer les questions et les
//  réponses de Kévin sur chaque axe.
// ============================================================

/**
 * AXES IDÉOLOGIQUES
 * Chaque axe a deux pôles : le côté "Kevin" (score max) et son opposé.
 * kevinScore : position de Kévin sur cet axe (0 à 100)
 */
const AXES = [
  {
    id: "economie",
    label: "Économie",
    icon: "💰",
    left:  { label: "Communiste",   color: "#e63946" },
    right: { label: "Capitaliste",  color: "#2a9d8f" },
    kevinPosition: 10,   // 0 = extrême gauche, 100 = extrême droite
    description: "Rapport à la propriété, au marché et à la redistribution des richesses.",
  },
  {
    id: "societe",
    label: "Société",
    icon: "🏳️‍🌈",
    left:  { label: "Progressiste", color: "#e040fb" },
    right: { label: "Conservateur", color: "#ff8f00" },
    kevinPosition: 5,
    description: "Vision des droits sociaux, des identités et des évolutions de la société.",
  },
  {
    id: "etat",
    label: "État",
    icon: "⚖️",
    left:  { label: "Libertaire",   color: "#ffd600" },
    right: { label: "Autoritaire",  color: "#546e7a" },
    kevinPosition: 15,
    description: "Rapport au pouvoir de l'État, à la liberté individuelle et au contrôle social.",
  },
  {
    id: "ecologie",
    label: "Écologie",
    icon: "🌿",
    left:  { label: "Décroissant",  color: "#43a047" },
    right: { label: "Productiviste",color: "#795548" },
    kevinPosition: 8,
    description: "Rapport à l'environnement, à la croissance et à la durabilité.",
  },
  {
    id: "modernisme",
    label: "Modernisme",
    icon: "🔬",
    left:  { label: "Moderniste",   color: "#29b6f6" },
    right: { label: "Traditionaliste", color: "#a1887f" },
    kevinPosition: 5,
    description: "Rapport au progrès, à la tradition et à l'évolution des mœurs.",
  },
  {
    id: "geopolitique",
    label: "Géopolitique",
    icon: "🌍",
    left:  { label: "Internationaliste", color: "#26c6da" },
    right: { label: "Nationaliste",       color: "#ef5350" },
    kevinPosition: 5,
    description: "Vision des frontières, de la souveraineté et de la coopération internationale.",
  },
  {
    id: "religion",
    label: "Religion & Laïcité",
    icon: "✝️",
    left:  { label: "Laïque",      color: "#ffca28" },
    right: { label: "Religieux",   color: "#8d6e63" },
    kevinPosition: 10,
    description: "Rapport à la religion dans l'espace public et privé.",
  },
  {
    id: "conflit",
    label: "Conflit & Paix",
    icon: "☮️",
    left:  { label: "Pacifiste",    color: "#a5d6a7" },
    right: { label: "Militariste",  color: "#b71c1c" },
    kevinPosition: 10,
    description: "Vision de la guerre, de la défense et de la résolution des conflits.",
  },
  {
    id: "genre",
    label: "Genre & Féminisme",
    icon: "♀️",
    left:  { label: "Féministe",    color: "#f48fb1" },
    right: { label: "Anti-féministe", color: "#4e342e" },
    kevinPosition: 5,
    description: "Rapport aux inégalités de genre, au féminisme et aux droits des femmes.",
  },
  {
    id: "race",
    label: "Race & Décolonialisme",
    icon: "✊",
    left:  { label: "Décolonial",   color: "#ff7043" },
    right: { label: "Républicaniste", color: "#37474f" },
    kevinPosition: 10,
    description: "Rapport aux discriminations raciales, à la mémoire coloniale et aux politiques antiracistes.",
  },
  {
    id: "tech",
    label: "Technologie",
    icon: "💻",
    left:  { label: "Tech-optimiste", color: "#00e5ff" },
    right: { label: "Tech-pessimiste", color: "#78909c" },
    kevinPosition: 15,
    description: "Vision de l'intelligence artificielle, du progrès technologique et de ses impacts.",
  },
];

// ============================================================
//  QUESTIONS
//
//  axis      : id de l'axe (doit correspondre à AXES[n].id)
//  text      : énoncé de la question
//  effect    : tableau de { axisId, value } — impact sur chaque axe
//              value positif → pousse vers le pôle gauche (kevin)
//              value négatif → pousse vers le pôle droit
//
//  answers   : 5 niveaux toujours dans cet ordre :
//    0 — Tout à fait d'accord
//    1 — Plutôt d'accord
//    2 — Neutre / Sans opinion
//    3 — Plutôt pas d'accord
//    4 — Pas du tout d'accord
// ============================================================

const QUESTIONS = [

  // ── ÉCONOMIE ────────────────────────────────────────────────
  {
    id: "eco_1",
    text: "L'État devrait posséder et gérer les secteurs stratégiques (énergie, transports, banques).",
    effect: [{ axis: "economie", agree: true }],
  },
  {
    id: "eco_2",
    text: "Les inégalités de richesse sont la conséquence naturelle du mérite individuel.",
    effect: [{ axis: "economie", agree: false }],
  },
  {
    id: "eco_3",
    text: "Un salaire maximum légal est une mesure juste pour réduire les écarts entre riches et pauvres.",
    effect: [{ axis: "economie", agree: true }],
  },
  {
    id: "eco_4",
    text: "La privatisation des services publics améliore leur efficacité.",
    effect: [{ axis: "economie", agree: false }],
  },

  // ── SOCIÉTÉ ─────────────────────────────────────────────────
  {
    id: "soc_1",
    text: "Utiliser les bons pronoms des personnes transgenres est une marque de respect fondamentale.",
    effect: [{ axis: "societe", agree: true }],
  },
  {
    id: "soc_2",
    text: "La culture « woke » menace la liberté d'expression et va trop loin.",
    effect: [{ axis: "societe", agree: false }],
  },
  {
    id: "soc_3",
    text: "Le mariage et l'adoption par des couples homosexuels sont des droits fondamentaux.",
    effect: [{ axis: "societe", agree: true }],
  },
  {
    id: "soc_4",
    text: "Les valeurs traditionnelles de la famille constituent un pilier essentiel de notre société.",
    effect: [{ axis: "societe", agree: false }, { axis: "modernisme", agree: false }],
  },

  // ── ÉTAT ────────────────────────────────────────────────────
  {
    id: "eta_1",
    text: "La surveillance de masse par l'État est justifiée au nom de la sécurité nationale.",
    effect: [{ axis: "etat", agree: false }],
  },
  {
    id: "eta_2",
    text: "Les drogues douces devraient être légalisées et régulées par l'État.",
    effect: [{ axis: "etat", agree: true }],
  },
  {
    id: "eta_3",
    text: "La police devrait être soumise à des contrôles civils indépendants beaucoup plus stricts.",
    effect: [{ axis: "etat", agree: true }],
  },

  // ── ÉCOLOGIE ────────────────────────────────────────────────
  {
    id: "eco2_1",
    text: "La croissance économique infinie est incompatible avec la survie de la planète.",
    effect: [{ axis: "ecologie", agree: true }],
  },
  {
    id: "eco2_2",
    text: "L'État devrait interdire les vols courts-courriers remplaçables par le train.",
    effect: [{ axis: "ecologie", agree: true }],
  },
  {
    id: "eco2_3",
    text: "Le nucléaire est indispensable à la transition énergétique.",
    effect: [{ axis: "ecologie", agree: false }],
  },
  {
    id: "eco2_4",
    text: "La technologie seule pourra résoudre la crise climatique sans remettre en cause nos modes de vie.",
    effect: [{ axis: "ecologie", agree: false }, { axis: "tech", agree: false }],
  },

  // ── MODERNISME ──────────────────────────────────────────────
  {
    id: "mod_1",
    text: "La PMA pour toutes et la GPA éthique devraient être pleinement légalisées.",
    effect: [{ axis: "modernisme", agree: true }],
  },
  {
    id: "mod_2",
    text: "Certaines traditions méritent d'être préservées même si elles freinent le progrès social.",
    effect: [{ axis: "modernisme", agree: false }],
  },

  // ── GÉOPOLITIQUE ────────────────────────────────────────────
  {
    id: "geo_1",
    text: "Les frontières nationales sont un obstacle à la fraternité humaine universelle.",
    effect: [{ axis: "geopolitique", agree: true }],
  },
  {
    id: "geo_2",
    text: "L'immigration est une richesse économique et culturelle pour les sociétés d'accueil.",
    effect: [{ axis: "geopolitique", agree: true }],
  },
  {
    id: "geo_3",
    text: "La souveraineté nationale doit primer sur les institutions internationales (ONU, UE…).",
    effect: [{ axis: "geopolitique", agree: false }],
  },

  // ── RELIGION ────────────────────────────────────────────────
  {
    id: "rel_1",
    text: "Les symboles religieux n'ont pas leur place dans les institutions publiques.",
    effect: [{ axis: "religion", agree: true }],
  },
  {
    id: "rel_2",
    text: "Les religions ont joué un rôle majoritairement positif dans l'histoire des civilisations.",
    effect: [{ axis: "religion", agree: false }],
  },

  // ── CONFLIT ─────────────────────────────────────────────────
  {
    id: "con_1",
    text: "Les dépenses militaires devraient être massivement réduites au profit du social et de l'éducation.",
    effect: [{ axis: "conflit", agree: true }],
  },
  {
    id: "con_2",
    text: "La non-violence est le seul moyen moralement acceptable de résoudre les conflits politiques.",
    effect: [{ axis: "conflit", agree: true }],
  },
  {
    id: "con_3",
    text: "Envoyer des armes dans des zones de conflit est parfois une nécessité morale.",
    effect: [{ axis: "conflit", agree: false }],
  },

  // ── GENRE ───────────────────────────────────────────────────
  {
    id: "gen_1",
    text: "Le patriarcat est un système structurel réel qui organise encore nos sociétés aujourd'hui.",
    effect: [{ axis: "genre", agree: true }],
  },
  {
    id: "gen_2",
    text: "La parité stricte doit être imposée dans toutes les institutions publiques et les grands groupes privés.",
    effect: [{ axis: "genre", agree: true }],
  },
  {
    id: "gen_3",
    text: "Les différences biologiques entre hommes et femmes expliquent l'essentiel des inégalités salariales.",
    effect: [{ axis: "genre", agree: false }],
  },

  // ── RACE ────────────────────────────────────────────────────
  {
    id: "rac_1",
    text: "Les statistiques ethniques devraient être autorisées en France pour mieux mesurer les discriminations.",
    effect: [{ axis: "race", agree: true }],
  },
  {
    id: "rac_2",
    text: "L'enseignement de l'histoire coloniale française doit être profondément réformé dans les programmes scolaires.",
    effect: [{ axis: "race", agree: true }],
  },
  {
    id: "rac_3",
    text: "Le concept de « racisme systémique » est une importation idéologique étrangère inapplicable en France.",
    effect: [{ axis: "race", agree: false }],
  },

  // ── TECH ────────────────────────────────────────────────────
  {
    id: "tec_1",
    text: "L'intelligence artificielle va globalement améliorer la condition humaine et libérer du temps.",
    effect: [{ axis: "tech", agree: true }],
  },
  {
    id: "tec_2",
    text: "Nous devrions imposer un moratoire sur certains développements technologiques pour en mesurer les impacts.",
    effect: [{ axis: "tech", agree: false }],
  },
  {
    id: "tec_3",
    text: "Les grandes entreprises tech doivent être fragmentées car elles ont trop de pouvoir sur nos démocraties.",
    effect: [{ axis: "tech", agree: true }, { axis: "economie", agree: true }],
  },
];

// ============================================================
//  VERDICTS selon score global (0 à 100)
// ============================================================
const VERDICTS = [
  {
    min: 90,
    title: "Clone de Kévin",
    emoji: "🧬",
    text: "Statistiquement, tu es Kévin. Vérifiez que vous n'êtes pas la même personne. C'est inquiétant.",
  },
  {
    min: 75,
    title: "Très proche de Kévin",
    emoji: "🤝",
    text: "Vous pourriez passer une soirée entière à acquiescer mutuellement. C'est beau, presque ennuyeux.",
  },
  {
    min: 55,
    title: "Dans le camp Kevin",
    emoji: "✅",
    text: "Tu partages l'essentiel avec Kévin, mais quelques désaccords ponctuels pourraient pimenter la conversation.",
  },
  {
    min: 40,
    title: "À mi-chemin",
    emoji: "⚖️",
    text: "Vous vous rejoignez sur certains axes et divergez sur d'autres. Une bonne discussion, si vous évitez certains sujets.",
  },
  {
    min: 25,
    title: "Éloigné de Kévin",
    emoji: "🌊",
    text: "Vous habitez des planètes idéologiques différentes. Ça peut faire une bonne amitié ou une très mauvaise soirée.",
  },
  {
    min: 10,
    title: "Quasi-opposé à Kévin",
    emoji: "❄️",
    text: "Presque rien en commun. La coexistence est possible, mais évitez les sujets sérieux.",
  },
  {
    min: 0,
    title: "L'Anti-Kévin",
    emoji: "🚨",
    text: "Tu es l'exact opposé de Kévin sur quasiment tout. C'est statistiquement remarquable. Chapeau.",
  },
];

// Export pour les autres scripts
if (typeof module !== "undefined") {
  module.exports = { AXES, QUESTIONS, VERDICTS };
}
