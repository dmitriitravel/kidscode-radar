import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import articles data - make sure the path is correct
let articles = [];
try {
  const articlesModule = await import('../src/data/articles.js');
  articles = articlesModule.articles || [];
} catch (error) {
  console.warn('Could not load articles data:', error.message);
  articles = [];
}

// Define routes and their metadata
const routes = [
  {
    path: '/',
    title: 'Лучшие онлайн-школы программирования для детей | Рейтинг 2025',
    description: 'Независимый рейтинг с честными отзывами и подробным сравнением школ программирования для детей и подростков. Выберите лучшую школу для своего ребенка.',
    keywords: 'программирование для детей, онлайн школа программирования, курсы программирования дети, Python для детей, Scratch, JavaScript дети'
  },
  {
    path: '/compare',
    title: 'Сравнение школ программирования для детей | Подробный анализ',
    description: 'Детальное сравнение характеристик, цен и программ обучения различных онлайн-школ программирования для детей и подростков.',
    keywords: 'сравнение школ программирования, сравнить курсы программирования, выбор школы программирования'
  },
  {
    path: '/about',
    title: 'О проекте | Независимая платформа рейтинга школ программирования',
    description: 'Независимая платформа для выбора лучших онлайн-школ программирования для детей. Наша миссия, принципы работы и команда экспертов.',
    keywords: 'о проекте, рейтинг школ программирования, независимая оценка, команда экспертов'
  },
  {
    path: '/privacy-policy',
    title: 'Политика конфиденциальности | Защита данных пользователей',
    description: 'Политика конфиденциальности нашей платформы. Узнайте, как мы собираем, используем и защищаем ваши персональные данные.',
    keywords: 'политика конфиденциальности, защита персональных данных, GDPR'
  },
  {
    path: '/terms-of-service',
    title: 'Правила пользования сервисом | Условия использования платформы',
    description: 'Правила и условия использования нашей платформы рейтинга школ программирования для детей. Права и обязанности пользователей.',
    keywords: 'правила пользования, условия использования, пользовательское соглашение'
  },
  {
    path: '/rating-methodology',
    title: 'Как составляется рейтинг | Методология оценки школ программирования',
    description: 'Прозрачная методология оценки онлайн-школ программирования для детей. Критерии отбора, система баллов и принципы составления рейтинга.',
    keywords: 'методология рейтинга, критерии оценки, как составляется рейтинг'
  }
];

// Add article routes
if (articles && articles.length > 0) {
  articles.forEach(article => {
    routes.push({
      path: `/articles/${article.slug}`,
      title: `${article.title} | Программирование для детей`,
      description: article.excerpt,
      keywords: `${article.tags.join(', ')}, программирование для детей, ${article.category.name}`
    });
  });
}

function generateHTML(route) {
  const baseUrl = 'https://programmirovanie-dlya-detej-online.ru';
  const canonicalUrl = `${baseUrl}${route.path}`;
  
  return `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta name="keywords" content="${route.keywords}" />
    <meta name="author" content="School Rating Platform" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="School Rating Platform" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
    
    <!-- Performance optimizations -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <meta name="theme-color" content="#6366f1" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
}

// Generate HTML files
function generateStaticPages() {
  const distDir = path.resolve(__dirname, '../dist');
  
  // Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  routes.forEach(route => {
    const html = generateHTML(route);
    
    if (route.path === '/') {
      // Main page
      fs.writeFileSync(path.join(distDir, 'index.html'), html);
      console.log('✅ Generated index.html');
    } else {
      // Other pages - create directory structure
      const routePath = route.path.startsWith('/') ? route.path.slice(1) : route.path;
      const pageDirPath = path.join(distDir, routePath);
      
      // Create directory
      fs.mkdirSync(pageDirPath, { recursive: true });
      
      // Write HTML file
      fs.writeFileSync(path.join(pageDirPath, 'index.html'), html);
      console.log(`✅ Generated ${routePath}/index.html`);
    }
  });
  
  console.log(`🎉 Generated ${routes.length} static pages with proper meta tags in source code!`);
}

generateStaticPages();
