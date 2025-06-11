fetch('cinemas.json')
  .then(res => res.json())
  .then(data => {
    const cinemaList = document.getElementById('cinemaList');
    data.forEach(cinema => {
      const card = document.createElement('div');
      card.className = 'cinema-card';
      card.style.backgroundImage = `url(${cinema.background})`;

      /* <div class= "fade-overlay"></div> */
      card.innerHTML = `
      
        <div class="popup">
          <p>Name: ${cinema.name}</p>
          <p>Status: ${cinema.status}</p>
          <p>Rating: ${cinema.rating}</p>
          <p>Contact: ${cinema.contact}</p>
        </div>
        <div class="cinema-overlay">
          <img src="${cinema.logo}" class="cinema-logo">
          <div class="details">
            <span class="status-dot ${cinema.status === 'open' ? 'open' : 'closed'}"></span>
            <span>${cinema.name}</span><br>
            <span class="rating"><span style="color: #FFD700;">★</span> ${cinema.rating}</span><br>
            <span>📍${cinema.city}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', (event) => {
         const popup = card.getElementsByClassName('popup')[0];
         popup.classList.toggle('show');
         console.log(card.clientX/window.innerWidth);
         popup.style.left = (event.clientX/window.innerWidth)*100 - 10 + "%";

      });
      cinemaList.appendChild(card);
    });
  });

const filterbtn = document.getElementsByClassName("filter-btn")[0];
const filtercont = document.getElementsByClassName("filter-cont")[0];

filterbtn.addEventListener("click", () => filtercont.classList.toggle("hidden"));

const filteroption = filtercont.getElementsByTagName("option");
for (let i = 0; i < filteroption.length; i++) {
  console.log(filteroption[i]);
  filteroption[i].addEventListener("click", function() {
    const cards = document.getElementsByClassName("cinema-card");
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
  list = document.getElementById("cinemaList");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByClassName("cinema-card");
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (this.value == "title") {
        if (b[i].getElementsByTagName("span")[1].innerHTML.toLowerCase() > b[i + 1].getElementsByTagName("span")[1].innerHTML.toLowerCase()) {
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
