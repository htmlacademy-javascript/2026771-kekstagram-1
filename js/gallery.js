import { createArrayFotoCards } from './fotocard.js';
import { createFullscreenFoto } from './fullscreen-foto.js';

const selectingFullscreenFoto = (createdData) => {

  const fullscreenFotoBlock = document.querySelector('.pictures');
  fullscreenFotoBlock.addEventListener ('click', (evt) =>{
    const targetPicture = evt.target.closest('[data-new-template-id]');
    if (targetPicture){
      evt.preventDefault();
      const findPicture = createdData.find((element) =>
        element.id === Number(targetPicture.dataset.newTemplateId)
      );
      createFullscreenFoto(findPicture);
    }
  });

  createArrayFotoCards(createdData);
};

export { selectingFullscreenFoto };
