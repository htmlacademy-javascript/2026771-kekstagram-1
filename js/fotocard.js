import { createArrayFoto } from './data.js';

const template = document.querySelector('#picture').content;
const templateChildren = template.querySelector('.picture');
const blockElement = document.querySelector('.pictures');
const getArrayFoto = createArrayFoto();
const fragment = document.createDocumentFragment();

getArrayFoto.forEach(({url, likes, comments}) => {
  const newTemplate = templateChildren.cloneNode(true);
  newTemplate.querySelector('.picture__img').src = url;
  newTemplate.querySelector('.picture__likes').textContent = likes;
  newTemplate.querySelector('.picture__comments').textContent = comments;
  fragment.appendChild(newTemplate);
});

blockElement.appendChild(fragment);

