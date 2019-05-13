$(document).ready(function () {


    $(".close").click(function () {
        $("aside").animate({
            left: "-100%"
        })
    });

    $(".navbar-toggle").click(function () {
        $("aside").animate({
            left: "0%"
        })
    });

    $(".cog-div").click(function () {
        $(".color-tool").toggleClass("pos")
    });

    $("li.theme").click(function () {
        $("link[href*='theme']").attr("href", $(this).attr('data-value'))
    });
    if ($(window).scrollTop() > 120) {
        $("div.up").fadeIn();
    } else {
        $("div.up").fadeOut();
    }
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 120) {
            $("div.up").fadeIn();
        } else {
            $("div.up").fadeOut();
        }
    })
    $("div.up").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })


    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 120) {
            $('.navbar').css({
                position: "fixed",
                top: 0,
                width: "100%",
                borderRadius: "0px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.14)",
                zIndex: 99999
            });
        } else {
            $('.navbar').css({
                position: "static",
                boxShadow: " 0px 0px 0px 0px",
                zIndex: 1
            });
        }
    })
    if ($(window).scrollTop() > 120) {
        $('.navbar').css({
            position: "fixed",
            top: 0,
            width: "100%",
            borderRadius: "0px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.14)",
            zIndex: 99999
        });

    } else {
        $('.navbar').css({
            position: "static",
            boxShadow: " 0px 0px 0px 0px",
            zIndex: 1
        });
    }
});