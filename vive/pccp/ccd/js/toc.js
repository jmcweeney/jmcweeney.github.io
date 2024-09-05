sfHover = function() {
    var sfEls = document.getElementById("nav").getElementsByTagName("li");
    for (i in sfEls) {
        sfEls[i].onmouseover=function() {
            this.className+=" ie_does_hover";
        }
        sfEls[i].onmouseout=function() {
            this.className=this.className.replace(new RegExp(" ie_does_hover"), "");
        }
    }
}
if (window.attachEvent) window.attachEvent("onload", sfHover);
