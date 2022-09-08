import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});

(() => {
    const noFocus = () => {
      document.addEventListener('mouseup', function (evt) {
        if (evt.target.tagName !== 'A' && evt.target.tagName !== 'BUTTON') {
          return;
        }
        evt.target.blur();
      });
    };
  
    noFocus();
})();