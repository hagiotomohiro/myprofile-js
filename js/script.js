// カルーセル
$('.carousel').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
});

// リンクのアニメーション
$(function() {
  $('.btn-animation').on('mouseover', function() {
    $(this).animate({
      opacity:0.5,
    },300);
  });

  $('.btn-animation').on('mouseout', function() {
    $(this).animate({
      opacity:1.0,
    },300);
  });

// TOPボタン
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });

// ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
  $('a[href^="#"]').click(function() {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    } else {
      $target = $(href)
    }
    const position = $target.offset().top;
    $('html, body').animate({'scrollTop': position },speed, 'swing');
    return false;
  })

// スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function() {
    // スクロールした量を取得
    const windowScroll = $(window).scrollTop();
    // ウィンドウの高さを取得
    const windowHeight = $(window).height();

    $('section').each(function() {
      // それぞれのセクションのウィンドウからの高さを取得
      const position = $(this).offset().top;
      // スクロールした量が要素の高さを上回ったらその数値にウィンドウの高さを引き、最後に100pxを足す
      if (windowScroll > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

// Worksの画像をクリックしたときにモーダルで拡大表示する
  $('#works img').click(function() {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    $('.big-img').attr({
      src: imgSrc,
      alt: imgAlt,
    });
    $('.modal').fadeIn();
  });

// 閉じるボタンをクリックしたときにモーダルを閉じる
  $('.close-btn').click(function() {
    $('.modal').fadeOut();
  });
});