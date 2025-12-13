// Menu
let menu = document.querySelector(".meun-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = ( ) => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
}

