function checkPalindrome(string) {
  let inputWord = string;
  let checkString = inputWord.split(' ').join('').toLowerCase();
  for (let i = 0; i < checkString.length / 2; i++) {
    if (checkString[i] != checkString[checkString.length - i - 1]) {
      return false;
    }
  }
  return true;
}
checkPalindrome('rasecar');
checkPalindrome('anna');

// By for loop

function isPalindrome(string) {
  string = string.toLocaleLowerCase();
  let stringLength = Math.floor(string.length / 2);
  for (let i = 0; i < stringLength; i++) {
    if (string[i] !== string[stringLength - 1]) {
      return false;
    }
  }
  return true;
}
isPalindrome('Anna');

// By array methods:

function isPalindrome(string) {
  string = string.toLocaleLowerCase();
  return (
    Array.from(string).toString() === Array.from(string).reverse().toString()
  );
}
// isPalindrome('Anna');

// By recursion

function isPalindrome(string) {
  let stringLength = string.length;
  if (stringLength === 0 || stringLength === 1) {
    return true;
  } else if (string[0] === string[stringLength - 1]) {
    return isPalindrome(string.slice(1, stringLength - 1));
  }
  return false;
}
isPalindrome('anna');
