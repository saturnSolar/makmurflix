
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
  element.addEventListener("focus", function() {
    element.placeholder = "Search";
  })
});

waitForElement('.searchbar', function(element) {
  element.addEventListener("blur", function() {
    element.placeholder = "";
    element.value = "";
  })
});