

// JS for the tab navigation
let btnLeft = document.querySelector('.left-btn')
let btnRight = document.querySelector('.right-btn')
let tabMenu = document.querySelector('.tab-menu')

const iconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft)
    // console.log("1.", scrollLeftValue)

    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth
    // console.log("2.", scrollableWidth)


    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none"
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "'block" : "none"
}

btnRight.addEventListener('click', ()=> {
    tabMenu.scrollLeft += 150
    setTimeout(() => iconVisibility(), 50)
})

btnLeft.addEventListener('click', ()=> {
    tabMenu.scrollLeft -= 150
    setTimeout(() => iconVisibility(), 50)
})

window.onload = function() {
    btnRight.style.display = tabMenu.scrollWidth >tabMenu.clientWidth || tabMenu.scrollWidth
    
    tabMenu.scrollWidth >= window.innerWidth ? "block" : "none"

    let scrollLeftValue = Math.round(tabMenu.scrollLeft)
    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none"
}

// JS TO make the tab navigation draggable
let activeDrag = false

tabMenu.addEventListener('mousemove', (drag) => {
    if (!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX
    iconVisibility()
    tabMenu.classList.add("dragging")
})

document.addEventListener("mouseup" , () => {
    activeDrag = false
    tabMenu.classList.remove("dragging")
})

tabMenu.addEventListener("mouseDown", () => {
    activeDrag = true
})




// JS to view tab contents on click tab button 
let tabs = document.querySelectorAll('.tab')
let tabBtns = document.querySelectorAll('.tab-btn')

let tab_Nav = function(tabBtnClick) {
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove('active')
    })

    tabs.forEach((tab) =>{
        tab.classList.remove('active')
    })


    tabBtns[tabBtnClick].classList.add('active')
    tabs[tabBtnClick].classList.add('active')
}

tabBtns.forEach((tabBtn, i) => {

    tabBtn.addEventListener('click', () => {
        tab_Nav(i)
    })

})


// FOR THE SEARCH AREA

// document.querySelector('#search-input').addEventListener('input', filterList);

// function filterList() {
//     let searchInput = document.querySelector('#search-input')

//     let filter = searchInput.ariaValueMax.toLocaleLowerCase();
//     let listItems = document.querySelectorAll('.list-group-item')

//     listItems.forEach((item) => {
//         let text = item.textContent
//         if(text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
//             item.style.display = ''
//         }

//         else {
//             item.style.display = 'none'
//         }
//     })
// }


// MANAGE THE TABLE
// var myArray = [
//     {'name': 'Michael', 'age': '30', 'birthdate': '11/10/1952'},
//     {'name': 'Harry', 'age': '25', 'birthdate': '11/10/1952'},
//     {'name': 'Murray', 'age': '32', 'birthdate': '11/10/1991'},
//     {'name': 'Kelvin', 'age': '28', 'birthdate': '11/10/1994'},
//     {'name': 'Bruce', 'age': '19', 'birthdate': '11/10/1999'},
//     {'name': 'Ben', 'age': '48', 'birthdate': '11/10/1985'},
//     {'name': 'James', 'age': '20', 'birthdate': '11/10/2002'},
//     {'name': 'Magarete', 'age': '19', 'birthdate': '11/10/1952'},
//     {'name': 'Jones', 'age': '30', 'birthdate': '11/10/1952'},
//     {'name': 'Anderson', 'age': '29', 'birthdate': '11/10/1995'}
// ]

// //Adding the keyUp events to the searchInput with the JQuery
// $('#search-input').on('keyup', function(){
//     var value = $(this).val()
//     console.log('Value: ', value)
// })

// buildTable(myArray)

// function buildTable(data) {
//     var Table = document.getElementById('myTable')
//     table.innerHTML = ''
//     for(var i = 0; i < data.length; i++) {
//         var row = <tr>
//             <td>${data[i].name}</td>
//             <td>${data[i].age}</td>
//             <td>${data[i].birthdate}</td> 
//         </tr>
//     }
// }


