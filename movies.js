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
        <p>${movie.year} • ${movie.duration}</p>
        <button class="details-btn" onclick='window.location.href="movie.html?id=${movie.id}"')">Details</button>
      </div>
    `;
    grid.appendChild(card);
  });
})