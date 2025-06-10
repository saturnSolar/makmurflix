const params = new URLSearchParams(window.location.search);
const movieId = params.get('id');

var xhttp = new XMLHttpRequest();
window.onload = function() {
  xhttp.open("GET", "movies.json", true);
  xhttp.onload = function() {
    if (xhttp.status === 200) {
      var data = JSON.parse(xhttp.responseText);
      displayMovie(data);
    }
  }
  xhttp.send();
}

function displayMovie(data) {
    const title = document.querySelector('title');
    
    const container = document.getElementsByClassName("container")[0];

    const movie = data[movieId];
    title.textContent = movie.name + " | Makmurflix";
    if (movie) {
        container.innerHTML = `
        <h1>${movie.name}</h1>
        <p>${movie.year} | ${movie.duration}</p>
        <hr>
        <div class="container-row">
            <img src="${movie.poster}" class="poster" alt="${movie.name}">
            <div class="movie-details">
                <div class="container-genre">
                    ${movie.genres.map(genre => `<div>${genre}</div>`).join('')}
                </div>
                <p class="synopsis">${movie.desc}</p>
                <hr>
                <p><span style="font-weight: bold;">Writer</span> ${movie.writer}</p>
                <hr>
                <p><span style="font-weight: bold;">Producer</span> ${movie.producer}</p>
                <hr>
                <p><span style="font-weight: bold;">Cast</span> ${movie.cast}</p>
                <hr>
                <div class="btn" onclick="window.location.href='comparison.html'";>Find available cinema</div>
            </div>
        </div>
        `
    } else {
        container.innerHTML = `<h1>Movie not found</h1>`
    }
}

