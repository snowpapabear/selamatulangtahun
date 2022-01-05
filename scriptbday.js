$(window).on("load", function () {
  $("h1").css({
    opacity: 1,
  });
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $(".birthday-cake").css({
    transform: "translate(0px, " + wScroll / 5 + "px)",
  });
});
