var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* START spaghetti, undocumented js */
;(function($) {
    var container,
        parts,
        windowHeight,
        leftMargin,
        finalHeadingPos,
        heading,
        documentHeight

    var DISTANCE = 1800,
        COMPETENT = !$.browser.msie || $.browser.version > 7

    function init() {
        container = $("#parts")
        parts = container.find("img").not("#img-002_s1")
        windowHeight = $(window).height()

        $("#header").css("height", windowHeight - 50)
        $("#footer").css(
            "height",
            Math.max(windowHeight / 2, $("#footer .inner").height()) + "px"
        )
        leftMargin = $("#header").offset().left
        heading = $("#header h1")
        //headerThreshold = $('#footer').offset().top + 50 - heading.outerHeight();
        finalHeadingPos = windowHeight / 2 - heading.height() - 50

        documentHeight = $("body").height()

        heading.css({
            position: "fixed",
            top: 0,
            left: leftMargin + 9 + "px"
        })

        var threshold = container.offset().top - windowHeight / 3
        var count = parts.length

        parts.each(function(i) {
            var me = $(this),
                posLeft =
                    (parseInt(me.css("marginLeft")) + me.width() / 2) /
                    container.width(),
                posTop =
                    (parseInt(me.css("marginTop")) + me.height() / 2) /
                    container.height()

            $(this).data("coords", {
                top: DISTANCE * posTop,
                left: DISTANCE * (posLeft - 0.5) * 4,
                origLeft: posLeft,
                origTop: posTop,
                angle:
                    (posLeft > 0.5 ? -1 : 1) *
                    Math.round(
                        parseInt(me.css("marginTop")) /
                            container.height() *
                            60 +
                            0
                    ),
                threshold: threshold + parseInt(me.css("marginTop"))
                //threshold: (threshold * (i + 1) / count + threshold) / 2
            })
        })

        parts.each(function() {
            var part = $(this),
                origLeft,
                origTop
            part.draggable({
                start: function() {
                    part.data("moved", true)
                },
                scroll: true,
                stop: function() {
                    part.css({})
                }
            })
        })
    }

    function ease(value, max) {
        return Math.sin((value / max - 1) * Math.PI / 2) * max + max
    }

    var locked = false
    function position() {
        var scrollTop = $(window).scrollTop()

        if (scrollTop >= documentHeight - windowHeight - 10) {
            locked = true
            $("#footer input.text").focus()
        } else if (scrollTop < 10 && locked) {
            locked = false
            parts.each(function(i) {
                var coords = $(this).data("coords")
                $(this).stop().animate(
                    {
                        top: coords.top + "px",
                        left: coords.left + "px"
                    },
                    1000
                )
            })
        }

        if (locked) {
            parts.css({
                top: 0,
                left: 0,
                "-webkit-transform": "rotate(0)",
                "-moz-transform": "rotate(0)"
            })
        } else {
            // Bring in left-side parts from the left and vice versa, the further from
            // the center, the further out the part starts. Parts at the top come in
            // horizontally, further down bring them in on an angle.
            parts.each(function(i) {
                var coords = $(this).data("coords"),
                    factor =
                        Math.max(0, coords.threshold - scrollTop) /
                        coords.threshold,
                    easedFactor = ease(factor, 1),
                    deg = Math.round(coords.angle * easedFactor),
                    rotate = "rotate(" + deg + "deg)"

                if ($(this).data("moved")) {
                    var func = "css"
                    $(this).data("moved", false)
                } else {
                    var func = "css"
                }
                $(this).stop()[func]({
                    //opacity: 1 - easedFactor,
                    top: coords.top * easedFactor + "px",
                    left: coords.left * easedFactor + "px",
                    "-webkit-transform": rotate,
                    "-moz-transform": rotate
                })
            })
        }

        var headingFactor = ease(scrollTop / (documentHeight - windowHeight), 1)
        heading.css({
            top: finalHeadingPos * Math.max(headingFactor * 4 - 3, 0) + "px"
        })

        $("#footer .inner").css({
            top:
                20 *
                    ease(
                        documentHeight - windowHeight - scrollTop,
                        windowHeight
                    ) +
                "px"
        })
    }

    function touchInit() {}

    $(function() {
        if ($("body").hasClass("home")) {
            $("#footer").css({
                height: $("#footer").height() + "px"
            })
            $("#footer .inner").css({
                position: "absolute",
                width: $("#footer").width() + "px",
                top: 0,
                left: 0
            })

            if (Modernizr.touch) {
                touchInit()
            } else {
                init()
                $(window).resize(function() {
                    init()
                    if (COMPETENT) {
                        position()
                    }
                })
                if (COMPETENT) {
                    $(window).scroll(position)
                    position()
                }
            }
        }
    })

    $(window).load(function() {
        $("#header .loading").fadeOut(300, function() {
            if ($(window).scrollTop() < 50) {
                $("#parts")
                    .css({
                        top: $(window).scrollTop() + 50 + "px",
                        opacity: 1
                    })
                    .animate(
                        {
                            top: 0
                        },
                        300
                    )
            } else {
                $("#parts").animate(
                    {
                        opacity: 1
                    },
                    300
                )
            }

            $("#header .content").fadeIn(300)
        })
        $("body").removeClass("loading")
    })
})(jQuery)
/* END spaghetti, undocumented js */


}
/*
     FILE ARCHIVED ON 16:38:55 Dec 03, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:41:26 Jul 05, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 151.703
  exclusion.robots: 0.109
  exclusion.robots.policy: 0.1
  cdx.remote: 0.067
  esindex: 0.01
  LoadShardBlock: 127.079 (3)
  PetaboxLoader3.resolve: 98.101 (2)
  PetaboxLoader3.datanode: 64.743 (4)
  CDXLines.iter: 15.817 (3)
  load_resource: 61.905
*/