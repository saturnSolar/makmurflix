var slideIndex = 1;
showSlides(slideIndex);

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
