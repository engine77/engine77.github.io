var swiper1 = new Swiper('.swiper-container', {
    // cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper2 = new Swiper('.swiperSliderNike', {
    // cssMode: true,
    // slidesPerGroup: 3,
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        480: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 6,
            slidesPerGroup: 3,
        }
    },

    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

var swiper3 = new Swiper('.cartslider', {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        992: {
            slidesPerView: 5,

        }
    },


});


var swiper4 = new Swiper('.swiperSliderRecomends', {
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        992: {
            spaceBetween: 75,
            slidesPerView: 4,
        }
    },

    navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4',
    },
    pagination: {
        el: '.swiper-pagination4',
        clickable: true,
    },


});


swiper3.on('click', function (e) {
    if (e.target.offsetParent.classList.contains("swiper-slide")) {

        let f = document.querySelectorAll(".swiper-slide").forEach(el => {
            if (el.classList.contains("activesBorder")) {
                el.classList.remove("activesBorder");
            }
        })

        let xx = e.target.attributes.src.value;
        document.querySelector(".cart_bigbox img").setAttribute("src", xx);
        e.target.offsetParent.classList.add("activesBorder");


    }


});

document.addEventListener("click", function (e) {
    button_for_Ul_menu(e);
    catalogMenu(e);
})

function button_for_Ul_menu(e) {
    let button_for_Ul_menu = document.querySelector(".button_for_Ul_menu");
    let Ul_menu = document.querySelector(".ul_top");

    if (e.target.closest(".button_for_Ul_menu")) {
            e.preventDefault();
        Ul_menu.style.display = Ul_menu.style.display === 'block' ? 'none' : 'block';
    } else if (!e.target.closest(".ul_top")) {
        Ul_menu.style.display = 'none';
    }
}

function catalogMenu(e) {
    let catalogMenu = document.querySelector("#buttonBurger");
    let x = document.querySelector(".menuformenu");

    if (e.target.closest("#buttonBurger")) {
            e.preventDefault();
        x.style.display = x.style.display === 'block' ? 'none' : 'block';
    } else if (!e.target.closest(".menuformenu")) {
        x.style.display = 'none';
    }  
}



// document.querySelector(".header_mobile_button").addEventListener("click", function (e) {
//     let mobmenu = document.querySelector(".header_mobile");
//     let mobbg = document.querySelector(".overflow_bg");
//     if (document.body.clientWidth < 992) {
//         document.body.classList.toggle("overflowBody");
//         mobbg.style.display="block";
//         document.querySelector(".header_mobile_button").classList.toggle("animateX")
//         mobmenu.classList.toggle("active_menu");
//         if (e.target.closest(".overflow_bg")){            
//             mobbg.style.display="none";           
//         }
//     }

// });



let tabsButtons = document.querySelector(".tabsbuttons");
if (tabsButtons) {
    tabsButtons.addEventListener("click", e => {
        if (e.target.closest('.tabsbuttons').children.length == document.querySelector(".tabs_content").children.length) {
            e.target.closest('.tabsbuttons').querySelector(".activeButton").classList.remove("activeButton");
            e.target.closest('.tabsbuttons button').classList.add("activeButton");

            let xx = e.target.closest('.tabsbuttons button').classList[0];
            let y = parseInt(xx.match(/\d+/));

            document.querySelector(".tabs_content").querySelector(".activeTab").classList.remove("activeTab");
            document.querySelector(".tabs_content").querySelector(".tabcont" + y).classList.add("activeTab");

        }
    });
}


let price_and_total = document.querySelector(".price_and_total .number");
if (price_and_total) {
    price_and_total.addEventListener("click", function (e) {
        let x = document.querySelector(".price_and_total .number input");
        if (e.target.closest('.minus') && parseInt(x.value) > 1) {
            parseInt(x.value--)
        }
        if (e.target.closest('.plus')) {
            parseInt(x.value++)
        }
    })
}