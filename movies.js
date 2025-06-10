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

const sortbtn = document.getElementsByClassName("sort-btn")[0];
const sortcont = document.getElementsByClassName("sort-cont")[0];

sortbtn.addEventListener("click", () => sortcont.classList.toggle("hidden"));

const sortoption = sortcont.getElementsByTagName("option");

for (let i = 0; i < sortoption.length; i++) {
  sortoption[i].addEventListener("click", function() {
    var list, i, switching, b, shouldSwitch;
  list = document.getElementById("movieGrid");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByClassName("movie-card");
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (this.value == "title") {
        if (b[i].getElementsByTagName("h3")[0].innerHTML.toLowerCase() > b[i + 1].getElementsByTagName("h3")[0].innerHTML.toLowerCase()) {
          /* If next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (this.value == "rating") {
        if (b[i].getElementsByClassName("rating")[0].innerHTML < b[i + 1].getElementsByClassName("rating")[0].innerHTML) {
          /* If next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } 
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
  });
}