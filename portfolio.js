const menu= document.querySelector("#menu_icon")
const items= document.querySelector("#menu_links")
const hide = document.querySelector("#hide")
const h = document.querySelector("#h")


menu.addEventListener("click", toggleMenu)

function toggleMenu(){
     items.classList.toggle('open')
     h.classList.toggle('open')
     hide.classList.toggle('open')
     console.log("open")
}

const linkedin = document.querySelector("#linkedin")
linkedin.addEventListener("click", () =>{
     location.href="https://www.linkedin.com/in/oluwapelumi-awonuga-841997221/"
})