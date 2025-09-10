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
    publishDate: '2025-09-01',
    category: categories[1],
    tags: ['Scratch', 'блочное программирование', 'игры', 'дети'],
    readTime: 15,
    featured: true,
  },
  {
    id: '17',
    title: 'Курсы программирования для подростков 16 лет',
    slug: 'kursy-programmirovaniya-dlya-podrostkov-16-let',
    content: `<div class="space-y-8">
    <div class="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4">Для кого эта статья:</h3>
        <ul class="space-y-2 list-disc list-inside">
            <li>Подростки 16 лет, желающие изучить программирование</li>
            <li>Родители подростков 16 лет, выбирающие курсы для своих детей</li>
            <li>Учащиеся и родители, планирующие IT-карьеру и поступление в профильные вузы</li>
            <li>Российские школьники и их родители, оценивающие онлайн и офлайн форматы обучения</li>
        </ul>
    </div>

    <div class="bg-gradient-to-br from-secondary to-accent/20 border border-border rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-foreground">Ключевые выводы из статьи:</h3>
        <ul class="space-y-2 list-disc list-inside text-foreground">
            <li>16 лет - оптимальный возраст для начала серьезного изучения программирования с перспективой профессиональной карьеры</li>
            <li>Python и JavaScript - лучшие языки для начинающих подростков, обеспечивающие быстрый результат и широкие возможности</li>
            <li>Стоимость качественных курсов варьируется от 15,000 до 150,000 рублей в зависимости от формата и продолжительности</li>
            <li>Первые заработки и стажировки реально получить уже через 6-12 месяцев активного обучения</li>
        </ul>
    </div>

    <p class="text-lg leading-relaxed">Программирование в 16 лет открывает невероятные возможности для подростков. В этом возрасте мышление достаточно развито для понимания сложных концепций, но при этом сохраняется гибкость для освоения новых технологий. Специализированные <a href="https://programmirovanie-dlya-detej-online.ru/" class="text-primary font-semibold hover:underline transition-colors">курсы по программированию для школьников</a> предлагают структурированный подход к обучению, профессиональное сопровождение и возможность получить практические навыки, которые пригодятся для поступления в IT-вуз или даже для первых заработков.</p>

    <div>
        <h2 class="text-2xl font-bold mb-4">Как выбрать первый курс программирования: пошаговый чек-лист для 16-летних</h2>
        
        <div class="bg-card border border-border rounded-lg p-6">
            <h3 class="text-lg font-semibold text-primary mb-4">Шаг 1: Определите свои цели</h3>
            <ul class="space-y-3 list-disc list-inside text-sm">
                <li><strong>Хобби или будущая профессия?</strong> - Если программирование рассматривается как хобби, подойдут краткосрочные курсы по созданию игр или сайтов. Для профессиональных планов нужна фундаментальная подготовка</li>
                <li><strong>Интерес к играм, сайтам или мобильным приложениям?</strong> - Каждое направление требует разных языков: Unity/C# для игр, JavaScript для веба, Java/Kotlin для Android</li>
                <li><strong>Планы поступления в IT-вуз</strong> - Необходимо изучать основы алгоритмизации, математическую логику и универсальные языки вроде Python или Java</li>
            </ul>

            <h3 class="text-lg font-semibold text-primary mb-4 mt-6">Шаг 2: Оцените свой уровень подготовки</h3>
            <ul class="space-y-3 list-disc list-inside text-sm">
                <li><strong>Абсолютный новичок</strong> - Начинайте с визуального программирования (Scratch) или Python</li>
                <li><strong>Есть базовые знания информатики</strong> - Можно сразу переходить к текстовым языкам программирования</li>
                <li><strong>Уже пробовал программировать самостоятельно</strong> - Выбирайте курсы промежуточного уровня или специализированные направления</li>
            </ul>

            <h3 class="text-lg font-semibold text-primary mb-4 mt-6">Шаг 3: Выберите формат обучения</h3>
            <ul class="space-y-3 list-disc list-inside text-sm">
                <li><strong>Онлайн vs офлайн</strong> - Онлайн дешевле и удобнее, офлайн обеспечивает лучшую мотивацию и контроль</li>
                <li><strong>Групповые vs индивидуальные занятия</strong> - Группа дает возможность обмена опытом, индивидуальные - персональный темп</li>
                <li><strong>Интенсивы vs долгосрочные курсы</strong> - Интенсивы подходят для каникул, долгосрочные - для параллельного с школой изучения</li>
            </ul>
        </div>
    </div>

    <div>
        <h2 class="text-2xl font-bold mb-4">ТОП-5 языков программирования для начинающих подростков</h2>
        
        <div class="space-y-6">
            <div class="bg-secondary/50 border-l-4 border-primary rounded-r-lg p-6">
                <h3 class="text-lg font-semibold text-primary mb-3">Python - самый популярный выбор</h3>
                <p class="mb-3"><strong>Почему подходит новичкам:</strong> Python имеет простой и понятный синтаксис, близкий к английскому языку. Большое количество готовых библиотек позволяет быстро создавать работающие программы.</p>
                
                <p class="mb-2"><strong>Области применения:</strong></p>
                <ul class="list-disc list-inside space-y-1 text-sm mb-3">
                    <li>Веб-разработка (Django, Flask)</li>
                    <li>Анализ данных и машинное обучение</li>
                    <li>Автоматизация задач</li>
                    <li>Создание игр</li>
                </ul>
                
                <p><strong>Примеры проектов для портфолио:</strong> телеграм-бот, простая игра, скрипт для анализа данных, веб-приложение для учета расходов.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-card border border-border rounded-lg p-4">
                    <h4 class="text-lg font-semibold text-primary mb-2">JavaScript - язык веб-разработки</h4>
                    <p class="text-sm">JavaScript незаменим для создания интерактивных веб-сайтов. Его можно изучать параллельно с HTML и CSS для комплексного понимания веб-технологий.</p>
                </div>
                
                <div class="bg-card border border-border rounded-lg p-4">
                    <h4 class="text-lg font-semibold text-primary mb-2">Java - для серьезного программирования</h4>
                    <p class="text-sm">Java формирует понимание объектно-ориентированного программирования и подготавливает к изучению других языков. Широко используется в корпоративной разработке.</p>
                </div>
                
                <div class="bg-card border border-border rounded-lg p-4">
                    <h4 class="text-lg font-semibold text-primary mb-2">C# - для игр и приложений</h4>
                    <p class="text-sm">Отличный выбор для тех, кто хочет создавать игры в Unity или приложения для Windows. Имеет схожий с Java синтаксис.</p>
                </div>
                
                <div class="bg-card border border-border rounded-lg p-4">
                    <h4 class="text-lg font-semibold text-primary mb-2">Scratch - визуальное программирование</h4>
                    <p class="text-sm">Подходит для абсолютных новичков. Помогает понять основные концепции программирования без изучения синтаксиса.</p>
                </div>
            </div>
        </div>
        
        <blockquote class="bg-muted border-l-4 border-primary p-4 my-6 italic">
            "16 лет - это золотой возраст для изучения программирования. Подросток уже способен мыслить абстрактно и понимать сложные концепции, но при этом мозг остается достаточно пластичным для быстрого усвоения новой информации." - из исследований педагогической психологии
        </blockquote>
    </div>

    <div>
        <h2 class="text-2xl font-bold mb-4">Бюджет и финансовое планирование</h2>
        
        <div class="overflow-x-auto">
            <table class="w-full border-collapse bg-card rounded-lg shadow-sm overflow-hidden">
                <thead>
                    <tr class="bg-primary text-primary-foreground">
                        <th class="text-left p-4 font-semibold">Тип обучения</th>
                        <th class="text-left p-4 font-semibold">Стоимость</th>
                        <th class="text-left p-4 font-semibold">Продолжительность</th>
                        <th class="text-left p-4 font-semibold">Особенности</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-border">
                        <td class="p-4">Онлайн-курсы групповые</td>
                        <td class="p-4">15,000 - 50,000 руб.</td>
                        <td class="p-4">3-6 месяцев</td>
                        <td class="p-4">Доступ к записям, домашние задания</td>
                    </tr>
                    <tr class="bg-muted/50 border-b border-border">
                        <td class="p-4">Онлайн индивидуально</td>
                        <td class="p-4">1,500 - 3,000 руб/урок</td>
                        <td class="p-4">По потребностям</td>
                        <td class="p-4">Персональный темп, гибкий график</td>
                    </tr>
                    <tr class="border-b border-border">
                        <td class="p-4">Офлайн групповые</td>
                        <td class="p-4">25,000 - 80,000 руб.</td>
                        <td class="p-4">4-8 месяцев</td>
                        <td class="p-4">Прямой контакт, сетворкинг</td>
                    </tr>
                    <tr class="bg-muted/50">
                        <td class="p-4">Интенсивы</td>
                        <td class="p-4">30,000 - 150,000 руб.</td>
                        <td class="p-4">1-3 месяца</td>
                        <td class="p-4">Полное погружение, быстрый результат</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="bg-secondary/30 border border-border rounded-lg p-6 mt-6">
            <h3 class="text-lg font-semibold text-primary mb-4">Бесплатные альтернативы</h3>
            <ul class="space-y-2 list-disc list-inside text-sm">
                <li><strong>Codecademy</strong> - интерактивные уроки по основным языкам</li>
                <li><strong>Khan Academy</strong> - базовые курсы программирования</li>
                <li><strong>YouTube каналы</strong> - "Хауди Хо", "Программирование на Python"</li>
                <li><strong>Stepik</strong> - российская платформа с бесплатными курсами</li>
            </ul>
            
            <div class="mt-4 text-sm">
                <p><strong>Плюсы самообучения:</strong> бесплатно, в своем темпе, широкий выбор материалов</p>
                <p><strong>Минусы:</strong> отсутствие структуры, нет обратной связи, сложности с мотивацией</p>
            </div>
        </div>
    </div>

    <div>
        <h2 class="text-2xl font-bold mb-4">ТОП-15 лучших школ программирования для подростков 2025</h2>
        
        <h3 class="text-xl font-semibold mb-4">Онлайн-школы</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-card border border-border rounded-lg p-4">
                <h4 class="text-lg font-semibold text-primary mb-2">Skysmart Pro</h4>
                <p class="text-sm mb-2">Индивидуальные занятия, сильные преподаватели, удобная платформа. Курсы Python, JavaScript, создания игр.</p>
                <p class="text-sm font-semibold">Стоимость: от 1,200 руб/урок</p>
            </div>
            
            <div class="bg-card border border-border rounded-lg p-4">
                <h4 class="text-lg font-semibold text-primary mb-2">GeekSchool</h4>
                <p class="text-sm mb-2">Курсы от GeekBrains для школьников. Профориентация в IT, подготовка к ЕГЭ по информатике.</p>
                <p class="text-sm font-semibold">Стоимость: от 15,000 руб/курс</p>
            </div>
            
            <div class="bg-card border border-border rounded-lg p-4">
                <h4 class="text-lg font-semibold text-primary mb-2">Codemika</h4>
                <p class="text-sm mb-2">Обучение программированию и робототехнике. Малые группы, проектный подход.</p>
                <p class="text-sm font-semibold">Стоимость: от 20,000 руб/курс</p>
            </div>
            
            <div class="bg-card border border-border rounded-lg p-4">
                <h4 class="text-lg font-semibold text-primary mb-2">Hello World</h4>
                <p class="text-sm mb-2">Курсы веб-разработки, мобильных приложений, игр. Акцент на практических проектах.</p>
                <p class="text-sm font-semibold">Стоимость: от 18,000 руб/курс</p>
            </div>
            
            <div class="bg-card border border-border rounded-lg p-4">
                <h4 class="text-lg font-semibold text-primary mb-2">Pixel</h4>
                <p class="text-sm mb-2">Специализация на создании игр и 3D-моделировании. Minecraft-программирование, Unity.</p>
                <p class="text-sm font-semibold">Стоимость: от 16,000 руб/курс</p>
            </div>
        </div>
        
        <h3 class="text-xl font-semibold mb-4 mt-8">Офлайн-школы в крупных городах</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-card border border-border rounded-lg p-4">
                <h4 class="text-lg font-semibold text-primary mb-2">CODDY (Москва, СПб, регионы)</h4>
                <p class="text-sm mb-2">Международная школа программирования. Курсы по всем популярным направлениям.</p>
                <p class="text-sm font-semibold">Стоимость: от 6,000 руб/месяц</p>
            </div>
            
            <div class="bg-card border border-border rounded-lg p-4">
                <h4 class="text-lg font-semibold text-primary mb-2">Академия IT (Москва)</h4>
                <p class="text-sm mb-2">Подготовка к поступлению в IT-вузы, олимпиады по программированию.</p>
                <p class="text-sm font-semibold">Стоимость: от 25,000 руб/курс</p>
            </div>
            
            <div class="bg-card border border-border rounded-lg p-4">
                <h4 class="text-lg font-semibold text-primary mb-2">КодКласс (СПб)</h4>
                <p class="text-sm mb-2">Летние интенсивы и годовые программы. Реальные проекты для портфолио.</p>
                <p class="text-sm font-semibold">Стоимость: от 30,000 руб/курс</p>
            </div>
        </div>
    </div>

    <div>
        <h2 class="text-2xl font-bold mb-4">FAQ - Часто задаваемые вопросы</h2>
        <div class="space-y-4">
            <div class="bg-muted/50 rounded-lg p-4">
                <h4 class="font-semibold text-primary mb-2">Q: Сколько времени нужно, чтобы освоить программирование с нуля в 16 лет?</h4>
                <p class="text-sm">A: Базовые навыки можно освоить за 3-6 месяцев при занятиях 10-15 часов в неделю. Для создания серьезных проектов потребуется 12-18 месяцев.</p>
            </div>
            
            <div class="bg-muted/50 rounded-lg p-4">
                <h4 class="font-semibold text-primary mb-2">Q: Можно ли изучать программирование без знания математики?</h4>
                <p class="text-sm">A: Да, многие направления (веб-разработка, создание приложений) не требуют глубоких математических знаний. Школьного курса алгебры достаточно для начала.</p>
            </div>
            
            <div class="bg-muted/50 rounded-lg p-4">
                <h4 class="font-semibold text-primary mb-2">Q: Какие документы получают выпускники курсов?</h4>
                <p class="text-sm">A: Большинство школ выдают сертификаты о прохождении курса. Некоторые имеют государственную лицензию и могут выдавать дипломы о дополнительном образовании.</p>
            </div>
            
            <div class="bg-muted/50 rounded-lg p-4">
                <h4 class="font-semibold text-primary mb-2">Q: Реально ли найти работу программистом в 18 лет после курсов?</h4>
                <p class="text-sm">A: Да, при наличии хорошего портфолио и коммерческого опыта (фриланс, стажировки) можно устроиться на позицию junior-разработчика.</p>
            </div>
            
            <div class="bg-muted/50 rounded-lg p-4">
                <h4 class="font-semibold text-primary mb-2">Q: Стоит ли изучать программирование, если не планирую работать в IT?</h4>
                <p class="text-sm">A: Навыки программирования полезны в любой сфере: автоматизация задач, анализ данных, создание личных проектов. Это развивает логическое мышление.</p>
            </div>
            
            <div class="bg-muted/50 rounded-lg p-4">
                <h4 class="font-semibold text-primary mb-2">Q: Как выбрать между онлайн и офлайн обучением?</h4>
                <p class="text-sm">A: Онлайн подходит самомотивированным подросткам и экономит время на дорогу. Офлайн лучше для тех, кому нужен контроль и живое общение с преподавателем.</p>
            </div>
        </div>
    </div>
</div>`,
    excerpt: 'Запишитесь на курсы программирования для подростков 16 лет. Практические занятия, опытные преподаватели и проекты. Развивайте навыки кодирования онлайн!',
    author: 'Анна Иванова',
    publishDate: '2025-08-30',
    category: categories[4],
    tags: ['курсы', 'подростки', '16 лет', 'программирование'],
    readTime: 20,
    featured: true,
  },
  {
    id: '2',
    title: 'С какого возраста начинать изучать программирование детям',
    slug: 'kogda-nachinat-programmirovanie',
    content: 'Содержание статьи будет добавлено позже...',
    excerpt: 'Разбираемся в оптимальном возрасте для начала изучения программирования и как подготовить ребенка к первым урокам.',
    author: 'Анна Иванова',
    publishDate: '2025-08-25',
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
    publishDate: '2025-08-20',
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
    publishDate: '2025-08-15',
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
    publishDate: '2025-08-10',
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
    publishDate: '2025-08-05',
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
    publishDate: '2025-07-30',
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
    publishDate: '2025-07-25',
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
    publishDate: '2025-07-20',
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
    publishDate: '2025-07-15',
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
    publishDate: '2025-07-10',
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
    publishDate: '2025-07-05',
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
    publishDate: '2025-06-30',
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
    publishDate: '2025-06-25',
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
    publishDate: '2025-06-20',
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
    publishDate: '2025-06-15',
    category: categories[2],
    tags: ['безопасность', 'интернет', 'правила'],
    readTime: 6,
    featured: false,
  },
];