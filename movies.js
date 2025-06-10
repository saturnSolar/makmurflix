const movies = [
  {
    title: "Spirited Away",
    image: "https://m.media-amazon.com/images/I/81r+LNMC5KL._AC_UF1000,1000_QL80_.jpg",
    rating: "10/10 (99PK)",
    year: "2001",
    duration: "2h 4m"
  },
  {
    title: "Hell House LLC",
    image: "https://m.media-amazon.com/images/I/81koFps4mIL._AC_UF894,1000_QL80_.jpg",
    rating: "10/10 (99PK)",
    year: "2001",
    duration: "2h 4m"
  },
  {
    title: "Diablo",
    image: "https://m.media-amazon.com/images/I/91kMkaOAx4L._AC_UF894,1000_QL80_.jpg",
    rating: "10/10 (99PK)",
    year: "2001",
    duration: "2h 4m"
  },
  {
    title: "Us",
    image: "https://m.media-amazon.com/images/I/71yrZb-WmZL._AC_UF894,1000_QL80_.jpg",
    rating: "10/10 (99PK)",
    year: "2001",
    duration: "2h 4m"
  },
  {
    title: "Qodrat",
    image: "https://m.media-amazon.com/images/I/81YZcn7Zr3L._AC_UF894,1000_QL80_.jpg",
    rating: "10/10 (99PK)",
    year: "2001",
    duration: "2h 4m"
  },
  {
    title: "Virunnu",
    image: "https://m.media-amazon.com/images/I/81kZrNPmQBL._AC_UF894,1000_QL80_.jpg",
    rating: "10/10 (99PK)",
    year: "2001",
    duration: "2h 4m"
  }
];

const grid = document.getElementById("movieGrid");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}" />
    <div class="movie-info">
      <div class="rating">★ ${movie.rating}</div>
      <h3>${movie.title}</h3>
      <p>${movie.year} • ${movie.duration}</p>
      <button class="details-btn" onclick="alert('More details about ${movie.title}')">Details</button>
    </div>
  `;
  grid.appendChild(card);
});
