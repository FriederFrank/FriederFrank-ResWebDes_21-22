// Pageload Image --------------------------------------
$(window).on("load", function () {
    $("body").css("opacity", "0");
});

// General -----------------------------------------------
$(document).ready(function () {

    $("body").addClass("ready");

    // Header effect
    $changeItems = $(".site-dot, .navbar, .wrapper-cart");
    $changeItems.addClass("white");
    $headerBG = $("header .wrapper-absolute");
    $headerBG.css("background", "transparent");

    var top1 = $('.s1').offset().top;
    var top2 = $('.s2').offset().top;
    var top3 = $('.s3').offset().top;
    var footer = $('footer').offset().top;

    $(document).scroll(function () {

        var scrollPos = $(document).scrollTop();

        if (scrollPos >= top2 && scrollPos < top3) {
            console.log("fixed icon");
            $('.logoMiddle:after').css('background', 'red !important');
        }

        if (scrollPos >= top1 && scrollPos < top2) {
            $changeItems.addClass("white");
            $headerBG.css("background", "transparent");
            $headerBG.css("border-bottom", "none");

        } else if (scrollPos >= top2 && scrollPos < top3) {
            $changeItems.removeClass("white");
            $headerBG.css("background", "white");
            $headerBG.css("border-bottom", "1px solid rgba(29,58,21,.2)");
        } else if (scrollPos >= top3) {
            $changeItems.addClass("white");
            $headerBG.css("background", "transparent");
            $headerBG.css("border-bottom", "none");
        }




    });



});

$(document).ready(function () {

    // Declare variables
    var count = 171,
        path = "img-sequence",
        ext = "png",
        scrollResolution = 50,
        paths = [];

    // Section parts
    var top1 = parseInt($('.s1').height()) / 2;
    var top3 = parseInt($('.s1').height()) + parseInt($('.s3').height()) / 2;


    // add elements to array
    for (var i = 0; i <= count; i++) {
        paths.push('<img class="sequence" src="' + path + '/(' + i + ').' + ext + '">');
    }

    // Add array to html
    $sequenceWrapper = $('.wrapper-sequence');
    $sequenceWrapper.append(paths);

    function animateSequence() {
        var currentScrollPosition = window.pageYOffset;
        var imageIndex = Math.round(currentScrollPosition / scrollResolution);
        if (imageIndex >= count) {
            imageIndex = count - 1; // Select last image
        }
        $(".wrapper-sequence img").hide();
        $(".wrapper-sequence img").eq(imageIndex).show();
    }

    $(document).scroll(function () {
        var scrollPos = $(document).scrollTop();
        if (scrollPos >= top1 - 10 && scrollPos <= top3 - 10) { // check if section 2 is in view
            animateSequence();
        }
    });
});




