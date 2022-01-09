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
    scrollResolution = 20,
    paths = [];

    // add elements to array
    for (var i = 0; i <= count; i++) {
        paths.push('<img class="sequence" src="' + path + '/(' + i + ').' + ext + '">');
    }

    // Add array to html
    $sequenceWrapper = $('.wrapper-sequence');
    $sequenceWrapper.append(paths);

    function animateSequence(scrollPos) {
        
        var imageIndex = Math.round(scrollPos / scrollResolution);
        if (imageIndex >= count) {
            imageIndex = count - 1; // Select last image
        }
		
		console.log("Animate: " + imageIndex);
		
        $(".wrapper-sequence img").hide();
        $(".wrapper-sequence img").eq(imageIndex).show();
    }

	function checkVisible(elm) {
		var rect = elm.getBoundingClientRect();
		var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
		return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
	}

    $(document).scroll(function () {
		//var scrollPos = $(document).scrollTop();
		var scrollPos = window.pageYOffset

		var s2 = document.getElementById("s2").getBoundingClientRect();

		if(checkVisible(document.getElementById("s2")))
		{
			animateSequence(scrollPos);
		}
    });
});