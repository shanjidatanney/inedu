import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
}

const SITE_NAME = 'Infant & Toddler Education';

export const useSEO = (config?: SEOConfig) => {
  const location = useLocation();

  useEffect(() => {
    // Get page title from h1 if present
    const h1Element = document.querySelector('h1');
    const h1Text = h1Element?.textContent;

    // Use provided title, h1 text, or generate from pathname
    let pageTitle = config?.title || h1Text;
    
    if (!pageTitle) {
      // Generate title from pathname
      const segments = location.pathname.split('/').filter(Boolean);
      if (segments.length > 0) {
        pageTitle = segments
          .join(' ')
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      } else {
        pageTitle = 'Home';
      }
    }

    // Add keyword context if found in content
    const content = document.querySelector('main')?.textContent || '';
    const keywords = ['EYLF', 'VEYLDF', 'Early Years', 'Framework'];
    const foundKeyword = keywords.find(kw => 
      content.toLowerCase().includes(kw.toLowerCase())
    );

    const finalTitle = foundKeyword && !pageTitle.includes(foundKeyword)
      ? `${pageTitle} — ${foundKeyword}`
      : pageTitle;

    // Set document title
    document.title = `${finalTitle} · ${SITE_NAME}`;

    // Set meta description
    if (config?.description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', config.description);
    }

    // Set meta keywords if provided
    if (config?.keywords && config.keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', config.keywords.join(', '));
    }
  }, [location, config]);
};

export const generateBreadcrumbs = (pathname: string) => {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ label: 'Home', path: '/' }];

  let currentPath = '';
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    breadcrumbs.push({ label, path: currentPath });
  });

  return breadcrumbs;
};
