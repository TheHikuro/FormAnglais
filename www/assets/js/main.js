/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 400})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500, interval: 200})
sr.reveal('.about__social-icon', {delay: 600, interval: 300})
sr.reveal('.CV', {delay: 700, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.legend', {})
sr.reveal('.about_m1', {})
sr.reveal('.about_m2', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.about_m3', {delay: 400})
sr.reveal('.phone_B', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.cours_ang_cont')
sr.reveal('.info_anglais', {interval: 200})
sr.reveal('.cours_fr_cont')
sr.reveal('.info_francais', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

/*SCROLL EDUCTIONS*/
sr.reveal('#card1', {})
sr.reveal('#card2', {interval: 800, delay: 200})
sr.reveal('#card3', {delay: 400})
sr.reveal('#card4', {delay: 500})
sr.reveal('#card5', {delay: 600})

/*SCROLL WORK */
