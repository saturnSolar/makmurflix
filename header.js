
fetch("movies.json")
  .then(res => res.json())
  .then(data => {
    const results = document.getElementsByClassName("results")[0];
    data.forEach(movie => {
      const card = document.createElement("a");
      card.innerHTML = `${movie.name}`;
      card.href = `movie.html?id=${movie.id}` 
      results.appendChild(card);
    });
  })

function showMenu() {
  var x = document.getElementsByClassName("navi")[0];
  if (x.className === "navi") {
    x.className += " responsive";
  } else {
    x.className = "navi";
  }
}

function waitForElement(selector, callback) {
    const interval = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
            clearInterval(interval);
            callback(element);
        }
    }, 100); // Check every 100ms
}


waitForElement('.searchbar', function(element) {
  const resultscont = document.getElementsByClassName("results")[0]
  const children = resultscont.children;
  element.addEventListener("focus", function() {
    element.placeholder = "Search";
  })
  element.addEventListener("input", function() {
    
    if (element.value == "") {
      resultscont.style.display = "none";
    } else {
      resultscont.style.display = "block";}
    
    Array.from(children).forEach(item => {
      if (item.innerHTML.toLowerCase().includes(element.value.toLowerCase())) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    })
  })
  element.addEventListener("blur", function() {
    element.placeholder = "";
    element.value = "";
    // resultscont.style.display = "none";
  })
});

document.addEventListener("click", function(event) {
  const resultscont = document.getElementsByClassName("results")[0];
  if (!resultscont.contains(event.target)) {
    resultscont.style.display = "none";
  }
});
