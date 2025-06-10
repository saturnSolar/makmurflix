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
            <span><span style="color: #FFD700;">★</span> ${cinema.rating}</span><br>
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

function showDetails(cinema) {
 /* cinema = JSON.parse(cinema);
  document.getElementById('cinemaName').textContent = cinema.name;
  document.getElementById('cinemaStatus').textContent = "Status: " + cinema.status;
  document.getElementById('cinemaRating').textContent = "Rating: ⭐" + cinema.rating;
  document.getElementById('cinemaContact').textContent = "Contact: 📞" + cinema.contact;
  document.getElementById('cinemaDetailPopup').classList.remove('hidden');
} 

  const cinemaDetailPopup = document.getElementById('cinemaDetailPopup');
  const cinemaName = document.getElementById('cinemaName');
  const cinemaStatus = document.getElementById('cinemaStatus');
  const cinemaRating = document.getElementById('cinemaRating');

  cinemaName.textContent = cinema.name;
  cinemaStatus.textContent = cinema.status;
  cinemaRating.textContent = cinema.rating;

  cinemaDetailPopup.classList.remove('hidden');
}

 function closePopup() {
  document.getElementById('cinemaDetailPopup').classList.add('hidden');
} */

};
