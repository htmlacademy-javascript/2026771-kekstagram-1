const commentsValue = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!' ];

const nameCommenter = [
  'Павел',
  'Пётр',
  'Ольга',
  'Михаил',
  'Светлана',
  'Greg',
  'Poll',
  'Cesar',
  'Ploton',
  'Rex',
  'Макс',
  'Захар',
  'Ипполит',
  'Rony',
  'Govard',
  'Nguen',
  'Jhon'];
const descriptionValue = [
  'Яркий и креативный',
  'Эмоциональный и вдохновляющий',
  'Мистический и удивительный',
  'Солнечный и оптимистичный',
  'Романтичный и мечтательный',
  'Динамичный и современный',
  'Меланхоличный и глубокий',
  'Абстрактный и уникальный',
  'Графичный и стильный',
  'Интимный и теплый',
  'Футуристический и прогрессивный',
  'Природный и органический',
  'Геометрический и сбалансированный',
  'Драматичный и выразительный',
  'Экзотический и загадочный',
  'Гламурный и роскошный',
  'Сюрреалистичный и фантастический',
  'Вдохновляющий и мотивирующий',
  'Хаотичный и динамичный',
  'Лаконичный и стильный',
  'Фэнтезийный и волшебный',
  'Авангардный и экспериментальный',
  'Пронзительный и умопомрачительный',
  'Спокойный и уравновешенный',
  'Строгий и серьезный'
];
const MASSIVE_COUNT = 25;


// Создание ГСЧ
const getRandomNum = (a, b) => {
  const minValue = Math.ceil(Math.min(a, b));
  const maxValue = Math.floor(Math.max(a, b));
  const result = Math.random() * (maxValue - minValue + 1) + minValue;
  return Math.floor(result);
};
// ГСЧ элементов массива
const getArrayElement = (elements) => elements[getRandomNum(0, elements.length - 1)];

// Создание счетчика идентификаторов
const counter = () =>{
  let currentCount = 1;
  return function() {
    return currentCount++;
  };
};
const getUniqeIdObjects = counter(); // Идентификаторы объектов
const getUniqeIdFoto = counter(); // Идентификаторы фотографий
const getUniqeIdComments = counter(); // Идентификаторы комментариев


// Создание объекта комментарриев
const createObjectComment = () =>
  ({
    id: getUniqeIdComments(),
    avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
    message: getArrayElement(commentsValue),
    name: getArrayElement(nameCommenter)
  });


// Создание уникального объекта (одного из 25)
const createObjects = () => ({
  id: getUniqeIdObjects(),
  url: `photos/${getUniqeIdFoto()}.jpg`,
  description: getArrayElement(descriptionValue),
  likes: getRandomNum(15, 200),
  comments: createObjectComment()
});

// Создание массива из 25 объектов
// eslint-disable-next-line
const createMassive = Array.from({length: MASSIVE_COUNT}, createObjects);
