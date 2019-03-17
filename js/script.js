$(document).on("scroll", function() {

  if($(document).scrollTop()>25) {
    $("nav").addClass("bg-blue shrink");
    $("a h1").addClass("txt-header");
    $("nav div ul li a").addClass("txt-header");
  } else {
    $("nav").removeClass("bg-blue shrink");
    $("a h1").removeClass("txt-header");
    $("nav div ul li a").removeClass("txt-header");
  }
});


ScrollReveal().reveal('.reveal0', {easing: 'ease-in-out'});
ScrollReveal().reveal('.reveal5', {delay:500, easing: 'ease-in-out'});
ScrollReveal().reveal('.reveal10', {delay:1000, easing: 'ease-in-out'});
ScrollReveal().reveal('.reveal15', {delay:1500, easing: 'ease-in-out'});
