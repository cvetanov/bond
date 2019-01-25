var title = document.getElementsByTagName('h1')[0].textContent;

fetch(`https://www.omdbapi.com/?s=${title}&apikey=b9844c9b`)
  .then((response) => response.json())
  .then(({ Search }) => {
    console.log(Search[0]);
    const { imdbID } = Search[0];
    console.log(imdbID);
    const detailsUrl = `https://www.omdbapi.com/?i=${imdbID}&apikey=b9844c9b`;
    console.log(detailsUrl);
    fetch(detailsUrl)
      .then((response) => response.json())
      .then((result) => {
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
        console.log(result);
      });
  });