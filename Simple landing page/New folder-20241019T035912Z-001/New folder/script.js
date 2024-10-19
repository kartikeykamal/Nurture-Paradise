
JavaScript (script.js)

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
