import { articles } from '@/data/articles';

const SITE_URL = 'https://programmirovanie-dlya-detej-online.ru';

export const generateSitemap = (): string => {
  const currentDate = new Date().toISOString();
  
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' as const, lastmod: currentDate },
    { url: '/compare', priority: '0.8', changefreq: 'weekly' as const, lastmod: currentDate },
    { url: '/about', priority: '0.6', changefreq: 'monthly' as const, lastmod: currentDate },
    { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' as const, lastmod: currentDate },
    { url: '/terms-of-service', priority: '0.3', changefreq: 'yearly' as const, lastmod: currentDate },
    { url: '/rating-methodology', priority: '0.7', changefreq: 'monthly' as const, lastmod: currentDate },
  ];

  const articlePages = articles.map(article => ({
    url: `/articles/${article.slug}`,
    priority: article.featured ? '0.9' : '0.7',
    changefreq: 'monthly' as const,
    lastmod: article.publishDate
  }));

  const allPages = [...staticPages, ...articlePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml

# Block access to development and admin paths
Disallow: /api/
Disallow: /.git/
Disallow: /node_modules/
Disallow: /src/

# Allow important SEO pages
Allow: /articles/
Allow: /compare
Allow: /about
Allow: /privacy-policy
Allow: /terms-of-service
Allow: /rating-methodology`;
};