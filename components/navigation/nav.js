$( document ).ready(function() { //checks of doc is ready to be manipulated
    var hamburger = $('#hamburger-icon');
    hamburger.click(function() {    //when clicked, toggles to active class
       hamburger.toggleClass('active');
       return false;
    });
  });

const mobileMenu = document.querySelector('nav')
const toggleMenu = ()=>{

    mobileMenu.classList.toggle('menu--open')
}

const ham = document.querySelector('.icon')

ham.addEventListener('click', toggleMenu)
 
