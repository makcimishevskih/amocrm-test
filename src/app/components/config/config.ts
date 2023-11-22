import telegram from '../../../assets/contacts/telegram.svg';
import whatsapp from '../../../assets/contacts/whatsapp.svg';
import viber from '../../../assets/contacts/viber.svg';

type messengersT = {
  name: string;
  img: string;
  href: string;
};

export type ChildrenListData = {
  name: string;
  href: string;
  img?: string;
};

export type ListDataT = {
  name: string;
  children: ChildrenListData[] | (messengersT[] & ChildrenListData);
};

export const labels = [
  'Услуги',
  'Виджеты',
  'Интеграции',
  'Кейсы',
  'Сертификаты',
];

export const messengers: messengersT[] = [
  { name: 'whatsapp', img: whatsapp, href: 'https://wa.me/+75555555555' },
  { name: 'viber', img: viber, href: 'viber://add?number=75555555555' },
  { name: 'telegram', img: telegram, href: 'https://t.me/+75555555555' },
];

export const lists = [
  {
    name: 'О компании',
    children: [
      { name: 'Партнёрская программа', href: '#partner' },
      { name: 'Вакансии', href: '#vacancy' },
    ],
  },
  {
    name: 'Меню',
    children: [
      { name: 'Расчёт стоимости', href: '#price' },
      { name: 'Благодарность клиентов', href: '#gratitude' },
      { name: 'Кейсы', href: '#cases' },
      { name: 'Услуги', href: '#services' },
      { name: 'Виджеты', href: '#widgets' },
      { name: 'Сертификаты', href: '#sertificates' },
      { name: 'Интеграции', href: '#integration' },
      { name: 'Блог на Youtube', href: 'https://youtube.com' },
      { name: 'Наши клиенты', href: '#clients' },
      { name: 'Вопрос / Ответ', href: '#answers' },
    ],
  },
  {
    name: 'Контакты',
    children: [
      { name: '+7 555 555-55-55', href: '#partner' },
      ...messengers,
      {
        name: 'Москва, Путевой проезд 3с1, к 902',
        href: 'https://yandex.ru/maps/?text=Москва, Путевой проезд 3с1, к 902',
      },
    ],
  },
];

type ContentT = {
  title: string;
  text: string;
};

export const contentItems: ContentT[] = [
  { title: 'Виджеты', text: '30 готовых решений' },
  { title: 'Dashboard', text: 'с показателями вшего изне' },
  { title: 'Skype аудит', text: 'отдела продаж и CRM системы' },
  { title: '35 дней', text: 'использования CRM' },
];
