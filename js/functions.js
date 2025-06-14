const stringLength = (myString, maxLength) => myString.length <= maxLength;

console.log(stringLength('ololoolo', 5));


const polindromCheck = (myString) => {
  const normalizeString = myString.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i < normalizeString.length; i++) {
    if (normalizeString[i] !== normalizeString[normalizeString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(polindromCheck('Тор ттр оТ'));


// const ddddd = (myString) => {
//  let eeee =  myString.length;
//  return eeee;
// }
// console.log(ddddd('шалаш'));
