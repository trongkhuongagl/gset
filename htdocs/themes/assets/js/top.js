/*------------------------------------------- top */
$(function() {
    /*------------------------------------------- タイプライター */
        /*------------------------------------------- 固定ヘッダー */
    $(window).on('load', function() {
        thisOffset = $('.mv').offset().top + $('.mv').outerHeight();
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > thisOffset) {
            $('.fixed__header').addClass('fixed__header__active');
        } else {
            $('.fixed__header').removeClass('fixed__header__active');
        }
    });
});

    /*------------------------------------------- ページローディング */
    $.when(
        $("#loading").delay(3350).queue(function() {
            $(this).addClass("hidden").dequeue();
        })
    ).done(setTimeout(function() {
        $('.j__mv').addClass('active');
        setTimeout(function() {
            $('.t_1').addClass('typewriter_active');
        }, 1000);
        setTimeout(function() {
            $('.t_1').shuffleLetters();
        }, 1001);
        setTimeout(function() {
            $('.t_1_2').addClass('typewriter_active');
        }, 1400);
        setTimeout(function() {
            $('.t_1_2').shuffleLetters();
        }, 1401);
        setTimeout(function() {
            $('.t_2').addClass('typewriter_active')
        }, 1600);
        setTimeout(function() {
            $('.t_2').shuffleLetters();
        }, 1601);
        setTimeout(function() {
            $('.t_2_1').addClass('typewriter_active')
        }, 1800);
        setTimeout(function() {
            $('.t_2_1').shuffleLetters();
        }, 1801);
        setTimeout(function() {
            $('.t_2_2').addClass('typewriter_active')
        }, 2000);
        setTimeout(function() {
            $('.t_2_2').shuffleLetters();
        }, 2001);
        setTimeout(function() {
            $('.t_3').addClass('typewriter_active')
        }, 2100);
        setTimeout(function() {
            $('.t_3').shuffleLetters();
        }, 2101);
        setTimeout(function() {
            $('.t_4').addClass('typewriter_active')
        }, 2200);
        setTimeout(function() {
            $('.t_4').shuffleLetters();
        }, 2201);
        setTimeout(function() {
            $('.t_5').addClass('typewriter_active')
        }, 2300);
        setTimeout(function() {
            $('.t_5').shuffleLetters();
        }, 2301);
        setTimeout(function() {
            $('.t_6').addClass('typewriter_active')
        }, 2400);
        setTimeout(function() {
            $('.t_6').shuffleLetters();
        }, 2401);
    }, 3351));
/*------------------------------------------- top end */

/*------------------------------------------- MVのテキスト表示 */
$.when(
    $("#loading").delay(25).queue(function() {
        $(this).addClass("hidden").dequeue();

    var count =25;//表示までの時間（ミリ秒）
    setTimeout("document.getElementById('mv_img1').style.display='block'",count);
}, 250));

$.when(
    $("#loading").delay(250).queue(function() {
        $(this).addClass("hidden").dequeue();

    var count =250;//表示までの時間（ミリ秒）
    setTimeout("document.getElementById('mv_img2').style.display='block'",count);
}, 2500));
$.when(
    $("#loading").delay(700).queue(function() {
        $(this).addClass("hidden").dequeue();

    var count =100;//表示までの時間（ミリ秒）
    setTimeout("document.getElementById('mv_txt').style.display='block'",count);
}, 7351));

$.when(
    $("#loading").delay(50).queue(function() {
        $(this).addClass("hidden").dequeue();

    var count =50;//表示までの時間（ミリ秒）
    setTimeout("document.getElementById('mv_ico').style.display='block'",count);
}, 7351));


