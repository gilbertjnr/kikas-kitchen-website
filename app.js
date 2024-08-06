const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// CORRECT!
// Next, just add the transition and the 'X' using CSS.
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

const body = document.querySelector('body')

// body.addEventListener('click', () => {
//     navbar.classList.remove('seen')
// })

hamburger.addEventListener('click', ()=>{
    hamburger.toggleAttribute('clicked')
    navbar.classList.toggle('seen');
    // ? navbar.classList = 0
})

// const button = document.querySelector('.btn1');

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Menu Page Codes