$( document ).ready(function() {
  $('[data-fancybox="gallery"]').fancybox({
    autoPlay : true,
    loop: true,
    keyboard: false,
    toolbar: false,
    modal: false,
    slideShow: {
      autoStart: true,
      speed: 3000
    },
    hideScrollbar: true,
    autoFocus: true,
    wheel: false,
  });
});