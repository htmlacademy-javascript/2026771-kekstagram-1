// Функция проверки строки палиндрома

function checkPalindrome(string) {
  const stringValue = string.replaceAll(' ', '').toLowerCase();
  const length = stringValue.length;
  let i = length - 1;
  for (; stringValue[i] === stringValue[length - (i + 1)]; i--){
    if (i === 0) {
      break;
    }
  }
  return i === 0 ? `${string } this string is palidrome` : `${string } this string is UNpalidrome`;
}


// Тест функции
/*
console.log(checkPalindrome('Довод'));
console.log(checkPalindrome('Не довод'));
console.log(checkPalindrome('А роза упала на лапу Азора'));
console.log(checkPalindrome('Лёша на полке клопа нашёл ')); */


// Функция получения чисел из строки

function getNumber (value){
  const lengthStroke = value.length;
  const string = `${value}`;
  let numberStroke = '';
  for (let i = lengthStroke - 1; i >= 0 ; i--){
    if (parseInt(string[i], 10)) {
      numberStroke = numberStroke.replace('', string[i]);
    }

  }
  return numberStroke;
}

// Тест функции
/*
console.log(getNumber(1234));
console.log(getNumber('1 лук, 2,5 стакана')); */

// Функция вставки символов

function changeStroke (string, minLength, addPart){
  let result = string.toString();
  if (addPart.length > minLength) {
    result = addPart.slice(0, minLength - string.length) + string;
  } else if (string.length > minLength){
    result = string;
  } else if (string.length <= minLength) {
    for (let i = 1; i <= minLength - string.length ; i++){
      result = addPart + result;
    }
  } else if ((minLength - string.length) % addPart.length) {
    for (let i = 1; result.length !== minLength; i++){
      result = addPart[i] + string + result;
    }
  }

  return result;
}
// Тест функции
/*
console.log(changeStroke('r', 2, 'o'));
console.log(changeStroke('1', 5, '2'));
console.log(changeStroke('qwerty', 4, 'a'));
console.log(changeStroke('qw', 4, 'asgdf'));
console.log(changeStroke('w', 4, 'as')); */

//Функия длины строки

const checkLength = (string, length) => string.length <= length;

//console.log(checkLength('123456789',5))


