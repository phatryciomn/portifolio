$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,       // quantos itens aparecem por vez
    loop: true,     // deixa o carrossel em loop infinito
    margin: 10,     // espaço entre os itens
    autoplay: true, // inicia automático
    nav: true       // mostra setas de navegação
  });
});