const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content'); // Correct the selector

function PageTransitions() {
    // Button click active class
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelector('.active-btn'); // Use querySelector instead of querySelectorAll
            currentBtn.classList.remove('active-btn'); // Remove the class from the current active button
            this.classList.add('active-btn'); // Add the class to the clicked button
        });
    }

    // Sections Active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove selected from the other buttons
            secBtns.forEach((btn) => {
                btn.classList.remove('active-btn');
            });
            e.target.classList.add('active-btn');

            // Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    
    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();


// Type Effect
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('.typed', {
        strings: ["Web Developer", "Software Engineer", "Designer", "Singer", "Presenter", "Artist", "Game Developer", "DATA Analyst"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

// Cursor Animation
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    '#00FFF5',
    '#11F5EE',
    '#21F0E7',
    '#32EAE0',
    '#42E4D9',
    '#53DFD2',
    '#63D9CB',
    '#74D3C4',
    '#84CDCD',
    '#95C7C6',
    '#A5C2BF',
    '#B6BCB8',
    '#C6B6B1',
    '#D7B0AA',
    '#E7AAA3',
    '#F8A49C',
    '#FF9E95',
    '#FF887D',
    '#FF7264',
    '#FF7F50'
  ];  
  
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

// Initialize an IntersectionObserver
if (screen.width > 970)
{
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // Adjust this threshold as needed
    });

    // Get all elements with the class 'hidden' and observe them
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
}


// Loading Screen
