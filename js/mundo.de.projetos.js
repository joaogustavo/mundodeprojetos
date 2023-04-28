$(function() {
//ocultar btn subir
	$('.subir').fadeOut();
//ocultar parallax banners meio na home
	$('.banners-meio-fx').fadeOut();
//inicio funcao scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
//navegacao principal transicoes
        if (scroll >= 244) {
            $(".navegacao").addClass('navegacao-fixa');
        } else {
            $(".navegacao").removeClass("navegacao-fixa");
        }
//btn subir transicoes
        if ($(this).scrollTop() > 100) {
            $('.subir').fadeIn();
        } else {
            $('.subir').fadeOut();
        }
//banners centrais na home efeito parallax
        if ($(this).scrollTop() > 380) {
            $('.banners-meio-fx').fadeIn();
        } else {
            $('.banners-meio-fx').fadeOut();
        }
    });
//btn subir acao subir
    $('.subir').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});