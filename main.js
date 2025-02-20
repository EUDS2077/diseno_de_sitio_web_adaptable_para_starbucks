// Selecciona el ícono del menú y la barra de navegación
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
// Agrega un evento al hacer clic en el ícono del menú
menu.onclick = () =>
{
    // Alterna la clase 'bx-x' en el ícono del menú para cambiar su apariencia
    menu.classList.toggle('bx-x');
    // Alterna la clase 'active' en la barra de navegación para mostrarla u ocultarla
    navbar.classList.toggle('active');
}
// Evento que se activa cuando el usuario hace scroll en la página
window.onscroll = () =>
{
    // Remueve la clase 'bx-x' del menú para restaurar su estado original
    menu.classList.remove('bx-x');
    // Remueve la clase 'active' de la barra de navegación para ocultarla
    navbar.classList.remove('active');
}