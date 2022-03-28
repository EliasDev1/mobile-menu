const mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.addEventListener('click', ()=>{
    const navList = document.querySelector('.nav-list')
    const animate = document.querySelector('.mobile-menu')
    navList.classList.toggle('active')
    animate.classList.toggle('active')
})