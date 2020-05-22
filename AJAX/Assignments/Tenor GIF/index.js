const content = document.getElementById('content');

function createAndAppend(name, parent) {
  const elem = document.createElement(name);
  parent.appendChild(elem);
  return elem;
}

function getGifs(searchInput, gifCount) {
  fetch(
    `https://api.tenor.com/v1/search?q=${searchInput}&key=QYNBHWS4QM3N&limit=${gifCount}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      content.innerText = '';
      let results = data.results;
      return results.map((item) => {
        let img = createAndAppend('img', content);
        img.src = item.media[0].gif.url;
      });
    })
    .catch((error) => {
      let errorMessage = createAndAppend('h4', content);
      errorMessage.innerText =
        'An error has occurred while processing your request. Please try again';
    });
}
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', function () {

$('#btn').click(function () {
  let input = document.querySelector('input').value;
  let num = document.querySelector('select').value;
  let result = document.getElementById('searchResults');
  if (input === '') {
    result.innerText = 'Please fill in the search box';
  } else {
    result.innerText = `${num} GIFs for "${input}":`;
    getGifs(input, num);
  }
});
