$(function() {

});

const btnView = document.querySelector('.btn-view'),
      btnProduct = document.querySelector('.btn-product');


function changeBtn() {
    btnView.addEventListener('click', (ev) => {
        ev.target.classList.add('active_btn');
        btnProduct.classList.remove('active_btn');
    });
    btnProduct.addEventListener('click', (even) => {
        even.target.classList.add('active_btn');
        btnView.classList.remove('active_btn');
    });
}
changeBtn();


