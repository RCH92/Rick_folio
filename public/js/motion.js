$(document).ready(function () {
    // getJson();
    navActive();
})
function navActive(){
    $('#nav-stills').attr("data-link", "inactive");
    $('#nav-home').attr("data-link", "inactive");
    $('#nav-about').attr("data-link", "inactive");
    $('#nav-motion').attr("data-link", "active");
    $('#social-bar').attr("style", "color: black");
    $('.line').attr("style", "background: black");
    console.log("working" + $('#nav-stills').data("link"))
}