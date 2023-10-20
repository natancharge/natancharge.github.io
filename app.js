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

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    '#007acc',
    '#007acc',
    '#0043bf',
    '#0027b8',
    '#000ab2',
    '#1407a8',
    '#2c05a0',
    '#420397',
    '#59008f',
    '#6f007e',
    '#85006e',
    '#9b005d',
    '#b1004c',
    '#c7003b',
    '#dd002b',
    '#f3001a',
    '#ff0e0d',
    '#ff3a13',
    '#ff7f50',
    '#ff7f50'
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