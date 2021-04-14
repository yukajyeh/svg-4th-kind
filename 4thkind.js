const mqDark = window.matchMedia('(prefers-color-scheme:dark)')

const darkModeToggle = document.querySelector('a.dark-mode-toggle')

const darkModeToggleText = darkModeToggle.querySelector('span')

const menuToggle = document.querySelector("a.menu-toggle")
const menuToggleText = menuToggle.querySelector('span')

const bodyTag = document.querySelector("body")

menuToggle.addEventListener("click", function() {
    bodyTag.classList.toggle('nav-open')

    if(bodyTag.classList.contains('nav-open')){
        menuToggleText.innerHTML = "Close"

        gsap.to(".burger-top", { rotation: 45, transformOrigin: "50% 50%", y:8 })
        gsap.to(".burger-bottom", { rotation: -45, transformOrigin: "50% 50%", y:-8 })
        gsap.to(".burger-mid", { width:0 })

    } else {
        menuToggleText.innerHTML = "Menu"
        gsap.to(".burger-top", { rotation: 0, y:0 })
        gsap.to(".burger-bottom", { rotation: 0, y:0 })
        gsap.to(".burger-mid", { width: 28 })
    }
})

darkModeToggle.addEventListener("click", function(){
    bodyTag.classList.toggle("dark-mode")

    if (bodyTag.classList.contains("dark-mode")) {
        darkModeToggleText.innerHTML = "Light mode"
    } else {
        darkModeToggleText.innerHTML = "Dark mode"
    }

})

const updateDarkMode = function() {
    if(mqDark.matches){
        bodyTag.classList.add("dark-mode")
        darkModeToggleText.innerHTML = "Light mode"
    } else {
        bodyTag.classList.remove("dark-mode")
        darkModeToggleText.innerHTML = "Dark mode"
    }
}



updateDarkMode()

mqDark.addListener(function(){
    updateDarkMode()
})