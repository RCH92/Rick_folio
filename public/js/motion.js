$(document).ready(function () {
    // getJson();
    navActive();
    $('#social-bar').css("color", "black");
    
})
function navActive(){
    $('#nav-stills').attr("data-link", "inactive");
    $('#nav-home').attr("data-link", "inactive");
    $('#nav-about').attr("data-link", "inactive");
    $('#nav-motion').attr("data-link", "active");
    
    $('.line').attr("style", "background: black");
   
}