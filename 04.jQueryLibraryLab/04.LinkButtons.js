function attachEvents() {
  $("a.button").on("click",clickedBtn);

    function clickedBtn() {
      $(".selected").removeClass("selected");
      $(this).addClass("selected");
    }
}