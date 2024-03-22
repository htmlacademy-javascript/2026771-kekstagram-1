import { isEscape } from './utilise.js';

const inputFile = document.querySelector('#upload-file');
const bodyElement = document.querySelector('body');
const formElement = document.querySelector('.img-upload__form');
const imgOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const userHashtag = document.querySelector('.text__hashtags');
const userComment = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

function validateCommentLength (value) {
  return value.length <= 140;
}

function isHashtagConstraint (value) {
  const hashtagConstraint = /^#[a-zа-яё0-9]{1,19}$/i;
  const hashtags = value.split(' ');

  return hashtags.every((hashtag) => hashtagConstraint.test(hashtag));
}

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'form__error'
});

const isActiveComment = () => document.activeElement === userHashtag;
const isActiveHashtag = () => document.activeElement === userComment;

pristine.addValidator(
  userComment,
  validateCommentLength,
  'Комментарий не должен содержать более 140 символов',
);

pristine.addValidator(
  userHashtag,
  isHashtagConstraint,
  'Введены недопустимые символы или не введен символ "#", превышена длина хэштега',
);

const openUploadModal = () => {
  imgOverlay.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeUploadModal = () => {
  imgOverlay.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  pristine.reset();
  inputFile.reset();
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (isEscape(evt) && !isActiveComment() && !isActiveHashtag()) {
    evt.preventDefault();
    closeUploadModal();
  }
}

const sendForm = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

inputFile.addEventListener('change', openUploadModal);
submitButton.addEventListener('submit', sendForm);
closeButton.addEventListener('click', closeUploadModal);
