(function ($) {
  //모든 데이터 읽고 난 후 $(window).load
  // $(window).load(function () {
  //     $('.introAni').delay(1000).fadeOut(1000)
  // })

  var colorCode = ["gray"];
  var minCnt = setInterval(minusCount, 1000);
  var k = 5;
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

  $("#containerBox").load("main.html");
})(jQuery);
