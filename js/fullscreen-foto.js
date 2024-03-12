import { isEscape } from './utilise.js';

const fullscreenFoto = document.querySelector('.big-picture');
const addresFotoBlock = fullscreenFoto.querySelector('.big-picture__img');
const addresFoto = addresFotoBlock.querySelector('img');
const likesAmount = fullscreenFoto.querySelector('.likes-count');
const commentsAmount = fullscreenFoto.querySelector('.comments-count');
const commentsBlock = fullscreenFoto.querySelector('.social__comments');
const fotoDescription = fullscreenFoto.querySelector('.social__caption');
const closeButton = fullscreenFoto.querySelector('.big-picture__cancel');
const bodyElement = document.querySelector('body');
const socialCommentCount = fullscreenFoto.querySelector('.social__comment-count ');
const commentsLoader = fullscreenFoto.querySelector('.comments-loader');

const createFullscreenComment = ({avatar, name, message}) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const p = document.createElement('p');
  li.classList.add('social__comment');
  img.classList.add('social__picture');
  img.src = avatar;
  img.alt = name;
  img.width = 35;
  img.height = 35;
  p.classList.add('social__text');
  p.textContent = message;
  li.appendChild(img);
  li.appendChild(p);
  return li;
};

const createFullscreenComments = (comment) => {
  const deleteContent = commentsBlock.querySelectorAll('.social__comment');
  deleteContent.forEach((element) => element.remove());
  const fragment = document.createDocumentFragment();
  comment.forEach((element) => {
    const commentElement = createFullscreenComment(element);
    fragment.append(commentElement);
  });
  commentsBlock.append(fragment);
};

const closeUserModal = () => {
  fullscreenFoto.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};

const onDocumentKeydown = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

closeButton.addEventListener('click', () => {
  closeUserModal();
});


const createFullscreenFotoData = ({url, likes, comments, description}) => {
  addresFoto.src = url;
  likesAmount.textContent = likes;
  commentsAmount.textContent = comments.length;
  fotoDescription.textContent = description;
};

const createFullscreenFoto = (findedFotoData) => {
  fullscreenFoto.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  createFullscreenFotoData(findedFotoData);
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  createFullscreenComments(findedFotoData.comments);
};

export { createFullscreenFoto };
