const menuDesplegable = document.querySelector("#nav-mobile")
const AbrirMenuDesplegable = document.querySelector("#menu-desplegable")
const CerrarMenuDesplegable = document.querySelector("#cerrar-nav-mobile")
const CaracteristicasDes = document.querySelector("#caracteristicas-nav-desktop")
const CaracteristicasNavDes = document.querySelector("#nav-desktop-caracteristicas")
const EmpresaDes = document.querySelector("#empresa-nav-desktop")
const EmpresaNavDes = document.querySelector("#nav-desktop-empresa")
const CaracteristicasMob = document.querySelector("#caracteristicas-nav-mobile")
const CaracteristicasNavMob = document.querySelector("#nav-mobile-caracteristicas")
const EmpresaMob = document.querySelector("#empresa-nav-mobile")
const EmpresaNavMob = document.querySelector("#nav-mobile-empresa")


AbrirMenuDesplegable.addEventListener("click", MenuMobileToggle)
CerrarMenuDesplegable.addEventListener("click", MenuMobileToggle)

CaracteristicasDes.addEventListener("click", MostrarCaracteristicasDesktop)
EmpresaDes.addEventListener("click", MostrarEmpresaDesktop)
CaracteristicasMob.addEventListener("click", MostrarCaracteristicasMobile)
EmpresaMob.addEventListener("click", MostrarEmpresaMobile)


function MenuMobileToggle() {
    menuDesplegable.classList.toggle("mostrar-nav-mobile")
}
function MostrarCaracteristicasDesktop() {
    CaracteristicasNavDes.classList.toggle("inactive")
}
function MostrarEmpresaDesktop() {
    EmpresaNavDes.classList.toggle("inactive")
}
function MostrarCaracteristicasMobile() {
    CaracteristicasNavMob.classList.toggle("inactive")
}
function MostrarEmpresaMobile() {
    EmpresaNavMob.classList.toggle("inactive")
}