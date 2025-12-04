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
  };

  // Hero
  hero: {
    title: string;
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

  // FAQ
  faq: {
    title: string;
    subtitle: string;
    questions: {
      q1: { question: string; answer: string };
      q2: { question: string; answer: string };
      q3: { question: string; answer: string };
      q4: { question: string; answer: string };
      q5: { question: string; answer: string };
      q6: { question: string; answer: string };
    };
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
      lockProvider: { label: string; placeholder: string };
      lockProviderOther: { label: string; placeholder: string };
      pms: { label: string; subtitle: string };
      name: { label: string; placeholder: string };
      role: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      timeline: { label: string; placeholder: string };
      comment: { label: string; placeholder: string };
      consent: string;
    };
    roomOptions: { value: string; label: string }[];
    lockProviders: { value: string; label: string }[];
    pmsOptions: { value: string; label: string }[];
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
    },

    hero: {
      title: 'La clé est déjà dans le téléphone de vos clients',
      subtitle: 'Transformez l\'expérience d\'arrivée avec des clés Apple Wallet et Google Wallet. Sans app à télécharger, sans carte plastique, sans friction.',
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
      title: 'Ils nous font confiance',
    },

    steps: {
      title: 'Clés digitales. Simplicité. Efficacité',
      subtitle: 'Trois étapes pour une expérience d\'arrivée révolutionnaire',
      step1: {
        title: 'Réservation confirmée',
        description: 'Le client reçoit automatiquement sa clé digitale dans Apple Wallet ou Google Wallet. Aucune app à télécharger.',
      },
      step2: {
        title: 'Arrivée à l\'hôtel',
        description: 'Le client déverrouille sa chambre directement avec son téléphone. L\'expérience est instantanée et naturelle.',
      },
      step3: {
        title: 'Départ simplifié',
        description: 'La clé expire automatiquement. Pas de retour en réception, pas de carte perdue. L\'expérience est fluide de bout en bout.',
      },
    },

    security: {
      title: 'Sécurité de niveau bancaire',
      subtitle: 'La protection de vos clients et de votre établissement est notre priorité absolue',
      feature1: {
        title: 'Chiffrement AES-256',
        description: 'Toutes les clés sont chiffrées avec les standards militaires les plus élevés.',
      },
      feature2: {
        title: 'Authentification multi-facteurs',
        description: 'Vérification biométrique (Face ID, Touch ID) pour chaque accès.',
      },
      feature3: {
        title: 'Révocation instantanée',
        description: 'Désactivez une clé à distance en moins d\'une seconde si nécessaire.',
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
        description: 'Satisfaction client en hausse grâce au check-in express et à l\'accès instantané.',
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
        description: 'Temps de réponse moyen inférieur à 5 minutes, 7 jours sur 7.',
      },
      benefit6: {
        title: 'Impact environnemental',
        description: 'Réduction drastique du plastique et des déchets générés par votre hôtel.',
      },
    },

    socialProof: {
      title: 'Ce que disent nos clients',
      quote: '"Unlocky a transformé notre expérience d\'arrivée. Nos clients adorent la simplicité, et notre équipe gagne un temps précieux. Le ROI a été immédiat."',
      author: 'Directeur',
      role: 'Hôtel pilote confidentiel',
    },

    pricing: {
      title: 'Tarification simple et transparente',
      subtitle: 'Choisissez la formule adaptée à votre établissement',
      essential: {
        name: 'Essential',
        price: '2,90€',
        description: 'Pour les établissements démarrant avec les clés mobiles',
        features: [
          'Apple Wallet & Google Wallet',
          'Jusqu\'à 100 chambres',
          'Support email 24h',
          'Analytics de base',
          'API standard',
          'Intégration PMS',
        ],
        cta: 'Commencer',
      },
      premium: {
        name: 'Premium',
        price: '1,90€',
        description: 'Notre formule la plus populaire pour les hôtels exigeants',
        features: [
          'Tout Essential, plus :',
          'Chambres illimitées',
          'Support prioritaire 24/7',
          'Analytics avancés',
          'API complète',
          'White-label disponible',
          'Formation sur site',
        ],
        cta: 'Choisir Premium',
        badge: 'Le plus populaire',
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Sur mesure',
        description: 'Pour les groupes hôteliers et chaînes',
        features: [
          'Tout Premium, plus :',
          'Multi-propriétés',
          'Account manager dédié',
          'SLA garantis',
          'Développement sur mesure',
          'Infrastructure dédiée',
          'Tarification volume',
        ],
        cta: 'Nous contacter',
      },
    },

    faq: {
      title: 'Questions fréquentes',
      subtitle: 'Tout ce que vous devez savoir sur Unlocky',
      questions: {
        q1: {
          question: 'Comment fonctionne Unlocky avec nos serrures actuelles ?',
          answer: 'Unlocky s\'intègre avec tous les principaux fabricants de serrures connectées (ASSA ABLOY, dormakaba, SALTO, OpenKey, etc.). Notre équipe technique réalise un audit de compatibilité gratuit et l\'installation se fait généralement en moins de 24h.',
        },
        q2: {
          question: 'Que se passe-t-il si un client n\'a pas de smartphone ?',
          answer: 'Votre système de cartes-clés traditionnel reste pleinement opérationnel. Unlocky s\'ajoute comme option premium pour vos clients équipés, sans remplacer vos processus existants.',
        },
        q3: {
          question: 'Comment gérez-vous la sécurité des données clients ?',
          answer: 'Nous utilisons un chiffrement AES-256 de niveau bancaire, nos serveurs sont hébergés en Europe (conformité RGPD), et nous sommes certifiés ISO 27001. Aucune donnée personnelle n\'est stockée sur les appareils.',
        },
        q4: {
          question: 'Quel est le délai de mise en place ?',
          answer: 'Après l\'audit de compatibilité (48h), l\'installation technique prend 4 à 8 heures selon la taille de l\'établissement. La formation de votre équipe se fait en 2h. Vous pouvez être opérationnel en moins d\'une semaine.',
        },
        q5: {
          question: 'Y a-t-il des frais cachés ou d\'engagement longue durée ?',
          answer: 'Non. Notre tarification est transparente : uniquement le coût par chambre/mois selon la formule choisie. Pas de frais d\'installation, pas d\'engagement minimum. Vous pouvez annuler à tout moment.',
        },
        q6: {
          question: 'Quels PMS sont compatibles ?',
          answer: 'Nous sommes intégrés avec les principaux PMS : Opera, Mews, Cloudbeds, Protel, Apaleo, et bien d\'autres. Si votre PMS dispose d\'une API, nous pouvons réaliser l\'intégration rapidement.',
        },
      },
    },

    form: {
      title: 'Demander une démo',
      subtitle: 'Remplissez ce formulaire et notre équipe vous contactera rapidement pour une démo personnalisée.',
      fields: {
        hotelName: { label: 'Nom de l\'établissement', placeholder: 'Le Grand Hôtel Paris' },
        city: { label: 'Ville', placeholder: 'Paris' },
        country: { label: 'Pays', placeholder: 'France' },
        roomCount: { label: 'Nombre de chambres', placeholder: 'Sélectionnez...' },
        lockProvider: { label: 'Fournisseur de serrures actuel', placeholder: 'Sélectionnez...' },
        lockProviderOther: { label: 'Précisez votre fournisseur', placeholder: 'Ex: Onity, Ving, etc.' },
        pms: { label: 'PMS (Property Management System)', subtitle: 'Sélectionnez un ou plusieurs systèmes' },
        name: { label: 'Votre nom', placeholder: 'Jean Dupont' },
        role: { label: 'Fonction', placeholder: 'Directeur Général' },
        email: { label: 'Email professionnel', placeholder: 'contact@hotel.com' },
        phone: { label: 'Téléphone', placeholder: '+33 1 23 45 67 89' },
        timeline: { label: 'Délai souhaité pour la mise en place', placeholder: 'Sélectionnez...' },
        comment: { label: 'Commentaire ou demande spécifique', placeholder: 'Ex: passage en mobile key T3, 3 propriétés à équiper' },
        consent: 'J\'accepte que Unlocky collecte mes données pour me recontacter concernant ma demande. Conformément au RGPD, vos données sont sécurisées et ne seront jamais partagées.',
      },
      roomOptions: [
        { value: '1-20', label: '1-20 chambres' },
        { value: '21-50', label: '21-50 chambres' },
        { value: '51-100', label: '51-100 chambres' },
        { value: '101-200', label: '101-200 chambres' },
        { value: '201-500', label: '201-500 chambres' },
        { value: '500+', label: '500+ chambres' },
      ],
      lockProviders: [
        { value: 'assa-abloy', label: 'ASSA ABLOY / VingCard' },
        { value: 'dormakaba', label: 'dormakaba' },
        { value: 'salto', label: 'SALTO' },
        { value: 'openkey', label: 'OpenKey' },
        { value: 'other', label: 'Autre / Je ne sais pas' },
      ],
      pmsOptions: [
        { value: 'opera', label: 'Opera / Oracle' },
        { value: 'opera-cloud', label: 'Opera Cloud' },
        { value: 'mews', label: 'Mews' },
        { value: 'cloudbeds', label: 'Cloudbeds' },
        { value: 'protel', label: 'Protel' },
        { value: 'guestline', label: 'Guestline' },
        { value: 'apaleo', label: 'Apaleo' },
        { value: 'roomraccoon', label: 'RoomRaccoon' },
        { value: 'other', label: 'Autre' },
      ],
      timelineOptions: [
        { value: '<1month', label: 'Moins d\'1 mois' },
        { value: '1-3months', label: '1-3 mois' },
        { value: '3+months', label: 'Plus de 3 mois' },
      ],
      errors: {
        hotelNameRequired: 'Le nom de l\'établissement est requis',
        roomCountRequired: 'Veuillez sélectionner le nombre de chambres',
        emailRequired: 'L\'email professionnel est requis',
        emailInvalid: 'Email invalide',
        consentRequired: 'Vous devez accepter pour continuer',
      },
      submit: 'Envoyer ma demande',
      submitSending: 'Envoi en cours...',
      securityNote: 'Vos données sont protégées. Nous utilisons un chiffrement de niveau bancaire et sommes conformes RGPD. Aucune donnée n\'est partagée avec des tiers.',
      success: {
        title: 'Demande reçue !',
        message: 'Merci pour votre intérêt ! Notre équipe vous contactera dans les prochaines 24h pour organiser votre démo personnalisée.',
      },
      error: {
        title: 'Une erreur est survenue',
        message: 'Votre demande n\'a pas pu être envoyée. Merci de vérifier votre connexion et de réessayer.',
      },
    },

    footer: {
      tagline: 'La clé est déjà dans leur téléphone',
      product: 'Produit',
      company: 'Entreprise',
      legal: 'Mentions légales',
      features: 'Fonctionnalités',
      pricing: 'Tarifs',
      about: 'À propos',
      contact: 'Contact',
      privacy: 'Confidentialité',
      terms: 'CGV',
      methodology: 'Comment on mesure ?',
      copyright: '© 2025 Unlocky. Tous droits réservés.',
    },

    backToTop: {
      label: 'Retour en haut',
    },

    stickyCTA: {
      text: 'Prêt à moderniser votre hôtel ?',
      button: 'Demander une démo',
    },
  },

  en: {
    navbar: {
      features: 'Features',
      security: 'Security',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Request a Demo',
    },

    hero: {
      title: 'The key is already in your guests\' phones',
      subtitle: 'Transform the arrival experience with Apple Wallet and Google Wallet keys. No app to download, no plastic card, no friction.',
      statusAvailable: 'Available now',
      cta: 'Request a Demo',
      ctaSecondary: 'How it works',
      trustIndicator1: 'No more lost cards',
      trustIndicator2: 'Support in 10 min',
      quickProofs: {
        proof1: 'No more lost cards',
        proof2: 'Support in 10 min',
      },
      stats: {
        hotels: 'Hotels equipped',
        satisfaction: 'Guest satisfaction',
        checkIns: 'Mobile check-ins',
      },
    },

    trustChips: {
      chip1: 'Active pilots',
      chip2: 'Compatible ASSA ABLOY · dormakaba · SALTO',
      chip3: 'No app to download',
    },

    proofBar: {
      title: 'Trusted by leading hotels',
    },

    steps: {
      title: 'Digital Keys. Simplicity. Efficiency',
      subtitle: 'Three steps to a revolutionary arrival experience',
      step1: {
        title: 'Booking confirmed',
        description: 'Guests automatically receive their digital key in Apple Wallet or Google Wallet. No app to download.',
      },
      step2: {
        title: 'Hotel arrival',
        description: 'Guests unlock their room directly with their phone. The experience is instant and natural.',
      },
      step3: {
        title: 'Simplified checkout',
        description: 'The key expires automatically. No return to reception, no lost card. The experience is seamless from start to finish.',
      },
    },

    security: {
      title: 'Bank-level security',
      subtitle: 'Protecting your guests and your property is our absolute priority',
      feature1: {
        title: 'AES-256 Encryption',
        description: 'All keys are encrypted with the highest military-grade standards.',
      },
      feature2: {
        title: 'Multi-factor Authentication',
        description: 'Biometric verification (Face ID, Touch ID) for every access.',
      },
      feature3: {
        title: 'Instant Revocation',
        description: 'Remotely disable a key in less than one second if needed.',
      },
      feature4: {
        title: 'GDPR Compliant',
        description: 'Infrastructure hosted in Europe, compliant with the strictest standards.',
      },
    },

    benefits: {
      title: 'Why choose Unlocky?',
      subtitle: 'A solution that benefits everyone: your guests, your team, your property',
      benefit1: {
        title: 'Enhanced guest experience',
        description: 'Guest satisfaction up thanks to express check-in and instant room access.',
      },
      benefit2: {
        title: 'Reduced operating costs',
        description: 'Fewer plastic cards produced, replaced, and managed each year.',
      },
      benefit3: {
        title: 'Ultra-fast deployment',
        description: 'Compatible with your existing locks, immediate service activation.',
      },
      benefit4: {
        title: 'Actionable insights',
        description: 'Mobile check-in rate continuously growing with real-time analytics.',
      },
      benefit5: {
        title: 'Responsive assistance',
        description: 'Average response time under 5 minutes, 7 days a week.',
      },
      benefit6: {
        title: 'Environmental impact',
        description: 'Drastic reduction in plastic and waste generated by your hotel.',
      },
    },

    socialProof: {
      title: 'What our customers say',
      quote: '"Unlocky transformed our arrival experience. Our guests love the simplicity, and our team saves precious time. The ROI was immediate."',
      author: 'Director',
      role: 'Confidential pilot hotel',
    },

    pricing: {
      title: 'Simple and transparent pricing',
      subtitle: 'Choose the plan that fits your property',
      essential: {
        name: 'Essential',
        price: '€2.90',
        description: 'For properties starting with mobile keys',
        features: [
          'Apple Wallet & Google Wallet',
          'Up to 100 rooms',
          '24h email support',
          'Basic analytics',
          'Standard API',
          'PMS integration',
        ],
        cta: 'Get Started',
      },
      premium: {
        name: 'Premium',
        price: '€1.90',
        description: 'Our most popular plan for demanding hotels',
        features: [
          'Everything in Essential, plus:',
          'Unlimited rooms',
          '24/7 priority support',
          'Advanced analytics',
          'Full API',
          'White-label available',
          'On-site training',
        ],
        cta: 'Choose Premium',
        badge: 'Most Popular',
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For hotel groups and chains',
        features: [
          'Everything in Premium, plus:',
          'Multi-property',
          'Dedicated account manager',
          'Guaranteed SLAs',
          'Custom development',
          'Dedicated infrastructure',
          'Volume pricing',
        ],
        cta: 'Contact Us',
      },
    },

    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about Unlocky',
      questions: {
        q1: {
          question: 'How does Unlocky work with our current locks?',
          answer: 'Unlocky integrates with all major connected lock manufacturers (ASSA ABLOY, dormakaba, SALTO, OpenKey, etc.). Our technical team performs a free compatibility audit and installation typically takes less than 24 hours.',
        },
        q2: {
          question: 'What happens if a guest doesn\'t have a smartphone?',
          answer: 'Your traditional key card system remains fully operational. Unlocky adds as a premium option for your equipped guests, without replacing your existing processes.',
        },
        q3: {
          question: 'How do you handle guest data security?',
          answer: 'We use bank-level AES-256 encryption, our servers are hosted in Europe (GDPR compliant), and we are ISO 27001 certified. No personal data is stored on devices.',
        },
        q4: {
          question: 'What is the implementation timeline?',
          answer: 'After the compatibility audit (48h), technical installation takes 4 to 8 hours depending on property size. Staff training is done in 2 hours. You can be operational in less than a week.',
        },
        q5: {
          question: 'Are there hidden fees or long-term commitments?',
          answer: 'No. Our pricing is transparent: only the cost per room/month according to the chosen plan. No installation fees, no minimum commitment. You can cancel anytime.',
        },
        q6: {
          question: 'Which PMS are compatible?',
          answer: 'We integrate with major PMS: Opera, Mews, Cloudbeds, Protel, Apaleo, and many others. If your PMS has an API, we can implement the integration quickly.',
        },
      },
    },

    form: {
      title: 'Request a Demo',
      subtitle: 'Fill out this form and our team will contact you shortly for a personalized demo.',
      fields: {
        hotelName: { label: 'Property name', placeholder: 'The Grand Hotel Paris' },
        city: { label: 'City', placeholder: 'Paris' },
        country: { label: 'Country', placeholder: 'France' },
        roomCount: { label: 'Number of rooms', placeholder: 'Select...' },
        lockProvider: { label: 'Current lock provider', placeholder: 'Select...' },
        lockProviderOther: { label: 'Specify your provider', placeholder: 'E.g.: Onity, Ving, etc.' },
        pms: { label: 'PMS (Property Management System)', subtitle: 'Select one or more systems' },
        name: { label: 'Your name', placeholder: 'John Doe' },
        role: { label: 'Position', placeholder: 'General Manager' },
        email: { label: 'Professional email', placeholder: 'contact@hotel.com' },
        phone: { label: 'Phone', placeholder: '+1 234 567 8900' },
        timeline: { label: 'Desired implementation timeline', placeholder: 'Select...' },
        comment: { label: 'Comment or specific request', placeholder: 'E.g.: mobile key rollout Q3, 3 properties to equip' },
        consent: 'I agree that Unlocky may collect my data to contact me regarding my request. In accordance with GDPR, your data is secure and will never be shared.',
      },
      roomOptions: [
        { value: '1-20', label: '1-20 rooms' },
        { value: '21-50', label: '21-50 rooms' },
        { value: '51-100', label: '51-100 rooms' },
        { value: '101-200', label: '101-200 rooms' },
        { value: '201-500', label: '201-500 rooms' },
        { value: '500+', label: '500+ rooms' },
      ],
      lockProviders: [
        { value: 'assa-abloy', label: 'ASSA ABLOY / VingCard' },
        { value: 'dormakaba', label: 'dormakaba' },
        { value: 'salto', label: 'SALTO' },
        { value: 'openkey', label: 'OpenKey' },
        { value: 'other', label: 'Other / I don\'t know' },
      ],
      pmsOptions: [
        { value: 'opera', label: 'Opera / Oracle' },
        { value: 'opera-cloud', label: 'Opera Cloud' },
        { value: 'mews', label: 'Mews' },
        { value: 'cloudbeds', label: 'Cloudbeds' },
        { value: 'protel', label: 'Protel' },
        { value: 'guestline', label: 'Guestline' },
        { value: 'apaleo', label: 'Apaleo' },
        { value: 'roomraccoon', label: 'RoomRaccoon' },
        { value: 'other', label: 'Other' },
      ],
      timelineOptions: [
        { value: '<1month', label: 'Less than 1 month' },
        { value: '1-3months', label: '1-3 months' },
        { value: '3+months', label: 'More than 3 months' },
      ],
      errors: {
        hotelNameRequired: 'Property name is required',
        roomCountRequired: 'Please select the number of rooms',
        emailRequired: 'Professional email is required',
        emailInvalid: 'Invalid email',
        consentRequired: 'You must agree to continue',
      },
      submit: 'Send my request',
      submitSending: 'Sending...',
      securityNote: 'Your data is protected. We use bank-level encryption and are GDPR compliant. No data is shared with third parties.',
      success: {
        title: 'Request received!',
        message: 'Thank you for your interest! Our team will contact you within the next 24 hours to arrange your personalized demo.',
      },
      error: {
        title: 'Something went wrong',
        message: 'Your request could not be sent. Please check your connection and try again.',
      },
    },

    footer: {
      tagline: 'The key is already in their phone',
      product: 'Product',
      company: 'Company',
      legal: 'Legal notice',
      features: 'Features',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms of sale',
      methodology: 'How we measure?',
      copyright: '© 2025 Unlocky. All rights reserved.',
    },

    backToTop: {
      label: 'Back to top',
    },

    stickyCTA: {
      text: 'Ready to modernize your hotel?',
      button: 'Request a Demo',
    },
  },
};
