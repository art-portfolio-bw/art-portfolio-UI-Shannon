$( document ).ready(function() { //checks of doc is ready to be manipulated
    var hamburger = $('#hamburger-icon');
    hamburger.click(function() {    //when clicked, toggles to active class
       hamburger.toggleClass('active');
       return false;
    });
  });

const mobileMenu = document.querySelector('nav')
const mobileIcons = document.querySelectorAll('.hidden')
const toggleMenu = ()=>{

    mobileMenu.classList.toggle('menu--open')
    mobileIcons.forEach((icon)=>{
    icon.classList.toggle('icon-menu--open')
    icon.classList.remove('hidden')
  })
}

const ham = document.querySelector('.icon')

ham.addEventListener('click', toggleMenu)
 
