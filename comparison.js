
const movieSelect = document.getElementById('movie-select');
const ticketPricesDiv = document.getElementById('ticket-prices');
const cinemaSelect = document.getElementsByClassName('cinema-selector');
var cinema1;
var cinema2;
var movie;


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
            const select = cinemaSelect[x].getElementsByClassName('select')[0];
            for (let y = 0; y < data.length; y++) {
                const cinemadata = data[y];
                const option = document.createElement('option');
                option.value = cinemadata.id;
                option.textContent = cinemadata.name;
                option.addEventListener('click', function() {
                    cinemaSelect[x].querySelector('p').innerHTML = cinemadata.name;
                    if (x == 0) {
                        cinema1 = cinemadata.id;
                    } else {
                        cinema2 = cinemadata.id;
                    }
                    Compare();
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
                movie = moviedata.id;
                console.log(movie);
                Compare();
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

function Compare() {
    console.log(movie);
    console.log(cinema1);
    console.log(cinema2);
    const cinema1Select = document.getElementById('cinema1');
    const cinema2Select = document.getElementById('cinema2');
    console.log(cinema1Select);
    if (movie && cinema1 && cinema2) {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                data.forEach(cinema => {
                    if (cinema.cinemaid == cinema1) {
                        display(cinema1Select, cinema);
                    }
                    if (cinema.cinemaid == cinema2) {
                        display(cinema2Select, cinema);
                    }
                })
            })
    } else {console.log("NOPE");}
}

function display(cinema, data) {
    const itemcont = cinema.getElementsByClassName('item-cont');
    const warningmessage =cinema.getElementsByClassName('warning-message')[0];
    console.log(itemcont);
    console.log("HI");
    warningmessage.classList.add('hidden');
    for (let x = 0; x < itemcont.length; x++) {
        itemcont[x].classList.remove("hidden");
    }


    const datecontainer = itemcont[0].querySelector('article').querySelector('section');
    const timeline = datecontainer.parentNode.getElementsByClassName('timeline-cont')[0].getElementsByClassName('dot-cont')[0];
    timeline.innerHTML = '';
    console.log(datecontainer);
    let air = data.air;
    for (let x = 0; x < air.length; x++) {
        if (air[x].movieid == movie) {
            datecontainer.innerHTML = '';
            for (availability in air[x].availability) {
                const day = document.createElement('div');
                day.className = 'day-cont';
                day.innerHTML = `
                    <h5 class="day">${air[x].availability[availability].date.dayofweek}</h5>
                    <h2 class="date">${air[x].availability[availability].date.day}</h2>
                    <h5 class="month">${air[x].availability[availability].date.month}</h5>`
                day.addEventListener('click', function() {
                    const index = Array.from(datecontainer.children).indexOf(day);
                    console.log(index);
                    const timeavailable = air[x].availability[index].time;
                    console.log(index);
                    console.log(availability);
                    console.log(timeavailable);
                    timeline.innerHTML = '';
                    for (let i = 0; i < timeavailable.length; i++) {
                        const time = document.createElement('div');
                        time.className = 'dot';
                        time.style.left = ((timeavailable[i]-8)/16)*100 + '%';
                        timeline.appendChild(time);
                    }
                })
                datecontainer.appendChild(day);     
            }
            break;
        }
    }

    const experiences = data.experiences;
    console.log(experiences);
    const experiencecont = itemcont[1].getElementsByClassName('experience-cont')[0];
    experiencecont.innerHTML = '';
    var actualExperiencesData;
      fetch("experiences.json")
        .then(res => res.json())
        .then(data => {
            actualExperiencesData = data;
            console.log(actualExperiencesData);
            for (x in experiences) {
                const experience = document.createElement('div');
                experience.className = 'exp';
                experience.innerHTML = `
                    <img src="${actualExperiencesData[experiences[x]].icon}">`;
                experiencecont.appendChild(experience);
            }
        })
}
