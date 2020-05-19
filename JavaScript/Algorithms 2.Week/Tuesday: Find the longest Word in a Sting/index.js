function getLengthOfLongestWord(string) {
  const str = string;
  const words = str.split(' ');
  let temp = '';
  for (i = 0; i < words.length; i++) {
    console.log(words[i]);
    if (words[i].length > temp.length) {
      temp = words[i];
    }
  }
  console.log('Longest word: ' + temp);
}
getLengthOfLongestWord('The quick brown fox jumped over the lazy dog');
