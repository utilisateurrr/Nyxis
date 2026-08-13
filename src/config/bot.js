import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT PRESENCE
  // =========================
  presence: {
    status: "online",
    activities: [
      {
        name: "Custom Status",
        state: "stalking",
        type: 4,
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
  commands: {
    owners: process.env.OWNER_IDS?.split(",").map((id) => id.trim()).filter(Boolean) || [],
    defaultCooldown: 3,
    deleteCommands: false,
    testGuildId: process.env.TEST_GUILD_ID,
    maintenanceMode: process.env.MAINTENANCE_MODE === "true",
    prefix: process.env.PREFIX || "!",
  },

  // =========================
  // PUBLIC & MULTI-SERVER ARCHITECTURE (Open World / DraftBot Style)
  // =========================
  publicBot: {
    enabled: true,
    certifiedReady: true,
    multiGuildSupport: true,
    // Les IDs fixes ont été retirés ou transformés en valeurs dynamiques/paramétrahles par serveur.
    // Chaque fonctionnalité s'appuie désormais sur la configuration dynamique par guilde (stockée en base de données).
  },

  // =========================
  // AI SYSTEM PROMPT
  // =========================
  ai: {
    systemPrompt: {
      fr: "Tu es un membre normal et décontracté d'un serveur Discord. Tu discutes de manière fluide, naturelle et amicale.\nRéponds de manière courte et directe (1 à 3 phrases max). Parle de façon naturelle, comme un gars sympa sur Discord.",
      en: "You are a normal, casual member of a Discord server. You chat fluently, naturally, and in a friendly way.\nAnswer shortly and directly (1 to 3 sentences max). Speak naturally, like a cool guy on Discord."
    }
  },

  // =========================
  // APPLICATIONS SYSTEM
  // =========================
  applications: {
    defaultQuestions: [
      { question: "What is your name?", required: true },
      { question: "How old are you?", required: true },
      { question: "Why do you want to join?", required: true },
    ],
    statusColors: {
      pending: "#FFA500",
      approved: "#00FF00",
      denied: "#FF0000",
    },
    applicationCooldown: 24,
    deleteDeniedAfter: 7,
    deleteApprovedAfter: 30,
    managerRoles: [],
  },

  // =========================
  // EMBED COLORS & BRANDING (#2b2d31 unified style)
  // =========================
  embeds: {
    colors: {
      primary: "#2b2d31",
      secondary: "#2b2d31",
      success: "#57F287",
      error: "#ED4245",
      warning: "#FEE75C",
      info: "#3498DB",
      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",
      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",
      giveaway: {
        active: "#57F287",
        ended: "#ED4245",
      },
      ticket: {
        open: "#57F287",
        claimed: "#FAA61A",
        closed: "#ED4245",
        pending: "#99AAB5",
      },
      economy: "#2b2d31",
      birthday: "#2b2d31",
      moderation: "#2b2d31",
      priority: {
        none: "#2b2d31",
        low: "#2b2d31",
        medium: "#2b2d31",
        high: "#2b2d31",
        urgent: "#2b2d31",
      },
    },
    footer: {
      text: "Titan Bot",
      icon: null,
    },
    thumbnail: null,
    author: {
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // ECONOMY SETTINGS
  // =========================
  economy: {
    currency: {
      name: "coins",
      namePlural: "coins",
      symbol: "$",
    },
    startingBalance: 0,
    baseBankCapacity: 100000,
    dailyAmount: 100,
    workMin: 10,
    workMax: 100,
    begMin: 5,
    begMax: 50,
    cooldowns: {
      daily: 24 * 60 * 60 * 1000,
      work: 60 * 60 * 1000,
      crime: 2 * 60 * 60 * 1000,
      rob: 4 * 60 * 60 * 1000,
    },
    robSuccessRate: 0.4,
    robFailJailTime: 3600000,
  },

  shop: {},

  // =========================
  // TICKET SYSTEM (Dynamic Setup via Command/Dashboard)
  // =========================
  tickets: {
    defaultCategory: null,
    supportRoles: [],
    priorities: {
      none: { emoji: "⚪", color: "#2b2d31", label: "None" },
      low: { emoji: "🟢", color: "#2b2d31", label: "Low" },
      medium: { emoji: "🟡", color: "#2b2d31", label: "Medium" },
      high: { emoji: "🔴", color: "#2b2d31", label: "High" },
      urgent: { emoji: "🚨", color: "#2b2d31", label: "Urgent" },
    },
    defaultPriority: "none",
    archiveCategory: null,
    logChannel: null,
  },

  // =========================
  // GIVEAWAY SETTINGS
  // =========================
  giveaways: {
    defaultDuration: 86400000,
    minimumWinners: 1,
    maximumWinners: 10,
    minimumDuration: 300000,
    maximumDuration: 2592000000,
    allowedRoles: [],
    bypassRoles: [],
  },

  // =========================
  // BIRTHDAY SETTINGS
  // =========================
  birthday: {
    defaultRole: null,
    announcementChannel: null,
    timezone: "UTC",
  },

  // =========================
  // VERIFICATION SETTINGS
  // =========================
  verification: {
    defaultMessage: "Click the button below to verify yourself and gain access to the server!",
    defaultButtonText: "Verify",
    autoVerify: {
      defaultCriteria: "none",
      defaultAccountAgeDays: 7,
      serverSizeThreshold: 1000,
      minAccountAge: 1,
      maxAccountAge: 365,
      sendDMNotification: true,
      criteria: {
        account_age: "Account must be older than specified days",
        server_size: "All users if server has less than 1000 members",
        none: "All users immediately"
      }
    },
    verificationCooldown: 5000,
    maxVerificationAttempts: 3,
    attemptWindow: 60000,
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    cooldownCleanupInterval: 300000,
    maxAuditMetadataBytes: 4096,
    maxInMemoryAuditEntries: 1000,
    logAllVerifications: true,
    keepAuditTrail: true,
  },

  // =========================
  // WELCOME / GOODBYE MESSAGES (BILINGUAL PARALLEL)
  // =========================
  welcome: {
    defaultWelcomeMessage: {
      fr: "Bienvenue {user} à {server} ! Nous avons maintenant {memberCount} membres !",
      en: "Welcome {user} to {server}! We now have {memberCount} members!"
    },
    defaultGoodbyeMessage: {
      fr: "Au revoir **{user}**, nous sommes maintenant **{memberCount}** !",
      en: "{user} has left the server. We now have {memberCount} members."
    },
    defaultWelcomeChannel: null,
    defaultGoodbyeChannel: null,
  },

  // =========================
  // COUNTER CHANNELS
  // =========================
  counters: {
    defaults: {
      name: "{name} Counter",
      description: "Server {name} counter",
      type: "voice",
      channelName: "{name}-{count}",
    },
    permissions: {
      deny: ["VIEW_CHANNEL"],
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      created: "✅ Created counter **{name}**",
      deleted: "🗑️ Deleted counter **{name}**",
      updated: "🔄 Updated counter **{name}**",
    },
    types: {
      members: {
        name: "👥 Members",
        description: "Total members in the server",
        getCount: (guild) => guild.memberCount.toString(),
      },
      bots: {
        name: "🤖 Bots",
        description: "Total bot accounts in the server",
        getCount: (guild) =>
          guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },
      members_only: {
        name: "👤 Humans",
        description: "Total human members (non-bots)",
        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // GENERIC BOT MESSAGES (BILINGUAL PARALLEL)
  // =========================
  messages: {
    fr: {
      noPermission: "Vous n'avez pas la permission d'utiliser cette commande.",
      cooldownActive: "Veuillez patienter {time} avant d'utiliser cette commande à nouveau.",
      errorOccurred: "Une erreur est survenue lors de l'exécution de cette commande.",
      missingPermissions: "Il me manque les permissions requises pour effectuer cette action.",
      commandDisabled: "Cette commande a été désactivée.",
      maintenanceMode: "Le bot est actuellement en mode maintenance.",
      stopAiResponse: "ok c'est noté, je te laisse tranquille !",
      emptyAiPrompt: "ouais ? dis-moi",
      aiError: "Désolé, j'ai un petit bug technique avec l'API...",
      aiNoIdea: "J'ai pas su quoi répondre !",
      reglementTitle: "📜 RÈGLEMENT DU SERVEUR",
      reglementDesc: "Bienvenue ! Merci de respecter le règlement.",
      reglementAcceptBtn: "Accepter le règlement",
      reglementAlreadyAccepted: "👌 Vous avez déjà accepté le règlement !",
      reglementSuccess: "✅ Vous avez accepté le règlement ! Accès au serveur débloqué.",
      reglementRoleNotFound: "❌ Rôle Membre introuvable. Configurez-le via la commande de setup.",
      rolesTitle: "🔔 Rôles de Pings & Notifications",
      rolesDesc: "Réagis avec l'émoji correspondant pour obtenir ou retirer ton rôle !",
      confessPanelTitle: "Confessions Anonymes",
      confessModalTitle: "Envoyer une Confession Anonyme",
      confessModalLabel: "Votre Confession",
      confessModalPlaceholder: "Tapez votre confession ici...",
      confessSuccess: "✅ Votre confession anonyme a été publiée !",
      confessReplyModalTitle: "Répondre à la Confession",
      confessReplyLabel: "Votre Réponse",
      confessReplyPlaceholder: "Tapez votre réponse ici...",
      confessReplySuccess: "✅ Votre réponse anonyme a été publiée !",
      confessButtonNew: "Envoyer une confession",
      confessButtonReply: "Répondre",
      confessButtonOpen: "Faire une confession",
      ticketModalTitle: "Ouverture de Ticket",
      ticketReasonLabel: "Raison de votre ticket",
      ticketReasonPlaceholder: "Expliquez votre problème...",
      ticketSentSuccess: "✅ Votre demande a été envoyée au staff !",
      ticketPanelTitle: "🎫 Système de Tickets",
      ticketPanelButton: "Ouvrir un ticket",
      staffAcceptBtn: "Accepter le ticket",
      staffRejectBtn: "Rejeter le ticket",
      staffCloseBtn: "Fermer (Côté Staff)",
      userCloseBtn: "Confirmer & Fermer le ticket",
      reopenBtn: "Réouvrir le ticket",
      deleteLogBtn: "Supprimer le Log",
      staffOnly: "❌ Action réservée au staff.",
      ticketValidated: "✅ Ticket validé.",
      ticketRejected: "🚫 Ticket rejeté...",
      staffCloseNotice: "🔒 Fin de la prise en charge staff\nLe staff a terminé le traitement de votre ticket.\nCliquez ci-dessous pour confirmer et clôturer le salon.",
      closeProgress: "⏳ Clôture du ticket...",
      ticketAcceptedDm: "✅ Votre ticket sur **{guild}** a été accepté ! Rendez-vous ici : {channel}",
      ticketRejectedDm: "❌ Votre demande de ticket sur **{guild}** a été refusée.",
      ticketClosedDm: "📦 Ticket Clôturé - {guild}\nVotre ticket est désormais fermé. Voici le récapitulatif.",
      langSelectTitle: "🌐 Choisissez votre langue / Choose your language",
      langSelectDesc: "Veuillez choisir votre langue préférée ci-dessous.\nPlease select your preferred language below.",
      langChoiceFrBtn: "Français",
      langChoiceEnBtn: "English",
      langChoiceSetFr: "✅ Langue définie sur le Français !",
      langChoiceSetEn: "✅ Language set to English!"
    },
    en: {
      noPermission: "You do not have permission to use this command.",
      cooldownActive: "Please wait {time} before using this command again.",
      errorOccurred: "An error occurred while executing this command.",
      missingPermissions: "I am missing required permissions to perform this action.",
      commandDisabled: "This command has been disabled.",
      maintenanceMode: "The bot is currently in maintenance mode.",
      stopAiResponse: "Alright, noted, I'll leave you alone!",
      emptyAiPrompt: "yeah? tell me",
      aiError: "Sorry, I have a small technical bug with the API...",
      aiNoIdea: "I didn't know what to reply!",
      reglementTitle: "📜 SERVER RULES",
      reglementDesc: "Welcome! Please follow the rules.",
      reglementAcceptBtn: "Accept Rules",
      reglementAlreadyAccepted: "👌 You have already accepted the rules!",
      reglementSuccess: "✅ You have accepted the rules! Server access unlocked.",
      reglementRoleNotFound: "❌ Member role not found. Configure it via the setup command.",
      rolesTitle: "🔔 Ping Roles & Notifications",
      rolesDesc: "React with the corresponding emoji to get or remove your role!",
      confessPanelTitle: "Anonymous Confessions",
      confessModalTitle: "Send an Anonymous Confession",
      confessModalLabel: "Your Confession",
      confessModalPlaceholder: "Type your confession here...",
      confessSuccess: "✅ Your anonymous confession has been posted!",
      confessReplyModalTitle: "Reply to Confession",
      confessReplyLabel: "Your Reply",
      confessReplyPlaceholder: "Type your reply here...",
      confessReplySuccess: "✅ Your anonymous reply has been posted!",
      confessButtonNew: "Send a confession",
      confessButtonReply: "Reply",
      confessButtonOpen: "Make a confession",
      ticketModalTitle: "Ticket Opening",
      ticketReasonLabel: "Reason for your ticket",
      ticketReasonPlaceholder: "Explain your issue...",
      ticketSentSuccess: "✅ Your request has been sent to the staff!",
      ticketPanelTitle: "🎫 Ticket System",
      ticketPanelButton: "Open a ticket",
      staffAcceptBtn: "Accept ticket",
      staffRejectBtn: "Reject ticket",
      staffCloseBtn: "Close (Staff Side)",
      userCloseBtn: "Confirm & Close ticket",
      reopenBtn: "Reopen ticket",
      deleteLogBtn: "Delete Log",
      staffOnly: "❌ Action reserved for staff.",
      ticketValidated: "✅ Ticket validated.",
      ticketRejected: "🚫 Ticket rejected...",
      staffCloseNotice: "🔒 End of staff handling\nStaff has finished processing your ticket.\nClick below to confirm and close the channel.",
      closeProgress: "⏳ Closing ticket...",
      ticketAcceptedDm: "✅ Your ticket on **{guild}** has been accepted! Head over here: {channel}",
      ticketRejectedDm: "❌ Your ticket request on **{guild}** has been denied.",
      ticketClosedDm: "📦 Ticket Closed - {guild}\nYour ticket is now closed. Here is the transcript.",
      langSelectTitle: "🌐 Choisissez votre langue / Choose your language",
      langSelectDesc: "Veuillez choisir votre langue préférée ci-dessous.\nPlease select your preferred language below.",
      langChoiceFrBtn: "Français",
      langChoiceEnBtn: "English",
      langChoiceSetFr: "✅ Langue définie sur le Français !",
      langChoiceSetEn: "✅ Language set to English!"
    }
  },

  // =========================
  // FEATURE TOGGLES
  // =========================
  features: {
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,
    tickets: true,
    giveaways: true,
    birthday: true,
    counter: true,
    verification: true,
    reactionRoles: true,
    joinToCreate: true,
    voice: true,
    search: true,
    tools: true,
    utility: true,
    community: true,
    fun: true,
    music: true,
  },
};

export function validateConfig(config) {
  const errors = [];

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Bot token is required (DISCORD_TOKEN or TOKEN environment variable)");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("Client ID is required (CLIENT_ID environment variable)");
  }

  return errors;
}

const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Bot configuration errors:", configErrors.join("\n"));
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
  music: "music",
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

export function getBotMessage(key, lang = "fr", replacements = {}) {
  let message = botConfig.messages?.[lang]?.[key] || botConfig.messages?.["fr"]?.[key] || key;

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
