import { School, Review } from '@/types/school';

export const schools: School[] = [
  {
    id: '1',
    name: 'Кодабра',
    description: 'Ведущая онлайн-школа программирования для детей в России. Обучение проходит в игровой форме с индивидуальным подходом к каждому ученику.',
    rating: 4.8,
    reviewCount: 342,
    ageRange: '6-17 лет',
    courses: ['Scratch', 'Python', 'JavaScript', 'Roblox', 'Unity', 'Web-разработка'],
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
    rank: 1
  },
  {
    id: '2',
    name: 'Алгоритмика',
    description: 'Международная школа программирования для детей с собственной онлайн-платформой и геймифицированным подходом к обучению.',
    rating: 4.7,
    reviewCount: 528,
    ageRange: '5-17 лет',
    courses: ['Scratch Junior', 'Scratch', 'Python', 'JavaScript', 'Мобильная разработка', 'Веб-дизайн'],
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
    rank: 2
  },
  {
    id: '3',
    name: 'Progkids',
    description: 'Онлайн-школа программирования с фокусом на практические навыки и создание реальных проектов.',
    rating: 4.6,
    reviewCount: 287,
    ageRange: '7-16 лет',
    courses: ['Scratch', 'Python', 'Minecraft', 'Roblox', 'JavaScript', 'Game Development'],
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
    rank: 3
  },
  {
    id: '4',
    name: 'GeekSchool',
    description: 'Детское направление GeekBrains с профессиональными преподавателями и современными методиками обучения.',
    rating: 4.5,
    reviewCount: 445,
    ageRange: '8-17 лет',
    courses: ['Python', 'Java', 'C++', 'Web-разработка', 'Мобильная разработка', 'Базы данных'],
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
    rank: 4
  },
  {
    id: '5',
    name: 'Codemika',
    description: 'Персонализированное обучение программированию с адаптивной системой и индивидуальными треками развития.',
    rating: 4.4,
    reviewCount: 193,
    ageRange: '6-16 лет',
    courses: ['Scratch', 'Python', 'JavaScript', 'App Development', 'AI/ML основы'],
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
    rank: 5
  },
  {
    id: '6',
    name: 'ITGenio',
    description: 'Школа IT для детей с широким спектром направлений от программирования до кибербезопасности.',
    rating: 4.3,
    reviewCount: 356,
    ageRange: '7-17 лет',
    courses: ['Scratch', 'Python', 'Java', 'Кибербезопасность', 'Блокчейн', '3D-моделирование'],
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
    rank: 6
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    schoolId: '1',
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
    id: '2',
    schoolId: '1',
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
    id: '3',
    schoolId: '2',
    authorName: 'Елена С.',
    rating: 5,
    title: 'Лучшая онлайн-школа',
    content: 'Ребенок в восторге от занятий. Платформа удобная, все объясняется пошагово. Рекомендую!',
    pros: ['Удобная платформа', 'Геймификация', 'Групповые проекты'],
    cons: ['Нет индивидуальных занятий'],
    date: '2024-01-28',
    verified: true
  }
];