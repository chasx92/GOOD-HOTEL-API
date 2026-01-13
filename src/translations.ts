export type Language = 'fr' | 'en';

export interface Translations {
  // Navbar
  navbar: {
    features: string;
    security: string;
    pricing: string;
    faq: string;
    contact: string;
    cta: string;
    mobile: string;
  };

  // Hero
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    statusAvailable: string;
    cta: string;
    ctaSecondary: string;
    trustIndicator1: string;
    trustIndicator2: string;
    quickProofs: {
      proof1: string;
      proof2: string;
    };
    stats: {
      hotels: string;
      satisfaction: string;
      checkIns: string;
    };
  };

  // Trust Chips
  trustChips: {
    chip1: string;
    chip2: string;
    chip3: string;
  };

  // ProofBar
  proofBar: {
    title: string;
  };

  // Steps
  steps: {
    title: string;
    subtitle: string;
    step1: {
      title: string;
      description: string;
    };
    step2: {
      title: string;
      description: string;
    };
    step3: {
      title: string;
      description: string;
    };
  };

  // Security
  security: {
    title: string;
    subtitle: string;
    feature1: {
      title: string;
      description: string;
    };
    feature2: {
      title: string;
      description: string;
    };
    feature3: {
      title: string;
      description: string;
    };
    feature4: {
      title: string;
      description: string;
    };
  };

  // Benefits
  benefits: {
    title: string;
    subtitle: string;
    benefit1: {
      title: string;
      description: string;
    };
    benefit2: {
      title: string;
      description: string;
    };
    benefit3: {
      title: string;
      description: string;
    };
    benefit4: {
      title: string;
      description: string;
    };
    benefit5: {
      title: string;
      description: string;
    };
    benefit6: {
      title: string;
      description: string;
    };
  };

  // Social Proof
  socialProof: {
    title: string;
    quote: string;
    author: string;
    role: string;
  };

  // Testimonials / Founders program
  testimonials: {
    badge: string;
    title: string;
    description: string;
    benefits: {
      badge: string;
      title: string;
      description: string;
      highlight: { value: string; label: string };
    }[];
    programNote: string;
    perks: string[];
  };

  // Pricing
  pricing: {
    title: string;
    subtitle: string;
    essential: {
      name: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
    };
    premium: {
      name: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
      badge: string;
    };
    enterprise: {
      name: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
    };
  };

  // Pricing Card (Premium)
  pricingCard: {
    badge: string;
    planName: string;
    priceLabel: string;
    priceDescription: string;
    featuresTitle: string;
    features: string[];
    addonsTitle: string;
    addons: { label: string; desc: string }[];
    cta: string;
    roiTitle: string;
    roiDescription: string;
  };

  // FAQ
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    contactPrompt: string;
    contactCta: string;
    questions: { question: string; answer: string }[];
  };

  // Lead Form
  form: {
    title: string;
    subtitle: string;
    fields: {
      hotelName: { label: string; placeholder: string };
      city: { label: string; placeholder: string };
      country: { label: string; placeholder: string };
      roomCount: { label: string; placeholder: string };
      name: { label: string; placeholder: string };
      role: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      timeline: { label: string; placeholder: string };
      comment: { label: string; placeholder: string };
      consent: string;
    };
    roomOptions: { value: string; label: string }[];
    timelineOptions: { value: string; label: string }[];
    errors: {
      hotelNameRequired: string;
      roomCountRequired: string;
      emailRequired: string;
      emailInvalid: string;
      consentRequired: string;
    };
    submit: string;
    submitSending: string;
    securityNote: string;
    success: {
      title: string;
      message: string;
    };
    error: {
      title: string;
      message: string;
    };
  };

  // Footer
  footer: {
    tagline: string;
    product: string;
    company: string;
    legal: string;
    features: string;
    pricing: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
    methodology: string;
    copyright: string;
  };

  // Back to Top
  backToTop: {
    label: string;
  };

  // Sticky CTA
  stickyCTA: {
    text: string;
    button: string;
  };

  // Mobile landing
  mobilePage: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    featuresTitle: string;
    featuresSubtitle: string;
    features: {
      title: string;
      description: string;
    }[];
    stepsTitle: string;
    stepsSubtitle: string;
    steps: {
      title: string;
      description: string;
    }[];
    securityTitle: string;
    securitySubtitle: string;
    securityNotes: string[];
    contactTitle: string;
    contactSubtitle: string;
    contactCTA: string;
    desktopCTA: string;
  };

  mobileNav: {
    features: string;
    steps: string;
    contact: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    navbar: {
      features: 'Fonctionnalités',
      security: 'Sécurité',
      pricing: 'Tarifs',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Demander une démo',
      mobile: 'Version mobile',
    },
    hero: {
      title: 'La clé est déjà dans le {highlight} de vos clients',
      titleHighlight: 'téléphone',
      subtitle:
        "Transformez l'expérience d'arrivée avec des clés Apple Wallet et Google Wallet. Sans application à télécharger, sans carte plastique, sans friction.",
      statusAvailable: 'Disponible maintenant',
      cta: 'Demander une démo',
      ctaSecondary: 'Comment ça marche',
      trustIndicator1: 'Plus de cartes perdues',
      trustIndicator2: 'Support sous 10 min',
      quickProofs: {
        proof1: 'Plus de cartes perdues',
        proof2: 'Support sous 10 min',
      },
      stats: {
        hotels: 'Hôtels équipés',
        satisfaction: 'Satisfaction client',
        checkIns: 'Check-ins mobile',
      },
    },
    trustChips: {
      chip1: 'En pilotes actifs',
      chip2: 'Compatible ASSA ABLOY · dormakaba · SALTO',
      chip3: 'Aucune app à télécharger',
    },
    proofBar: {
      title: 'Compatible avec :',
    },
    steps: {
      title: 'Clés digitales. Simplicité. Efficacité',
      subtitle: "Trois étapes pour une expérience d'arrivée révolutionnaire",
      step1: {
        title: 'Réservation confirmée',
        description:
          "Le client reçoit automatiquement sa clé digitale dans Apple Wallet ou Google Wallet. Aucune application à télécharger.",
      },
      step2: {
        title: "Arrivée à l'hôtel",
        description:
          "Le client déverrouille sa chambre directement avec son téléphone. L'expérience est instantanée et naturelle.",
      },
      step3: {
        title: 'Départ simplifié',
        description:
          "La clé expire automatiquement. Pas de retour en réception, pas de carte perdue. L'expérience est fluide de bout en bout.",
      },
    },
    security: {
      title: 'Sécurité de niveau bancaire',
      subtitle: 'La protection de vos clients et de votre établissement est notre priorité absolue',
      feature1: {
        title: 'Chiffrement AES-256',
        description: 'Toutes les clés sont chiffrées avec des standards de niveau bancaire.',
      },
      feature2: {
        title: 'Authentification multi-facteurs',
        description: 'Vérification biométrique (Face ID, Touch ID) pour chaque accès.',
      },
      feature3: {
        title: 'Révocation instantanée',
        description: "Désactivez une clé à distance en moins d'une seconde si nécessaire.",
      },
      feature4: {
        title: 'Conformité RGPD',
        description: 'Infrastructure hébergée en Europe, conforme aux normes les plus strictes.',
      },
    },
    benefits: {
      title: 'Pourquoi choisir Unlocky ?',
      subtitle: 'Une solution qui bénéficie à tous : vos clients, votre équipe, votre établissement',
      benefit1: {
        title: 'Expérience client améliorée',
        description: "Satisfaction client en hausse grâce au check-in express et à l'accès instantané.",
      },
      benefit2: {
        title: 'Coûts opérationnels réduits',
        description: 'Moins de cartes plastiques produites, remplacées et gérées chaque année.',
      },
      benefit3: {
        title: 'Déploiement ultra-rapide',
        description: 'Compatible avec vos serrures existantes, mise en service immédiate.',
      },
      benefit4: {
        title: 'Insights actionnables',
        description: 'Taux de check-in mobile en progression continue grâce aux analytics temps réel.',
      },
      benefit5: {
        title: 'Assistance réactive',
        description: "Temps de réponse moyen inférieur à 5 minutes, 7 jours sur 7.",
      },
      benefit6: {
        title: 'Impact environnemental',
        description: 'Réduction drastique du plastique et des déchets générés par votre hôtel.',
      },
    },
    socialProof: {
      title: 'Ce que disent nos clients',
      quote:
        "Unlocky a transformé notre expérience d'arrivée. Nos clients adorent la simplicité, et notre équipe gagne un temps précieux.",
      author: 'Directeur',
      role: 'Hôtel pilote confidentiel',
    },
    testimonials: {
      badge: 'Programme Exclusif',
      title: 'Rejoignez les Hôtels Fondateurs',
      description:
        "Soyez parmi les premiers établissements à adopter Unlocky et bénéficiez d'avantages exclusifs réservés aux pionniers.",
      benefits: [
        {
          badge: 'Avantage #1',
          title: 'Tarif Préférentiel à Vie',
          description:
            'Verrouillez un tarif avantageux et bénéficiez de toutes les futures évolutions premium sans surcoût.',
          highlight: { value: '− 40 %', label: 'vs tarif public' },
        },
        {
          badge: 'Avantage #2',
          title: 'Support VIP & Formation Dédiée',
          description: 'Accompagnement prioritaire pour vos équipes front-office et maintenance.',
          highlight: { value: '24/7', label: 'Assistance' },
        },
        {
          badge: 'Avantage #3',
          title: 'Personnalisation avancée',
          description: "Branding complet pour refléter l'identité de votre établissement.",
          highlight: { value: '100 %', label: 'à vos couleurs' },
        },
      ],
      programNote: 'Places limitées. Sélection sur critères d’éligibilité.',
      perks: [
        'Onboarding express dédié',
        'Accès anticipé aux nouvelles fonctionnalités',
        'Conseil stratégique mensuel',
      ],
    },
    pricing: {
      title: 'Un seul plan clair, sans surprises',
      subtitle:
        "Tout ce qu'il faut pour déployer des clés numériques dans votre hôtel. Sans frais cachés et résiliable quand vous le souhaitez.",
      essential: {
        name: 'Essentiel',
        price: 'Sur devis',
        description: 'Pour les hôtels qui veulent démarrer simplement.',
        features: [
          'Intégration PMS et serrures existantes',
          'Cartes Apple Wallet & Google Wallet',
          'Support par e-mail et chat',
        ],
        cta: 'Discuter avec un expert',
      },
      premium: {
        name: 'Premium',
        price: 'Populaire',
        description: "Tout compris pour un déploiement à grande échelle.",
        features: [
          'Automatisation complète du check-in',
          'Analytics avancés',
          'Accompagnement dédié',
        ],
        cta: 'Planifier une démo',
        badge: 'Recommandé',
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Nous contacter',
        description: 'Pour les groupes hôteliers et besoins spécifiques.',
        features: [
          'SLA personnalisé',
          'Intégrations sur-mesure',
          'Formation dédiée',
        ],
        cta: 'Parler à un expert',
      },
    },
    pricingCard: {
      badge: 'Plan recommandé',
      planName: 'Déploiement complet',
      priceLabel: 'Sur devis',
      priceDescription: "Tarification transparente : frais d'installation puis abonnement mensuel.",
      featuresTitle: 'Tout ce qui est inclus',
      features: [
        'Compatibilité Apple Wallet et Google Wallet',
        'Connexion à votre PMS et serrures existantes',
        'Support prioritaire 7j/7',
        'Mises à jour et sécurité continues',
        'Tableau de bord analytics',
        'Accompagnement au déploiement',
      ],
      addonsTitle: 'Options disponibles',
      addons: [
        { label: 'Personnalisation avancée', desc: 'Visuels et textes à votre image' },
        { label: 'Support sur site', desc: 'Présence technique le jour du lancement' },
        { label: 'Ateliers équipes', desc: 'Formation front-office et maintenance' },
      ],
      cta: 'Je veux une estimation',
      roiTitle: 'ROI immédiat',
      roiDescription: 'Moins de cartes perdues, moins de files à la réception, plus de satisfaction.',
    },
    faq: {
      eyebrow: 'Questions fréquentes',
      title: 'Tout savoir sur les clés numériques',
      subtitle: 'Les réponses aux questions que vos équipes posent le plus souvent.',
      contactPrompt: 'Vous avez d’autres questions ?',
      contactCta: 'Parler à un humain',
      questions: [
        {
          question: 'Comment fonctionne l’intégration avec mon PMS ?',
          answer: 'Nous nous connectons à votre PMS existant pour synchroniser les réservations et générer les clés automatiquement.',
        },
        {
          question: 'Quels smartphones sont compatibles ?',
          answer: 'Toutes les cartes fonctionnent avec Apple Wallet et Google Wallet sur les appareils iOS et Android récents.',
        },
        {
          question: 'Y a-t-il des frais cachés ou engagement ?',
          answer:
            "Non. Notre tarification est simple : des frais d’installations suivis d’un abonnement mensuel. Vous pouvez annuler à tout moment.",
        },
        {
          question: 'Comment gérez-vous la sécurité des données clients ?',
          answer: 'La sécurité des données client est déjà mise en place par vos PMS, aucune donnée n’en sortira.',
        },
        {
          question: "Combien de temps prend l'onboarding des équipes ?",
          answer: 'En moyenne moins d’une semaine avec des tutoriels vidéo et un accompagnement dédié.',
        },
        {
          question: 'Que se passe-t-il si un client perd son téléphone ?',
          answer: 'La clé peut être révoquée instantanément. Le client peut récupérer une nouvelle clé en quelques secondes.',
        },
      ],
    },
    form: {
      title: 'Parlez-nous de votre établissement',
      subtitle: "Nous revenons vers vous dans les 24h avec une démo personnalisée.",
      fields: {
        hotelName: { label: "Nom de l'hôtel", placeholder: 'Hôtel Riviera' },
        city: { label: 'Ville', placeholder: 'Paris' },
        country: { label: 'Pays', placeholder: 'France' },
        roomCount: { label: 'Nombre de chambres', placeholder: '120' },
        name: { label: 'Votre nom', placeholder: 'Marie Dupont' },
        role: { label: 'Votre rôle', placeholder: 'Directrice de l’hôtel' },
        email: { label: 'Email professionnel', placeholder: 'contact@hotel.fr' },
        phone: { label: 'Téléphone', placeholder: '+33 6 00 00 00 00' },
        timeline: { label: 'Délais de projet', placeholder: 'Ce trimestre, ce semestre…' },
        comment: { label: 'Précisions', placeholder: 'Vos questions, vos contraintes…' },
        consent: "J'accepte d'être recontacté par l'équipe Unlocky",
      },
      roomOptions: [
        { value: '1-50', label: '1-50' },
        { value: '51-100', label: '51-100' },
        { value: '101-200', label: '101-200' },
        { value: '200+', label: '200+' },
      ],
      timelineOptions: [
        { value: 'urgent', label: 'Immédiat' },
        { value: 'quarter', label: 'Ce trimestre' },
        { value: 'year', label: 'Cette année' },
        { value: 'undefined', label: 'Je ne sais pas encore' },
      ],
      errors: {
        hotelNameRequired: "Le nom de l'hôtel est requis.",
        roomCountRequired: 'Merci de préciser le nombre de chambres.',
        emailRequired: "L'email professionnel est requis.",
        emailInvalid: "Cet email n'est pas valide.",
        consentRequired: "Merci d'accepter d'être recontacté.",
      },
      submit: 'Envoyer',
      submitSending: 'Envoi en cours…',
      securityNote: 'Vos données restent confidentielles et ne sont jamais revendues.',
      success: {
        title: 'Merci !',
        message: 'Nous revenons vers vous sous 24h pour organiser une démonstration.',
      },
      error: {
        title: 'Une erreur est survenue',
        message: 'Merci de réessayer ou de nous contacter directement.',
      },
    },
    footer: {
      tagline: 'Les clés numériques qui simplifient le séjour.',
      product: 'Produit',
      company: 'Entreprise',
      legal: 'Légal',
      features: 'Fonctionnalités',
      pricing: 'Tarifs',
      about: 'À propos',
      contact: 'Contact',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      methodology: 'Méthodologie',
      copyright: '© 2025 Unlocky. Tous droits réservés.',
    },
    backToTop: {
      label: 'Retour en haut',
    },
    stickyCTA: {
      text: 'Prêt à offrir des clés numériques à vos clients ?',
      button: 'Planifier une démo',
    },
    mobilePage: {
      badge: 'Expérience mobile dédiée',
      title: 'Une landing pensée uniquement pour vos clients sur smartphone',
      subtitle:
        "Présentez Unlocky dans un format compact, avec des sections indépendantes pour ne jamais casser la version ordinateur.",
      ctaPrimary: 'Découvrir la page mobile',
      ctaSecondary: 'Retour à la version ordinateur',
      featuresTitle: 'Pensée pour les écrans mobiles',
      featuresSubtitle: 'Des blocs courts, lisibles et testés pour une navigation du pouce.',
      features: [
        {
          title: 'Navigation rapide',
          description: 'Sections compactes et ancrages clairs pour guider vos prospects en mobilité.',
        },
        {
          title: 'CTA toujours visible',
          description: 'Appels à l’action répétés pour réserver une démo en un geste.',
        },
        {
          title: 'Contenus séparés',
          description: 'Les composants mobiles sont isolés pour éviter d’impacter la version desktop.',
        },
      ],
      stepsTitle: 'Un parcours simple en 3 étapes',
      stepsSubtitle: 'Présentez le fonctionnement en quelques lignes pour les écrans réduits.',
      steps: [
        {
          title: 'Clé envoyée',
          description: 'La clé arrive dans Apple Wallet ou Google Wallet dès la réservation.',
        },
        {
          title: 'Arrivée immédiate',
          description: 'Le client ouvre sa chambre avec son téléphone, sans passage à la réception.',
        },
        {
          title: 'Départ automatique',
          description: 'La clé expire seule, sans carte à rendre ni friction.',
        },
      ],
      securityTitle: 'Sécurité et rassurance',
      securitySubtitle: 'Des rappels essentiels pour les décideurs qui consultent sur mobile.',
      securityNotes: [
        'Chiffrement et authentification biométrique toujours mis en avant.',
        'Révocation immédiate en cas de perte du téléphone.',
        'Infrastructure conforme RGPD hébergée en Europe.',
      ],
      contactTitle: 'Prêt à démarrer ? ',
      contactSubtitle: 'Programmons un échange rapide directement depuis votre téléphone.',
      contactCTA: 'Planifier un appel',
      desktopCTA: 'Afficher la version ordinateur',
    },
    mobileNav: {
      features: 'Fonctionnalités',
      steps: 'Parcours',
      contact: 'Contact',
    },
  },
  en: {
    navbar: {
      features: 'Features',
      security: 'Security',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Book a demo',
      mobile: 'Mobile version',
    },
    hero: {
      title: 'The key is already in your guests’ {highlight}',
      titleHighlight: 'phone',
      subtitle:
        "Turn the check-in experience into a delight with Apple Wallet and Google Wallet keys. No app to install, no plastic cards, no friction.",
      statusAvailable: 'Available today',
      cta: 'Book a demo',
      ctaSecondary: 'See how it works',
      trustIndicator1: 'No more lost cards',
      trustIndicator2: 'Support under 10 min',
      quickProofs: {
        proof1: 'No more lost cards',
        proof2: 'Live support',
      },
      stats: {
        hotels: 'Equipped hotels',
        satisfaction: 'Guest satisfaction',
        checkIns: 'Mobile check-ins',
      },
    },
    trustChips: {
      chip1: 'Live pilots running',
      chip2: 'Compatible with ASSA ABLOY · dormakaba · SALTO',
      chip3: 'No app to download',
    },
    proofBar: {
      title: 'Trusted by hospitality leaders',
    },
    steps: {
      title: 'Digital keys in three simple steps',
      subtitle: 'A streamlined arrival for guests and teams.',
      step1: {
        title: 'Booking confirmed',
        description: 'Guests automatically receive their key in Apple Wallet or Google Wallet.',
      },
      step2: {
        title: 'Arrival at the hotel',
        description: 'Doors open with their phone. The flow is instant and intuitive.',
      },
      step3: {
        title: 'Easy departure',
        description: 'Keys expire automatically. No returns to the front desk, no lost cards.',
      },
    },
    security: {
      title: 'Bank-grade security',
      subtitle: 'We protect your property and guest data from day one.',
      feature1: {
        title: 'AES-256 encryption',
        description: 'Every key is secured with the highest industry standards.',
      },
      feature2: {
        title: 'Multi-factor checks',
        description: 'Biometric verification (Face ID, Touch ID) for each access.',
      },
      feature3: {
        title: 'Instant revocation',
        description: 'Disable a key remotely in under a second when needed.',
      },
      feature4: {
        title: 'GDPR compliant',
        description: 'Data hosted in Europe with strict privacy controls.',
      },
    },
    benefits: {
      title: 'Why hotels choose Unlocky',
      subtitle: 'Benefits for guests, staff, and your bottom line.',
      benefit1: {
        title: 'Delighted guests',
        description: 'Express check-in and instant access boosts satisfaction.',
      },
      benefit2: {
        title: 'Lower operating costs',
        description: 'Fewer plastic cards to produce, replace, and manage.',
      },
      benefit3: {
        title: 'Fast deployment',
        description: 'Works with your existing locks for rapid rollout.',
      },
      benefit4: {
        title: 'Actionable insights',
        description: 'Real-time analytics to improve mobile adoption.',
      },
      benefit5: {
        title: 'Responsive support',
        description: 'Average response time under five minutes, every day of the week.',
      },
      benefit6: {
        title: 'Sustainable choice',
        description: 'Dramatically reduces plastic waste and printing.',
      },
    },
    socialProof: {
      title: 'What our customers say',
      quote:
        'Unlocky changed how we welcome guests. The experience is seamless and our staff saves precious time.',
      author: 'General Manager',
      role: 'Confidential pilot hotel',
    },
    testimonials: {
      badge: 'Exclusive program',
      title: 'Join the Founding Hotels',
      description: 'Be among the first adopters and access exclusive benefits.',
      benefits: [
        {
          badge: 'Benefit #1',
          title: 'Lifetime preferred rate',
          description: 'Lock in better pricing and receive all premium upgrades.',
          highlight: { value: '-40 %', label: 'vs public rate' },
        },
        {
          badge: 'Benefit #2',
          title: 'VIP support & training',
          description: 'Priority onboarding and tailored workshops for your teams.',
          highlight: { value: '24/7', label: 'Assistance' },
        },
        {
          badge: 'Benefit #3',
          title: 'Full brand customization',
          description: 'Make the experience fully match your hotel brand.',
          highlight: { value: '100 %', label: 'on-brand' },
        },
      ],
      programNote: 'Limited seats. Selection based on eligibility.',
      perks: ['Express onboarding', 'Early feature access', 'Monthly strategic review'],
    },
    pricing: {
      title: 'One clear plan, no surprises',
      subtitle: 'Everything you need to launch digital keys in your property. Cancel anytime.',
      essential: {
        name: 'Essential',
        price: 'On quote',
        description: 'For hotels starting with mobile keys.',
        features: [
          'PMS and lock integrations',
          'Apple Wallet & Google Wallet cards',
          'Email and chat support',
        ],
        cta: 'Talk to an expert',
      },
      premium: {
        name: 'Premium',
        price: 'Most popular',
        description: 'All-inclusive for larger deployments.',
        features: ['Full check-in automation', 'Advanced analytics', 'Dedicated success team'],
        cta: 'Schedule a demo',
        badge: 'Recommended',
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Contact us',
        description: 'For groups and custom needs.',
        features: ['Custom SLA', 'Tailored integrations', 'Team training'],
        cta: 'Talk to sales',
      },
    },
    pricingCard: {
      badge: 'Recommended plan',
      planName: 'Full rollout',
      priceLabel: 'On quote',
      priceDescription: 'Simple pricing: installation fee plus monthly subscription.',
      featuresTitle: 'Everything included',
      features: [
        'Apple Wallet and Google Wallet compatible',
        'Connects to your PMS and existing locks',
        'Priority support 7/7',
        'Continuous updates and security',
        'Analytics dashboard',
        'Deployment assistance',
      ],
      addonsTitle: 'Available add-ons',
      addons: [
        { label: 'Advanced branding', desc: 'Visuals and text tailored to your brand' },
        { label: 'On-site support', desc: 'Technical presence on launch day' },
        { label: 'Team workshops', desc: 'Training for front-desk and maintenance' },
      ],
      cta: 'Get my estimate',
      roiTitle: 'Immediate ROI',
      roiDescription: 'Fewer lost cards, shorter lines, happier guests.',
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'Everything about digital keys',
      subtitle: 'Clear answers for your teams and guests.',
      contactPrompt: 'Still have questions?',
      contactCta: 'Chat with us',
      questions: [
        {
          question: 'How do you integrate with my PMS?',
          answer: 'We connect to your existing PMS to sync bookings and generate keys automatically.',
        },
        {
          question: 'Which smartphones are supported?',
          answer: 'Apple Wallet and Google Wallet on modern iOS and Android devices are supported.',
        },
        {
          question: 'Are there hidden fees or commitments?',
          answer: 'No. Pricing is straightforward: installation fees followed by a monthly subscription you can cancel anytime.',
        },
        {
          question: 'How is guest data kept secure?',
          answer: 'Security lives in your PMS and never leaves it. Keys are issued without exposing personal data.',
        },
        {
          question: 'How long does team onboarding take?',
          answer: 'Most teams are fully operational in under a week with tutorials and guided sessions.',
        },
        {
          question: 'What if a guest loses their phone?',
          answer: 'The key can be revoked instantly and re-issued safely in seconds.',
        },
      ],
    },
    form: {
      title: 'Tell us about your property',
      subtitle: 'We get back to you within 24h with a tailored demo.',
      fields: {
        hotelName: { label: 'Hotel name', placeholder: 'Riviera Hotel' },
        city: { label: 'City', placeholder: 'Paris' },
        country: { label: 'Country', placeholder: 'France' },
        roomCount: { label: 'Number of rooms', placeholder: '120' },
        name: { label: 'Your name', placeholder: 'Mary Smith' },
        role: { label: 'Your role', placeholder: 'General Manager' },
        email: { label: 'Work email', placeholder: 'contact@hotel.com' },
        phone: { label: 'Phone', placeholder: '+1 202 555 0148' },
        timeline: { label: 'Project timeline', placeholder: 'This quarter, this year…' },
        comment: { label: 'Notes', placeholder: 'Questions or constraints' },
        consent: 'I agree to be contacted by the Unlocky team',
      },
      roomOptions: [
        { value: '1-50', label: '1-50' },
        { value: '51-100', label: '51-100' },
        { value: '101-200', label: '101-200' },
        { value: '200+', label: '200+' },
      ],
      timelineOptions: [
        { value: 'urgent', label: 'Immediately' },
        { value: 'quarter', label: 'This quarter' },
        { value: 'year', label: 'This year' },
        { value: 'undefined', label: 'Not sure yet' },
      ],
      errors: {
        hotelNameRequired: 'Hotel name is required.',
        roomCountRequired: 'Please provide the number of rooms.',
        emailRequired: 'Work email is required.',
        emailInvalid: 'This email is not valid.',
        consentRequired: 'Please accept to be contacted.',
      },
      submit: 'Send',
      submitSending: 'Sending…',
      securityNote: 'Your data stays confidential and is never resold.',
      success: {
        title: 'Thank you!',
        message: 'We will reach out within 24h to schedule a demo.',
      },
      error: {
        title: 'Something went wrong',
        message: 'Please try again or contact us directly.',
      },
    },
    footer: {
      tagline: 'Digital keys that make stays effortless.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      features: 'Features',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms',
      methodology: 'Methodology',
      copyright: '© 2025 Unlocky. All rights reserved.',
    },
    backToTop: {
      label: 'Back to top',
    },
    stickyCTA: {
      text: 'Ready to offer digital keys to your guests?',
      button: 'Plan a demo',
    },
    mobilePage: {
      badge: 'Dedicated mobile experience',
      title: 'A standalone landing page designed for smartphones',
      subtitle:
        'Showcase Unlocky in a compact, mobile-first format so desktop updates never affect the phone experience.',
      ctaPrimary: 'View the mobile page',
      ctaSecondary: 'Back to desktop version',
      featuresTitle: 'Built for small screens',
      featuresSubtitle: 'Short sections, thumb-friendly spacing and clear anchor points.',
      features: [
        {
          title: 'Fast navigation',
          description: 'Compact sections with clear anchors to guide prospects on the go.',
        },
        {
          title: 'Always-on CTA',
          description: 'Repeated calls to action so booking a demo stays one tap away.',
        },
        {
          title: 'Isolated content',
          description: 'Mobile components live separately to avoid breaking the desktop layout.',
        },
      ],
      stepsTitle: 'A simple 3-step journey',
      stepsSubtitle: 'Explain how it works in just a few lines for mobile readers.',
      steps: [
        {
          title: 'Key delivered',
          description: 'The key lands in Apple Wallet or Google Wallet as soon as the booking is confirmed.',
        },
        {
          title: 'Instant arrival',
          description: 'Guests open their room with their phone—no reception detour.',
        },
        {
          title: 'Automatic checkout',
          description: 'The key expires on its own—no card drop-off, no friction.',
        },
      ],
      securityTitle: 'Security and reassurance',
      securitySubtitle: 'Mobile-friendly reminders for decision makers on the move.',
      securityNotes: [
        'Encryption and biometric authentication stay front and center.',
        'Instant revocation if a phone is lost.',
        'GDPR-compliant infrastructure hosted in Europe.',
      ],
      contactTitle: 'Ready to get started?',
      contactSubtitle: 'Let’s schedule a quick call right from your phone.',
      contactCTA: 'Schedule a call',
      desktopCTA: 'View desktop version',
    },
    mobileNav: {
      features: 'Features',
      steps: 'Steps',
      contact: 'Contact',
    },
  },
};
