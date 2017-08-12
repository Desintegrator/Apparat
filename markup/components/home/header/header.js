(function () {
    let $switchBtn = $('.switchBtn');

    if($switchBtn.length < 1) {
        return;
    }

    $switchBtn.on('click', switchMenu);
    let $MenuMobile = $('.s-home-header__menu_mobile');

    function switchMenu() {
        if ($MenuMobile.hasClass('s-home-header__menu_mobile-opened')) {
            $MenuMobile.addClass('s-home-header__menu_mobile-closed');
            $MenuMobile.removeClass('s-home-header__menu_mobile-opened');
            $switchBtn.removeClass('switchBtn_active');
            setTimeout(deleteAnimationClass, 450);
        } else {
            $MenuMobile.addClass('s-home-header__menu_mobile-opened');
            $switchBtn.addClass('switchBtn_active');
        }
    }

    function deleteAnimationClass() {
        $MenuMobile.removeClass('s-home-header__menu_mobile-closed');
    }

})();
