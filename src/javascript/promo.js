$(document).ready(function () {
  $(".img1").addClass("yes");
  $(".box1").click(function () {
    if ($(".img1").hasClass("yes")) {
      $(".img1").removeClass("yes");
      $(".img1").addClass("yes2");
      $(".img1").css("margin-left", "38vw");
      $(".img1").css("rotate", "90deg");
    } else if ($(".img1").hasClass("yes2")) {
      $(".img1").removeClass("yes2");
      $(".img1").addClass("yes3");
      $(".img1").css("margin-top", "8.5vw");
      $(".img2").removeClass("no");
      $(".img2").addClass("yes");
    } else if ($(".img2").hasClass("yes")) {
      $(".img2").removeClass("yes");
      $(".img2").addClass("yes2");
      $(".img2").css("margin-left", "3.5vw");
    } else if ($(".img2").hasClass("yes2")) {
      $(".img2").removeClass("yes2");
      $(".img2").addClass("yes3");
      $(".img2").css("margin-top", "-22.2vw");
      $(".img3").removeClass("no");
      $(".img3").addClass("yes");
    } else if ($(".img3").hasClass("yes")) {
      $(".img3").removeClass("yes");
      $(".img3").addClass("yes2");
      $(".img3").css("rotate", "360deg");
      $(".img3").css("margin-left", "20vw");
      $(".img3").css("margin-top", "-48vw");
    } else if ($(".img3").hasClass("yes2")) {
      $(".img3").removeClass("yes2");
      $(".img3").addClass("yes3");
      $(".img3").css("margin-top", "-23.8vw");
      $(".img4").removeClass("no");
      $(".img4").addClass("yes");
    } else if ($(".img4").hasClass("yes")) {
      $(".img4").removeClass("yes");
      $(".img4").addClass("yes2");
      $(".img4").css("margin-left", "-0.9vw");
    } else if ($(".img4").hasClass("yes2")) {
      $(".img4").removeClass("yes2");
      $(".img4").addClass("yes3");
      $(".img4").css("rotate", "360deg");
      $(".img4").css("margin-top", "-26.3vw");
      $(".img4").css("margin-left", "3.3vw");
      $(".img5").removeClass("no");
      $(".img5").addClass("yes");
    } else if ($(".img5").hasClass("yes")) {
      $(".img5").removeClass("yes");
      $(".img5").addClass("yes2");
      $(".img5").css("margin-left", "3.5vw");
    } else if ($(".img5").hasClass("yes2")) {
      $(".img5").removeClass("yes2");
      $(".img5").addClass("yes3");
      $(".img5").css("margin-top", "-27vw");
      $(".img6").removeClass("no");
      $(".img6").addClass("yes");
    } else if ($(".img6").hasClass("yes")) {
      $(".img6").removeClass("yes");
      $(".img6").addClass("yes2");
      $(".img6").css("rotate", "360deg");
    } else if ($(".img6").hasClass("yes2")) {
      $(".img6").removeClass("yes2");
      $(".img6").addClass("yes3");
      $(".img6").css("margin-top", "-22vw");
      $(".img7").removeClass("no");
      $(".img7").addClass("yes");
    } else {
      $(".img1").removeClass("yes3");
      $(".img2").removeClass("yes3");
      $(".img3").removeClass("yes3");
      $(".img4").removeClass("yes3");
      $(".img5").removeClass("yes3");
      $(".img6").removeClass("yes3");
      $(".img7").removeClass("yes");
      $(".img1").addClass("yes");
      $(".img2").addClass("no");
      $(".img3").addClass("no");
      $(".img4").addClass("no");
      $(".img5").addClass("no");
      $(".img6").addClass("no");
      $(".img7").addClass("no");
      $(".img1").css("margin-left", "20vw");
      $(".img2").css("margin-left", "30vw");
      $(".img3").css("margin-left", "25vw");
      $(".img4").css("margin-left", "20vw");
      $(".img5").css("margin-left", "20vw");
      $(".img6").css("margin-left", "35vw");
      $(".img7").css("margin-left", "69vw");
      $(".img1").css("margin-top", "-10vw");
      $(".img2").css("margin-top", "-60vw");
      $(".img3").css("margin-top", "-55vw");
      $(".img4").css("margin-top", "-45vw");
      $(".img5").css("margin-top", "-35vw");
      $(".img6").css("margin-top", "-30vw");
      $(".img7").css("margin-top", "-29vw");
      $(".img1").css("rotate", "360deg");
      $(".img3").css("rotate", "90deg");
      $(".img4").css("rotate", "90deg");
      $(".img6").css("rotate", "90deg");
    }
  });
});
