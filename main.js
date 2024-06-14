$(function () {
  // 設定
  let interval = 5000; // 切り替わりの間隔（ミリ秒）
  let fade_speed = 1000; // フェード処理の早さ（ミリ秒）
  $(".slider-items img").hide();
  $(".slider-items img:first").addClass("active").show();

  let changeImage = function () {
    let $active = $(".slider-items img.active");
    let $next = $active.next("img").length ? $active.next("img") : $(".slider-items img:first");

    $active.fadeOut(fade_speed).removeClass("active");
    $next.fadeIn(fade_speed).addClass("active");
  };

  setInterval(changeImage, interval);

    //ハンバーガーメニュー
    $("#drawer_toggle").click(function () {
        $(this).toggleClass("active");
        $("#global_nav").toggleClass("active");
      });
    
      //ハンバーガーメニュー　同ページのアンカーに飛んでも表示消す
      $("#global_nav ul li a").click(function () {
        $("#drawer_toggle").removeClass("active");
        $("#global_nav").removeClass("active");
      });
    

});

