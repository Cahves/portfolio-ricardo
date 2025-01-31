// Exemplo de interação com jQuery
$(document).ready(function() {
    // Adicionar smooth scrolling para links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });
});