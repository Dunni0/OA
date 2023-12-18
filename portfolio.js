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

const cv = document.querySelector("#cv")
cv.addEventListener("click", () => {
     window.open('./assets/Resume.pdf')
})

const github = document.querySelector("#github")
github.addEventListener("click", () => {
     location.href="https://github.com/Dunni0"
})

const recipe_git = document.querySelector("#recipe_git")
recipe_git.addEventListener("click", () => {
     location.href="https://github.com/Dunni0/Recipe-app"
})

const recipe_live = document.querySelector("#recipe_live")
recipe_live.addEventListener("click", () => {
     location.href="https://recipe-app-dunni0.vercel.app/"
})

const reading_git = document.querySelector("#reading_git")
reading_git.addEventListener("click", () => {
     location.href="https://github.com/Dunni0/reading-tracker"
})

const reading_live = document.querySelector("#reading_live")
reading_live.addEventListener("click", () => {
     location.href="https://reading-tracker-alpha.vercel.app/"
})

const crop_git = document.querySelector("#crop_git")
crop_git.addEventListener("click", () => {
     location.href="https://github.com/Dunni0/Crop-Pro"
})

const crop_live = document.querySelector("#crop_live")
crop_live.addEventListener("click", () => {
     location.href="https://crop-pro.vercel.app/"
})

const mail = document.querySelector("#mail")

mail.addEventListener("click", () => {
     location.href='mailto:pelumioladunni3@gmail.com'
})

const linkedin2 = document.querySelector("#linkedin2")
linkedin2.addEventListener("click", () =>{
     location.href="https://www.linkedin.com/in/oluwapelumi-awonuga-841997221/"
})
