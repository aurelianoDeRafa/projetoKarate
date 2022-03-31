function changeHeaderWhenScroll() {
  const header = document.querySelector("#header")
  const navHeight = header.offsetHeight;

  if(window.scrollY > navHeight) {
    
    document.querySelector('.header-menu nav ul').style.display = "flex";
    document.querySelector('#header').style.background = "black";

    document.querySelector('.name-logo').style.color = "white";
    
    document.querySelector('.header-menu nav ul').classList.add('t')

    document.querySelector('.area-nome').style.display = "none";

  }else {
    document.querySelector('.header-menu nav ul').style.display = "none";

    document.querySelector('#header').style.background = "white";
    
    document.querySelector('.area-nome').style.display = "flex";

    document.querySelector('.header-menu nav ul').classList.remove('t')

    document.querySelector('.name-logo').style.color = "black";

    
  }

}

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()

})



/*carousel swiper */
const swiper = new Swiper('.slider .swiper-container', {
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  Keyboard: true,
  breakpoints: {
    787: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})


/*carousel swiper */
const swiper2 = new Swiper('.area-atletas .swiper-container', {
  slidesPerView:5,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  Keyboard: true,
  breakpoints: {
    787: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
})

