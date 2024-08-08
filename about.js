

    let navbar = document.querySelector('.navigation')
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate')
        }
        //If want to repeat animation on scroll, use this
        else {
            sec.classList.remove('show-animate')
        }
    })
    navbar.classList.remove('active');
}

