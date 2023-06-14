let menu = document.querySelector('#menu-btn')
let nav = document.querySelector('.drop-down-menu')

menu.onclick = () => {
    menu.classList.toggle('fa-close')
    nav.classList.toggle('open')
}