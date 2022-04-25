function changeHeaderWhenScroll() {
  const header = document.querySelector("#header")
  const navHeight = header.offsetHeight;

  if(window.scrollY > navHeight) {
    
    document.querySelector('.header-menu nav ul').style.display = "flex";

    document.querySelector('#header').style.background = "black";

    document.querySelector('.name-logo').style.color = "white";

    
    
    document.querySelector('.header-menu nav ul').classList.add('t')

    document.querySelector('.area-nome ').style.display = "none";

  }else {
    document.querySelector('.header-menu nav ul').style.display = "none";

    document.querySelector('#header').style.background = "white";
    
    document.querySelector('.area-nome').style.display = "flex";

    document.querySelector('.header-menu nav ul').classList.remove('t')

    document.querySelector('.name-logo').style.color = "black";
    
  }

}

function change () {
  
  const mMobile = document.querySelector('.menu-mobile')
  const areaName = document.querySelector('.area-nome ')
  const menuHeader = document.querySelector('.header-menu nav ul')
  const navWidth = header.offsetWidth;
  const navHeiht = header.offsetHeight;

  if(navWidth <= 950) {
    menuHeader.style.display = "none";
    mMobile.style.display = "block";
          for (i of mMobile.children) {
            i.style.background = 'white'
    
          }

    if (navWidth <= 950 && window.scrollY < navHeiht === true ) {
      mMobile.style.display = "none";
    }

    if (navWidth <= 850 && window.scrollY < navHeiht === true ) {
      mMobile.style.display = "none";
      areaName.style.display = "none";
      mMobile.style.display = "block";
      for (i of mMobile.children) {
        i.style.background = 'black'

      }
    }
    
    console.log('fii')
  } 

}


// function change() {
//   const header = document.querySelector("#header")
//   const navHeight = header.offsetHeight;
//   const navWidth = document.querySelector("#about");
//   const test = navWidth.offsetWidth
//   const mMobile = document.querySelector('.menu-mobile')

//   if(window.offsetWidth < '820px' &&window.scrollY > navHeight ) {
//     document.querySelector('.header-menu nav ul').style.display = "none";

//     document.querySelector('.menu-mobile').style.display = "block";
//       for (i of mMobile.children) {
//         i.style.background = 'white'

//       }
//   }else if (mMobile.style.background === 'white'){
//     document.querySelector('.menu-mobile').style.display = "none";

//     document.querySelector('.header-menu nav ul').style.display = "block";
//   }
// }


// function changeClose() {
//   const header = document.querySelector("#header")
//   const navHeight = header.offsetHeight;
//   const navWidth = document.querySelector("#about");
//   const test = navWidth.offsetWidth
//   const mMobile = document.querySelector('.menu-mobile')

//   if(window.scrollY > navHeight && test <= 831) {
//     document.querySelector('.header-menu nav ul').style.display = "none";

//     document.querySelector('.area-nome ').style.display = "none";

//     document.querySelector('.menu-mobile').style.display = "block";
//       for (i of mMobile.children) {
//         i.style.background = 'white'

//       }
//   }else {
//     document.querySelector('.menu-mobile').style.display = "block";
//     for (i of mMobile.children) {
//       i.style.background = 'black'

//     }
//     document.querySelector('.area-nome ').style.display = "none";

//   }
// }



window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  change()
  // changeClose()
  // openMenuMobile()

})



/*carousel swiper */
const swiper = new Swiper('.slider .swiper-container', {
  slidesPerView: 2,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  Keyboard: true,
  breakpoints: {
    787: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    1180: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    1000: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    768: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    720: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    701: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    610: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    586: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    560: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    506: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    485: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    425: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    375: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    320: {
      slidesPerView: 1,
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
    
    1180: {
      slidesPerView: 3,
      setWrapperSize: true
    },
    1000: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    875: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    830: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    768: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    720: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    701: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    610: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    586: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    560: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    506: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    485: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    425: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    375: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    320: {
      slidesPerView: 1,
      setWrapperSize: true
    }
  }
})



document.querySelector('.menu-mobile').addEventListener('click', ()=> {
  let open = document.querySelector('.menuFixed-mobile')

  if(open.style.dsiplay = 'none') {
    open.style.display = 'flex'
  }


})

function fecharMenu () {
  let fechar = document.querySelector('.menuFixed-mobile')

  fechar.style.display = 'none'
}
