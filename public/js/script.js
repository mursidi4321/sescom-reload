// Toggli class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger-menu di click tambahkan clas active
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}


// Klick diluar sidebar hilangkan navbar
const hamburgerMenu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})