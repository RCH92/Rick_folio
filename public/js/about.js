$(document).ready(function () {
 
    navActive();
})
function navActive(){
    $('#nav-stills').attr("data-link", "inactive");
    $('#nav-home').attr("data-link", "inactive");
    $('#nav-about').attr("data-link", "active");
    $('#nav-motion').attr("data-link", "inactive");
    $('#social-bar').attr("style", "color: whitesmoke");
    $('#nav-options').attr("style", "color: whitesmoke");
    $('.line').attr("style", "background: whitesmoke");
    $('#nav-underline').attr("style", "background: whitesmoke");
    console.log("working" + $('#nav-stills').data("link"))
}