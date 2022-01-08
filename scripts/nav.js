$(document).ready(function() {

    var header = $('header'),
        nav = header.find('nav'),
        header_hamburger = header.find('#header-hamburger'),
        veil = $('#veil');
    header_hamburger.on('click', function() {
        nav.toggleClass('open');
        veil.toggleClass('show');
    });

});