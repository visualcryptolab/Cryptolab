const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

window.onscroll = function () {
    handleScroll();
};

function handleScroll() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollThreshold = window.innerHeight * 0.91;
    const autoScrollThreshold = document.documentElement.scrollHeight * 0.001;

    if (scrollPosition > scrollThreshold) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-4.5rem";
    }

    if (scrollPosition > autoScrollThreshold && scrollPosition > lastScrollTop) {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }

    lastScrollTop = scrollPosition;
}
