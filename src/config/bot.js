import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // PRÉSENCE DU BOT (ce que les utilisateurs voient sous le nom du bot)
  // =========================
  // Options de `status` :
  // - "online"    = point vert
  // - "idle"      = lune jaune
  // - "dnd"       = ne pas déranger rouge
  // - "invisible" = apparaît hors ligne
  presence: {
    // État en ligne actuel affiché sur Discord.
    status: "online",

    // Lignes d'activité affichées sous le nom du bot.
    // Correspondance des types numériques de Discord :
    // 0 = Joue à
    // 1 = Streame
    // 2 = Écoute
    // 3 = Regarde
    // 4 = Personnalisé
    // 5 = Participe à
    activities: [
      {
        name: "Statut personnalisé", // requis par l'API Discord, non affiché dans le client
        state: "Nyxis on top les frere",     // c'est ce que les gens voient réellement
        type: 4,                     // Personnalisé
      },
    ],
  },

  // =========================
  // COMPORTEMENT DES COMMANDES
  // =========================
  commands: {
    // IDs utilisateur des propriétaires du bot (séparés par des virgules dans la variable d'environnement OWNER_IDS).
    // Les propriétaires ont accès aux commandes de niveau propriétaire/administrateur.
    owners: process.env.OWNER_IDS?.split(",").map((id) => id.trim()).filter(Boolean) || [],

    // Temps d'attente par défaut entre chaque utilisation d'une commande (en secondes).
    defaultCooldown: 3,

    // Si vrai, les anciennes commandes sont supprimées avant d'être réenregistrées.
    deleteCommands: false,

    // ID de serveur optionnel conservé pour la compatibilité des tutoriels ; non utilisé pour l'enregistrement des commandes.
    testGuildId: process.env.TEST_GUILD_ID,

    // Quand défini sur true (ou MAINTENANCE_MODE=true), seuls les propriétaires du bot peuvent exécuter des commandes.
    maintenanceMode: process.env.MAINTENANCE_MODE === "true",

    // Préfixe de commande pour les commandes textuelles (par exemple, "!" pour "!ping").
    // Prend en charge à la fois les commandes slash et les commandes textuelles.
    prefix: process.env.PREFIX || "!",
  },

  // =========================
  // SYSTÈME DE CANDIDATURES
  // =========================
  applications: {
    // Questions par défaut affichées lorsqu'un utilisateur remplit une candidature.
    defaultQuestions: [
      { question: "Quel est votre nom ?", required: true },
      { question: "Quel âge avez-vous ?", required: true },
      { question: "Pourquoi souhaitez-vous nous rejoindre ?", required: true },
    ],

    // Couleurs des embeds selon le statut de la candidature.
    statusColors: {
      pending: "#2b2d31",
      approved: "#2b2d31",
      denied: "#2b2d31",
    },

    // Temps d'attente requis avant qu'un utilisateur puisse soumettre une nouvelle candidature (en heures).
    applicationCooldown: 24,

    // Suppression automatique des candidatures refusées après ce nombre de jours.
    deleteDeniedAfter: 7,

    // Suppression automatique des candidatures acceptées après ce nombre de jours.
    deleteApprovedAfter: 30,

    // IDs de rôles autorisés à gérer les candidatures.
    managerRoles: [], // Sera rempli depuis l'environnement ou la base de données
  },

  // =========================
  // COULEURS DES EMBEDS & IDENTITÉ VISUELLE
  // =========================
  // IMPORTANT : C'est la SOURCE UNIQUE DE VÉRITÉ pour toutes les couleurs du bot
  embeds: {
    colors: {
      // Couleurs principales de la marque.
      primary: "#2b2d31",
      secondary: "#2b2d31",

      // Couleurs de statut standard pour les messages de succès, d'erreur, d'avertissement et d'information.
      success: "#2b2d31",
      error: "#2b2d31",
      warning: "#2b2d31",
      info: "#2b2d31",

      // Couleurs utilitaires neutres.
      light: "#2b2d31",
      dark: "#2b2d31",
      gray: "#2b2d31",

      // Raccourcis de la palette de style Discord.
      blurple: "#2b2d31",
      green: "#2b2d31",
      yellow: "#2b2d31",
      fuchsia: "#2b2d31",
      red: "#2b2d31",
      black: "#2b2d31",

      // Couleurs spécifiques aux fonctionnalités.
      giveaway: {
        active: "#2b2d31",
        ended: "#2b2d31",
      },
      ticket: {
        open: "#2b2d31",
        claimed: "#2b2d31",
        closed: "#2b2d31",
        pending: "#2b2d31",
      },
      economy: "#2b2d31",
      birthday: "#2b2d31",
      moderation: "#2b2d31",

      // Correspondance des couleurs selon la priorité des tickets.
      priority: {
        none: "#2b2d31",
        low: "#2b2d31",
        medium: "#2b2d31",
        high: "#2b2d31",
        urgent: "#2b2d31",
      },
    },
    footer: {
      // Texte de pied de page par défaut utilisé dans les embeds du bot.
      text: "Titan Bot",
      // URL de l'icône du pied de page (null = aucune icône).
      icon: null,
    },
    // URL de miniature par défaut pour les embeds (null = aucune miniature).
    thumbnail: null,
    author: {
      // Bloc d'auteur d'embed par défaut optionnel.
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // PARAMÈTRES DE L'ÉCONOMIE
  // =========================
  economy: {
    currency: {
      // Nom d'affichage de la monnaie.
      name: "pièces",
      // Nom d'affichage au pluriel.
      namePlural: "pièces",
      // Symbole de la monnaie affiché avec les soldes.
      symbol: "$",
    },

    // Solde de départ pour les nouveaux utilisateurs.
    startingBalance: 0,

    // Montant maximal de la banque avant améliorations (si les améliorations sont utilisées).
    baseBankCapacity: 100000,

    // Montant de la récompense quotidienne.
    dailyAmount: 100,

    // Plage de gain aléatoire pour la commande de travail.
    workMin: 10,
    workMax: 100,

    // Plage de gain aléatoire pour la commande de mendicité.
    begMin: 5,
    begMax: 50,

    // Temps de rechargement des commandes (en millisecondes).
    cooldowns: {
      daily: 24 * 60 * 60 * 1000,
      work: 60 * 60 * 1000,
      crime: 2 * 60 * 60 * 1000,
      rob: 4 * 60 * 60 * 1000,
    },

    // Chance de réussite lors d'un vol (0.4 = 40%).
    robSuccessRate: 0.4,

    // Temps passé en prison après un vol raté (en millisecondes).
    // 3600000 = 1 heure.
    robFailJailTime: 3600000,
  },

  // =========================
  // PARAMÈTRES DE LA BOUTIQUE
  // =========================
  shop: {

  },

  // =========================
  // SYSTÈME DE TICKETS
  // =========================
  tickets: {
    // ID de la catégorie où les nouveaux tickets sont créés (null = aucune catégorie forcée).
    defaultCategory: null,

    // IDs de rôles autorisés à gérer/supporter les tickets.
    supportRoles: [],

    // Options de priorité que les utilisateurs/le staff peuvent attribuer.
    priorities: {
      none: {
        emoji: "⚪",
        color: "#2b2d31",
        label: "Aucune",
      },
      low: {
        emoji: "🟢",
        color: "#2b2d31",
        label: "Faible",
      },
      medium: {
        emoji: "🟡",
        color: "#2b2d31",
        label: "Moyenne",
      },
      high: {
        emoji: "🔴",
        color: "#2b2d31",
        label: "Haute",
      },
      urgent: {
        emoji: "🚨",
        color: "#2b2d31",
        label: "Urgente",
      },
    },

    // Priorité par défaut pour les nouveaux tickets.
    defaultPriority: "none",

    // ID de la catégorie où les tickets fermés sont archivés.
    archiveCategory: null,

    // ID du salon où les journaux (logs) des tickets sont envoyés.
    logChannel: null,
  },

  // =========================
  // PARAMÈTRES DES CADEAUX (GIVEAWAYS)
  // =========================
  giveaways: {
    // Durée par défaut d'un giveaway en millisecondes.
    // 86400000 = 24 heures.
    defaultDuration: 86400000,

    // Plage autorisée pour le nombre de gagnants.
    minimumWinners: 1,
    maximumWinners: 10,

    // Plage de durée autorisée pour un giveaway en millisecondes.
    // 300000 = 5 minutes.
    minimumDuration: 300000,
    // 2592000000 = 30 jours.
    maximumDuration: 2592000000,

    // IDs de rôles autorisés à organiser des giveaways.
    allowedRoles: [],

    // IDs de rôles qui contournent les restrictions des giveaways.
    bypassRoles: [],
  },

  // =========================
  // PARAMÈTRES DES ANNIVERSAIRES
  // =========================
  birthday: {
    // ID du rôle attribué aux utilisateurs le jour de leur anniversaire.
    defaultRole: null,

    // ID du salon où les annonces d'anniversaire sont publiées.
    announcementChannel: null,

    // Fuseau horaire utilisé pour calculer les dates d'anniversaire.
    timezone: "UTC",
  },

  // =========================
  // PARAMÈTRES DE VÉRIFICATION
  // =========================
  verification: {
    // Message affiché lors de la publication du panneau de vérification.
    defaultMessage: "Cliquez sur le bouton ci-dessous pour vous vérifier et obtenir l'accès au serveur !",

    // Texte sur le bouton de vérification.
    defaultButtonText: "Se vérifier",

    // Comportement de la vérification automatique.
    autoVerify: {
      // Comment la vérification automatique décide qui est pré-approuvé :
      // - "none"        = tout le monde est vérifié automatiquement immédiatement
      // - "account_age" = le compte doit être plus ancien que le nombre de jours défini
      // - "server_size" = vérification automatique uniquement dans les petits serveurs
      defaultCriteria: "none",

      // Jours utilisés lorsque `defaultCriteria` est `account_age`.
      defaultAccountAgeDays: 7,

      // Seuil du nombre de membres utilisé lorsque `defaultCriteria` est `server_size`.
      // Exemple : 1000 signifie une vérification automatique si le serveur a moins de 1000 membres.
      serverSizeThreshold: 1000,

      // Limites de sécurité autorisées pour les exigences d'âge du compte.
      minAccountAge: 1,
      maxAccountAge: 365,

      // Si vrai, l'utilisateur reçoit un MP après sa vérification.
      sendDMNotification: true,

      // Descriptions lisibles par l'homme pour chaque mode de critère.
      criteria: {
        account_age: "Le compte doit être plus ancien que le nombre de jours spécifié",
        server_size: "Tous les utilisateurs si le serveur compte moins de 1000 membres",
        none: "Tous les utilisateurs immédiatement"
      }
    },

    // Temps minimal entre les tentatives de vérification (en millisecondes).
    // 5000 = 5 secondes.
    verificationCooldown: 5000,

    // Nombre maximal de tentatives échouées autorisées dans la fenêtre de temps ci-dessous.
    maxVerificationAttempts: 3,

    // Fenêtre de temps pour compter les tentatives (en millisecondes).
    // 60000 = 1 minute.
    attemptWindow: 60000,

    // Limites de sécurité en mémoire (aide à éviter une croissance incontrôlée de la mémoire).
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    // Fréquence de nettoyage pour les maps de cooldown/tentatives (en millisecondes).
    // 300000 = 5 minutes.
    cooldownCleanupInterval: 300000,
    // Taille maximale de la charge utile des métadonnées pour les entrées d'audit (en octets).
    maxAuditMetadataBytes: 4096,
    // Nombre maximal d'entrées d'audit conservées en mémoire.
    maxInMemoryAuditEntries: 1000,
    // Si vrai, enregistre chaque action de vérification dans les logs.
    logAllVerifications: true,
    // Si vrai, conserve l'historique d'audit des vérifications.
    keepAuditTrail: true,
  },

  // =========================
  // MESSAGES DE BIENVENUE / DÉPART
  // =========================
  welcome: {
    // Modèle de message de bienvenue publié lorsqu'un utilisateur rejoint le serveur.
    // Variables disponibles : {user}, {server}, {memberCount}
    defaultWelcomeMessage:
      "Bienvenue à {user} sur {server} ! Nous sommes désormais {memberCount} membres !",
    // Modèle de message de départ publié lorsqu'un utilisateur quitte le serveur.
    // Variables disponibles : {user}, {memberCount}
    defaultGoodbyeMessage:
      "{user} a quitté le serveur. Nous sommes désormais {memberCount} membres.",
    // ID du salon pour les messages de bienvenue.
    defaultWelcomeChannel: null,
    // ID du salon pour les messages de départ.
    defaultGoodbyeChannel: null,
  },

  // =========================
  // SALONS DE COMPTEURS (COUNTERS)
  // =========================
  counters: {
    defaults: {
      // Modèles de nom/description par défaut pour les entrées de compteurs.
      name: "Compteur {name}",
      description: "Compteur de {name} du serveur",
      // Type de salon utilisé pour les compteurs (généralement "voice").
      type: "voice",
      // Format du nom du salon. `{count}` est remplacé automatiquement.
      channelName: "{name} : {count}",
    },
    permissions: {
      // Permissions refusées par défaut pour le salon du compteur.
      deny: ["VIEW_CHANNEL"],
      // Permissions autorisées par défaut pour le salon du compteur.
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      // Messages de réponse par défaut pour les actions sur les compteurs.
      created: "✅ Compteur **{name}** créé avec succès",
      deleted: "🗑️ Compteur **{name}** supprimé",
      updated: "🔄 Compteur **{name}** mis à jour",
    },
    types: {
      // Types de compteurs intégrés et méthode de calcul de chaque décompte.
      members: {
        name: "👥 Membres",
        description: "Nombre total de membres sur le serveur",
        getCount: (guild) => guild.memberCount.toString(),
      },
      bots: {
        name: "🤖 Bots",
        description: "Nombre total de comptes de bots sur le serveur",
        getCount: (guild) =>
          guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },
      members_only: {
        name: "👤 Humains",
        description: "Nombre total de membres humains (hors bots)",
        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // MESSAGES GÉNÉRIQUES DU BOT
  // =========================
  messages: {
    noPermission: "Vous n'avez pas la permission d'utiliser cette commande.",
    cooldownActive: "Veuillez patienter {time} avant d'utiliser cette commande à nouveau.",
    errorOccurred: "Une erreur est survenue lors de l'exécution de cette commande.",
    missingPermissions: "Il me manque les permissions requises pour effectuer cette action.",
    commandDisabled: "Cette commande a été désactivée.",
    maintenanceMode: "Le bot est actuellement en mode maintenance.",
  },

  // =========================
  // BASCULES DE FONCTIONNALITÉS (FEATURE TOGGLES)
  // =========================
  // Définissez n'importe quelle fonctionnalité sur `false` pour la désactiver globalement.
  features: {
    // Systèmes principaux.
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,

    // Systèmes d'engagement communautaire.
    tickets: true,
    giveaways: true,
    birthday: true,
    counter: true,

    // Systèmes de sécurité et en libre-service.
    verification: true,
    reactionRoles: true,
    joinToCreate: true,

    // Modules utilitaires et de confort.
    voice: true,
    search: true,
    tools: true,
    utility: true,
    community: true,
    fun: true,
  },
};

export function validateConfig(config) {
  const errors = [];

  if (process.env.NODE_ENV !== 'production') {
    logger.debug('Vérification des variables d\'environnement :');
    logger.debug('DISCORD_TOKEN existe :', !!process.env.DISCORD_TOKEN);
    logger.debug('TOKEN existe :', !!process.env.TOKEN);
    logger.debug('CLIENT_ID existe :', !!process.env.CLIENT_ID);
    logger.debug('GUILD_ID existe :', !!process.env.GUILD_ID);
    logger.debug('POSTGRES_HOST existe :', !!process.env.POSTGRES_HOST);
    logger.debug('NODE_ENV :', process.env.NODE_ENV);
  }

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Le token du bot est requis (variable d'environnement DISCORD_TOKEN ou TOKEN)");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("L'ID client est requis (variable d'environnement CLIENT_ID)");
  }

  if (process.env.NODE_ENV === 'production') {
    const hasConnectionUrl = Boolean(process.env.POSTGRES_URL || process.env.DATABASE_URL);

    if (!hasConnectionUrl) {
      if (!process.env.POSTGRES_HOST) {
        errors.push("La connexion PostgreSQL est requise en production (définissez DATABASE_URL/POSTGRES_URL ou POSTGRES_HOST)");
      }
      if (!process.env.POSTGRES_USER) {
        errors.push("L'utilisateur PostgreSQL est requis en production (définissez DATABASE_URL/POSTGRES_URL ou POSTGRES_USER)");
      }
      if (!process.env.POSTGRES_PASSWORD) {
        errors.push("Le mot de passe PostgreSQL est requis en production (définissez DATABASE_URL/POSTGRES_URL ou POSTGRES_PASSWORD)");
      }
    }
  }

  return errors;
}

const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Erreurs de configuration du bot :", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}

export const BotConfig = botConfig;

const COMMAND_CATEGORY_FEATURE_MAP = {
  birthday: "birthday",
  community: "community",
  economy: "economy",
  fun: "fun",
  giveaway: "giveaways",
  jointocreate: "joinToCreate",
  leveling: "leveling",
  logging: "logging",
  moderation: "moderation",
  reaction_roles: "reactionRoles",
  search: "search",
  serverstats: "counter",
  ticket: "tickets",
  tools: "tools",
  utility: "utility",
  verification: "verification",
  welcome: "welcome",
};

function normalizeCategoryKey(category) {
  return String(category || "").trim().toLowerCase().replace(/\s+/g, "_");
}

export function getCommandPrefix() {
  return botConfig.commands?.prefix ?? "!";
}

export function getBotOwners() {
  return (botConfig.commands?.owners ?? [])
    .map((id) => String(id).trim())
    .filter(Boolean);
}

export function isBotOwner(userId) {
  if (!userId) {
    return false;
  }

  return getBotOwners().includes(String(userId));
}

export function isMaintenanceMode() {
  return botConfig.commands?.maintenanceMode === true;
}

export function getBotMessage(key, replacements = {}) {
  let message = botConfig.messages?.[key] || key;

  for (const [placeholder, value] of Object.entries(replacements)) {
    message = message.replace(new RegExp(`\\{${placeholder}\\}`, "g"), String(value));
  }

  return message;
}

export function isFeatureEnabled(featureKey) {
  if (!featureKey) {
    return true;
  }

  return botConfig.features?.[featureKey] !== false;
}

export function isCommandCategoryEnabled(category) {
  const normalized = normalizeCategoryKey(category);

  if (!normalized || normalized === "core") {
    return true;
  }

  const featureKey = COMMAND_CATEGORY_FEATURE_MAP[normalized];
  if (!featureKey) {
    return true;
  }

  return isFeatureEnabled(featureKey);
}

export function getApplicationStatusColor(status) {
  const colors = botConfig.applications?.statusColors || {};
  const hex = colors[status];
  return hex ? getColor(hex) : getColor(status === "approved" ? "success" : status === "denied" ? "error" : "warning");
}

export function getDefaultApplicationQuestions() {
  return (botConfig.applications?.defaultQuestions || []).map((entry) =>
    typeof entry === "string" ? entry : entry.question,
  ).filter(Boolean);
}

export function getColor(path, fallback = "#2b2d31") {
  if (typeof path === "number") return path;
  if (typeof path === "string" && path.startsWith("#")) {
    return parseInt(path.replace("#", ""), 16);
  }
  const result = path
    .split(".")
    .reduce(
      (obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback),
      botConfig.embeds.colors,
    );
  
  if (typeof result === "string" && result.startsWith("#")) {
    return parseInt(result.replace("#", ""), 16);
  }
  return result;
}

export function getRandomColor() {
  const colors = Object.values(botConfig.embeds.colors).flatMap((color) =>
    typeof color === "string" ? color : Object.values(color),
  );
  return colors[Math.floor(Math.random() * colors.length)];
}

export default botConfig;
