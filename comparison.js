const moviePrices = {
    "gsc_east_coast": {
        "spirited_away": 19,
        "ejen_ali_2": 28.50,
        "tenet": 12,
        "flow": 15.80,
        "blood_brothers": 29.50,
        "karate_kid": 25,
        "how_to_train_dragon": 35,
        "keluang_man": 22.70,
        "lilo_stitch": 17,
        "final_destination": 17.60,
        "thunderbolts": 20,
        "kaiju_no_8": 17.50
    },
    "gsc_kuantan_city": {
        "spirited_away": 19,
        "ejen_ali_2": 28.50,
        "tenet": 12,
        "flow": 15.80,
        "blood_brothers": 29.50,
        "karate_kid": 25,
        "how_to_train_dragon": 35,
        "keluang_man": 22.70,
        "lilo_stitch": 17,
        "final_destination": 17.60,
        "thunderbolts": 20,
        "kaiju_no_8": 17.50
    },
    "ae_cinema": {
        "spirited_away": 20,
        "ejen_ali_2": 26.70,
        "tenet": 15,
        "flow": 14,
        "blood_brothers": 31,
        "karate_kid": 23.60,
        "how_to_train_dragon": 38.10,
        "keluang_man": 21.50,
        "lilo_stitch": 19,
        "final_destination": 16,
        "thunderbolts": 22,
        "kaiju_no_8": 16
    }
};

const movieSelect = document.getElementById('movie-select');
const ticketPricesDiv = document.getElementById('ticket-prices');
const cinemaSelect = document.getElementsByClassName('cinema-selector');
var cinema1;
var cinema2;

const updateTicketPrices = () => {
    const selectedMovie = movieSelect.value;
    const cinema1 = cinema1Select.value;
    const cinema2 = cinema2Select.value;

    if (selectedMovie && cinema1 && cinema2) {
        const price1 = moviePrices[cinema1][selectedMovie];
        const price2 = moviePrices[cinema2][selectedMovie];

        ticketPricesDiv.innerHTML = `
            Price for Cinema #1: RM ${price1.toFixed(2)}<br>
            Price for Cinema #2: RM ${price2.toFixed(2)}
        `;
    } else {
        ticketPricesDiv.innerHTML = '';
    }
};

movieSelect.addEventListener('change', updateTicketPrices);

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
