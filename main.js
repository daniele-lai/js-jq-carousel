$(function () {

  //Aggiungiamo eventi alle due frecce
  $(".next").click(
    function () {
      next();
    }
  );

  $(".prev").click(
    function () {
      prev();
    }
  );

  //Keyboard event
  $(document).keydown(function(e){
    if (e.which == 37) {
      prev();
    }
    if (e.which == 39) {
      next();
    }

  });

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
