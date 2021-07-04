function closeModal() {
    document.getElementsByClassName('overlay')[0].classList.toggle('visible');
    document.getElementById('details-modal').classList.toggle('opened');
}

function openModal() {
    document.getElementsByClassName('overlay')[0].classList.toggle('visible');
    document.getElementById('details-modal').classList.toggle('opened');
}

function toggleMenu() {
    document.querySelector('#main-menu').classList.toggle('opened');
}

document.addEventListener("DOMContentLoaded", function () {
    var menuItems = document.querySelectorAll('#main-menu ul li a');
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function () {
            document.querySelector('#main-menu').classList.toggle('opened');
        });
    }
});