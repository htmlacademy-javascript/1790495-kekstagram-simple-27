function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateStringLength (x, y) {
  if (x.length <= y ) {
    return true;
  }
  else {
    return false;
  }
}
calculateStringLength('abcde', 250);
getRndInteger(1, 10);
