import { Article, Category } from '@/types/article';

export const categories: Category[] = [
  { id: '1', name: 'Основы программирования', slug: 'basics' },
  { id: '2', name: 'Языки программирования', slug: 'languages' },
  { id: '3', name: 'Советы родителям', slug: 'parents' },
  { id: '4', name: 'Карьера в IT', slug: 'career' },
  { id: '5', name: 'Образование', slug: 'education' },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'Визуально-блочное программирование для детей: учимся создавать игры',
    slug: 'vizualno-blochnoe-programmirovanie-dlya-detey',
    content: `<div class="space-y-8">
    <div class="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4">👥 Для кого эта статья:</h3>
        <ul class="space-y-2 list-disc list-inside">
            <li>Родители российских школьников, заинтересованные в развитии цифровых навыков детей</li>
            <li>Младшие школьники (7–11 лет), желающие создавать простые проекты в визуально-блочной среде</li>
            <li>Подростки (12–16 лет), стремящиеся к освоению основ программирования и переходу к текстовым языкам</li>
            <li>Учителя и педагоги, подбирающие материалы и методики для уроков информатики</li>
        </ul>
    </div>

    <div class="bg-gradient-to-br from-secondary to-accent/20 border border-border rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-foreground">🎯 Ключевые выводы из статьи:</h3>
        <ul class="space-y-2 list-disc list-inside text-foreground">
            <li>Визуально-блочное программирование позволяет создать первую программу за 5 минут без изучения сложного синтаксиса</li>
            <li>Scratch — лучшая платформа для начинающих, позволяющая создать полноценную игру за 30 минут</li>
            <li>Переход к текстовым языкам программирования становится естественным после освоения блочных сред</li>
            <li>Готовые проекты и пошаговые инструкции помогают избежать типичных ошибок новичков</li>
        </ul>
    </div>

    <p class="text-lg leading-relaxed">Визуально-блочное программирование открывает двери в мир IT-технологий для детей любого возраста. Если вы хотите дать своему ребёнку качественное образование в этой области, рекомендуем изучить специализированные курсы <a href="https://programmirovanie-dlya-detej-online.ru/" class="text-primary font-semibold hover:underline transition-colors">программирования для детей</a>, где опытные преподаватели помогут освоить не только основы блочного программирования, но и плавно перейти к более сложным языкам.</p>

    <div>
        <h2 class="text-2xl font-bold mb-4">Что такое визуально-блочное программирование: создаём первую программу за 5 минут</h2>
        <p class="mb-6">Визуально-блочное программирование — это метод создания программ с помощью графических блоков вместо написания текстового кода. Каждый блок представляет определённую команду или действие, которые можно перетаскивать и соединять как детали конструктора.</p>
        
        <div class="bg-secondary/50 border-l-4 border-primary rounded-r-lg p-6">
            <h4 class="text-lg font-semibold text-primary mb-4">🚀 Создаём первую программу "Движущийся кот" в Scratch:</h4>
            <ol class="space-y-2 list-decimal list-inside">
                <li>Откройте браузер и перейдите на сайт scratch.mit.edu</li>
                <li>Нажмите кнопку "Создать" (зелёная кнопка в правом верхнем углу)</li>
                <li>В разделе "События" найдите блок "когда щёлкнут по зелёному флажку"</li>
                <li>Перетащите его в рабочую область</li>
                <li>В разделе "Движение" найдите блок "идти 10 шагов"</li>
                <li>Присоедините его под первый блок</li>
                <li>Нажмите зелёный флажок над сценой — кот начнёт движение!</li>
            </ol>
        </div>
        
        <blockquote class="bg-muted border-l-4 border-primary p-4 my-6 italic">
            "Визуально-блочное программирование убирает барьер синтаксиса и позволяет детям сосредоточиться на логике и алгоритмическом мышлении" — исследование MIT Media Lab
        </blockquote>
    </div>

    <div>
        <h2 class="text-2xl font-bold mb-4">Сравнительная таблица сред блочного программирования</h2>
        <div class="overflow-x-auto">
            <table class="w-full border-collapse bg-card rounded-lg shadow-sm overflow-hidden">
                <thead>
                    <tr class="bg-primary text-primary-foreground">
                        <th class="text-left p-4 font-semibold">Платформа</th>
                        <th class="text-left p-4 font-semibold">Возраст</th>
                        <th class="text-left p-4 font-semibold">Основная цель</th>
                        <th class="text-left p-4 font-semibold">Стоимость</th>
                        <th class="text-left p-4 font-semibold">Рейтинг</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-border">
                        <td class="p-4"><strong>Scratch</strong></td>
                        <td class="p-4">8-16 лет</td>
                        <td class="p-4">Игры, анимация, истории</td>
                        <td class="p-4">Бесплатно</td>
                        <td class="p-4">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr class="bg-muted/50 border-b border-border">
                        <td class="p-4"><strong>Scratch Junior</strong></td>
                        <td class="p-4">5-7 лет</td>
                        <td class="p-4">Простые анимации</td>
                        <td class="p-4">Бесплатно</td>
                        <td class="p-4">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr class="border-b border-border">
                        <td class="p-4"><strong>Blockly Games</strong></td>
                        <td class="p-4">8-18 лет</td>
                        <td class="p-4">Изучение алгоритмов</td>
                        <td class="p-4">Бесплатно</td>
                        <td class="p-4">⭐⭐⭐⭐</td>
                    </tr>
                    <tr class="bg-muted/50 border-b border-border">
                        <td class="p-4"><strong>App Inventor</strong></td>
                        <td class="p-4">12+ лет</td>
                        <td class="p-4">Мобильные приложения</td>
                        <td class="p-4">Бесплатно</td>
                        <td class="p-4">⭐⭐⭐⭐</td>
                    </tr>
                    <tr class="border-b border-border">
                        <td class="p-4"><strong>mBlock</strong></td>
                        <td class="p-4">6-16 лет</td>
                        <td class="p-4">Робототехника, IoT</td>
                        <td class="p-4">Частично платно</td>
                        <td class="p-4">⭐⭐⭐⭐</td>
                    </tr>
                    <tr class="bg-muted/50">
                        <td class="p-4"><strong>Minecraft Education</strong></td>
                        <td class="p-4">6-18 лет</td>
                        <td class="p-4">Программирование в игре</td>
                        <td class="p-4">Платно</td>
                        <td class="p-4">⭐⭐⭐⭐</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <div>
        <h2 class="text-2xl font-bold mb-4">Готовые проекты для копирования и изменения</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-card border border-border rounded-lg p-4">
                <h4 class="text-lg font-semibold text-primary mb-2">🐠 Проект 1: Аквариум с рыбками</h4>
                <p class="text-sm text-muted-foreground mb-2"><strong>Время создания:</strong> 15 минут</p>
                <p class="text-sm text-muted-foreground mb-2"><strong>Навыки:</strong> Движение, случайные числа, клонирование</p>
                <p class="text-sm"><strong>Модификации:</strong> Добавить акулу-хищника, систему кормления, подводные растения</p>
            </div>
            
            <div class="bg-card border border-border rounded-lg p-4">
                <h4 class="text-lg font-semibold text-primary mb-2">💫 Проект 2: Звёздное небо</h4>
                <p class="text-sm text-muted-foreground mb-2"><strong>Время создания:</strong> 10 минут</p>
                <p class="text-sm text-muted-foreground mb-2"><strong>Навыки:</strong> Циклы, графические эффекты, координаты</p>
                <p class="text-sm"><strong>Модификации:</strong> Созвездия, падающие звёзды, смена дня и ночи</p>
            </div>
            
            <div class="bg-card border border-border rounded-lg p-4">
                <h4 class="text-lg font-semibold text-primary mb-2">🎵 Проект 3: Музыкальное пианино</h4>
                <p class="text-sm text-muted-foreground mb-2"><strong>Время создания:</strong> 20 минут</p>
                <p class="text-sm text-muted-foreground mb-2"><strong>Навыки:</strong> События, звуки, интерактивность</p>
                <p class="text-sm"><strong>Модификации:</strong> Запись мелодий, разные инструменты, визуализация нот</p>
            </div>
            
            <div class="bg-card border border-border rounded-lg p-4">
                <h4 class="text-lg font-semibold text-primary mb-2">🚗 Проект 4: Гоночная игра</h4>
                <p class="text-sm text-muted-foreground mb-2"><strong>Время создания:</strong> 25 минут</p>
                <p class="text-sm text-muted-foreground mb-2"><strong>Навыки:</strong> Управление клавишами, физика, счётчик времени</p>
                <p class="text-sm"><strong>Модификации:</strong> Препятствия, несколько машин, система рекордов</p>
            </div>
        </div>
    </div>

    <div>
        <h2 class="text-2xl font-bold mb-4">FAQ: ответы на популярные вопросы</h2>
        <div class="space-y-4">
            <div class="bg-muted/50 rounded-lg p-4">
                <h4 class="font-semibold text-primary mb-2">💻 С какого возраста можно начинать блочное программирование?</h4>
                <p class="text-sm">Дети могут начинать с 5-6 лет с простых сред типа Scratch Junior. Основной Scratch подходит с 8 лет. Главное — интерес ребёнка, а не возраст.</p>
            </div>
            
            <div class="bg-muted/50 rounded-lg p-4">
                <h4 class="font-semibold text-primary mb-2">⚡ Какие системные требования нужны для работы?</h4>
                <p class="text-sm">Scratch работает в любом современном браузере. Минимум: 2 ГБ RAM, интернет для онлайн-версии.</p>
            </div>
            
            <div class="bg-muted/50 rounded-lg p-4">
                <h4 class="font-semibold text-primary mb-2">🎯 Какая реальная польза от блочного программирования?</h4>
                <p class="text-sm">Развивает логическое мышление, креативность, умение решать задачи. Готовит к изучению настоящих языков программирования и IT-профессиям.</p>
            </div>
            
            <div class="bg-muted/50 rounded-lg p-4">
                <h4 class="font-semibold text-primary mb-2">🚀 Что изучать после освоения Scratch?</h4>
                <p class="text-sm">Переходите к Python, JavaScript или другим текстовым языкам. Также можно изучать App Inventor для создания мобильных приложений или Unity для 3D-игр.</p>
            </div>
        </div>
    </div>
</div>`,
    excerpt: 'Узнайте основы визуально-блочного программирования для детей: простые примеры, советы и пошаговые инструкции для создания первых игр и приложений.',
    author: 'Дмитрий Козлов',
    publishDate: '2025-12-10',
    category: categories[1],
    tags: ['Scratch', 'блочное программирование', 'игры', 'дети'],
    readTime: 15,
    featured: true,
  },
  {
    id: '2',
    title: 'С какого возраста начинать изучать программирование детям',
    slug: 'kogda-nachinat-programmirovanie',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Разбираемся в оптимальном возрасте для начала изучения программирования и как подготовить ребенка к первым урокам.',
    author: 'Анна Иванова',
    publishDate: '2025-12-01',
    category: categories[2],
    tags: ['возраст', 'начало', 'дети'],
    readTime: 7,
    featured: true,
  },
  {
    id: '3',
    title: 'Python или Scratch: какой язык выбрать для ребенка',
    slug: 'python-vs-scratch',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Сравниваем популярные языки программирования для детей и помогаем выбрать подходящий для вашего ребенка.',
    author: 'Михаил Петров',
    publishDate: '2025-11-28',
    category: categories[1],
    tags: ['Python', 'Scratch', 'выбор'],
    readTime: 5,
    featured: true,
  },
  {
    id: '3',
    title: 'Как мотивировать ребенка заниматься программированием',
    slug: 'motivatsiya-rebenka',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Практические советы для родителей о том, как поддержать интерес ребенка к программированию и избежать выгорания.',
    author: 'Елена Смирнова',
    publishDate: '2025-11-25',
    category: categories[2],
    tags: ['мотивация', 'родители', 'интерес'],
    readTime: 6,
    featured: true,
  },
  {
    id: '4',
    title: 'Основы алгоритмического мышления для детей',
    slug: 'algoritmicheskoe-myshlenie',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Узнайте, как развить у ребенка логическое мышление и научить решать задачи пошагово.',
    author: 'Дмитрий Козлов',
    publishDate: '2025-11-22',
    category: categories[0],
    tags: ['алгоритмы', 'логика', 'мышление'],
    readTime: 8,
    featured: true,
  },
  {
    id: '5',
    title: 'Игровые движки для детей: создаем первую игру',
    slug: 'igrovye-dvizhki-dlya-detey',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Обзор простых игровых движков и платформ, где дети могут создать свою первую компьютерную игру.',
    author: 'Алексей Морозов',
    publishDate: '2025-11-20',
    category: categories[1],
    tags: ['игры', 'движки', 'создание'],
    readTime: 9,
    featured: true,
  },
  {
    id: '6',
    title: 'Профессии будущего: куда ведет программирование',
    slug: 'professii-budushchego',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Рассматриваем современные IT-профессии и перспективы карьерного роста для тех, кто начинает изучать программирование сегодня.',
    author: 'Ольга Васильева',
    publishDate: '2025-11-18',
    category: categories[3],
    tags: ['карьера', 'профессии', 'будущее'],
    readTime: 7,
    featured: true,
  },
  {
    id: '7',
    title: 'Онлайн vs офлайн: какой формат обучения выбрать',
    slug: 'onlayn-vs-oflayn',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Сравниваем плюсы и минусы онлайн и офлайн обучения программированию для детей разных возрастов.',
    author: 'Сергей Новиков',
    publishDate: '2025-11-15',
    category: categories[4],
    tags: ['онлайн', 'офлайн', 'формат'],
    readTime: 6,
    featured: true,
  },
  {
    id: '8',
    title: 'Ошибки родителей при выборе курсов программирования',
    slug: 'oshibki-roditeley',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Разбираем типичные ошибки, которые допускают родители при выборе курсов, и даем рекомендации как их избежать.',
    author: 'Ирина Федорова',
    publishDate: '2025-11-12',
    category: categories[2],
    tags: ['ошибки', 'выбор', 'курсы'],
    readTime: 8,
    featured: true,
  },
  {
    id: '9',
    title: 'Веб-разработка для детей: HTML, CSS и JavaScript',
    slug: 'veb-razrabotka-dlya-detey',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Пошаговое руководство по изучению основ веб-разработки: от первого HTML-тега до интерактивных элементов на JavaScript.',
    author: 'Николай Белов',
    publishDate: '2025-11-10',
    category: categories[1],
    tags: ['веб-разработка', 'HTML', 'CSS', 'JavaScript'],
    readTime: 10,
    featured: true,
  },
  {
    id: '10',
    title: 'Как оценить прогресс ребенка в программировании',
    slug: 'otsenka-progressa',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Критерии и методы оценки успехов ребенка в изучении программирования, на что обращать внимание родителям.',
    author: 'Татьяна Соколова',
    publishDate: '2025-11-08',
    category: categories[2],
    tags: ['прогресс', 'оценка', 'результаты'],
    readTime: 5,
    featured: true,
  },
  {
    id: '11',
    title: 'Робототехника и программирование: связь и различия',
    slug: 'robototekhnika-i-programmirovanie',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Изучаем связь между робототехникой и программированием, выбираем между направлениями.',
    author: 'Виктор Леонов',
    publishDate: '2025-11-05',
    category: categories[0],
    tags: ['робототехника', 'связь', 'различия'],
    readTime: 7,
    featured: false,
  },
  {
    id: '12',
    title: 'Математика в программировании: что нужно знать',
    slug: 'matematika-v-programmirovanii',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Разбираем, какие математические знания нужны для программирования на разных уровнях.',
    author: 'Анна Григорьева',
    publishDate: '2025-11-03',
    category: categories[0],
    tags: ['математика', 'знания', 'основы'],
    readTime: 6,
    featured: false,
  },
  {
    id: '13',
    title: 'Создание мобильных приложений для детей',
    slug: 'mobilnye-prilozheniya-dlya-detey',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Обзор платформ и инструментов для создания мобильных приложений детьми.',
    author: 'Роман Жуков',
    publishDate: '2025-11-01',
    category: categories[1],
    tags: ['мобильные', 'приложения', 'создание'],
    readTime: 9,
    featured: false,
  },
  {
    id: '14',
    title: 'IT-олимпиады и конкурсы для юных программистов',
    slug: 'it-olimpiady-i-konkursy',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Полный список олимпиад и конкурсов по программированию для детей разных возрастов.',
    author: 'Екатерина Волкова',
    publishDate: '2025-10-29',
    category: categories[4],
    tags: ['олимпиады', 'конкурсы', 'соревнования'],
    readTime: 8,
    featured: false,
  },
  {
    id: '16',
    title: 'Безопасность в интернете для юных программистов',
    slug: 'bezopasnost-v-internete',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Важные правила безопасности в интернете для детей, изучающих программирование.',
    author: 'Павел Медведев',
    publishDate: '2025-10-27',
    category: categories[2],
    tags: ['безопасность', 'интернет', 'правила'],
    readTime: 6,
    featured: false,
  },
];