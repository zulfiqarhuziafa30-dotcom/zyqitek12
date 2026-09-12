import { CONTACT, LINKS, SITE_URL } from '../config/constants';

export function getOrganizationSchema(customUrl?: string) {
  const url = customUrl || SITE_URL;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${url}/#organization`,
    name: 'ZYQITEK',
    legalName: 'ZYQITEK',
    url: url,
    logo: {
      '@type': 'ImageObject',
      url: `${url}/logo.svg`,
      width: '340',
      height: '295',
      caption: 'ZYQITEK Logo'
    },
    image: `${url}/studio-backdrop.jpg`,
    description: 'ZYQITEK provides web development, branding, and growth marketing — all your digital needs in one place.',
    email: CONTACT.general.email,
    telephone: CONTACT.general.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressRegion: 'Sindh',
      addressCountry: 'PK'
    },
    sameAs: [
      LINKS.socials.instagram,
      LINKS.socials.facebook,
      LINKS.socials.whatsapp
    ].filter(link => link && !link.startsWith('#')),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: CONTACT.general.phone,
        contactType: 'customer service',
        email: CONTACT.general.email,
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Urdu']
      }
    ],
    knowsAbout: [
      'Custom Software Engineering',
      'Web Application Development',
      'Cloud Architecture',
      'Brand Identity & UI/UX Design Systems',
      'Growth Strategy & Performance Marketing'
    ]
  };
}

export function getLocalBusinessSchema(customUrl?: string) {
  const url = customUrl || SITE_URL;
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${url}/#localbusiness`,
    name: 'ZYQITEK',
    url: url,
    logo: `${url}/logo.svg`,
    image: `${url}/studio-backdrop.jpg`,
    description: 'ZYQITEK provides web development, branding, and growth marketing — all your digital needs in one place.',
    telephone: CONTACT.general.phone,
    email: CONTACT.general.email,
    priceRange: '$$$',
    currenciesAccepted: 'USD, PKR, EUR, GBP',
    paymentAccepted: 'Bank Transfer, Credit Card, Wire',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressRegion: 'Sindh',
      addressCountry: 'PK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.8607,
      longitude: 67.0011
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'Worldwide'
      }
    ],
    parentOrganization: {
      '@id': `${url}/#organization`
    },
    sameAs: [
      LINKS.socials.instagram,
      LINKS.socials.facebook,
      LINKS.socials.whatsapp
    ].filter(link => link && !link.startsWith('#'))
  };
}

/**
 * Dynamically generated Schema.org JSON-LD graph combining Organization and LocalBusiness standards
 * for optimal indexing by Google and other search engines.
 */
export function getHomeStructuredData(customUrl?: string) {
  const url = customUrl || SITE_URL;
  const org = getOrganizationSchema(url);
  const local = getLocalBusinessSchema(url);

  // Exclude duplicate @context when wrapping in @graph
  const { '@context': _c1, ...orgBody } = org;
  const { '@context': _c2, ...localBody } = local;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      orgBody,
      localBody
    ]
  };
}

export interface ArticleSchemaData {
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  url?: string;
  authorName?: string;
}

export function getArticleSchema({
  headline,
  description,
  datePublished = '2025-01-15',
  dateModified = '2025-02-01',
  url = `${SITE_URL}/blog`,
  authorName = 'ZYQITEK Editorial Team'
}: ArticleSchemaData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    datePublished,
    dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    author: {
      '@type': 'Organization',
      name: authorName,
      url: SITE_URL
    },
    publisher: {
      '@type': 'Organization',
      name: 'ZYQITEK',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`
      }
    },
    image: `${SITE_URL}/studio-backdrop.jpg`
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${SITE_URL}${item.path}`
    }))
  };
}
