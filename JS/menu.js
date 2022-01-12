const button = document.getElementById('btn-menu');
button.addEventListener('click', menu);

function menu () {
    document.getElementById('nav-menu').classList.toggle('aparecer-menu');
}