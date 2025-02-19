const menu = document.querySelector('.menu')
const navLinks = document.getElementById('navigation-links')
const links = document.querySelectorAll('#navigation-links li a')

function srcSwitch() {
    if(menu.src === "https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/three-horizontal-lines-icon.svg"){
        menu.src = "https://www.svgrepo.com/show/499592/close-x.svg"
    }
    else{
        menu.src = "https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/three-horizontal-lines-icon.svg"
    }
}

menu.addEventListener('click', () => {
    
    navLinks.classList.toggle("active")
    srcSwitch()
    console.log("clicked")
})

links.forEach((link) => {
    link.addEventListener('click', () => {
        if(window.innerWidth < 780) {
            navLinks.classList.remove("active")
            srcSwitch()
        }
    })
})