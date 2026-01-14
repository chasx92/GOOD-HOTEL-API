import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export function SEOHead({
  title = "Unlocky - La Clé Mobile et Digitale pour Hôtels Premium",
  description = "Transformez le smartphone de vos clients en clé d'hôtel. Unlocky digitalise vos accès pour une arrivée simplifiée : Web, App ou Wallet. Modernisez votre accueil.",
  ogImage = "https://unlocky.io/og-image.jpg",
  canonicalUrl = "https://unlocky.io"
}: SEOHeadProps) {

  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta tags
    const metaTags = [
      // Basic meta tags
      { name: 'description', content: description },
      { name: 'keywords', content: 'clé digitale hôtel, Apple Wallet clé chambre, Google Wallet hôtel, accès mobile chambre, keyless entry hôtel, clé smartphone, ASSA ABLOY, dormakaba, SALTO, clé NFC, hôtel 5 étoiles, digital key hotel' },
      { name: 'author', content: 'Unlocky' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },

      // Language & Geo
      { name: 'language', content: 'fr' },
      { name: 'geo.region', content: 'FR' },
      { name: 'geo.placename', content: 'Paris' },

      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Unlocky' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Unlocky - Clé digitale dans Apple Wallet sur iPhone 15 Pro' },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:locale', content: 'fr_FR' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@Unlocky' },
      { name: 'twitter:creator', content: '@Unlocky' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:image:alt', content: 'Unlocky - Clé digitale dans Apple Wallet sur iPhone 15 Pro' },

      // Mobile & Apple specific
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Unlocky' },
      { name: 'format-detection', content: 'telephone=no' },

      // Theme color
      { name: 'theme-color', content: '#F2F2F7' },
      { name: 'msapplication-TileColor', content: '#C3A36E' },
    ];

    // Update or create meta tags
    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;

      let metaElement = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement;

      if (!metaElement) {
        metaElement = document.createElement('meta');
        metaElement.setAttribute(attribute, value!);
        document.head.appendChild(metaElement);
      }

      metaElement.setAttribute('content', content);
    });

    // Set canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;

    // Inject JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        // Organization
        {
          "@type": "Organization",
          "@id": `${canonicalUrl}/#organization`,
          "name": "Keylessly",
          "url": canonicalUrl,
          "description": "Solution premium de clés digitales Apple & Google Wallet pour hôtels de luxe",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Paris",
            "addressCountry": "FR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33-1-42-00-00-00",
            "contactType": "Sales",
            "email": "contact@keylessly.com",
            "availableLanguage": ["fr", "en"]
          },
          "sameAs": [
            "https://www.linkedin.com/company/keylessly",
            "https://twitter.com/keylessly"
          ]
        },
        // WebSite
        {
          "@type": "WebSite",
          "@id": `${canonicalUrl}/#website`,
          "url": canonicalUrl,
          "name": "Keylessly",
          "publisher": {
            "@id": `${canonicalUrl}/#organization`
          },
          "inLanguage": "fr-FR",
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${canonicalUrl}/?s={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        },
        // WebPage
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}/#webpage`,
          "url": canonicalUrl,
          "name": title,
          "description": description,
          "isPartOf": {
            "@id": `${canonicalUrl}/#website`
          },
          "about": {
            "@id": `${canonicalUrl}/#organization`
          },
          "inLanguage": "fr-FR"
        },
        // SoftwareApplication (Product)
        {
          "@type": "SoftwareApplication",
          "@id": `${canonicalUrl}/#product`,
          "name": "Keylessly",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "iOS, Android",
          "offers": {
            "@type": "Offer",
            "price": "8.00",
            "priceCurrency": "EUR",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "8.00",
              "priceCurrency": "EUR",
              "unitText": "par chambre/mois"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          },
          "description": "Solution de clés digitales Apple & Google Wallet pour hôtels premium. Intégration avec ASSA ABLOY, dormakaba, SALTO.",
          "featureList": [
            "Clés Apple Wallet",
            "Clés Google Wallet",
            "Intégration PMS",
            "Support 24/7",
            "Analytics temps réel",
            "API complète"
          ]
        },
        // FAQPage
        {
          "@type": "FAQPage",
          "@id": `${canonicalUrl}/#faq`,
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quels systèmes de serrures connectées sont compatibles ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Keylessly est compatible avec les principaux fabricants : ASSA ABLOY (VisionLine, Vostio), dormakaba (Saflock, Oracode), SALTO (Space, KS), Onity, et bien d'autres. Notre API s'intègre nativement avec plus de 95% des systèmes installés dans les hôtels premium."
              }
            },
            {
              "@type": "Question",
              "name": "Combien de temps prend l'installation ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "L'installation complète prend généralement 5 à 7 jours ouvrés. Cela inclut l'intégration technique avec votre PMS, la configuration des serrures, la formation de vos équipes et une période de tests."
              }
            },
            {
              "@type": "Question",
              "name": "Mes clients doivent-ils installer une application ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Non, c'est l'un des grands avantages ! La clé s'ajoute directement dans Apple Wallet ou Google Wallet, qui sont déjà installés nativement sur tous les smartphones."
              }
            },
            {
              "@type": "Question",
              "name": "Les données des clients sont-elles sécurisées ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolument. Les clés sont stockées dans l'élément sécurisé du téléphone (Secure Element), le même composant qui protège les cartes bancaires Apple Pay. Conformes RGPD et certifiés ISO 27001."
              }
            },
            {
              "@type": "Question",
              "name": "Quel est le coût par chambre ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Notre tarification est modulaire et dépend du nombre de chambres. Comptez généralement entre 8€ et 15€ par chambre/mois. Demandez une démo pour un devis personnalisé."
              }
            }
          ]
        }
      ]
    };

    // Remove existing JSON-LD script if any
    const existingScript = document.querySelector('script[type="application/ld+json"][data-keylessly-seo]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new JSON-LD script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-keylessly-seo', 'true');
    script.textContent = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);

  }, [title, description, ogImage, canonicalUrl]);

  return null;
}
