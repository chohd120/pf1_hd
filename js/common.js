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

  $(".slideInner").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: "linear", // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow:
      '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
  });
})(jQuery);
