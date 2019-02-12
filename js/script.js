$(document).on("scroll", function() {

  if($(document).scrollTop()>150) {
    $("nav").addClass("bg-blue shrink");
  } else {
    $("nav").removeClass("bg-blue shrink");
  }
});