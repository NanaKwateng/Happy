//the menu icon
let menuIcon = document.querySelector('#menu')
let settingIcon = document.querySelector('#settings')
let settingTab = document.getElementById('article')
let nav = document.querySelector('article')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    settingTab.classList.toggle('active')
}

settingIcon.onclick = () => {
    settingIcon.classList.toggle('bx-x')
    nav.classList.add('active')
}


//scroll sections
let sections = document.querySelectorAll('section')
let navbar = document.querySelectorAll('header nav a')

window.onscroll = () => {
    //sticky header
    let header = document.querySelector('.header') 
    header.classList.toggle('sticky', window.scrollY > 100)
}

