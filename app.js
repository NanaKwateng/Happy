//FOR THE MENU NAVBAR
let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navigation');
let navRemove = document.querySelectorAll('.navbar');
let notify = document.getElementById('notify')










menuIcon.onclick = () => {
    navbar.classList.toggle('active');
}

notify.addEventListener('click', () => {
    alert("We'll notify you of any information in due time")
})


//REMOVE NAVBAR WHEN CLICKED OR SELECTED

//FOR THE SLIDES 
// let slides =  document.querySelectorAll('.slide');
// let radios = document.querySelectorAll("input[type='radio']")
// let currentSlide = 0

// setInterval(() => {
//     currentSlide = (currentSlide + 1)% slides.length;
//     slide[currentSlide].style.opacity = 1 ;

//     radios[currentSlide].checked == true
// }, 5000)

// radio.addEventListener('click', () => {
//     slides[currentSlide].style.opacity = 0;
//     currentSlide = index;
//     slides[currentSlide].style.opacity = 1;
// })


// let sections  = document.querySelectorAll('section') 
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY
//         let offset = sec.offsetTop - 150
//         let height = sec.offsetHeight

//         if(top >= offset && top < offset + height){
//             sec.classList.add('show-animate')
//         }
//         else {
//             sec.classList.remove('show-animate')
//         }
//     })

// ----------- FOR THE CARDS TO CHANGE AUTOMATICALLY--------------
document.addEventListener('DOMContentLoaded', function() {
    // Select all radio buttons inside the container
    var radios = document.querySelectorAll('.container input[type="radio"]');
    
    // Function to check the next radio button
    function checkNextRadio() {
        var currentIndex = Array.from(radios).findIndex(r => r.checked);
        
        if (currentIndex === radios.length - 1) { // If we're at the last radio button
            radios[0].checked = true; // Go back to the first one
        } else {
            radios[currentIndex + 1].checked = true; // Check the next one
        }
    }
    
    // Set up an interval to check the next radio button every 5 seconds
    setInterval(checkNextRadio, 5000); // 5000 milliseconds = 5 seconds
});


document.addEventListener('DOMContentLoaded', function() {
    var targets = document.querySelectorAll('#plusBtn,.bx-chevron-down,.bx-chevron-down');

    function toggleContent(target) {
        var icon = target;
        var container = icon.closest('.class').querySelector('.pages,.settings.pages');
        var rotatedIcon = icon.classList.contains('bx-chevron-down')? icon : icon.nextElementSibling;

        // Rotate the icon
        rotatedIcon.style.transform = rotatedIcon.style.transform === 'rotate(180deg)'? '' : 'rotate(180deg)';

        // Toggle the visibility of the container
        container.style.display = container.style.display === 'none'? 'block' : 'none';
    }

    targets.forEach(function(target) {
        target.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevents the click event from bubbling up and triggering multiple times
            toggleContent(this);
        });
    });
});


let light = document.querySelector('#light')
let dark = document.querySelector('#dark')
let texts = document.querySelector('p')
let body = document.querySelector('body')
let header = document.querySelector('header')
let navBar = document.querySelector('.navigation')

dark.onclick = () => {
    texts.style.color = '#fff'
    body.style.background = '#081b29'
    header.style.background = '#081b29'
    // navBar.style.background = 'dodgerBlue'
}

light.onclick = () => {
    texts.style.color = '#333'
    body.style.background = '#fff'
    header.style.background = '#fff'
}

