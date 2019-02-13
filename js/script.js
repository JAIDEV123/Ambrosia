$(document).on("scroll", function() {

  if($(document).scrollTop()>75) {
    $("nav").addClass("bg-blue shrink");
    $("a h1").addClass("txt-header");
    $("nav div ul li a").addClass("txt-header");
  } else {
    $("nav").removeClass("bg-blue shrink");
    $("a h1").removeClass("txt-header");
    $("nav div ul li a").removeClass("txt-header");
  }
});