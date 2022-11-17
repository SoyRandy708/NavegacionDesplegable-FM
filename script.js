const menuHamburguesa = document.querySelector("#menu-desplegable");
const menuDesplegable = document.querySelector("#nav-mobile");
const CerrarMenuDesplegable = document.querySelector("#cerrar-nav-mobile");

menuHamburguesa.addEventListener("click", MenuMobileToggle)
CerrarMenuDesplegable.addEventListener("click", CloseMenuMobile)

function MenuMobileToggle() {
    menuDesplegable.classList.toggle("inactive")
}
function CloseMenuMobile() {
    menuDesplegable.classList.add("inactive")
}