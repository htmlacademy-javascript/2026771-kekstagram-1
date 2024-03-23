import { isEscape } from './utilise.js';

const hashtagAmount = 5;
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

function isHashtagTrueSymbols (value) {
  const hashtagConstraint = /^[a-zа-яё0-9]*$/i;
  const hashtags = value.split(' ');
  if(!value){
    return true;
  } else {
    return hashtags.every((hashtag) => hashtagConstraint.test(hashtag.replace('#', '')));
  }
}

function isHashtagTrueLength (value) {
  const hashtags = value.split(' ');
  if(!value){
    return true;
  } else {
    return hashtags.every((hashtag) => hashtag.length <= 20);
  }
}

function isHashtagTrueStart(value) {
  const hashtags = value.split(' ');
  let isValid = true;
  hashtags.forEach((element) => {
    const hashtag = element.trim();
    if (hashtag !== '' && !hashtag.startsWith('#')) {
      isValid = false;
    }
  });
  return isValid;
}

function isHashtagNotOneSymbol (value) {
  const hashtags = value.split(' ');
  let isValid = true;
  hashtags.forEach((element) => {
    const hashtag = element.trim();
    if (hashtag.length === 1) {
      isValid = false;
    }
  });
  return isValid;
}


function isHashtagTrueAmount (value) {
  const spaceNone = value.replaceAll(' ', '');
  const hashtags = spaceNone.split('#');
  return hashtags.length - 1 <= hashtagAmount;
}

function isHashtagUnique(value) {

  const hashtags = value.toLowerCase().split(' ');
  const uniqueHashtags = {};

  for (const hashtag of hashtags) {
    if (hashtag.trim() === '' || !hashtag.startsWith('#')) {
      continue;
    }
    if (uniqueHashtags[hashtag]) {
      return false;
    }
    uniqueHashtags[hashtag] = true;
  }
  return true;
}

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'form__error',
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
  isHashtagTrueLength,
  'Длина хэштега превышает 20 символов',
);

pristine.addValidator(
  userHashtag,
  isHashtagTrueStart,
  'Пропущен символ "#" в начале хэштега',
);


pristine.addValidator(
  userHashtag,
  isHashtagTrueSymbols,
  'Введены недопустимые символы',
);

pristine.addValidator(
  userHashtag,
  isHashtagTrueAmount,
  'Максимальное количество хэштегов не больше 5',
);

pristine.addValidator(
  userHashtag,
  isHashtagUnique,
  'Такой хэштег уже существует',
);

pristine.addValidator(
  userHashtag,
  isHashtagNotOneSymbol,
  'Добавьте символы',
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
  inputFile.value = null;
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (isEscape(evt) && !isActiveComment() && !isActiveHashtag()) {
    evt.preventDefault();
    closeUploadModal();
  }
}

const checkForm = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

function blockButton () {
  const isValid = pristine.validate();

  if (!isValid) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

formElement.addEventListener('input', blockButton);
inputFile.addEventListener('change', openUploadModal);
submitButton.addEventListener('submit', checkForm);
closeButton.addEventListener('click', closeUploadModal);

