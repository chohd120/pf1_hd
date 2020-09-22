(function ($) {
  //모든 데이터 읽고 난 후 $(window).load
  $(window).load(function () {
    var colorCode = ["gray"];
    var k = 5;
    var minCnt = setInterval(minusCount, 1000);

    function minusCount() {
      k--;
      if (k === 0) {
        clearInterval(minCnt);
        $(".introAni").fadeOut(500);
        return false;
      }
      $(".introAni span").text(k).css({
        color: colorCode,
      });
    }
  });

  $("#containerBox").load("main.html");

  $(".nav .depth1 > li > a").on("click", function () {
    var url = $(this).attr("href");
    $("#container").remove();
    $("#containerBox").load(url);
    return false;
  });

  $(".nav .depth2 > li > a").on("click", function () {
    var url = $(this).attr("href");
    $("#container").remove();
    $("#containerBox").load(url);
    return false;
  });

  $('.depth1 > li').hover(
    function () {
      $(this).find('.depth2')
        .stop().slideDown(300)
    },
    function () {
      $(this).find('.depth2')
        .stop().slideUp(300)
    }
  )
})(jQuery);