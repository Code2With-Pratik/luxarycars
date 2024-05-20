let MenuBtn = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".navbar");

MenuBtn.onclick = () => {
    MenuBtn.classList.toggle("fa-times");
    Navbar.classList.toggle("active");
};
 
document.querySelector("#LoginBtn").onclick = () => {
    document.querySelector(".loginFormContainer").classList.toggle("active");
};

document.querySelector("#CloseLoginform").onclick = () => {
    document.querySelector(".loginFormContainer").classList.remove("active");
};

document.querySelector(".home").onmousemove = (e) => {
    document.querySelectorAll(".homeParallexEffect").forEach((el) => {
        let speed = el.getAttribute("data-speed")
        let X = (window.innerWidth - e.pageX * speed) / 60;
        let Y = (window.innerHeight - e.pageY * speed) / 60;

        el.style.transform = `translateX(${Y}px) translateY(${X}px)`;
     });
};

document.querySelector(".home").onmouseleave = (e) => {
    document.querySelectorAll(".homeParallexEffect").forEach((el) => {

        el.style.transform = `translateX(0px) translateY(0px)`;
    });
};

newFunction();
function newFunction() {
    var Swiper = new swiper(".VehiclesSlider", {
        grabCursor: true,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPreView: 1,
            },
            768: {
                slidesPreView: 2,
            },
            1024: {
                slidesPreView: 3,
            },
        },
    });

    var swiper = new swiper(".FeatureSlider", {
        grabCursor: true,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPreView: 1,
            },
            768: {
                slidesPreView: 2,
            },
            1024: {
                slidesPreView: 3,
            },
        },
    });

    var swiper = new swiper(".ReviewSlider", {
        grabCursor: true,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPreView: 1,
            },
            768: {
                slidesPreView: 2,
            },
            1024: {
                slidesPreView: 3,
            },
        },
    });

    let ThemeToggle = document.querySelector(".themeToggle");
    let ToggleBtn = document.querySelector(".ToggleBtn");


    ToggleBtn.onclick = () => {
        ThemeToggle.classList.toggle("active");
        MenuBtn.classList.remove("fa-times");
        Navbar.classList.remove("active");
    };
    document.querySelectorAll(".themeToggle .themeBtn").forEach((btn) => {
        btn.onclick = () => {
            document.querySelector(":root").style.setProperty("--main, color");
        };
    });
}

