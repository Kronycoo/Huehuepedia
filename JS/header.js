const nav = document.querySelector('.barra-navegacion'),
      inicio = document.querySelector('#seccion-inicio'),
      historia = document.querySelector('#historia'),
      mapa = document.querySelector('#seccion-mapa'),
      camadas = document.querySelector('#camadas'),
      footer = document.querySelector('#seccion-footer'),
      header = document.querySelector('.bg-header');


window.onload = function() {
    header.addEventListener('click', mostrarContenido);

    nav.classList.add('desaparecer-contenido');
    inicio.classList.add('desaparecer-contenido');
    historia.classList.add('desaparecer-contenido');
    mapa.classList.add('desaparecer-contenido');
    camadas.classList.add('desaparecer-contenido');
    footer.classList.add('desaparecer-contenido');
}

function mostrarContenido() {
    header.style.display = 'none';

    nav.classList.remove('desaparecer-contenido');
    inicio.classList.remove('desaparecer-contenido');
    historia.classList.remove('desaparecer-contenido');
    mapa.classList.remove('desaparecer-contenido');
    camadas.classList.remove('desaparecer-contenido');
    footer.classList.remove('desaparecer-contenido');
}