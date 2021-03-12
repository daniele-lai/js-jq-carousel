$(function () {

  //Aggiungiamo eventi alle due frecce
  $(".next").click(
    function () {
      next();
      nextBullet();
    }
  );

  $(".prev").click(
    function () {
      prev();
      prevBullet();
    }
  );

  //Pallini
  $(".nav > i").click(function () {
    $(".nav > i").removeClass("active");
    $(this).addClass("active");
  });

  function nextBullet() {
    var pallino = $(".nav > i.active");
    if (pallino.hasClass("last") == true) {
      $(".nav > i.first").addClass("active");
    }
    pallino.removeClass("active");
    pallino.next().addClass("active");
  }

  function prevBullet() {
    var pallino = $(".nav > i.active");
    if (pallino.hasClass("first") == true) {
      $(".nav > i.last").addClass("active");
    }
    pallino.removeClass("active");
    pallino.prev().addClass("active");
  }

  //Keyboard event
  $(document).keydown(function(e){
    if (e.which == 37) {
      prev();
      prevBullet();
    }
    if (e.which == 39) {
      next();
      nextBullet();
    }

  });

  //Funzioni
  function next() {
    var immagine = $(".images img.active");
    if ( immagine.hasClass("last") == true) {
      $(".images img.first").addClass("active");
    }
    immagine.removeClass("active");
    immagine.next().addClass("active");
  };

  function prev() {
    var immagine = $(".images img.active");
    if ( immagine.hasClass("first") == true) {
      $(".images img.last").addClass("active");
    }
    immagine.removeClass("active");
    immagine.prev().addClass("active");
  };


});
