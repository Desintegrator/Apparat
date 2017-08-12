let $cardParallax = $('.card-parallax');
let $bannerLink = $('.s-home-hero__banner_link-container');

     $cardParallax.mousemove(function (e) {
        move(this, e.pageX, e.pageY);
    })
    .mouseout(function (e) {
        resetTransform(this);
    });

    function move(el, x, y) {
        $(el).addClass('card-active');

        let k;
        let k2;

        if ($(el).hasClass('s-home-content__banner')) {
            $bannerLink.addClass('s-home-content__banner_link-active');
            k = 5;
            k2 = 1.03;
        } else {
            k = 7;
            k2 =1.05;
        }

        let cardW = $(el).width();
        let cardH = $(el).height();

        let xser = $(el).offset().left + cardW / 2;
        let yser = $(el).offset().top + cardH / 2;

        let otnX = x - xser;
        let otnY = y - yser;

        let raznX = otnX / cardW * 100 * 2;
        let raznY = otnY / cardH * 100 * 2;

        let trX = raznY / 100 * k * -1;
        let trY = raznX / 100 * k;

        //trX = Math.round(trX * 1000) / 1000;
        //trY = Math.round(trY * 1000) / 1000;

        $(el).css('transform', 'rotateY(' + trY + 'deg) rotateX(' + trX + 'deg) rotateZ(0deg) scale(' + k2 + ')');
    }

    function resetTransform(el) {
        $(el).removeClass('card-active');
        $(el).css('transform', 'rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1)');

        if ($(el).hasClass('s-home-content__banner')) {
            $bannerLink.removeClass('s-home-content__banner_link-active');
        } 
    }

   