$(document).ready(function () {
    // getJson();
    navActive();
})
function navActive(){
    $('#nav-stills').attr("data-link", "inactive");
    $('#nav-home').attr("data-link", "inactive");
    $('#nav-about').attr("data-link", "inactive");
    $('#nav-motion').attr("data-link", "inactive");
    $('#social-bar').attr("style", "color: black");
    $('.line').attr("style", "background: black");
    console.log("working" + $('#nav-stills').data("link"))
}
$('.form-floating-label input, .form-floating-label textarea').focusin(function(){
    $(this).parent().addClass('has-value');
  });
  
  $('.form-floating-label input, .form-floating-label textarea').blur(function(){
    if(!$(this).val().length > 0) {
      $(this).parent().removeClass('has-value');
    }
  });
  
  