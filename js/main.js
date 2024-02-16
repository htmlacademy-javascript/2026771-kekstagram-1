let commentsValue = [
'Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!' ]

let name = [
'Павел',
'Пётр',
'Ольга',
'Михаил',
'Светлана']
let comments = [];
let message = '';
let avatar = '';


const getRandomNum = (a, b) => {
  const minValue = Math.ceil(Math.min(a, b));
  const maxValue = Math.floor(Math.max(a, b));
  const result = Math.random() * (maxValue - minValue + 1 ) + minValue;
  return Math.floor(result);
};
let getCommentId = function() {
 return getRandomNum(0, 67)
}
console.log(getCommentId())
