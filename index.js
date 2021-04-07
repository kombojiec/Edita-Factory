document.addEventListener('DOMContentLoaded', function(){ 
  "use strict";

  // =============== слайдеры ================
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 569,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },      
    ]
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

  if(window.innerWidth <= 736){
    openWidthOfTip =  "16rem";
    widthOfTip = "7rem"
  }

  navTips.forEach((item, index) => {  
    item.addEventListener('click', ()=> {
      item.style.width = openWidthOfTip;
      navLinks[index].classList.add('visible');
    })
    item.addEventListener('mouseleave', ()=>{
      navLinks[index].classList.remove('visible');
      item.style.width = widthOfTip;
    })    
  })  

  document.addEventListener('scroll', () => {
    if(pageYOffset > 134 && window.innerWidth > 568){
      sideNav.classList.add('visible')
    }else{
      sideNav.classList.remove('visible');
    }
  })

  // ============= боковое меню  мобильная версия===============
  const mobileMenuButton = document.querySelector('.mobile-nav__button');
  const mobileMenu = document.querySelector('.mobile-nav__wrap');

  const closeMenu = () => {
    mobileMenuButton.classList.remove('mobile-nav__button_open');
    mobileMenu.classList.add('hidden');
  }
  
  mobileMenuButton.addEventListener('click', event => {
    if(mobileMenuButton.classList.contains('mobile-nav__button_open')){
      closeMenu();
    }else{
      mobileMenuButton.classList.add('mobile-nav__button_open');
      mobileMenu.classList.remove('hidden');
    }
  })  
  mobileMenu.addEventListener('click', event => {
    if(mobileMenuButton.classList.contains('mobile-nav__button_open')){
      if(event.target == event.currentTarget){
        closeMenu();
      }
    }
  })

  // ============= карта ===============
  document.querySelector('.map__button').addEventListener('click', () => {
    document.querySelector('.map__cover').classList.add('hidden');
  })



  // <<============== document's end =================>>
});