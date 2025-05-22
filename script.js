//DISCLAIMER: This code is are made with barely any AI assistance, except for the comments because I'm too lazy to document everything lol!

var xhttp = new XMLHttpRequest();
var slideIndex = 1;
/**
 * Runs when the page has finished loading. Fetches the movie data from
 * movies.json and calls displayFeatured to show the featured movies on the
 * page.
 */
window.onload = function() {
  xhttp.open("GET", "movies.json", true);
  xhttp.onload = function() {
    if (xhttp.status === 200) {
      var data = JSON.parse(xhttp.responseText);
      displayFeatured(data);
      displayTop10(data);
    }
  }
  xhttp.send();
}

/**
 * Displays the featured movies by filtering the provided items for those 
 * marked as featured. Each featured movie is represented as a slide containing 
 * an image thumbnail and details. These slides are inserted into the 
 * 'featured_container' element on the page. The function also initializes 
 * the slideshow by calling showSlides with the current slide index.
 *
 * @param {Array} items - An array of movie objects, each containing properties 
 * such as 'isFeatured', 'thumb', 'name', and 'logo'.
 */

function displayFeatured(items) {
  var container = document.getElementById("featured_container");
  var overlay = document.getElementById("featured_overlay_container");
  var prev = document.getElementById("prev");

  items.filter(item => item.isFeatured).forEach(item => {
    var card = document.createElement("div");
    card.className = "mySlides";
    card.innerHTML = `<img src="${item.thumb}" alt="${item.name}" class="thumb" style="width:100%">`
    
    container.insertBefore(card, overlay);
    var details = document.createElement("div");
    details.className = "details_container"
    details.innerHTML = `
      <img src=${item.logo} alt="${item.name}" class="logo" style="${item.logo_style}">
      <div class="further_details"><div>${item.genres[0]}</div><div>${item.genres[1]}</div><div>${item.genres[2]}</div></div>
    `
    
    container.insertBefore(details, prev);
  });
    
  showSlides(slideIndex);
}

function displayTop10(items) {
  var container = document.getElementsByClassName("movie_list")[0];
  
  items.filter(itemCheck).forEach(item => {
    console.log("hi");
    var card = document.createElement("div");
    card.className = "movie_item";
    card.innerHTML = `
    <img src="${item.poster}" class="poster" alt="${item.name}" style="width: 100px; height: 150px;">
      <div class="pop_details">
        <h4>${item.name}</h4>
        <p>${item.year}</p>
        <a class="btn-play">Details</a>
      </div>
    `
    container.appendChild(card);
  })
  
}

function itemCheck(value, index) {
  return index < 10;
}

// Next/previous controls
function plusSlides(n, direction) {
  showSlides(slideIndex += n, direction);
}

function showSlides(n, direction) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let details = document.getElementsByClassName("details_container");
    
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        details[i].style.display = "none";
    }
    let thumb = slides[slideIndex-1].getElementsByClassName("thumb");
   if (direction == "next") {
      thumb[0].style.animation = "fadeleft 1s forwards";
    } else if (direction == "prev") {
      thumb[0].style.animation = "faderight 1s forwards";
    }
    slides[slideIndex-1].style.display = "block";
    details[slideIndex-1].style.display = "flex"
}

var searchBar = document.getElementsByClassName("searchbar")[0];

searchBar.addEventListener("focus", function() {
  searchBar.placeholder = "Search";
})

searchBar.addEventListener("blur", function() {
  searchBar.placeholder = "";
  searchBar.value = "";
})