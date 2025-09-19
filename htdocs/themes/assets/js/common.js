/*------------------------------------------- common.js */
$(function() {
    /*------------------------------------------- クリックイベント */
    $("#hamburger").on("click", function() {
        $('body').toggleClass('hamburger__active');
    });
    if (window.matchMedia('(max-width: 767px)').matches) {
        $(".faq_q").on("click", function() {
            $(this).toggleClass('change');
            $(this).next().slideToggle();
        });
        $(".introduction__txt").on("click", function() {
            $(this).toggleClass('change');
            $(this).children('.introduction__comment').slideToggle();
        });
    }
    /*------------------------------------------- フェード */
    $(window).scroll(function() {
        $('.fadein').each(function() {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });
    /*------------------------------------------- 連続アニメーション */
    if (window.matchMedia('(max-width: 767px)').matches) {
        var effect_btm = 100; // 画面下からどの位置でフェードさせるか(px)
        var effect_move = 50; // どのぐらい要素を動かすか(px)
        var effect_time = 500; // エフェクトの時間(ms) 1秒なら1000
    } else {
        var effect_btm = 300;
        var effect_move = 50;
        var effect_time = 800;
    }

    //親要素と子要素のcssを定義
    $('.scroll-fade-row').css({
        opacity: 0
    });
    $('.scroll-fade-row').children().each(function() {
        $(this).css({
            opacity: 0,
            transform: 'translateY(' + effect_move + 'px)',
            transition: effect_time + 'ms'
        });
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function() {
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        var effect_pos = scroll_btm - effect_btm;

        //エフェクトが発動したとき、子要素をずらしてフェードさせる
        $('.scroll-fade-row').each(function() {
            var this_pos = $(this).offset().top;
            if (effect_pos > this_pos) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
                $(this).children().each(function(i) {
                    $(this).delay(100 + i * 200).queue(function() {
                        $(this).css({
                            opacity: 1,
                            transform: 'translateY(0)'
                        }).dequeue();
                    });
                });
            }
        });
    });
    /*------------------------------------------- 音楽再生 */
    $(document).ready(function(){
        const audioButton = $('.js-audio-button');
        const audioPlayer = $('.js-audio-player');
        const audioPlayerLength = audioPlayer.length - 1;    
        audioButton.on('click', function() {
            audioButton.not($(this)).removeClass('is-on');
            for (let i = 0; i < audioPlayerLength; i++) {
                audioButton.not($(this)).next(audioPlayer)[i].pause();
            }
            $(this).toggleClass('is-on');
            if ($(this).hasClass('is-on')) {
                $(this).next(audioPlayer)[0].play();
            } else {
                $(this).next(audioPlayer)[0].pause();
            }        
        });
        audioPlayer.on('ended', function() {
            $(this).prev(audioButton).removeClass('is-on');
        });
    });
    /*------------------------------------------- ページトップ */
    $(window).on('load', function() {
        thisOffset = $('.j__mv02').offset().top + $('.j__mv02').outerHeight();
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > thisOffset) {
            $('.pagetop').addClass('pagetop__active');
        } else {
            $('.pagetop').removeClass('pagetop__active');
        }
    });
    $(window).scroll(function() {
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $(".footer").innerHeight();
        if (scrollHeight - scrollPosition <= footHeight) {
            $('.pagetop').addClass('pagetop__visited');
        } else {
            $('.pagetop').removeClass('pagetop__visited');
        }
    });
    $('.pagetop').click(function() {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
    /*------------------------------------------- 可視範囲に入ったらクラス付与 */
    $(window).scroll(function() {
        $('.j__scroll').each(function() {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100) {
                $(this).addClass('j__on');
            }
        });
    });
    /*------------------------------------------- ロードしたらクラス付与 */
    if (window.matchMedia('(max-width: 767px)').matches) {
        $(window).on('load', function() {
            $('.j__load').addClass('j__on');
        });
    }
    /*------------------------------------------- 固定フッターー */
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $('body').addClass('on');
        } else {
            $('body').removeClass('on');
        }
    });
    $(window).scroll(function() {
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $(".response__content").outerHeight();
        if (scrollHeight - scrollPosition <= footHeight) {
            $('.fixed__footer').addClass('fixed__footer__none');
        } else {
            $('.fixed__footer').removeClass('fixed__footer__none');
        }
    });
  
    /*------------------------------------------- アコーディオン */
    if ( $('.js-accordion').length ) {
      $('.js-accordion').on('click', function() {
        $(this).toggleClass('is-on');
        $(this).next().slideToggle();
      });
    }
  
    $(function(){
      $('.p-skill4__body dt').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('open');
      });
    });



});
/*------------------------------------------- common.js end */

$(function() {
    $('.match_txt').matchHeight();
});


