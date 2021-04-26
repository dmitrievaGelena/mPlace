const btns = document.querySelectorAll('.btn-box'),
      btnsContent = document.querySelectorAll('.box-content'),
      btnClose = document.querySelector('.icon-remove');


      btns.forEach(item => {
        item.addEventListener('click', () => {
            btnsContent.forEach(i => {
                i.classList.toggle('active-menu');
            });
          });
      });


    $(function () {
        $(".rate-star").rateYo({
            rating: 4.2,
            starWidth: "15px",
            readOnly: true
        });
        $('.slider__info').slick({
            prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
            nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>'
        });
        $('.follow__info-item').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<button class="slick-arrow slick-prev follow__slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
            nextArrow: '<button class="slick-arrow slick-next follow__slick-next"><span class="lnr lnr-chevron-right"></span></button>'
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

        // $('.dropdown-btn__menu').slick({
        //     arrows: false,
        //     dots: false,
        //     infinite: true,
        //     slidesToScroll: 1,
        //     mobileFirst: true,
        //     responsive: [{
        //         breakpoint: 1150,
        //         settings: 'unslick'
        //     }]
        // });


        var mixer = mixitup('.products__info-box');

    });


const btnView = document.querySelector('.btn-view'),
      btnProduct = document.querySelector('.btn-product');


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