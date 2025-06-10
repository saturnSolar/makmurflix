const grid = document.getElementById("movieGrid");

fetch("movies.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.name}" />
      <div class="movie-info">
        <div class="rating">★ ${movie.rating}</div>
        <h3>${movie.name}</h3>
        <div class="genre-cont">
          ${movie.genres.map(genre => `<p>${genre}</p>`).join('')}
        </div>
        <button class="details-btn" onclick='window.location.href="movie.html?id=${movie.id}"')">Details</button>
      </div>
    `;
    grid.appendChild(card);
  });
})

const filterbtn = document.getElementsByClassName("filter-btn")[0];
const filtercont = document.getElementsByClassName("filter-cont")[0];

filterbtn.addEventListener("click", () => filtercont.classList.toggle("hidden"));

const filteroption = filtercont.getElementsByTagName("option");
for (let i = 0; i < filteroption.length; i++) {
  console.log(filteroption[i]);
  filteroption[i].addEventListener("click", function() {
    const cards = document.getElementsByClassName("movie-card");
  console.log('h');
  for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    if (cards[i].innerHTML.includes(this.value)) {
      cards[i].style.display = "flex";
    } else {
      cards[i].style.display = "none";
    }
  }
  });
}

function filter(value) {
  
}