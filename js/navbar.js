const navbar = document.getElementById("navbar");
console.log(navbar);
window.onscroll = function () {
    showNavbar();
};

function showNavbar() {
    if (document.body.scrollTop > window.innerHeight * 0.91 || document.documentElement.scrollTop > window.innerHeight * 0.91) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-4.5rem";
    }
}