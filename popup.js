const apiKey = 'b9844c9b';

window.addEventListener('load', () => {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: 'dom.js',
  });
});

chrome.runtime.onMessage.addListener((title) => {
  fetch(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
    .then((response) => response.json())
    .then(({ Search }) => {
      const { imdbID } = Search[0];
      const detailsUrl = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
      fetch(detailsUrl)
        .then((response) => response.json())
        .then((result) => {
          const elements = ['Title', 'Genre', 'Plot', 'Awards', 'Released'];
          elements.forEach((element) => {
            document.getElementById(element).innerHTML = result[element];
          });
          document.getElementById('Rating').innerHTML = `${
            result.imdbRating
          } from ${result.imdbVotes}`;
          document.getElementById('Poster').src = result.Poster;
        });
    })
    .catch(() => {
      document.getElementById('Title').innerHTML =
        'Error occurred, no data available';
    });
});
