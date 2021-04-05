document.addEventListener('DOMContentLoaded', function(){ 
  "use strict";

  // =============== слайдеры ================
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $('.main-grid__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // ============= боковое меню ===============
  const navTips = document.querySelectorAll('.side-nav__item');
  const navLinks = document.querySelectorAll('.side-nav__link');
  const sideNav = document.querySelector('.side-nav');
  let openWidthOfTip = "12rem";
  let widthOfTip = "5rem";
  navTips.forEach((item, index) => {

    if(window.innerWidth <= 736){
      openWidthOfTip =  "16rem";
      widthOfTip = "7rem"
    }

    item.addEventListener('mouseover', ()=> {
      item.style.width = openWidthOfTip;
      navLinks[index].classList.add('visible');
    })
    item.addEventListener('mouseout', ()=>{
      navLinks[index].classList.remove('visible');
      item.style.width = widthOfTip;
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



  // <<============== document's end =================>>
});