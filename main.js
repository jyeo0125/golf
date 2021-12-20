// Navbar 
const navbar = document.querySelector('#navbar')
const navbarHeight = navbar.getBoundingClientRect().height
// console.log(navbarHeight);

document.addEventListener('scroll', ( )=> {
    // console.log(window.scrollY)
    // console.log(`navbarHeight: ${navbarHeight}`)
    
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark')
    } else {
        navbar.classList.remove('navbar--dark')
    }
});

// Service btn 

const opneBtn = document.querySelector('#service__one__btn__open')
const roomBtn = document.querySelector('#service__one__btn__room')
const openContent = document.querySelector('#service__p__open')
const roomContent = document.querySelector("#service__p__room")
const mainContent = document.querySelector("#service__p__general")

opneBtn.addEventListener('click', (event)=>{
    openContent.classList.remove("invisible")
    roomContent.classList.add('invisible')
    mainContent.classList.add('invisible')
})

roomBtn.addEventListener('click', (event)=>{
    roomContent.classList.remove('invisible')
    openContent.classList.add('invisible')
    mainContent.classList.add('invisible')
})

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
// console.log(homeHeight);

document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 -window.scrollY / homeHeight
})

// Show 'arrow' btn when scrolling down
// const arrowUp = document.querySelector('.arrow-up')
// document.addEventListener('scroll', ()=>{
//     if(window.scrollY > homeHeight /2) {
//         arrowUp.classList.add('visible')
//     } else {
//         arrowUp.classList.remove('visible')
//     }
// })
// Handle click 'arrow'btn
// arrowUp.addEventListener('click', ( )=>{
//     scrollIntoView('#home')
// })


// Img slide

var indexValue = 0;
    function slideShow(){
        setTimeout(slideShow, 3000);
        var x;
        const img = document.querySelectorAll(".service__two__pic");
        for(x = 0; x < img.length; x++){
        img[x].style.display = "none";
        }
        indexValue++;
        if(indexValue > img.length){indexValue = 1}
        img[indexValue -1].style.display = "block";
}
slideShow()




// Function

function scrollIntoView(selector)  {
    const scrollTo = document.querySelector(selector)
    scrollTo.scrollIntoView({behavior:'smooth', block:"center"})
}