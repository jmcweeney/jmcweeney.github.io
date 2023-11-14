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

(function($) {

    function init() {
    
        // Kill links to self
        $('a').each(function(i, item) {
            if (item.href == ('' + window.location).replace(/#.*$/, '').replace(/\?.*$/, '')) {
                $(item).addClass('current');
            }
            else {
                $(item).removeClass('current');
            }
        });

        if (!Modernizr.input.placeholder){
            $('input[placeholder]').placeholder();
        }
        
    };
    
    $(init);

})(jQuery);

}
/*
     FILE ARCHIVED ON 16:39:02 Dec 03, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:41:25 Jul 05, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 91.026
  exclusion.robots: 0.107
  exclusion.robots.policy: 0.098
  cdx.remote: 0.07
  esindex: 0.009
  LoadShardBlock: 63.087 (3)
  PetaboxLoader3.datanode: 63.447 (4)
  CDXLines.iter: 18.088 (3)
  load_resource: 416.156
  PetaboxLoader3.resolve: 410.566
*/