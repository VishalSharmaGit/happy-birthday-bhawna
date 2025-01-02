$(window).on('load', function() {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function() {
    var vw;

    function adjustLayout() {
        if ($(window).width() <= 768) {
			vw = $(window).width() / 3;
            $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
            $('#b11').animate({ top: 240, left: vw - 120 }, 500);
            $('#b22').animate({ top: 240, left: vw - 80 }, 500);
            $('#b33').animate({ top: 240, left: vw - 40 }, 500);
            $('#b44').animate({ top: 240, left: vw }, 500);
            $('#b55').animate({ top: 240, left: vw + 40 }, 500);
            $('#b66').animate({ top: 240, left: vw + 80 }, 500);
            // $('#b77').animate({ top: 240, left: vw + 120 }, 500);
            // $('#b88').animate({ top: 240, left: vw + 160 }, 500);
        } else {
			vw = $(window).width() / 2;
            $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
            $('#b11').animate({ top: 240, left: vw - 350 }, 500);
            $('#b22').animate({ top: 240, left: vw - 250 }, 500);
            $('#b33').animate({ top: 240, left: vw - 150 }, 500);
            $('#b44').animate({ top: 240, left: vw - 50 }, 500);
            $('#b55').animate({ top: 240, left: vw + 50 }, 500);
            $('#b66').animate({ top: 240, left: vw + 150 }, 500);
            // $('#b77').animate({ top: 240, left: vw + 250 }, 500);
            // $('#b88').animate({ top: 240, left: vw + 350 }, 500);
        }
    }

    $(window).resize(adjustLayout);
    adjustLayout(); // Call it on page load

    $('#turn_on').click(function() {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function() {
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function() {
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('background-color', '#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function() {
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function() {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function() {
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function loopAnimation(selector) {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $(selector).animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopAnimation(selector);
        });
    }

    $('#balloons_flying').click(function() {
        $('.balloon-border').animate({ top: -500 }, 8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3').addClass('balloons-rotate-behaviour-two');

        loopAnimation('#b1');
        loopAnimation('#b2');
        loopAnimation('#b3');
        loopAnimation('#b4');
        loopAnimation('#b5');
        loopAnimation('#b6');
        // loopAnimation('#b7');
        // loopAnimation('#b8');

        $(this).fadeOut('slow').delay(5000).promise().done(function() {
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function() {
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function() {
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function() {
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function() {
            $('#wish_message').fadeIn('slow');
        });
    });

    $('#wish_message').click(function() {
        vw = $(window).width() / 2;

        $('#b1,#b2,#b3,#b4,#b5,#b6').stop();
        $('#b1').attr('id', 'b11');
        $('#b2').attr('id', 'b22');
        $('#b3').attr('id', 'b33');
        $('#b4').attr('id', 'b44');
        $('#b5').attr('id', 'b55');
        $('#b6').attr('id', 'b66');
        // $('#b7').attr('id', 'b77');
        // $('#b8').attr('id', 'b88');
        adjustLayout();
        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(3000).promise().done(function() {
            $('#story').fadeIn('slow');
        });
    });

    $('#story').click(function() {
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function() {
            $('.message').fadeIn('slow');
        });

        function msgLoop(i) {
			const totalMessages = $("p").length; // Get total number of <p> elements
			$("p:nth-child(" + i + ")").fadeOut('slow').promise().done(function () {
				// Hide the associated image of the current <p>
				$("p:nth-child(" + i + ")").next("img").fadeOut('slow').promise().done(function () {
					i = i + 1;
					if (i <= totalMessages) {
						// Show the next <p> and its associated image
						$("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
						$("p:nth-child(" + i + ")").next("img").fadeIn('slow').delay(1000);
						msgLoop(i);
					} else {
						$("p:nth-child(" + (i - 1) + ")").fadeOut('slow').promise().done(function () {
							$("p:nth-child(" + (i - 1) + ")").next("img").fadeOut('slow').promise().done(function () {
								$('.cake').fadeIn('fast'); // Show the cake at the end
							});
						});
					}
				});
			});
		}
		
		msgLoop(0);
    });

	$('#story').click(function() {
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function() {
            $('.message').fadeIn('slow');
        });

        function msgLoop(i) {
			const totalMessages = $("p").length; // Get total number of <p> elements
			$("p:nth-child(" + i + ")").fadeOut('slow').promise().done(function () {
				// Hide the associated image of the current <p>
				$("p:nth-child(" + i + ")").next("img").fadeOut('slow').promise().done(function () {
					i = i + 1;
					if (i <= totalMessages) {
						// Show the next <p> and its associated image
						$("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
						$("p:nth-child(" + i + ")").next("img").fadeIn('slow').delay(1000);
						msgLoop(i);
					} else {
						$("p:nth-child(" + (i - 1) + ")").fadeOut('slow').promise().done(function () {
							$("p:nth-child(" + (i - 1) + ")").next("img").fadeOut('slow').promise().done(function () {
								$('.cake').fadeIn('fast'); // Show the cake at the end
							});
						});
					}
				});
			});
		}
		
		msgLoop(0);
    });

	// $('#restart').click(function() {
	// 	location.reload();
	// });

});
