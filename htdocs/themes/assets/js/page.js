/*------------------------------------------- page */
$(function() {
    /*------------------------------------------- swiper */
    if ($('.studio-swiper-container').length) {
        var mySwiper = new Swiper('.studio-swiper-container', {
            loop: true,
            speed: 2000,
            effect: 'coverflow',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
        });
    }

    var responsiveswiper;
    $(window).on('load resize', function(){
        var w = $(window).width();
        if (w <= 767) {
            if (responsiveswiper) {
                return;
            } else {
                responsiveswiper = new Swiper('.js-responsive-slide', {
                    loop: true,
                    speed: 1000,
                    pagination: {
                        el: '.js-responsive-slide__pagination',
                        type: 'bullets',
                        clickable: true,
                    },
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    },
                });
            }
        } else {
            if (responsiveswiper) {
                responsiveswiper.destroy();
                responsiveswiper = undefined;
            }
        }
    });

    /*------------------------------------------- カレンダー */
    const calendar = $('.js-calendar');
    var targetDate =  new Date(2021, 8 - 1, 17);
    if (targetDate < new Date()) {
        targetDate = new Date();
    }
    if (calendar.length) {
        calendar.datepicker({
            dateFormat: 'yy年mm月dd日',
            minDate: targetDate,
            ddayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
            autoclose: true
        });
        // calendar.datepicker('setDate', new Date());
    }
});
