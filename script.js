var xhttp = new XMLHttpRequest();
var slideIndex = 1;
window.onload = function() {
  xhttp.open("GET", "movies.json", true);
  xhttp.onload = function() {
    if (xhttp.status === 200) {
      var data = JSON.parse(xhttp.responseText);
      displayFeatured(data);
      // displayTop10(data);
    }
  }
  xhttp.send();
}

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
