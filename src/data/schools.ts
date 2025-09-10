import { School, Review } from '@/types/school';

export const schools: School[] = [
  {
    id: '1',
    name: 'Skysmart Pro',
    description: 'Персональные уроки программирования от ведущей образовательной платформы. Индивидуальный подход и подготовка к олимпиадам.',
    rating: 4.9,
    reviewCount: 628,
    ageRange: '8-17 лет',
    courses: ['Roblox', 'Minecraft', 'Python', 'Scratch', 'Unity', 'JavaScript', 'Web-разработка'],
    format: 'online',
    price: {
      min: 4000,
      max: 8000,
      currency: '₽',
      period: 'month'
    },
    specialFeatures: ['Персональные репетиторы', 'Подготовка к олимпиадам', 'Гибкое расписание', 'Профориентация'],
    website: 'https://skysmart.ru/programming',
    establishedYear: 2019,
    studentCount: 18000,
    trialAvailable: true,
    certificates: true,
    rank: 1
  },
  {
    id: '2',
    name: 'Кодабра',
    description: 'Ведущая онлайн-школа программирования для детей в России. Обучение проходит в игровой форме с индивидуальным подходом к каждому ученику.',
    rating: 4.8,
    reviewCount: 342,
    ageRange: '6-17 лет',
    courses: ['Scratch', 'Python', 'JavaScript', 'Roblox', 'Unity', 'Web-разработка', 'Мобильная разработка'],
    format: 'online',
    price: {
      min: 3500,
      max: 7000,
      currency: '₽',
      period: 'month'
    },
    specialFeatures: ['Индивидуальные уроки', 'Игровой подход', 'Портфолио проектов', 'Сертификаты'],
    website: 'https://codabra.org',
    establishedYear: 2016,
    studentCount: 15000,
    trialAvailable: true,
    certificates: true,
    rank: 2
  },
  {
    id: '3',
    name: 'Алгоритмика',
    description: 'Международная школа программирования для детей с собственной онлайн-платформой и геймифицированным подходом к обучению.',
    rating: 4.7,
    reviewCount: 528,
    ageRange: '5-17 лет',
    courses: ['Scratch Junior', 'Scratch', 'Python', 'JavaScript', 'Мобильная разработка', 'Веб-дизайн', 'Математика'],
    format: 'hybrid',
    price: {
      min: 4000,
      max: 8000,
      currency: '₽',
      period: 'month'
    },
    specialFeatures: ['Групповые занятия', 'Собственная платформа', 'Международные олимпиады', 'Проектная работа'],
    website: 'https://algoritmika.org',
    establishedYear: 2017,
    studentCount: 25000,
    trialAvailable: true,
    certificates: true,
    rank: 3
  },
  {
    id: '4',
    name: 'Progkids',
    description: 'Онлайн-школа программирования с фокусом на практические навыки и создание реальных проектов.',
    rating: 4.6,
    reviewCount: 287,
    ageRange: '7-16 лет',
    courses: ['Scratch', 'Python', 'Minecraft', 'Roblox', 'JavaScript', 'Game Development', 'Unity'],
    format: 'online',
    price: {
      min: 3000,
      max: 6500,
      currency: '₽',
      period: 'month'
    },
    specialFeatures: ['Малые группы', 'Проектное обучение', 'Менторская поддержка', 'Хакатоны'],
    website: 'https://progkids.com',
    establishedYear: 2019,
    studentCount: 8000,
    trialAvailable: true,
    certificates: true,
    rank: 4
  },
  {
    id: '5',
    name: 'GeekSchool',
    description: 'Детское направление GeekBrains с профессиональными преподавателями и современными методиками обучения.',
    rating: 4.5,
    reviewCount: 445,
    ageRange: '8-17 лет',
    courses: ['Python', 'Java', 'C++', 'Web-разработка', 'Мобильная разработка', 'Базы данных', 'Искусственный интеллект'],
    format: 'online',
    price: {
      min: 4500,
      max: 9000,
      currency: '₽',
      period: 'month'
    },
    specialFeatures: ['Профессиональные преподаватели', 'Карьерное консультирование', 'Стажировки', 'Диплом'],
    website: 'https://geekschool.ru',
    establishedYear: 2020,
    studentCount: 12000,
    trialAvailable: true,
    certificates: true,
    rank: 5
  },
  {
    id: '6',
    name: 'Codemika',
    description: 'Персонализированное обучение программированию с адаптивной системой и индивидуальными треками развития.',
    rating: 4.4,
    reviewCount: 193,
    ageRange: '6-16 лет',
    courses: ['Scratch', 'Python', 'JavaScript', 'App Development', 'AI/ML основы', 'Web-разработка'],
    format: 'online',
    price: {
      min: 3200,
      max: 6800,
      currency: '₽',
      period: 'month'
    },
    specialFeatures: ['ИИ-адаптация', 'Персональные треки', 'VR-элементы', 'Peer programming'],
    website: 'https://codemika.ru',
    establishedYear: 2021,
    studentCount: 5000,
    trialAvailable: true,
    certificates: true,
    rank: 6
  },
  {
    id: '7',
    name: 'ITGenio',
    description: 'Школа IT для детей с широким спектром направлений от программирования до кибербезопасности.',
    rating: 4.3,
    reviewCount: 356,
    ageRange: '7-17 лет',
    courses: ['Scratch', 'Python', 'Java', 'Кибербезопасность', 'Блокчейн', '3D-моделирование', 'Робототехника'],
    format: 'hybrid',
    price: {
      min: 3800,
      max: 7500,
      currency: '₽',
      period: 'month'
    },
    specialFeatures: ['Широкий выбор направлений', 'Практические проекты', 'Олимпиады', 'Летние интенсивы'],
    website: 'https://itgenio.ru',
    establishedYear: 2018,
    studentCount: 10000,
    trialAvailable: true,
    certificates: true,
    rank: 7
  },
  {
    id: '8',
    name: 'Пиксель',
    description: 'Международная онлайн-школа программирования и дизайна для детей с более чем 100 преподавателями.',
    rating: 4.2,
    reviewCount: 412,
    ageRange: '5-17 лет',
    courses: ['Scratch', 'Python', 'Java', 'Unity', 'Roblox', 'Веб-дизайн', 'Графический дизайн', '3D-моделирование'],
    format: 'hybrid',
    price: {
      min: 3000,
      max: 6000,
      currency: '₽',
      period: 'month'
    },
    specialFeatures: ['Индивидуальные и групповые занятия', 'Летние интенсивы', 'Международная сертификация', 'Дизайн и программирование'],
    website: 'https://clubpixel.ru',
    establishedYear: 2017,
    studentCount: 14000,
    trialAvailable: true,
    certificates: true,
    rank: 8
  },
  {
    id: '9',
    name: 'XYZ School Kids',
    description: 'Детское направление школы креативных профессий с фокусом на дизайн и основы программирования.',
    rating: 4.1,
    reviewCount: 178,
    ageRange: '10-16 лет',
    courses: ['Веб-дизайн', 'Motion-дизайн', '3D-графика', 'Основы программирования', 'UI/UX дизайн', 'Геймдизайн'],
    format: 'online',
    price: {
      min: 3000,
      max: 5500,
      currency: '₽',
      period: 'month'
    },
    specialFeatures: ['Креативный подход', 'Портфолио', 'Наставничество', 'Работа с реальными проектами'],
    website: 'https://xyzschool.ru/kids',
    establishedYear: 2020,
    studentCount: 3500,
    trialAvailable: true,
    certificates: true,
    rank: 9
  },
  {
    id: '10',
    name: 'Кодди',
    description: 'Школа программирования для детей с упором на практическое применение навыков и командную работу.',
    rating: 4.0,
    reviewCount: 234,
    ageRange: '6-16 лет',
    courses: ['Scratch', 'Python', 'JavaScript', 'Minecraft', 'App Development', 'Робототехника', 'Kotlin'],
    format: 'hybrid',
    price: {
      min: 2800,
      max: 5800,
      currency: '₽',
      period: 'month'
    },
    specialFeatures: ['Командные проекты', 'Практическое применение', 'Робототехника', 'Доступные цены'],
    website: 'https://coddyschool.com',
    establishedYear: 2016,
    studentCount: 6500,
    trialAvailable: true,
    certificates: true,
    rank: 10
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    schoolId: '1',
    authorName: 'Анна В.',
    rating: 5,
    title: 'Лучший персональный подход',
    content: 'Занимаемся в Skysmart Pro уже 8 месяцев. Преподаватель находит подход к ребенку, объясняет доступно. Сын готовится к олимпиаде по программированию.',
    pros: ['Персональные репетиторы', 'Подготовка к олимпиадам', 'Гибкое расписание'],
    cons: ['Высокая стоимость'],
    date: '2024-02-10',
    verified: true
  },
  {
    id: '2',
    schoolId: '1',
    authorName: 'Дмитрий Р.',
    rating: 5,
    title: 'Отличные результаты',
    content: 'Дочка за полгода освоила Python и создала свою первую игру. Преподаватели очень квалифицированные, всегда поддерживают и мотивируют.',
    pros: ['Высокое качество обучения', 'Профориентация', 'Индивидуальный план'],
    cons: ['Мало групповых активностей'],
    date: '2024-01-25',
    verified: true
  },
  {
    id: '3',
    schoolId: '2',
    authorName: 'Мария К.',
    rating: 5,
    title: 'Отличная школа для начинающих',
    content: 'Сын занимается уже полгода, очень доволен. Преподаватели умеют заинтересовать и объяснить сложные вещи простыми словами.',
    pros: ['Индивидуальный подход', 'Интересные проекты', 'Гибкое расписание'],
    cons: ['Высокая цена'],
    date: '2024-01-15',
    verified: true
  },
  {
    id: '4',
    schoolId: '2',
    authorName: 'Алексей П.',
    rating: 4,
    title: 'Хорошие результаты',
    content: 'Дочка научилась создавать игры в Scratch, теперь хочет изучать Python. Преподаватели профессиональные.',
    pros: ['Квалифицированные преподаватели', 'Результат виден сразу'],
    cons: ['Иногда технические проблемы с платформой'],
    date: '2024-02-20',
    verified: true
  },
  {
    id: '5',
    schoolId: '3',
    authorName: 'Елена С.',
    rating: 5,
    title: 'Лучшая онлайн-школа',
    content: 'Ребенок в восторге от занятий. Платформа удобная, все объясняется пошагово. Рекомендую!',
    pros: ['Удобная платформа', 'Геймификация', 'Групповые проекты'],
    cons: ['Нет индивидуальных занятий'],
    date: '2024-01-28',
    verified: true
  },
  {
    id: '6',
    schoolId: '8',
    authorName: 'Ольга М.',
    rating: 4,
    title: 'Хорошая школа для творческих детей',
    content: 'Дочка изучает и программирование, и дизайн в Пикселе. Очень нравится разнообразие курсов и международная программа.',
    pros: ['Широкий выбор курсов', 'Международная сертификация', 'Творческий подход'],
    cons: ['Иногда сложно выбрать направление'],
    date: '2024-02-05',
    verified: true
  },
  {
    id: '7',
    schoolId: '9',
    authorName: 'Игорь Т.',
    rating: 4,
    title: 'Отличная подготовка к будущей профессии',
    content: 'Сын занимается веб-дизайном в XYZ School Kids. Очень современный подход, работает с реальными проектами.',
    pros: ['Современные технологии', 'Реальные проекты', 'Портфолио'],
    cons: ['Подходит не всем возрастам'],
    date: '2024-01-18',
    verified: true
  },
  {
    id: '8',
    schoolId: '10',
    authorName: 'Наталья Л.',
    rating: 4,
    title: 'Доступная школа с хорошим качеством',
    content: 'Приятно удивлены качеством обучения за такую цену. Сын изучает Scratch и робототехнику, очень увлечен.',
    pros: ['Доступные цены', 'Робототехника', 'Командная работа'],
    cons: ['Меньше индивидуального внимания'],
    date: '2024-02-12',
    verified: true
  },
  // Additional reviews for Skysmart Pro
  {
    id: '9',
    schoolId: '1',
    authorName: 'Владимир К.',
    rating: 4,
    title: 'Профессиональная подготовка',
    content: 'Сын готовится к поступлению в IT-вуз. Преподаватели дают серьезные знания, помогают с проектами для портфолио.',
    pros: ['Подготовка к вузу', 'Серьезная программа', 'Портфолио проектов'],
    cons: ['Большая нагрузка', 'Дорого'],
    date: '2024-01-30',
    verified: true
  },
  // Additional reviews for Алгоритмика
  {
    id: '10',
    schoolId: '3',
    authorName: 'Татьяна В.',
    rating: 4,
    title: 'Отлично для групповых занятий',
    content: 'Дочка занимается в группе с другими детьми. Очень нравится командная работа и соревновательный момент.',
    pros: ['Групповые занятия', 'Мотивация через игру', 'Общение с детьми'],
    cons: ['Меньше индивидуального внимания'],
    date: '2024-02-08',
    verified: true
  },
  {
    id: '11',
    schoolId: '3',
    authorName: 'Сергей Д.',
    rating: 5,
    title: 'Международный уровень',
    content: 'Участвовали в международной олимпиаде через школу. Программа действительно мирового уровня, ребенок многому научился.',
    pros: ['Международные олимпиады', 'Высокий уровень', 'Собственная платформа'],
    cons: ['Иногда слишком быстрый темп'],
    date: '2024-01-22',
    verified: true
  },
  // Reviews for Progkids
  {
    id: '12',
    schoolId: '4',
    authorName: 'Анастасия П.',
    rating: 5,
    title: 'Практичный подход к обучению',
    content: 'Сын создал уже несколько игр и мобильное приложение. Преподаватели сразу дают практические задания, а не только теорию.',
    pros: ['Практические проекты', 'Малые группы', 'Хакатоны'],
    cons: ['Нет индивидуальных занятий'],
    date: '2024-02-15',
    verified: true
  },
  {
    id: '13',
    schoolId: '4',
    authorName: 'Максим Ч.',
    rating: 4,
    title: 'Хорошие менторы',
    content: 'Дочка занимается разработкой игр. Менторы всегда готовы помочь, объясняют понятно. Участвовали в хакатоне школы.',
    pros: ['Менторская поддержка', 'Понятные объяснения', 'Интересные мероприятия'],
    cons: ['Платформа иногда тормозит'],
    date: '2024-01-28',
    verified: true
  },
  // Reviews for GeekSchool
  {
    id: '14',
    schoolId: '5',
    authorName: 'Лариса Н.',
    rating: 5,
    title: 'Серьезная подготовка программистов',
    content: 'Сын изучает Java уже год. Преподаватели - действующие разработчики, дают актуальные знания. Есть стажировка.',
    pros: ['Профессиональные преподаватели', 'Стажировки', 'Актуальные технологии'],
    cons: ['Высокая цена', 'Сложная программа'],
    date: '2024-02-01',
    verified: true
  },
  {
    id: '15',
    schoolId: '5',
    authorName: 'Роман А.',
    rating: 4,
    title: 'Отличная карьерная подготовка',
    content: 'Дочка получила диплом и уже работает junior-разработчиком. Школа действительно готовит к карьере в IT.',
    pros: ['Карьерное консультирование', 'Диплом', 'Трудоустройство'],
    cons: ['Много домашних заданий'],
    date: '2024-01-20',
    verified: true
  },
  // Reviews for Codemika
  {
    id: '16',
    schoolId: '6',
    authorName: 'Юлия Б.',
    rating: 4,
    title: 'Инновационный подход',
    content: 'Впечатлила адаптивная система обучения. Программа подстраивается под темп ребенка, есть VR-элементы.',
    pros: ['ИИ-адаптация', 'VR-элементы', 'Персональные треки'],
    cons: ['Мало живого общения', 'Новая школа'],
    date: '2024-02-18',
    verified: true
  },
  {
    id: '17',
    schoolId: '6',
    authorName: 'Андрей С.',
    rating: 5,
    title: 'Будущее образования',
    content: 'Сын изучает основы ИИ и машинного обучения. Такие курсы есть только здесь для детей его возраста.',
    pros: ['AI/ML курсы', 'Современные технологии', 'Peer programming'],
    cons: ['Высокие требования к технике'],
    date: '2024-01-12',
    verified: true
  },
  // Reviews for ITGenio
  {
    id: '18',
    schoolId: '7',
    authorName: 'Светлана Ж.',
    rating: 4,
    title: 'Широкий выбор направлений',
    content: 'Дочка сначала изучала программирование, потом переключилась на кибербезопасность. Очень удобно в одной школе.',
    pros: ['Широкий выбор направлений', 'Летние интенсивы', 'Олимпиады'],
    cons: ['Не все направления одинаково сильные'],
    date: '2024-02-03',
    verified: true
  },
  {
    id: '19',
    schoolId: '7',
    authorName: 'Павел И.',
    rating: 4,
    title: 'Хорошие практические проекты',
    content: 'Сын создал блокчейн-приложение в рамках курса. Проекты действительно современные и интересные.',
    pros: ['Современные технологии', 'Практические проекты', 'Блокчейн курсы'],
    cons: ['Иногда сложно для детей'],
    date: '2024-01-25',
    verified: true
  },
  // Additional review for Пиксель
  {
    id: '20',
    schoolId: '8',
    authorName: 'Екатерина Р.',
    rating: 4,
    title: 'Творчество и программирование',
    content: 'Сын изучает и Unity, и графический дизайн. Преподаватели помогают найти свое направление в IT-сфере.',
    pros: ['Сочетание дизайна и кода', 'Много преподавателей', 'Летние интенсивы'],
    cons: ['Иногда поверхностно'],
    date: '2024-01-14',
    verified: true
  },
  // Additional review for XYZ School Kids
  {
    id: '21',
    schoolId: '9',
    authorName: 'Михаил Ф.',
    rating: 4,
    title: 'Креативный подход',
    content: 'Дочка изучает UI/UX дизайн. Очень нравится наставничество и возможность работать с реальными проектами.',
    pros: ['Наставничество', 'Реальные проекты', 'Современные направления'],
    cons: ['Ограниченный возраст', 'Мало технических курсов'],
    date: '2024-02-07',
    verified: true
  },
  // Additional review for Кодди
  {
    id: '22',
    schoolId: '10',
    authorName: 'Ирина О.',
    rating: 4,
    title: 'Командная работа',
    content: 'Сын научился работать в команде над IT-проектами. Это очень важный навык для будущей карьеры.',
    pros: ['Командные проекты', 'Доступные цены', 'Практическое применение'],
    cons: ['Меньше теории', 'Простые проекты'],
    date: '2024-01-16',
    verified: true
  }
];