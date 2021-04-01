document.addEventListener('DOMContentLoaded', function(){ 
  "use strict";

  // =============== слайдеры ================
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  // ============= боковое меню ===============
  const navTips = document.querySelectorAll('.side-nav__item');
  const navLinks = document.querySelectorAll('.side-nav__link');
  const sideNav = document.querySelector('.side-nav');

  navTips.forEach((item, index) => {
    item.addEventListener('mouseover', ()=> {
      item.style.width = "12rem"
      navLinks[index].classList.add('visible');
    })
    item.addEventListener('mouseout', ()=>{
      navLinks[index].classList.remove('visible');
      item.style.width = "5rem";
    })
  })

  document.addEventListener('scroll', () => {
    if(pageYOffset > 134){
      sideNav.classList.add('visible')
    }else{
      sideNav.classList.remove('visible');
    }
  })


  // ============= карта ===============
  document.querySelector('.map__button').addEventListener('click', () => {
    document.querySelector('.map__cover').classList.add('hidden');
  })


});