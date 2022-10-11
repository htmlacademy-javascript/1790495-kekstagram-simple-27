function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let maxLength = 250;
let string = 'abcde';
function calculateStringLength (x, y) {
  if (x.length <= y ) {
    return true;
  }
  else {
    return false;
  }
console.log(x.length);
}
console.log(calculateStringLength('abcde', 250));
console.log(getRndInteger(1, 10));
