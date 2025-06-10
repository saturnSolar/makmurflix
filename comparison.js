
const movieSelect = document.getElementById('movie-select');
const ticketPricesDiv = document.getElementById('ticket-prices');
const cinemaSelect = document.getElementsByClassName('cinema-selector');
var cinema1;
var cinema2;



// const updateTicketPrices = () => {
//     const selectedMovie = movieSelect.value;
//     const cinema1 = cinema1Select.value;
//     const cinema2 = cinema2Select.value;

//     if (selectedMovie && cinema1 && cinema2) {
//         fetch("data.json")
//             .then(res => res.json())
//             .then(data => {
//             for (let x = 0; x < data.length; x++) {
//                 const cinemadata = data[x];
//                 if (cinemadata.name == cinema1) {

//                 }

            
//           }
//     })

//         ticketPricesDiv.innerHTML = `
//             Price for Cinema #1: RM ${price1.toFixed(2)}<br>
//             Price for Cinema #2: RM ${price2.toFixed(2)}
//         `;
//     } else {
//         ticketPricesDiv.innerHTML = '';
//     }
// };

// movieSelect.addEventListener('change', updateTicketPrices);

fetch("cinemas.json")
    .then(res => res.json())
    .then(data => {
        for (let x = 0; x < cinemaSelect.length; x++) {
            const dropdownMenu = cinemaSelect[x].getElementsByClassName('cinema-dropdown-menu')[0];
            for (let y = 0; y < data.length; y++) {
                const cinemadata = data[y];
                const option = document.createElement('option');
                option.value = cinemadata.id;
                option.textContent = cinemadata.name;
                option.addEventListener('click', function() {
                    cinemaSelect[x].querySelector('p').innerHTML = cinemadata.name;
                    cinemaSelect[x].value = cinemadata.id;
                    console.log(cinemaSelect[x].value);
                });
                dropdownMenu.appendChild(option);
            }
        }
    })

fetch("movies.json")
    .then(res => res.json())
    .then(data => {
        const dropdownMenu = movieSelect.getElementsByClassName('movie-dropdown-menu')[0];
        for (let x = 0; x < data.length; x++) {
            const moviedata = data[x];
            const option = document.createElement('option');
            option.value = moviedata.id;
            option.textContent = moviedata.name;
            option.addEventListener('click', function() {
                movieSelect.querySelector('label').innerHTML = moviedata.name;
                movieSelect.value = moviedata.id;
                console.log(movieSelect.value);
            });
            dropdownMenu.appendChild(option);
        }
    })


function toggleMovieDropDown() {
    const movieDropdownMenu = document.getElementsByClassName('movie-dropdown-menu')[0];
    console.log("hi");
    movieDropdownMenu.classList.toggle('hidden');
}

for (let x = 0; x < cinemaSelect.length; x++) {
    const cinema = cinemaSelect[x];
    cinema.addEventListener('click', function() {
        console.log("hello" + cinema.parentNode.id);
        const dropdownMenu = cinema.getElementsByClassName('cinema-dropdown-menu')[0];
        dropdownMenu.classList.toggle('hidden');
        cinema.classList.toggle('active');

    });
}

document.addEventListener('click' , function(event) {
    for (let x = 0; x < cinemaSelect.length; x++) {
        const cinema = cinemaSelect[x];
        const dropdownMenu = cinema.getElementsByClassName('cinema-dropdown-menu')[0];
        if (!cinema.contains(event.target)) {
            dropdownMenu.classList.add('hidden');
            cinema.classList.remove('active');
        }
    }
})
