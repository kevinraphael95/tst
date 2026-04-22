// ============================================================
//  KevinScale — Questions & Configuration
//
//  kevinAnswer : ce que Kévin répondrait (0–4)
//    0 = Absolument d'accord
//    1 = Plutôt d'accord
//    2 = Neutre / ne sait pas
//    3 = Plutôt pas d'accord
//    4 = Pas du tout d'accord
// ============================================================

const AXES = [
  { id: "economie",     label: "Économie",                   color: "#e63946" },
  { id: "societe",      label: "Société & Mœurs",            color: "#ab47bc" },
  { id: "etat",         label: "État & Libertés",            color: "#ffa726" },
  { id: "ecologie",     label: "Écologie",                   color: "#66bb6a" },
  { id: "geopolitique", label: "Géopolitique & Immigration", color: "#29b6f6" },
  { id: "laicite",      label: "Laïcité",                    color: "#ffca28" },
  { id: "justice",      label: "Justice & Sécurité",         color: "#ef5350" },
  { id: "tech",         label: "Technologie",                color: "#26c6da" },
];

const QUESTIONS = [

  // ══════════════════════════════════════════════════════════
  //  ÉCONOMIE (13 questions)
  // ══════════════════════════════════════════════════════════
  {
    id: "eco_01",
    axis: "economie",
    text: "Les services publics stratégiques (énergie, transports, eau) devraient rester dans les mains de l'État.",
    kevinAnswer: 0,
    effect: [{ axis: "economie" }],
  },
  {
    id: "eco_02",
    axis: "economie",
    text: "La concurrence entre entreprises privées améliore la qualité des services mieux que la gestion publique.",
    kevinAnswer: 3,
    effect: [{ axis: "economie" }],
  },
  {
    id: "eco_03",
    axis: "economie",
    text: "Un impôt sur la fortune élevé est indispensable pour réduire les inégalités.",
    kevinAnswer: 0,
    effect: [{ axis: "economie" }],
  },
  {
    id: "eco_04",
    axis: "economie",
    text: "Le marché libre, avec peu de régulation, est le système économique le plus efficace.",
    kevinAnswer: 4,
    effect: [{ axis: "economie" }],
  },
  {
    id: "eco_05",
    axis: "economie",
    text: "Les impôts sur les revenus des travailleurs indépendants et des entrepreneurs sont trop élevés en France.",
    kevinAnswer: 1,
    effect: [{ axis: "economie" }],
  },
  {
    id: "eco_06",
    axis: "economie",
    text: "L'État devrait fixer un salaire maximum pour limiter les écarts de revenus.",
    kevinAnswer: 0,
    effect: [{ axis: "economie" }],
  },
  {
    id: "eco_07",
    axis: "economie",
    text: "Les grandes entreprises devraient payer beaucoup plus d'impôts qu'elles ne le font actuellement.",
    kevinAnswer: 0,
    effect: [{ axis: "economie" }],
  },
  {
    id: "eco_08",
    axis: "economie",
    text: "La retraite par capitalisation est préférable à la retraite par répartition.",
    kevinAnswer: 2,
    effect: [{ axis: "economie" }],
  },
  {
    id: "eco_09",
    axis: "economie",
    text: "Le revenu universel de base serait une bonne chose pour la société.",
    kevinAnswer: 1,
    effect: [{ axis: "economie" }],
  },
  {
    id: "eco_10",
    axis: "economie",
    text: "Les syndicats ont trop de pouvoir et bloquent l'économie française.",
    kevinAnswer: 4,
    effect: [{ axis: "economie" }],
  },
  {
    id: "eco_11",
    axis: "economie",
    text: "La mondialisation a globalement amélioré le niveau de vie des populations.",
    kevinAnswer: 2,
    effect: [{ axis: "economie" }],
  },
  {
    id: "eco_12",
    axis: "economie",
    text: "L'État devrait investir massivement dans les industries nationales pour éviter les délocalisations.",
    kevinAnswer: 1,
    effect: [{ axis: "economie" }],
  },
  {
    id: "eco_13",
    axis: "economie",
    text: "La flexibilité du marché du travail est nécessaire pour créer des emplois.",
    kevinAnswer: 3,
    effect: [{ axis: "economie" }],
  },

  // ══════════════════════════════════════════════════════════
  //  SOCIÉTÉ & MŒURS (13 questions)
  // ══════════════════════════════════════════════════════════
  {
    id: "soc_01",
    axis: "societe",
    text: "Le mariage entre personnes du même sexe est un droit fondamental.",
    kevinAnswer: 0,
    effect: [{ axis: "societe" }],
  },
  {
    id: "soc_02",
    axis: "societe",
    text: "Les personnes transgenres doivent pouvoir changer leur état civil librement.",
    kevinAnswer: 0,
    effect: [{ axis: "societe" }],
  },
  {
    id: "soc_03",
    axis: "societe",
    text: "La famille traditionnelle (homme, femme, enfants) est le modèle le plus stable pour la société.",
    kevinAnswer: 3,
    effect: [{ axis: "societe" }],
  },
  {
    id: "soc_04",
    axis: "societe",
    text: "La culture populaire actuelle valorise trop peu les valeurs traditionnelles.",
    kevinAnswer: 4,
    effect: [{ axis: "societe" }],
  },
  {
    id: "soc_05",
    axis: "societe",
    text: "Le droit à l'avortement doit être garanti sans restriction dans les délais légaux.",
    kevinAnswer: 0,
    effect: [{ axis: "societe" }],
  },
  {
    id: "soc_06",
    axis: "societe",
    text: "L'adoption par des couples homosexuels devrait être pleinement autorisée.",
    kevinAnswer: 0,
    effect: [{ axis: "societe" }],
  },
  {
    id: "soc_07",
    axis: "societe",
    text: "La PMA (procréation médicalement assistée) devrait être accessible à toutes les femmes, quel que soit leur statut.",
    kevinAnswer: 0,
    effect: [{ axis: "societe" }],
  },
  {
    id: "soc_08",
    axis: "societe",
    text: "La culture « woke » est une menace pour la liberté d'expression.",
    kevinAnswer: 4,
    effect: [{ axis: "societe" }],
  },
  {
    id: "soc_09",
    axis: "societe",
    text: "Les quotas de représentation des femmes dans les entreprises et institutions sont une bonne chose.",
    kevinAnswer: 1,
    effect: [{ axis: "societe" }],
  },
  {
    id: "soc_10",
    axis: "societe",
    text: "Le mouvement féministe contemporain va globalement dans le bon sens.",
    kevinAnswer: 1,
    effect: [{ axis: "societe" }],
  },
  {
    id: "soc_11",
    axis: "societe",
    text: "L'identité nationale française est avant tout définie par une culture et des valeurs communes, pas par l'origine.",
    kevinAnswer: 0,
    effect: [{ axis: "societe" }],
  },
  {
    id: "soc_12",
    axis: "societe",
    text: "La GPA (gestation pour autrui) éthique et encadrée devrait être légalisée en France.",
    kevinAnswer: 2,
    effect: [{ axis: "societe" }],
  },
  {
    id: "soc_13",
    axis: "societe",
    text: "L'euthanasie active devrait être légalisée pour les personnes en fin de vie qui le demandent.",
    kevinAnswer: 3,
    effect: [{ axis: "societe" }],
  },

  // ══════════════════════════════════════════════════════════
  //  ÉTAT & LIBERTÉS (12 questions)
  // ══════════════════════════════════════════════════════════
  {
    id: "eta_01",
    axis: "etat",
    text: "La légalisation du cannabis récréatif serait une mesure raisonnable.",
    kevinAnswer: 0,
    effect: [{ axis: "etat" }],
  },
  {
    id: "eta_02",
    axis: "etat",
    text: "La surveillance de masse par l'État est acceptable si elle améliore la sécurité.",
    kevinAnswer: 4,
    effect: [{ axis: "etat" }],
  },
  {
    id: "eta_03",
    axis: "etat",
    text: "Le gouvernement n'a pas à imposer un âge minimum pour accéder aux réseaux sociaux.",
    kevinAnswer: 1,
    effect: [{ axis: "etat" }],
  },
  {
    id: "eta_04",
    axis: "etat",
    text: "L'État devrait pouvoir censurer certains contenus politiques ou idéologiques jugés dangereux.",
    kevinAnswer: 1,
    effect: [{ axis: "etat" }],
  },
  {
    id: "eta_05",
    axis: "etat",
    text: "Le port d'armes par des civils devrait être davantage autorisé en France.",
    kevinAnswer: 1,
    effect: [{ axis: "etat" }],
  },
  {
    id: "eta_06",
    axis: "etat",
    text: "La liberté de la presse est une valeur fondamentale qui ne doit souffrir d'aucune exception.",
    kevinAnswer: 0,
    effect: [{ axis: "etat" }],
  },
  {
    id: "eta_07",
    axis: "etat",
    text: "Les données personnelles des citoyens devraient être mieux protégées contre les entreprises et les États.",
    kevinAnswer: 0,
    effect: [{ axis: "etat" }],
  },
  {
    id: "eta_08",
    axis: "etat",
    text: "Le couvre-feu et les restrictions sanitaires durant le Covid étaient globalement justifiés.",
    kevinAnswer: 2,
    effect: [{ axis: "etat" }],
  },
  {
    id: "eta_09",
    axis: "etat",
    text: "L'État devrait pouvoir interdire des partis politiques extrémistes.",
    kevinAnswer: 1,
    effect: [{ axis: "etat" }],
  },
  {
    id: "eta_10",
    axis: "etat",
    text: "La reconnaissance faciale dans les espaces publics est une atteinte inacceptable aux libertés.",
    kevinAnswer: 0,
    effect: [{ axis: "etat" }],
  },
  {
    id: "eta_11",
    axis: "etat",
    text: "Les drogues dures devraient être dépénalisées pour usage personnel.",
    kevinAnswer: 2,
    effect: [{ axis: "etat" }],
  },
  {
    id: "eta_12",
    axis: "etat",
    text: "L'État-providence est devenu trop envahissant dans la vie quotidienne des Français.",
    kevinAnswer: 4,
    effect: [{ axis: "etat" }],
  },

  // ══════════════════════════════════════════════════════════
  //  ÉCOLOGIE (12 questions)
  // ══════════════════════════════════════════════════════════
  {
    id: "ecol_01",
    axis: "ecologie",
    text: "Le nucléaire doit jouer un rôle central dans la transition énergétique française.",
    kevinAnswer: 1,
    effect: [{ axis: "ecologie" }],
  },
  {
    id: "ecol_02",
    axis: "ecologie",
    text: "La croissance économique et la protection de l'environnement sont compatibles.",
    kevinAnswer: 3,
    effect: [{ axis: "ecologie" }],
  },
  {
    id: "ecol_03",
    axis: "ecologie",
    text: "Il faut interdire les vols intérieurs remplaçables par un trajet en train de moins de 4h.",
    kevinAnswer: 1,
    effect: [{ axis: "ecologie" }],
  },
  {
    id: "ecol_04",
    axis: "ecologie",
    text: "La décroissance économique est nécessaire pour sauver la planète.",
    kevinAnswer: 1,
    effect: [{ axis: "ecologie" }],
  },
  {
    id: "ecol_05",
    axis: "ecologie",
    text: "Les taxes sur l'essence et les carburants polluants sont une bonne mesure environnementale.",
    kevinAnswer: 3,
    effect: [{ axis: "ecologie" }],
  },
  {
    id: "ecol_06",
    axis: "ecologie",
    text: "L'agriculture intensive doit être progressivement abandonnée au profit du bio.",
    kevinAnswer: 1,
    effect: [{ axis: "ecologie" }],
  },
  {
    id: "ecol_07",
    axis: "ecologie",
    text: "La voiture individuelle thermique doit être interdite d'ici 2035.",
    kevinAnswer: 2,
    effect: [{ axis: "ecologie" }],
  },
  {
    id: "ecol_08",
    axis: "ecologie",
    text: "Les entreprises polluantes devraient payer des taxes carbone bien plus élevées.",
    kevinAnswer: 1,
    effect: [{ axis: "ecologie" }],
  },
  {
    id: "ecol_09",
    axis: "ecologie",
    text: "La technologie (hydrogène, capture de CO2, fusion nucléaire) résoudra la crise climatique sans changer nos modes de vie.",
    kevinAnswer: 4,
    effect: [{ axis: "ecologie" }],
  },
  {
    id: "ecol_10",
    axis: "ecologie",
    text: "La viande devrait être davantage taxée pour réduire son impact environnemental.",
    kevinAnswer: 1,
    effect: [{ axis: "ecologie" }],
  },
  {
    id: "ecol_11",
    axis: "ecologie",
    text: "Les énergies renouvelables (solaire, éolien) suffisent pour assurer l'indépendance énergétique de la France.",
    kevinAnswer: 3,
    effect: [{ axis: "ecologie" }],
  },
  {
    id: "ecol_12",
    axis: "ecologie",
    text: "La protection de la biodiversité doit primer sur le développement économique local.",
    kevinAnswer: 1,
    effect: [{ axis: "ecologie" }],
  },

  // ══════════════════════════════════════════════════════════
  //  GÉOPOLITIQUE & IMMIGRATION (12 questions)
  // ══════════════════════════════════════════════════════════
  {
    id: "geo_01",
    axis: "geopolitique",
    text: "L'immigration est globalement une richesse économique et culturelle pour la France.",
    kevinAnswer: 1,
    effect: [{ axis: "geopolitique" }],
  },
  {
    id: "geo_02",
    axis: "geopolitique",
    text: "La France devrait renforcer les contrôles aux frontières et limiter l'immigration.",
    kevinAnswer: 3,
    effect: [{ axis: "geopolitique" }],
  },
  {
    id: "geo_03",
    axis: "geopolitique",
    text: "L’Union européenne actuelle (institutions + politiques) est globalement bénéfique pour la France.",
    kevinAnswer: 3,
    effect: [{ axis: "geopolitique" }],
  },
  {
    id: "geo_04",
    axis: "geopolitique",
    text: "La souveraineté nationale doit primer sur les décisions des institutions européennes.",
    kevinAnswer: 1,
    effect: [{ axis: "geopolitique" }],
  },
  {
    id: "geo_05",
    axis: "geopolitique",
    text: "La France devrait accueillir davantage de réfugiés climatiques et politiques.",
    kevinAnswer: 1,
    effect: [{ axis: "geopolitique" }],
  },
  {
    id: "geo_06",
    axis: "geopolitique",
    text: "L'OTAN est une alliance nécessaire pour la sécurité de la France.",
    kevinAnswer: 2,
    effect: [{ axis: "geopolitique" }],
  },
  {
    id: "geo_07",
    axis: "geopolitique",
    text: "La France devrait augmenter significativement son aide au développement des pays pauvres.",
    kevinAnswer: 2,
    effect: [{ axis: "geopolitique" }],
  },
  {
    id: "geo_08",
    axis: "geopolitique",
    text: "Les frontières nationales sont globalement un obstacle au progrès humain.",
    kevinAnswer: 1,
    effect: [{ axis: "geopolitique" }],
  },
  {
    id: "geo_09",
    axis: "geopolitique",
    text: "La France devrait se retirer progressivement de ses interventions militaires en Afrique.",
    kevinAnswer: 1,
    effect: [{ axis: "geopolitique" }],
  },
  {
    id: "geo_10",
    axis: "geopolitique",
    text: "Un fédéralisme européen (États-Unis d'Europe) serait une bonne chose à long terme.",
    kevinAnswer: 3,
    effect: [{ axis: "geopolitique" }],
  },
  {
    id: "geo_11",
    axis: "geopolitique",
    text: "Les sans-papiers en situation stable depuis plusieurs années devraient être régularisés.",
    kevinAnswer: 1,
    effect: [{ axis: "geopolitique" }],
  },
  {
    id: "geo_12",
    axis: "geopolitique",
    text: "La France devrait durcir les conditions d'obtention de la nationalité française.",
    kevinAnswer: 3,
    effect: [{ axis: "geopolitique" }],
  },

  // ══════════════════════════════════════════════════════════
  //  LAÏCITÉ (12 questions)
  // ══════════════════════════════════════════════════════════
  {
    id: "lai_01",
    axis: "laicite",
    text: "Les signes religieux ostentatoires n'ont pas leur place dans les services publics.",
    kevinAnswer: 1,
    effect: [{ axis: "laicite" }],
  },
  {
    id: "lai_02",
    axis: "laicite",
    text: "La religion devrait rester strictement dans la sphère privée.",
    kevinAnswer: 1,
    effect: [{ axis: "laicite" }],
  },
  {
    id: "lai_03",
    axis: "laicite",
    text: "Les associations cultuelles ne devraient recevoir aucun financement public.",
    kevinAnswer: 3,
    effect: [{ axis: "laicite" }],
  },
  {
    id: "lai_04",
    axis: "laicite",
    text: "La France devrait reconnaître officiellement son héritage chrétien dans son identité nationale.",
    kevinAnswer: 3,
    effect: [{ axis: "laicite" }],
  },
  {
    id: "lai_05",
    axis: "laicite",
    text: "Le voile islamique devrait être interdit dans tous les espaces publics, pas seulement dans les services de l'État.",
    kevinAnswer: 1,
    effect: [{ axis: "laicite" }],
  },
  {
    id: "lai_06",
    axis: "laicite",
    text: "Les journées fériées religieuses (Noël, Pâques) devraient être remplacées par des jours fériés laïques.",
    kevinAnswer: 2,
    effect: [{ axis: "laicite" }],
  },
  {
    id: "lai_07",
    axis: "laicite",
    text: "L'enseignement du fait religieux à l'école publique est une bonne chose.",
    kevinAnswer: 4,
    effect: [{ axis: "laicite" }],
  },
  {
    id: "lai_08",
    axis: "laicite",
    text: "Les parents devraient pouvoir retirer leurs enfants de certains cours pour des raisons religieuses.",
    kevinAnswer: 4,
    effect: [{ axis: "laicite" }],
  },
  {
    id: "lai_09",
    axis: "laicite",
    text: "La critique des religions doit être totalement libre, même quand elle choque les croyants.",
    kevinAnswer: 0,
    effect: [{ axis: "laicite" }],
  },
  {
    id: "lai_10",
    axis: "laicite",
    text: "Les crèches de Noël n'ont pas leur place dans les mairies et bâtiments publics.",
    kevinAnswer: 1,
    effect: [{ axis: "laicite" }],
  },
  {
    id: "lai_11",
    axis: "laicite",
    text: "L'islam est globalement compatible avec les valeurs de la République française.",
    kevinAnswer: 1,
    effect: [{ axis: "laicite" }],
  },
  {
    id: "lai_12",
    axis: "laicite",
    text: "Les abattages rituels (halal, casher) devraient être soumis aux mêmes règles que l'abattage classique.",
    kevinAnswer: 0,
    effect: [{ axis: "laicite" }],
  },

  // ══════════════════════════════════════════════════════════
  //  JUSTICE & SÉCURITÉ (12 questions)
  // ══════════════════════════════════════════════════════════
  {
    id: "jus_01",
    axis: "justice",
    text: "La réinsertion des détenus devrait être la priorité absolue de la politique pénale.",
    kevinAnswer: 1,
    effect: [{ axis: "justice" }],
  },
  {
    id: "jus_02",
    axis: "justice",
    text: "Les peines minimales obligatoires sont nécessaires pour certains crimes graves.",
    kevinAnswer: 3,
    effect: [{ axis: "justice" }],
  },
  {
    id: "jus_03",
    axis: "justice",
    text: "La police a globalement besoin de plus de moyens et d'effectifs.",
    kevinAnswer: 3,
    effect: [{ axis: "justice" }],
  },
  {
    id: "jus_04",
    axis: "justice",
    text: "Les violences policières sont un problème structurel en France qui mérite une réforme profonde.",
    kevinAnswer: 0,
    effect: [{ axis: "justice" }],
  },
  {
    id: "jus_05",
    axis: "justice",
    text: "La peine de mort devrait être rétablie pour les crimes les plus graves.",
    kevinAnswer: 4,
    effect: [{ axis: "justice" }],
  },
  {
    id: "jus_06",
    axis: "justice",
    text: "Les prisons françaises sont dans un état inacceptable et doivent être réformées en profondeur.",
    kevinAnswer: 0,
    effect: [{ axis: "justice" }],
  },
  {
    id: "jus_07",
    axis: "justice",
    text: "La tolérance zéro face à la petite délinquance est la meilleure approche pour rétablir l'ordre.",
    kevinAnswer: 3,
    effect: [{ axis: "justice" }],
  },
  {
    id: "jus_08",
    axis: "justice",
    text: "Les mineurs délinquants devraient être jugés comme des adultes à partir de 16 ans.",
    kevinAnswer: 4,
    effect: [{ axis: "justice" }],
  },
  {
    id: "jus_09",
    axis: "justice",
    text: "La justice devrait davantage prendre en compte le contexte social des accusés.",
    kevinAnswer: 1,
    effect: [{ axis: "justice" }],
  },
  {
    id: "jus_10",
    axis: "justice",
    text: "Les forces de l'ordre devraient être équipées de caméras corporelles obligatoires en permanence.",
    kevinAnswer: 0,
    effect: [{ axis: "justice" }],
  },
  {
    id: "jus_11",
    axis: "justice",
    text: "La justice française est globalement trop clémente envers les criminels récidivistes.",
    kevinAnswer: 1,
    effect: [{ axis: "justice" }],
  },
  {
    id: "jus_12",
    axis: "justice",
    text: "Les peines alternatives à la prison (travaux d'intérêt général, bracelet électronique) devraient être davantage utilisées.",
    kevinAnswer: 1,
    effect: [{ axis: "justice" }],
  },

  // ══════════════════════════════════════════════════════════
  //  TECHNOLOGIE (12 questions)
  // ══════════════════════════════════════════════════════════
  {
    id: "tec_01",
    axis: "tech",
    text: "L'intelligence artificielle va globalement améliorer la qualité de vie des gens.",
    kevinAnswer: 3,
    effect: [{ axis: "tech" }],
  },
  {
    id: "tec_02",
    axis: "tech",
    text: "Les grandes entreprises tech ont trop de pouvoir et devraient être démembrées.",
    kevinAnswer: 1,
    effect: [{ axis: "tech" }],
  },
  {
    id: "tec_03",
    axis: "tech",
    text: "Le progrès technologique est la meilleure réponse aux grands défis de l'humanité.",
    kevinAnswer: 1,
    effect: [{ axis: "tech" }],
  },
  {
    id: "tec_04",
    axis: "tech",
    text: "Il faudrait un moratoire sur certains développements technologiques risqués.",
    kevinAnswer: 3,
    effect: [{ axis: "tech" }],
  },
  {
    id: "tec_05",
    axis: "tech",
    text: "L'automatisation et les robots vont détruire plus d'emplois qu'ils n'en créeront.",
    kevinAnswer: 1,
    effect: [{ axis: "tech" }],
  },
  {
    id: "tec_06",
    axis: "tech",
    text: "Les réseaux sociaux ont globalement un effet négatif sur la démocratie.",
    kevinAnswer: 3,
    effect: [{ axis: "tech" }],
  },
  {
    id: "tec_07",
    axis: "tech",
    text: "L'État devrait investir massivement dans la recherche et le développement technologique.",
    kevinAnswer: 0,
    effect: [{ axis: "tech" }],
  },
  {
    id: "tec_08",
    axis: "tech",
    text: "La vie privée en ligne est une valeur fondamentale que les entreprises tech bafouent trop souvent.",
    kevinAnswer: 0,
    effect: [{ axis: "tech" }],
  },
  {
    id: "tec_09",
    axis: "tech",
    text: "Le développement de l'IA générative (ChatGPT, etc.) est globalement une bonne chose.",
    kevinAnswer: 3,
    effect: [{ axis: "tech" }],
  },
  {
    id: "tec_10",
    axis: "tech",
    text: "La France devrait développer sa propre souveraineté numérique face aux géants américains et chinois.",
    kevinAnswer: 0,
    effect: [{ axis: "tech" }],
  },
  {
    id: "tec_11",
    axis: "tech",
    text: "Les cryptomonnaies sont une innovation financière utile qui mérite d'être encouragée.",
    kevinAnswer: 4,
    effect: [{ axis: "tech" }],
  },
  {
    id: "tec_12",
    axis: "tech",
    text: "Le télétravail généralisé est globalement bénéfique pour les travailleurs et l'économie.",
    kevinAnswer: 0,
    effect: [{ axis: "tech" }],
  },
  {
    id: "eco_14",
    axis: "economie",
    text: "Les héritages importants devraient être fortement taxés pour réduire les inégalités de patrimoine.",
    kevinAnswer: 0,
    effect: [{ axis: "economie" }],
  },
  {
    id: "soc_14",
    axis: "societe",
    text: "L'éducation sexuelle complète et inclusive doit être enseignée dès le primaire.",
    kevinAnswer: 0,
    effect: [{ axis: "societe" }],
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
