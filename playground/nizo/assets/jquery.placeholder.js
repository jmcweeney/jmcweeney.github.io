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

/*

Example usage:
if (!Modernizr.input.placeholder){
    $('input[placeholder]').placeholder();
}

*/
(function($) {

$.fn.placeholder = (function(){
    this.each(function(i, item) {
        var input = $(item), placeholderRemoved = false, removePromptFunc;
		
        if (input.attr("placeholder")) {		
            var removePromptFunc = function(){
                input.removeClass("placeholder-visible");
                if (!placeholderRemoved && input.val() == input.attr("placeholder")){
                    input.val("");
                    placeholderRemoved = true;
                }
            };
            
            var addPromptFunc = function() {
                if (input.attr("placeholder") && (!input.val() || input.val() == input.attr("placeholder"))) {
                    input.addClass("placeholder-visible");
                    input.val(input.attr("placeholder"));
                    
                    input.change(removePromptFunc);
                    input.focus(removePromptFunc);
                    input.parents("form").submit(removePromptFunc);
                    placeholderRemoved = false;
                }
            };
            
		
            addPromptFunc();
            input.blur(addPromptFunc);
        }
    });
    
    return this;
});


})(jQuery);

}
/*
     FILE ARCHIVED ON 16:39:00 Dec 03, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:41:25 Jul 05, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 68.756
  exclusion.robots: 0.178
  exclusion.robots.policy: 0.165
  RedisCDXSource: 3.211
  esindex: 0.019
  LoadShardBlock: 44.738 (3)
  PetaboxLoader3.datanode: 47.422 (4)
  CDXLines.iter: 17.139 (3)
  load_resource: 46.25
  PetaboxLoader3.resolve: 39.453
*/