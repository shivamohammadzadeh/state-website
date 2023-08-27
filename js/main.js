/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".value__accordion-item");

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(`.value__accordion-header`);
    accordionHeader.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-open");

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
});


const toggleItem = (item) => {
    const accordionContent = item.querySelector(".value__accordion-content");

    if (item.classList.contains("accordion-open")) {
        accordionContent.removeAttribute("style");
        item.classList.remove("accordion-open");
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        item.classList.add("accordion-open");
    }


};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('contact');
console.log(sections)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        } else
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")

    })
};
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollup = document.getElementById('scroll-up');
    // when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-
    if (this.scrollY >= 350) scrollup.classList.add("show-scroll"); else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedTopic = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";


// We validate if the user previously choose a topic
if (selectedTheme) {
    // if the validation is fullfilled, we ask that the issue was to know if we activited or deactivited the dark 
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedTopic === "bx bx-moon" ? "add" : "remove"](iconTheme);
}

// Activate / deactivated the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user choose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
})



/*=============== SCROLL REVEAL ANIMATION ===============*/