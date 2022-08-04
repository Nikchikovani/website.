// const leftBtn = document.querySelector("#slied-btn-left")
// const rightBtn = document.querySelector("#slied-btn-right")
// const slide1 = document.querySelector("#slide1")
// const slide2 = document.querySelector("#slide2")
// const slide3 = document.querySelector("#slide3")
// const slide4 = document.querySelector("#slide4")

const lines = document.querySelector("#threeLine")
const menu = document.querySelector("#menu")
const clearBtn = document.querySelector("#clearBtn")

lines.addEventListener('click', function(){
    menu.style.display = "block"

})

clearBtn.addEventListener('click', function(){
    menu.style.display = "none"

})



