new Swiper("#carousel-questions", {
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
    },
  },
  scrollbar: {
    el: 0
  },
  navigation: {
    prevEl: ".carousel-about-prev",
    nextEl: ".carousel-about-next",
  },
});


function toggle_block(e) {
  e.preventDefault();

  let block = e.target.closest('.q-item').querySelector('.q-item__hide'),
      height = block.children[0].clientHeight;

  if (!block.style.height || block.style.height === '0px') {
    block.style.height = height + 'px';
    e.target.closest('.q-item__name').classList.add('q-item__name_active');
  } else {
    block.style.height = '0';
    e.target.closest('.q-item__name').classList.remove('q-item__name_active');
  }
}

Array.from(document.querySelectorAll('.q-item__name')).forEach((link) => {
  link.addEventListener('click', (e)=>{
    toggle_block(e);
  });
});


function block_questions(e) {
  e.preventDefault();

  if (e.target.closest('.q-sections-item').classList.contains('q-sections-item_active')) return false;

  e.target

  let id_old = e.target.closest('.q-sections__wrapper').querySelector('.q-sections-item_active').getAttribute('data-id'),
      block_old = document.getElementById(id_old);
      id_new = e.target.closest('.q-sections-item').getAttribute('data-id'),
      block_new = document.getElementById(id_new);

  e.target.closest('.q-sections__wrapper').querySelector('.q-sections-item_active').classList.remove('q-sections-item_active');
  e.target.closest('.q-sections-item').classList.add('q-sections-item_active');
  block_old.style.display = 'none';
  block_new.style.display = 'block';

}

Array.from(document.querySelectorAll('.q-sections-item')).forEach((link) => {
  link.addEventListener('click', (e)=>{
    block_questions(e);
  });
});