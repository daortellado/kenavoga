// scripts.js
$(document).ready(function() {
    $('.project-item').hover(
        function() {
            $(this).find('p').slideDown(200);
        },
        function() {
            $(this).find('p').slideUp(200);
        }
    );

    $('.project-item').each(function() {
        $(this).find('p').hide();
    });

    // Add smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});