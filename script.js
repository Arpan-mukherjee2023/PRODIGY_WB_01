function handleThis(e) {
    e.classList.toggle("change");
    if(e.classList.contains("change")) {
        document.getElementsByClassName("menu")[0].style.display = "flex";
    } else {
        document.getElementsByClassName("menu")[0].style.display = "none";
    }
}

setInterval(function() {
    if(window.innerWidth > 500) {
        document.getElementsByClassName("menu")[0].style.display = "flex";
    } else {
        document.getElementsByClassName("menu")[0].style.display = "none";
    }
}, 1000);