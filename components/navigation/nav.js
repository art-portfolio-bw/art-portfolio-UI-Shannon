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
 
// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }
  

// .mobile-container {
//   max-width: 480px;
//   margin: auto;
//   background-color: #555;
//   height: 500px;
//   color: white;
//   border-radius: 10px;
// }

// .topnav {
//   overflow: hidden;
//   background-color: #333;
//   position: relative;
// }

// .topnav #myLinks {
//   display: none;
// }

// .topnav a {
//   color: white;
//   padding: 14px 16px;
//   text-decoration: none;
//   font-size: 17px;
//   display: block;
// }

// .topnav a.icon {
//   background: black;
//   display: block;
//   position: absolute;
//   right: 0;
//   top: 0;
// }

// .topnav a:hover {
//   background-color: #ddd;
//   color: black;
// }

// .active {
//   background-color: #4CAF50;
//   color: white;
// }
// </style>
// </head>
// <body>

// <!-- Simulate a smartphone / tablet -->
// <div class="mobile-container">

// <!-- Top Navigation Menu -->
// <div class="topnav">
//   <a href="#home" class="active">Logo</a>
//   <div id="myLinks">
//     <a href="#news">News</a>
//     <a href="#contact">Contact</a>
//     <a href="#about">About</a>
//   </div>
//   <a href="javascript:void(0);" class="icon" onclick="myFunction()">
//     <i class="fa fa-bars"></i>
//   </a>
// </div>


