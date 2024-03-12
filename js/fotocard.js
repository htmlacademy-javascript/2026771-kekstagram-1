const template = document.querySelector('#picture').content;
const templateChildren = template.querySelector('.picture');
const blockElement = document.querySelector('.pictures');

const fragment = document.createDocumentFragment();

const createFotoCard = ({url, likes, comments, id}) => {
  const newTemplate = templateChildren.cloneNode(true);
  newTemplate.querySelector('.picture__img').src = url;
  newTemplate.querySelector('.picture__likes').textContent = likes;
  newTemplate.querySelector('.picture__comments').textContent = comments.length;
  newTemplate.dataset.newTemplateId = id;
  return newTemplate;
};

const createArrayFotoCards = (arrayFoto) => {
  arrayFoto.forEach((newTemplate) => {
    const arrayFotoCards = createFotoCard(newTemplate);
    fragment.appendChild(arrayFotoCards);
  });
  blockElement.appendChild(fragment);
};

export { createArrayFotoCards };
