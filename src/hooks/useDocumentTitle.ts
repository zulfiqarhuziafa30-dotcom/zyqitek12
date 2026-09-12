import { useEffect } from 'react';

export const SITE_BRAND_TITLE = 'ZYQITEK — IT Solutions in One Place';
export const BRAND_SUFFIX = 'ZYQITEK | IT Solutions in One Place';

export function formatPageTitle(title?: string): string {
  if (!title) return SITE_BRAND_TITLE;
  const trimmed = title.trim();
  if (trimmed === SITE_BRAND_TITLE || trimmed === 'ZYQITEK' || trimmed.toLowerCase() === 'home') {
    return SITE_BRAND_TITLE;
  }
  if (trimmed.endsWith(BRAND_SUFFIX)) {
    return trimmed;
  }
  if (trimmed.includes('— ZYQITEK | IT Solutions in One Place')) {
    return trimmed;
  }
  
  const clean = trimmed
    .replace(/\s*([|—–-])\s*ZYQITEK.*$/i, '')
    .replace(/\s*([|—–-])\s*IT Solutions in One Place.*$/i, '')
    .trim();

  if (!clean || clean.toLowerCase() === 'home') {
    return SITE_BRAND_TITLE;
  }
  
  // Pattern: "[Page Name] — ZYQITEK | IT Solutions in One Place"
  return `${clean} — ${BRAND_SUFFIX}`;
}

export function useDocumentTitle(
  title: string, 
  description?: string, 
  canonicalUrl?: string, 
  ogImage?: string,
  keywords?: string,
  noindex?: boolean
) {
  useEffect(() => {
    const fullTitle = formatPageTitle(title);
    document.title = fullTitle;

    // Helper to set or create a meta tag
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaTag('name', 'title', fullTitle);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('name', 'twitter:title', fullTitle);

    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    setMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    if (canonicalUrl) {
      setMetaTag('property', 'og:url', canonicalUrl);
      setMetaTag('name', 'twitter:url', canonicalUrl);
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    if (ogImage) {
      setMetaTag('property', 'og:image', ogImage);
      setMetaTag('name', 'twitter:image', ogImage);
    }
  }, [title, description, canonicalUrl, ogImage, keywords, noindex]);
}
