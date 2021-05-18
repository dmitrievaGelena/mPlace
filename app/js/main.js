function dropDownMenu(btn, list) {
    $(btn).click(function () {
        $(list).slideToggle();
    });
}

dropDownMenu('.dropdown-home', '.dropdown__menu-home');
dropDownMenu('.dropdown-product', '.dropdown__menu-product');
dropDownMenu('.dropdown-wordpres', '.dropdown__menu-wordpress');
dropDownMenu('.dropdown__btn-pages', '.dropdown__item-box_pages');
dropDownMenu('.dropdown__btn-dashboard', '.dropdown__item-box_dashboard');
dropDownMenu('.dropdown__btn-others', '.dropdown__item-box_others');
dropDownMenu('.favourites-page__dropdown', '.favourites-page__list');
dropDownMenu('.menu__btn', '.menu__list');
dropDownMenu('.filter__title', '.filter__title-list');


$(function () {
    $(".rate-star").rateYo({
        rating: 4.2,
        starWidth: "15px",
        readOnly: true
    });
    $('.slider__info').slick({
        prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
    ]
    });
    $('.follow__info-item').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="slick-arrow slick-prev follow__slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button class="slick-arrow slick-next follow__slick-next"><span class="lnr lnr-chevron-right"></span></button>',
        responsive: [{
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
        ]
    });
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $('.list').on('click', function () {
        $('.product__item').addClass('list');
        $('.list').addClass('active');
        $('.grid').removeClass('active');
    });

    $('.grid').on('click', function () {
        $('.grid').addClass('active');
        $('.list').removeClass('active');
        $('.product__item').removeClass('list');
    });

    $(".tab_item").not(":first").hide();
    $(".product-one__tabs .tab").click(function () {
        $(".product-one__tabs .tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
        $(".tab_item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active-tab");

    var mixer = mixitup('.products__info-box');

});

const btns = document.querySelectorAll('.btn-box'),
    btnsContent = document.querySelectorAll('.box-content'),
    btnClose = document.querySelector('.icon-remove'),
    button = document.querySelector('.btn-click'),
    buttonClick = document.querySelector('.btn-click_box'),
    btnView = document.querySelector('.btn-view'),
    btnProduct = document.querySelector('.btn-product'),
    btnCreateAccount = document.querySelector('.login__create'),
    loginContent = document.querySelector('.login'),
    btnLogin = document.querySelector('.register__account'),
    registerContent = document.querySelector('.register'),
    btnVerification = document.querySelector('.login__restore'),
    verificationContent = document.querySelector('.verification');

btns.forEach(item => {
    item.addEventListener('click', () => {
        btnsContent.forEach(i => {
            i.classList.toggle('active-menu');
        });
    });
});

btnCreateAccount.addEventListener('click', (event) => {
    event.preventDefault();
    if (loginContent.classList.contains('show')) {
        loginContent.classList.add('hide');
        loginContent.classList.remove('show');
        registerContent.classList.add('show');
        registerContent.classList.remove('hide');
    }
    event.target.reset();

});
btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    if (registerContent.classList.contains('show')) {
        loginContent.classList.add('show');
        loginContent.classList.remove('hide');
        registerContent.classList.add('hide');
        registerContent.classList.remove('show');
    }
    event.target.reset();
});

btnVerification.addEventListener('click', (event) => {
    if (loginContent.classList.contains('show')) {
        loginContent.classList.add('hide');
        loginContent.classList.remove('show');
        verificationContent.classList.add('show');
        verificationContent.classList.remove('hide');
    }
    event.target.reset();
});



function changeBtn() {
    btnView.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.target.classList.add('active_btn');
        btnProduct.classList.remove('active_btn');
    });
    btnProduct.addEventListener('click', (even) => {
        even.preventDefault();
        even.target.classList.add('active_btn');
        btnView.classList.remove('active_btn');
    });
}
changeBtn();