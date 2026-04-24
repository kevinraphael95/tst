// ============================================================
//  KevinScale — Questions & Configuration
//
//  Chaque axe a un pôle gauche (0) et un pôle droit (100).
//  kevinScore : position de Kévin sur l'axe (0–100)
//
//  Chaque question :
//  - agree: true  → "d'accord" pousse vers le pôle GAUCHE (0)
//  - agree: false → "d'accord" pousse vers le pôle DROIT (100)
//  - kevinAnswer  → ce que Kévin répondrait (0–4)
//
//  Score final par axe :
//  1) Position utilisateur sur l'axe (0-100) via agree/disagree
//  2) Proximité position user avec kevinScore → 0-100%
//  3) Bonus : proximité des réponses avec kevinAnswer → ±10 pts
// ============================================================

const AXES = [
  {
    id: "economie",
    label: "Économie",
    color: "#e63946",
    left:  "Étatiste",
    right: "Libéral",
    kevinScore: 15,
  },
  {
    id: "societe",
    label: "Société & Mœurs",
    color: "#ab47bc",
    left:  "Conservateur",
    right: "Progressiste",
    kevinScore: 90,
  },
  {
    id: "etat",
    label: "État & Libertés",
    color: "#ffa726",
    left:  "Autoritaire",
    right: "Libertaire",
    kevinScore: 70,
  },
  {
    id: "ecologie",
    label: "Écologie",
    color: "#66bb6a",
    left:  "Écologiste",
    right: "Productiviste",
    kevinScore: 30,
  },
  {
    id: "geopolitique",
    label: "Géopolitique & Immigration",
    color: "#29b6f6",
    left:  "Nationaliste",
    right: "Internationaliste",
    kevinScore: 65,
  },
  {
    id: "laicite",
    label: "Laïcité",
    color: "#ffca28",
    left:  "Religieux",
    right: "Laïque",
    kevinScore: 75, 
  },
  {
    id: "justice",
    label: "Justice & Sécurité",
    color: "#ef5350",
    left:  "Répressif",
    right: "Réhabilitatif",
    kevinScore: 90,
  },
  {
    id: "tech",
    label: "Technologie",
    color: "#26c6da",
    left:  "Tech-sceptique",
    right: "Tech-optimiste",
    kevinScore: 50,
  },
];

// agree: true  → être d'accord pousse vers le pôle GAUCHE (left, 0)
// agree: false → être d'accord pousse vers le pôle DROIT (right, 100)
// kevinAnswer  → 0=absolument d'accord, 1=plutôt, 2=neutre, 3=plutôt pas, 4=pas du tout

const QUESTIONS = [

  // ══════════════════════════════════════════════════════════
  //  ÉCONOMIE — Étatiste (0) ↔ Libéral (100) — kevinScore 68
  // ══════════════════════════════════════════════════════════
  {
    id: "eco_01", axis: "economie",
    text: "Les services publics stratégiques (énergie, transports, eau) devraient rester dans les mains de l'État.",
    agree: true,  // d'accord = étatiste (gauche)
    kevinAnswer: 0,
  },
  {
    id: "eco_02", axis: "economie",
    text: "La concurrence entre entreprises privées améliore la qualité des services mieux que la gestion publique.",
    agree: false, // d'accord = libéral (droite)
    kevinAnswer: 3,
  },
  {
    id: "eco_03", axis: "economie",
    text: "Un impôt sur la fortune élevé est indispensable pour réduire les inégalités.",
    agree: true,  // étatiste
    kevinAnswer: 0,
  },
  {
    id: "eco_04", axis: "economie",
    text: "Le marché libre, avec peu de régulation, est le système économique le plus efficace.",
    agree: false, // libéral
    kevinAnswer: 4,
  },
  {
    id: "eco_05", axis: "economie",
    text: "Les impôts sur les revenus des indépendants et entrepreneurs sont trop élevés en France.",
    agree: false, // libéral
    kevinAnswer: 1,
  },
  {
    id: "eco_06", axis: "economie",
    text: "L'État devrait fixer un salaire maximum pour limiter les écarts de revenus.",
    agree: true,  // étatiste
    kevinAnswer: 0,
  },
  {
    id: "eco_07", axis: "economie",
    text: "Les grandes entreprises devraient payer beaucoup plus d'impôts qu'elles ne le font actuellement.",
    agree: true,  // étatiste
    kevinAnswer: 0,
  },
  {
    id: "eco_08", axis: "economie",
    text: "La retraite par capitalisation est préférable à la retraite par répartition.",
    agree: false, // libéral
    kevinAnswer: 3,
  },
  {
    id: "eco_09", axis: "economie",
    text: "Le revenu universel de base serait une bonne chose pour la société.",
    agree: true,  // étatiste
    kevinAnswer: 1,
  },
  {
    id: "eco_10", axis: "economie",
    text: "Les syndicats ont trop de pouvoir et bloquent l'économie française.",
    agree: false, // libéral
    kevinAnswer: 4,
  },
  {
    id: "eco_11", axis: "economie",
    text: "La mondialisation a globalement amélioré le niveau de vie des populations.",
    agree: false, // libéral
    kevinAnswer: 3,
  },
  {
    id: "eco_12", axis: "economie",
    text: "L'État devrait investir massivement dans les industries nationales pour éviter les délocalisations.",
    agree: true,  // étatiste
    kevinAnswer: 0,
  },
  {
    id: "eco_13", axis: "economie",
    text: "La flexibilité du marché du travail est nécessaire pour créer des emplois.",
    agree: false, // libéral
    kevinAnswer: 4,
  },
  {
    id: "eco_14", axis: "economie",
    text: "Les héritages importants devraient être fortement taxés pour réduire les inégalités de patrimoine.",
    agree: true,  // étatiste
    kevinAnswer: 1,
  },

  // ══════════════════════════════════════════════════════════
  //  SOCIÉTÉ — Conservateur (0) ↔ Progressiste (100) — kevinScore 72
  // ══════════════════════════════════════════════════════════
  {
    id: "soc_01", axis: "societe",
    text: "Le mariage entre personnes du même sexe est un droit fondamental.",
    agree: false, // d'accord = progressiste (droite)
    kevinAnswer: 0,
  },
  {
    id: "soc_02", axis: "societe",
    text: "Les personnes transgenres doivent pouvoir changer leur état civil librement.",
    agree: false, // progressiste
    kevinAnswer: 0,
  },
  {
    id: "soc_03", axis: "societe",
    text: "La famille traditionnelle (homme, femme, enfants) est le modèle le plus stable pour la société.",
    agree: true,  // conservateur (gauche)
    kevinAnswer: 3,
  },
  {
    id: "soc_04", axis: "societe",
    text: "La culture populaire actuelle valorise trop peu les valeurs traditionnelles.",
    agree: true,  // conservateur
    kevinAnswer: 4,
  },
  {
    id: "soc_05", axis: "societe",
    text: "Le droit à l'avortement doit être garanti sans restriction dans les délais légaux.",
    agree: false, // progressiste
    kevinAnswer: 0,
  },
  {
    id: "soc_06", axis: "societe",
    text: "L'adoption par des couples homosexuels devrait être pleinement autorisée.",
    agree: false, // progressiste
    kevinAnswer: 0,
  },
  {
    id: "soc_07", axis: "societe",
    text: "La PMA devrait être accessible à toutes les femmes, quel que soit leur statut.",
    agree: false, // progressiste
    kevinAnswer: 0,
  },
  {
    id: "soc_08", axis: "societe",
    text: "La culture « woke » est une menace pour la liberté d'expression.",
    agree: true,  // conservateur
    kevinAnswer: 4,
  },
  {
    id: "soc_09", axis: "societe",
    text: "Les quotas de représentation des femmes dans les institutions sont une bonne chose.",
    agree: false, // progressiste
    kevinAnswer: 1,
  },
  {
    id: "soc_10", axis: "societe",
    text: "Le mouvement féministe contemporain va globalement dans le bon sens.",
    agree: false, // progressiste
    kevinAnswer: 1,
  },
  {
    id: "soc_11", axis: "societe",
    text: "L'identité nationale française est avant tout définie par une culture commune, pas par l'origine.",
    agree: true,  // conservateur
    kevinAnswer: 0,
  },
  {
    id: "soc_12", axis: "societe",
    text: "La GPA éthique et encadrée devrait être légalisée en France.",
    agree: false, // progressiste
    kevinAnswer: 2,
  },
  {
    id: "soc_13", axis: "societe",
    text: "L'euthanasie active devrait être légalisée pour les personnes en fin de vie qui le demandent.",
    agree: false, // progressiste
    kevinAnswer: 3,
  },
  {
    id: "soc_14", axis: "societe",
    text: "L'éducation sexuelle complète et inclusive doit être enseignée dès le primaire.",
    agree: false, // progressiste
    kevinAnswer: 0,
  },

  // ══════════════════════════════════════════════════════════
  //  ÉTAT — Autoritaire (0) ↔ Libertaire (100) — kevinScore 70
  // ══════════════════════════════════════════════════════════
  {
    id: "eta_01", axis: "etat",
    text: "La légalisation du cannabis récréatif serait une mesure raisonnable.",
    agree: false, // d'accord = libertaire (droite)
    kevinAnswer: 0,
  },
  {
    id: "eta_02", axis: "etat",
    text: "La surveillance de masse par l'État est acceptable si elle améliore la sécurité.",
    agree: true,  // autoritaire (gauche)
    kevinAnswer: 4,
  },
  {
    id: "eta_03", axis: "etat",
    text: "L'État devrait avoir le droit de censurer des contenus jugés dangereux sur internet.",
    agree: true,  // autoritaire
    kevinAnswer: 2,
  },
  {
    id: "eta_04", axis: "etat",
    text: "Le port d'armes par des civils devrait être davantage autorisé en France.",
    agree: false, // libertaire
    kevinAnswer: 1,
  },
  {
    id: "eta_05", axis: "etat",
    text: "La liberté de la presse est une valeur fondamentale qui ne doit souffrir d'aucune exception.",
    agree: false, // libertaire
    kevinAnswer: 0,
  },
  {
    id: "eta_06", axis: "etat",
    text: "Les données personnelles des citoyens devraient être mieux protégées contre les entreprises et les États.",
    agree: false, // libertaire
    kevinAnswer: 0,
  },
  {
    id: "eta_07", axis: "etat",
    text: "Le couvre-feu et les restrictions sanitaires durant le Covid étaient globalement justifiés.",
    agree: true,  // autoritaire
    kevinAnswer: 1,
  },
  {
    id: "eta_08", axis: "etat",
    text: "L'État devrait pouvoir interdire des partis politiques extrémistes.",
    agree: true,  // autoritaire
    kevinAnswer: 1,
  },
  {
    id: "eta_09", axis: "etat",
    text: "La reconnaissance faciale dans les espaces publics est une atteinte inacceptable aux libertés.",
    agree: false, // libertaire
    kevinAnswer: 0,
  },
  {
    id: "eta_10", axis: "etat",
    text: "Les drogues dures devraient être dépénalisées pour usage personnel.",
    agree: false, // libertaire
    kevinAnswer: 2,
  },
  {
    id: "eta_11", axis: "etat",
    text: "L'État-providence est devenu trop envahissant dans la vie quotidienne des Français.",
    agree: false, // libertaire
    kevinAnswer: 4,
  },
  {
    id: "eta_12", axis: "etat",
    text: "Le service militaire obligatoire devrait être rétabli en France.",
    agree: true,  // autoritaire
    kevinAnswer: 4,
  },

  // ══════════════════════════════════════════════════════════
  //  ÉCOLOGIE — Écologiste (0) ↔ Productiviste (100) — kevinScore 60
  // ══════════════════════════════════════════════════════════
  {
    id: "ecol_01", axis: "ecologie",
    text: "Le nucléaire doit jouer un rôle central dans la transition énergétique française.",
    agree: false, // productiviste (droite)
    kevinAnswer: 1,
  },
  {
    id: "ecol_02", axis: "ecologie",
    text: "La croissance économique et la protection de l'environnement sont compatibles.",
    agree: false, // productiviste
    kevinAnswer: 3,
  },
  {
    id: "ecol_03", axis: "ecologie",
    text: "Il faut interdire les vols intérieurs remplaçables par un trajet en train de moins de 4h.",
    agree: true,  // écologiste (gauche)
    kevinAnswer: 1,
  },
  {
    id: "ecol_04", axis: "ecologie",
    text: "La décroissance économique est nécessaire pour sauver la planète.",
    agree: true,  // écologiste
    kevinAnswer: 0,
  },
  {
    id: "ecol_05", axis: "ecologie",
    text: "Les taxes sur l'essence et les carburants polluants sont une bonne mesure environnementale.",
    agree: true,  // écologiste
    kevinAnswer: 3,
  },
  {
    id: "ecol_06", axis: "ecologie",
    text: "L'agriculture intensive doit être progressivement abandonnée au profit du bio.",
    agree: true,  // écologiste
    kevinAnswer: 1,
  },
  {
    id: "ecol_07", axis: "ecologie",
    text: "La voiture individuelle thermique doit être interdite d'ici 2035.",
    agree: true,  // écologiste
    kevinAnswer: 2,
  },
  {
    id: "ecol_08", axis: "ecologie",
    text: "Les entreprises polluantes devraient payer des taxes carbone bien plus élevées.",
    agree: true,  // écologiste
    kevinAnswer: 1,
  },
  {
    id: "ecol_09", axis: "ecologie",
    text: "La technologie seule résoudra la crise climatique sans changer nos modes de vie.",
    agree: false, // productiviste
    kevinAnswer: 4,
  },
  {
    id: "ecol_10", axis: "ecologie",
    text: "La viande devrait être davantage taxée pour réduire son impact environnemental.",
    agree: true,  // écologiste
    kevinAnswer: 1,
  },
  {
    id: "ecol_11", axis: "ecologie",
    text: "Les énergies renouvelables suffisent pour assurer l'indépendance énergétique de la France.",
    agree: true,  // écologiste
    kevinAnswer: 3,
  },
  {
    id: "ecol_12", axis: "ecologie",
    text: "La protection de la biodiversité doit primer sur le développement économique local.",
    agree: true,  // écologiste
    kevinAnswer: 1,
  },

  // ══════════════════════════════════════════════════════════
  //  GÉOPOLITIQUE — Nationaliste (0) ↔ Internationaliste (100) — kevinScore 62
  // ══════════════════════════════════════════════════════════
  {
    id: "geo_01", axis: "geopolitique",
    text: "L'immigration est globalement une richesse économique et culturelle pour la France.",
    agree: false, // internationaliste (droite)
    kevinAnswer: 1,
  },
  {
    id: "geo_02", axis: "geopolitique",
    text: "La France devrait renforcer les contrôles aux frontières et limiter l'immigration.",
    agree: true,  // nationaliste (gauche)
    kevinAnswer: 3,
  },
  {
    id: "geo_03", axis: "geopolitique",
    text: "La construction européenne est globalement positive pour la France.",
    agree: false, // internationaliste
    kevinAnswer: 3,
  },
  {
    id: "geo_04", axis: "geopolitique",
    text: "La souveraineté nationale doit primer sur les décisions des institutions européennes.",
    agree: true,  // nationaliste
    kevinAnswer: 1,
  },
  {
    id: "geo_05", axis: "geopolitique",
    text: "La France devrait accueillir davantage de réfugiés climatiques et politiques.",
    agree: false, // internationaliste
    kevinAnswer: 1,
  },
  {
    id: "geo_06", axis: "geopolitique",
    text: "L'OTAN est une alliance nécessaire pour la sécurité de la France.",
    agree: false, // internationaliste
    kevinAnswer: 2,
  },
  {
    id: "geo_07", axis: "geopolitique",
    text: "La France devrait augmenter significativement son aide au développement des pays pauvres.",
    agree: false, // internationaliste
    kevinAnswer: 3,
  },
  {
    id: "geo_08", axis: "geopolitique",
    text: "Les frontières nationales sont globalement un obstacle au progrès humain.",
    agree: false, // internationaliste
    kevinAnswer: 1,
  },
  {
    id: "geo_09", axis: "geopolitique",
    text: "La France devrait se retirer progressivement de ses interventions militaires en Afrique.",
    agree: false, // internationaliste
    kevinAnswer: 1,
  },
  {
    id: "geo_10", axis: "geopolitique",
    text: "Un fédéralisme européen (États-Unis d'Europe) serait une bonne chose à long terme.",
    agree: false, // internationaliste
    kevinAnswer: 3,
  },
  {
    id: "geo_11", axis: "geopolitique",
    text: "Les sans-papiers en situation stable depuis plusieurs années devraient être régularisés.",
    agree: false, // internationaliste
    kevinAnswer: 1,
  },
  {
    id: "geo_12", axis: "geopolitique",
    text: "La France devrait durcir les conditions d'obtention de la nationalité française.",
    agree: true,  // nationaliste
    kevinAnswer: 3,
  },

  // ══════════════════════════════════════════════════════════
  //  LAÏCITÉ — Religieux (0) ↔ Laïque (100) — kevinScore 75
  // ══════════════════════════════════════════════════════════
  {
    id: "lai_01", axis: "laicite",
    text: "Les signes religieux ostentatoires n'ont pas leur place dans les services publics.",
    agree: false, // laïque (droite)
    kevinAnswer: 0,
  },
  {
    id: "lai_02", axis: "laicite",
    text: "La religion devrait rester strictement dans la sphère privée.",
    agree: false, // laïque
    kevinAnswer: 1,
  },
  {
    id: "lai_03", axis: "laicite",
    text: "Les associations cultuelles ne devraient recevoir aucun financement public.",
    agree: false, // laïque
    kevinAnswer: 3,
  },
  {
    id: "lai_04", axis: "laicite",
    text: "La France devrait reconnaître officiellement son héritage chrétien dans son identité nationale.",
    agree: true,  // religieux (gauche)
    kevinAnswer: 4,
  },
  {
    id: "lai_05", axis: "laicite",
    text: "Le Hijab devrait être interdit dans tous les espaces publics.",
    agree: false, // laïque
    kevinAnswer: 1,
  },
  {
    id: "lai_06", axis: "laicite",
    text: "Les journées fériées religieuses devraient être remplacées par des jours fériés laïques.",
    agree: false, // laïque
    kevinAnswer: 3,
  },
  {
    id: "lai_07", axis: "laicite",
    text: "L'enseignement du fait religieux à l'école publique est une bonne chose.",
    agree: false, 
    kevinAnswer: 4,
  },
  {
    id: "lai_08", axis: "laicite",
    text: "Les parents devraient pouvoir retirer leurs enfants de certains cours pour des raisons religieuses.",
    agree: true, 
    kevinAnswer: 4,
  },
  {
    id: "lai_09", axis: "laicite",
    text: "La critique des religions doit être totalement libre, même quand elle choque les croyants.",
    agree: false, // laïque
    kevinAnswer: 0,
  },
  {
    id: "lai_10", axis: "laicite",
    text: "Les crèches de Noël n'ont pas leur place dans les mairies et bâtiments publics.",
    agree: false, // laïque
    kevinAnswer: 1,
  },
  {
    id: "lai_11", axis: "laicite",
    text: "L'islam est globalement compatible avec les valeurs de la République française.",
    agree: false, // laïque (neutre/positif sur la compatibilité)
    kevinAnswer: 2,
  },
  {
    id: "lai_12", axis: "laicite",
    text: "Les abattages rituels (halal, casher) devraient être soumis aux mêmes règles que l'abattage classique.",
    agree: false, // laïque
    kevinAnswer: 1,
  },

  // ══════════════════════════════════════════════════════════
  //  JUSTICE — Répressif (0) ↔ Réhabilitatif (100) — kevinScore 65
  // ══════════════════════════════════════════════════════════
  {
    id: "jus_01", axis: "justice",
    text: "La réinsertion des détenus devrait être la priorité de la politique pénale.",
    agree: false, // réhabilitatif (droite)
    kevinAnswer: 1,
  },
  {
    id: "jus_02", axis: "justice",
    text: "Les peines minimales obligatoires sont nécessaires pour certains crimes graves.",
    agree: true,
    kevinAnswer: 3,
  },
  {
    id: "jus_03", axis: "justice",
    text: "La police a globalement besoin de plus de moyens et d'effectifs.",
    agree: true,
    kevinAnswer: 3,
  },
  {
    id: "jus_04", axis: "justice",
    text: "Les violences policières sont un problème structurel en France qui mérite une réforme profonde.",
    agree: false,
    kevinAnswer: 0,
  },
  {
    id: "jus_05", axis: "justice",
    text: "La peine de mort devrait être rétablie pour les crimes les plus graves.",
    agree: true, 
    kevinAnswer: 4,
  },
  {
    id: "jus_06", axis: "justice",
    text: "Les prisons françaises sont dans un état inacceptable et doivent être réformées en profondeur.",
    agree: false,
    kevinAnswer: 0,
  },
  {
    id: "jus_07", axis: "justice",
    text: "La tolérance zéro face à la petite délinquance est la meilleure approche pour rétablir l'ordre.",
    agree: true,
    kevinAnswer: 3,
  },
  {
    id: "jus_08", axis: "justice",
    text: "Les mineurs délinquants devraient être jugés comme des adultes à partir de 16 ans.",
    agree: true,
    kevinAnswer: 3,
  },
  {
    id: "jus_09", axis: "justice",
    text: "La justice devrait davantage prendre en compte le contexte social des accusés.",
    agree: false,
    kevinAnswer: 1,
  },
  {
    id: "jus_10", axis: "justice",
    text: "Les forces de l'ordre devraient être équipées de caméras corporelles obligatoires en permanence.",
    agree: false,
    kevinAnswer: 1,
  },
  {
    id: "jus_11", axis: "justice",
    text: "La justice française est globalement trop clémente envers les criminels récidivistes.",
    agree: true, 
    kevinAnswer: 1,
  },
  {
    id: "jus_12", axis: "justice",
    text: "Les peines alternatives à la prison (TIG, bracelet électronique) devraient être davantage utilisées.",
    agree: false, // réhabilitatif
    kevinAnswer: 1,
  },

  // ══════════════════════════════════════════════════════════
  //  TECHNOLOGIE — Tech-sceptique (0) ↔ Tech-optimiste (100) — kevinScore 78
  // ══════════════════════════════════════════════════════════
  {
    id: "tec_01", axis: "tech",
    text: "L'intelligence artificielle va globalement améliorer la qualité de vie des gens.",
    agree: false,
    kevinAnswer: 3,
  },
  {
    id: "tec_02", axis: "tech",
    text: "Les grandes entreprises tech ont trop de pouvoir et devraient être démembrées.",
    agree: true,  // tech-sceptique (gauche)
    kevinAnswer: 1,
  },
  {
    id: "tec_03", axis: "tech",
    text: "Le progrès technologique est la meilleure réponse aux grands défis de l'humanité.",
    agree: false, // tech-optimiste
    kevinAnswer: 0,
  },
  {
    id: "tec_04", axis: "tech",
    text: "Il faudrait un moratoire sur certains développements technologiques risqués.",
    agree: true, 
    kevinAnswer: 3,
  },
  {
    id: "tec_05", axis: "tech",
    text: "L'automatisation et les robots vont détruire plus d'emplois qu'ils n'en créeront.",
    agree: true, 
    kevinAnswer: 1,
  },
  {
    id: "tec_06", axis: "tech",
    text: "Les réseaux sociaux ont globalement un effet négatif sur la démocratie.",
    agree: true, 
    kevinAnswer: 3,
  },
  {
    id: "tec_07", axis: "tech",
    text: "L'État devrait investir massivement dans la recherche et le développement technologique.",
    agree: false,
    kevinAnswer: 0,
  },
  {
    id: "tec_08", axis: "tech",
    text: "La vie privée en ligne est une valeur fondamentale que les entreprises tech bafouent trop souvent.",
    agree: true, 
    kevinAnswer: 0,
  },
  {
    id: "tec_09", axis: "tech",
    text: "Le développement de l'IA générative (ChatGPT, etc.) est globalement une bonne chose.",
    agree: false, // tech-optimiste
    kevinAnswer: 3,
  },
  {
    id: "tec_10", axis: "tech",
    text: "La France devrait développer sa propre souveraineté numérique face aux géants américains et chinois.",
    agree: false, // tech-optimiste (coopération internationale)
    kevinAnswer: 0,
  },
  {
    id: "tec_11", axis: "tech",
    text: "Les cryptomonnaies sont une innovation financière utile qui mérite d'être encouragée.",
    agree: false, // tech-optimiste
    kevinAnswer: 4,
  },
  {
    id: "tec_12", axis: "tech",
    text: "Le télétravail généralisé est globalement bénéfique pour les travailleurs et l'économie.",
    agree: false, // tech-optimiste
    kevinAnswer: 0,
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
