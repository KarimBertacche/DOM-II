// Your code goes here
//CASHING VARIABLES FOR TARGETING ELEMENTS IN THE DOM
const heroImg = document.querySelector('.intro');
const logo = document.querySelector('.logo-heading'); 

heroImg.addEventListener('mouseover', () => {
    if(heroImg.style.transform === '') {
        heroImg.style.transform = "scale(1.2)";
        heroImg.style.backgroundColor = 'black';
        heroImg.style.color = 'white';
    } else {
        mouseOut(); 
    } 
})

const mouseOut = heroImg.addEventListener('mouseout', () => {
    heroImg.style.transform = '';
    heroImg.style.backgroundColor = '';
    heroImg.style.color = '';
})

document.addEventListener('keypress', (event) => {
    console.log(event.key);
})
