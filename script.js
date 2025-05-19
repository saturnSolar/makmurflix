let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let details = document.getElementsByClassName("details_container");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i <slides.length; i++) {
        slides[i].style.display = "none";
        details[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    details[slideIndex-1].style.display = "flex";
    setTimeout(showSlides, 2000);
}