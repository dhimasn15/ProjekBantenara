/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
      const header = document.getElementById('header')
      // Add a class if the bottom offset is greater than 50 of the viewport
      this.scrollY >= 50 ? header.classList.add('blur-header') 
                         : header.classList.remove('blur-header')
  }
  window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// container

document.addEventListener("DOMContentLoaded", function () {
    var containerPanel = document.querySelector(".container-panel");

    window.addEventListener("scroll", function () {
      if (isScrolledIntoView(containerPanel)) {
        containerPanel.classList.add("visible");
      }
    });

    function isScrolledIntoView(element) {
      var rect = element.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;

      // Only completely visible elements return true
      var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
      return isVisible;
    }
  });

//  end container

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay:400,

})
sr.reveal('.home__data, .explore__data, .explore__user, .footer__container')
sr.reveal('.home__card, .popular__card',{delay:300, distance:'100px', interval:100})
sr.reveal('.about__data, .join__image, .booking__container',{origin:'right',delay:100})
sr.reveal('.about__image, .join__data',{origin:'left'})
sr.reveal('.popular__card',{interval:200})