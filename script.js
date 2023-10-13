// Add this in your script.js
function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'flex' : 'none';
}
