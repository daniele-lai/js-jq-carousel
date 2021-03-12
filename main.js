$(function () {

  //Aggiungiamo eventi alle due frecce
  $(".next").click(
    function () {
      var immagine = $(".images img.active");
      if ( immagine.hasClass("last") == true) {
        $(".images img.first").addClass("active");
      }
      immagine.removeClass("active");
      immagine.next().addClass("active");
    }
  );

  $(".prev").click(
    function () {
      var immagine = $(".images img.active");
      if ( immagine.hasClass("first") == true) {
        $(".images img.last").addClass("active");
      }
      immagine.removeClass("active");
      immagine.prev().addClass("active");
    }
  );

  $(document).keydown(function(e){
    if (e.which == 37) {
      var immagine = $(".images img.active");
      if ( immagine.hasClass("first") == true) {
        $(".images img.last").addClass("active");
      }
      immagine.removeClass("active");
      immagine.prev().addClass("active");
    }
    if (e.which == 39) {
      var immagine = $(".images img.active");
      if ( immagine.hasClass("last") == true) {
        $(".images img.first").addClass("active");
      }
      immagine.removeClass("active");
      immagine.next().addClass("active");
    }



});



});
