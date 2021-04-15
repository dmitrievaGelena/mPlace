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

const filterBtn = document.querySelector('.icon-more-vertical'),
    filterList = document.querySelector('.filter__title-list'),
    filterParent = document.querySelector('.products__inner');

filterBtn.addEventListener('click', () => {
    if (filterList.classList.toggle('hide'));
});


//сделать выпадающие options 
//сделать открывающиеся блоки в aside 
const cat = document.querySelector('.cat');

console.log(cat);


