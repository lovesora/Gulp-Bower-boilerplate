(function() {
    if ("home-index" != configs.globalFileName)
        return;

    class Header {
        changeBgColor() {
            let winPos = $(window).scrollTop();
            let carouselPos = $('.carousel__container').height();
            if (winPos && winPos >= carouselPos) {
                $('nav.app-header__nav').addClass('z-depth-2')
                                        .removeClass('background-color--transparent z-depth-0');
            } else if (winPos < carouselPos){
                $('nav.app-header__nav').addClass('background-color--transparent z-depth-0')
                                        .removeClass('z-depth-2');

            }
        }
    }

    $(function() {
        let header = new Header();

        //carousel
        $('.carousel.carousel-slider').carousel({ fullWidth: true });
        header.changeBgColor();

        //scroll
        $(window).scroll(event => {
            header.changeBgColor();
        });
    });

})();
