$(document).ready(function() {

    $(".close").click(function() {
        $("aside").animate({
            left: "-100%"
        })
    });

    $(".navbar-toggle").click(function() {
        $("aside").animate({
            left: "0%"
        })
    });

    $(".cog-div").click(function() {
        $(".color-tool").toggleClass("pos")
    });

    $("li.theme").click(function() {
        $("link[href*='theme']").attr("href", $(this).attr('data-value'))
    });

    if ($(window).scrollTop() > 120) {
        $("div.up").fadeIn();
    } else {
        $("div.up").fadeOut();
    }
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 120) {
            $("div.up").fadeIn();
        } else {
            $("div.up").fadeOut();
        }
    })
    $("div.up").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    })


    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 120) {
            $('.navbar').css({
                position: "fixed",
                paddingTop: "15px",
                top: 0,
                width: "100%",
                backgroundColor: "#fff",
                borderRadius: "0px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.14)",
                zIndex: 99999
            });
            $('.navbar-right>li>a').css({
                color: "#000"
            })
            $('#logo').attr("src", "logo_black.png");
            $(".search-btn").css("top", 37)

        } else {
            $("header .panel-body").css({
                paddingBottom: "25px"
            })
            $('.navbar').css({
                position: "static",
                paddingTop: "0px",
                backgroundColor: "transparent",
                boxShadow: " 0px 0px 0px 0px",
                zIndex: 1
            });
            $('.navbar-right>li>a').css({
                color: "#fff"
            })
            $('#logo').attr("src", "mail-logo.png")
            $(".search-btn").css("top", 23)
        }
    })
    if ($(window).scrollTop() > 120) {
        $('.navbar').css({
            position: "fixed",
            paddingTop: "15px",
            top: 0,
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "0px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.14)",
            zIndex: 99999
        });
        $('.navbar-right>li>a').css({
            color: "#000"
        })
        $('#logo').attr("src", "logo_black.png");
        $(".search-btn").css("top", 37)

    } else {
        $("header .panel-body").css({
            paddingBottom: "25px"
        })
        $('.navbar').css({
            position: "static",
            paddingTop: "0px",
            backgroundColor: "transparent",
            boxShadow: " 0px 0px 0px 0px",
            zIndex: 1
        });
        $('.navbar-right>li>a').css({
            color: "#fff"
        })
        $('#logo').attr("src", "mail-logo.png")
        $(".search-btn").css("top", 23)
    }
    $(".dropdown a").click(function() {
        window.location = $(this).attr("href")
    })

    // $("a.collapsed").on("click", function () {
    //     $("a.collapsed>span").toggleClass("glyphicon-chevron-down")
    // })



    // for (i = 1; i < 4; i++) {
    //     $(".navbar-right").append($(".dropdown").clone(true));
    // };

    // var myArr = ["home", "pages", "layers"];
    // console.log(myArr);

    // for (i = 0; i < myArr.length; i++) {
    //     $(".navbar-right>li>a:eq(+" + i + "+)").html(myArr[i] + "<span class='caret'></span>")

    // }

    // $(".navbar-right>li>a:eq(0)").html("HOME <span class='caret'></span>");
    // $(".navbar-right>li>a:eq(1)").html("FEATURE <span class='caret'></span>");
    // $(".navbar-right>li>a:eq(2)").html("ABOUT US <span class='caret'></span>");
    // $(".navbar-right>li>a:eq(3)").html("OUR SERVICES <span class='caret'></span>");
    // $(".navbar-right>li>a:eq(4)").html("SHOP <span class='caret'></span>");
    // $(".navbar-right>li>a:eq(5)").html("PROJECTS <span class='caret'></span>");
    // $(".navbar-right>li>a:eq(6)").html("NEWS <span class='caret'></span>");
    // $(".navbar-right>li>a:eq(7)").html("PAGES <span class='caret'></span>");


    // $(".navbar-right>li:eq(0)").append("<ul class = 'dropdown-menu'>");
    // for (i = 1; i < 7; i++) {
    //     $(".dropdown-menu").append("<li><a href='#'>Homepage 0" + i + "</a></li>")
    // }

    // $(".navbar-right>li:eq(1)").append("<div class = 'dropdown-menu'>");
    // for (i = 1; i < 7; i++) {
    //     $(".dropdown-menu").append("<li><a href='#'>HOMEPAGES0" + i + "</a></li>")
    // }

});