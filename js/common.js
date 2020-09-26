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

  $(".depth1 > li").hover(
    function () {
      $(this).find(".depth2").stop().slideDown(300);
    },
    function () {
      $(this).find(".depth2").stop().slideUp(300);
    }
  );

  //스크롤 이벤트
  var sct;
  $(window).scroll(function () {
    sct = $(this).scrollTop();

    if ($("#container").children().is("#mainsection")) {
      mainScroll();
    }
  });

  function mainScroll() {
    var serviceNear = $(".service").offset().top - $(window).height() / 2;
    if (sct >= serviceNear) {
      $(".content").addClass("on");
    } else if (sct === 0) {
      $(".content").removeClass("on");
    }

    var ideologyNear = $(".ideology").offset().top - $(window).height() / 2;
    if (sct >= ideologyNear) {
      $(".ideology").addClass("on");
    } else if (sct === 0) {
      $(".ideology").removeClass("on");
    }
  }

  //윈도우 팝업
  if ($.cookie('pop') != 'none') {
    window.open('popup.html', '창제목', 'top=100, left=200, width=660, height=720') // 괄호안 옵션 필수 입력, 창제목은 표시되지않음, 사이즈를 없애면 기본 윈도우 크기
  }




})(jQuery);