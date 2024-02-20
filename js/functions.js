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
checkPalindrome('Довод');
checkPalindrome('Не довод');
checkPalindrome('А роза упала на лапу Азора');
checkPalindrome('Лёша на полке клопа нашёл ');


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

getNumber(1234);
getNumber('1 лук, 2,5 стакана');

// Функция вставки символов

const transformString = function(string, reqLength, addPart){
  let cutSymbol = '';
  const strLen = string.length;
  const prtLen = addPart.length;
  for (let i = 0; cutSymbol.length < reqLength - strLen; i++){
    const a = addPart[i];
    if (reqLength - strLen % prtLen && prtLen < reqLength){
      return addPart.slice(0, (reqLength - strLen) % prtLen) +
           addPart.repeat(parseInt((reqLength - strLen) / prtLen, 10)) + string;
    }
    if (typeof a === 'undefined'){
      addPart = addPart[i - 1] + addPart;
    }
    cutSymbol = cutSymbol + addPart[i];
  }
  string = cutSymbol + string;
  return string;
};

// Тест функции

transformString('r', 2, 'o');
transformString('1', 5, '2');
transformString('qwerty', 4, 'a');
transformString('qw', 4, 'asgdf');
transformString('w', 4, 'as');

//Функия длины строки

const checkLength = (string, length) => string.length <= length;

checkLength('123456789',5);


