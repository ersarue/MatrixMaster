function makeCapitalize(string) {
  const splitAndLower = string.toLowerCase().split(' ');
  let sentence = [];
  for (let i = 0; i < splitAndLower.length; i++) {
    splitAndLower[i] =
      splitAndLower[i][0].toUpperCase() + splitAndLower[i].slice(1);
  }
  console.log(splitAndLower.join(' '));
}
makeCapitalize("I'm a little tea pot");
