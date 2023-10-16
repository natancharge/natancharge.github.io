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