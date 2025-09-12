import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import articles data
let articles = [];
try {
  const { articles: articlesData } = await import('../src/data/articles.ts');
  articles = articlesData;
} catch (error) {
  console.warn('Could not load articles data:', error.message);
}

// Page configurations with unique meta tags
const pages = [
  {
    path: '',
    title: 'ТОП-10 онлайн-школ программирования для детей в России | Рейтинг 2025',
    description: 'Независимый рейтинг лучших онлайн-школ программирования для детей и подростков. Сравнение цен, отзывы родителей, подробные обзоры курсов Python, Scratch, JavaScript.',
    keywords: 'программирование для детей, онлайн школа программирования, курсы программирования дети, Python для детей, Scratch, JavaScript дети',
    ogTitle: 'Лучшие онлайн-школы программирования для детей - Рейтинг 2025',
    ogDescription: 'Независимый рейтинг онлайн-школ программирования для детей. Сравните цены, отзывы и выберите лучший курс для вашего ребенка.'
  },
  {
    path: 'compare',
    title: 'Сравнение онлайн-школ программирования для детей',
    description: 'Подробное сравнение популярных онлайн-школ программирования для детей. Анализ цен, программ обучения и отзывов родителей.',
    keywords: 'сравнение школ программирования, онлайн курсы для детей, Python Scratch JavaScript',
    ogTitle: 'Сравнение школ программирования для детей',
    ogDescription: 'Сравните лучшие онлайн-школы программирования для детей по ценам, программам и отзывам.'
  },
  {
    path: 'about',
    title: 'О проекте - Рейтинг школ программирования для детей',
    description: 'Информация о нашем проекте по созданию независимого рейтинга онлайн-школ программирования для детей в России.',
    keywords: 'о проекте, методология рейтинга, независимая оценка школ программирования',
    ogTitle: 'О проекте рейтинга школ программирования',
    ogDescription: 'Узнайте о нашей методологии создания независимого рейтинга школ программирования для детей.'
  },
  {
    path: 'privacy-policy',
    title: 'Политика конфиденциальности - Рейтинг школ программирования',
    description: 'Политика конфиденциальности сайта рейтинга онлайн-школ программирования для детей. Условия обработки персональных данных.',
    keywords: 'политика конфиденциальности, персональные данные, privacy policy',
    ogTitle: 'Политика конфиденциальности',
    ogDescription: 'Политика конфиденциальности и условия обработки персональных данных.'
  },
  {
    path: 'terms-of-service',
    title: 'Пользовательское соглашение - Рейтинг школ программирования',
    description: 'Пользовательское соглашение сайта рейтинга онлайн-школ программирования для детей. Правила использования сервиса.',
    keywords: 'пользовательское соглашение, правила использования, terms of service',
    ogTitle: 'Пользовательское соглашение',
    ogDescription: 'Пользовательское соглашение и правила использования нашего сервиса.'
  },
  {
    path: 'rating-methodology',
    title: 'Методология рейтинга школ программирования для детей',
    description: 'Подробное описание методологии составления рейтинга онлайн-школ программирования для детей. Критерии оценки и система баллов.',
    keywords: 'методология рейтинга, критерии оценки школ, система баллов',
    ogTitle: 'Методология рейтинга школ программирования',
    ogDescription: 'Узнайте, как мы составляем рейтинг школ программирования: критерии, методы оценки и система баллов.'
  }
];

// Add article pages
articles.forEach(article => {
  pages.push({
    path: `articles/${article.slug}`,
    title: `${article.title} | Статьи о программировании для детей`,
    description: article.excerpt || `${article.title}. Подробный обзор и советы по изучению программирования для детей и подростков.`,
    keywords: `${article.tags?.join(', ') || 'программирование для детей'}, ${article.title}`,
    ogTitle: article.title,
    ogDescription: article.excerpt || `${article.title}. Полезные советы по программированию для детей.`
  });
});

function generateHTML(page) {
  const canonicalUrl = `https://programmirovanie-dlya-detej-online.ru/${page.path}`;
  
  return `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="keywords" content="${page.keywords}" />
    <meta name="author" content="School Rating Platform" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${page.ogTitle}" />
    <meta property="og:description" content="${page.ogDescription}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
    <meta property="og:url" content="${canonicalUrl}" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:title" content="${page.ogTitle}" />
    <meta name="twitter:description" content="${page.ogDescription}" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
}

// Create output directory
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Generate pages
pages.forEach(page => {
  const outputPath = page.path 
    ? path.join(distDir, page.path, 'index.html')
    : path.join(distDir, 'index.html');
    
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const html = generateHTML(page);
  fs.writeFileSync(outputPath, html);
  console.log(`Generated: ${outputPath}`);
});

console.log(`\n✅ Generated ${pages.length} static pages with unique meta tags`);