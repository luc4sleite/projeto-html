var artigo = document.getElementById('artigos-menu');
var artigosList = document.querySelector('.aside__artigos');

var noticias = document.getElementById('noticias-menu');
var noticiasList = document.querySelector('.aside__noticias-locais');

var politica = document.getElementById('politica-menu');
var politicaList = document.querySelector('.aside__politicas');

var esportes = document.getElementById('esportes-menu');
var esportesList = document.querySelector('.aside__esportes');

var entretenimento = document.getElementById('entretenimento-menu');
var entretenimentoList = document.querySelector('.aside__entretenimento');

artigo.addEventListener('click', function() {
    if(artigosList.style.display == 'none') {
    artigosList.style.display = 'flex';
    } else {
        artigosList.style.display = 'none';
    }
});

noticias.addEventListener('click', function() {
    if(noticiasList.style.display == 'none') {
    noticiasList.style.display = 'flex';
    } else {
        noticiasList.style.display = 'none';
    }
});

politica.addEventListener('click', function() {
    if(politicaList.style.display == 'none') {
    politicaList.style.display = 'flex';
    } else {
        politicaList.style.display = 'none';
    }
});

esportes.addEventListener('click', function() {
    if(esportesList.style.display == 'none') {
    esportesList.style.display = 'flex';
    } else {
        esportesList.style.display = 'none';
    }
});

entretenimento.addEventListener('click', function() {
    if(entretenimentoList.style.display == 'none') {
    entretenimentoList.style.display = 'flex';
    } else {
        entretenimentoList.style.display = 'none';
    }
});