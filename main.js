// Navbar 
const navbar = document.querySelector('#navbar')
const navbarHeight = navbar.getBoundingClientRect().height
console.log(navbarHeight);

document.addEventListener('scroll', ( )=> {
    console.log(window.scrollY)
    console.log(`navbarHeight: ${navbarHeight}`)
    
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark')
    } else {
        navbar.classList.remove('navbar--dark')
    }
});

// Scrolling when tapping on the navbar menu

const navbarMenu =  document.querySelector('.navbar__menu')

navbarMenu.addEventListener('click', (event)=>{
    const target= event.target
    const link = target.dataset.link
    
    if (link == null){
        return
    }
    navbarMenu.classList.remove('open')
    scrollIntoView(link)
    
})

// Navbar toggle btn for small and mobile screens

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

// home section transparent with scrolling 

const home = document.querySelector('#home_container')
const homeHeight = home.getBoundingClientRect().height
console.log(homeHeight);

document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 -window.scrollY / homeHeight
})

// Show 'arrow' btn when scrolling down
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight /2) {
        arrowUp.classList.add('visible')
    } else {
        arrowUp.classList.remove('visible')
    }
})
// Handle click 'arrow'btn
arrowUp.addEventListener('click', ( )=>{
    scrollIntoView('#home')
})







// Function

function scrollIntoView(selector)  {
    const scrollTo = document.querySelector(selector)
    scrollTo.scrollIntoView({behavior:'smooth'})
}