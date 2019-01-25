const apiKey = 'b9844c9b';

// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function(evt) {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: 'dom.js',
  });
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function(title) {
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

// Example response:
// Actors: "Gustaf Skarsgård, Katheryn Winnick, Alexander Ludwig, Travis Fimmel"
// Awards: "Nominated for 11 Primetime Emmys. Another 24 wins & 71 nominations."
// Genre: "Action, Adventure, Drama, History, Romance, War"
// Language: "English, Old English, Norse,  Old, Latin"
// Metascore: "N/A"
// Plot: "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean."
// Poster: "https://m.media-amazon.com/images/M/MV5BNDYyNzk1NzYwOF5BMl5BanBnXkFtZTgwMTQ0Nzc4MzI@._V1_SX300.jpg"
// Released: "03 Mar 2013"
// Response: "True"
// Title: "Vikings"
// Writer: "Michael Hirst"
// Year: "2013–"
// imdbID: "tt2306299"
// imdbRating: "8.6"
// imdbVotes: "320,539"
// totalSeasons: "5"
