const getRandomNumber = (a, b) => {
  const minValue = Math.ceil(Math.min(a, b));
  const maxValue = Math.floor(Math.max(a, b));
  const result = Math.random() * (maxValue - minValue + 1) + minValue;
  return Math.floor(result);
};

const getArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createCounter = () =>{
  let currentCount = 1;
  return function() {
    return currentCount++;
  };
};

const isEscape = (evt) => evt.key === 'Escape';
const isPlus = (evt) => evt.key === '=';
const isMinus = (evt) => evt.key === '-';

export { getRandomNumber, getArrayElement, createCounter, isEscape, isMinus, isPlus };
