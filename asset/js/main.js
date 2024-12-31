// 메인 슬라이드
const mainSlide = new Swiper('.main_slide',{
    pagination:{
        el:".swiper-pagination",
        clickable : true
    },
    autoplay: {
      delay:3000
    }
});

// 카드 슬라이드
const cardSlide = new Swiper('.card_slide',{
    slidesPerView: 'auto',
    spaceBetween:12,
    autoplay: {
        delay: 0, 
        desableOnInteraction: false, 
    },
    speed: 3000,
    loop: true,
    freemode: true

});

// 글꼴 롤링
a = $('.sc_font .font_list').clone();

$('.group_font').append(a);

// 네비게이션
$('.header_wrapper .gnb_item').hover(function(){
  if ($(this).find('.depth2').length) {
    $(this).find('.depth2').addClass('show');
    $('.header_wrapper').addClass('header-active');
  }
},function(){
  $(this).find('.depth2').removeClass('show');
  $('.header_wrapper').removeClass('header-active');

  $('.header_wrapper .depth2_item a').removeClass('on');
  $('.header_wrapper .depth2 .depth2_item:first-child a').addClass('on');

})

$('#header .depth2 .depth2_item:first-child a').addClass('on');

$('#header .depth2_item').hover(function(){
  $(this).siblings().find('a').removeClass('on')
  $(this).find('a').addClass('on')
})

// 헤더 스크롤 고정
let lastScroll = 0;

$(window).scroll(function(){
    curr = $(this).scrollTop();//

    if (curr >= 95) {
      if (curr > lastScroll) {
          $('.header_wrapper').addClass('hide')
      }else{
          $('.header_wrapper').removeClass('hide')
      }
    }else{
      $('.header_wrapper').removeClass('hide')
    }
    lastScroll = curr;
  })

// 동영상 마우스 버튼
$('.video_btn').click(function(){
  if ($(this).hasClass('show')) {
    $('#video_obj').trigger('load');
    // $('#video_obj')[0].currentTime=0;
    // $('#video_obj')[0].play()
  } else {
    $('#video_obj').trigger('pause');
  }
  $(this).toggleClass('show');
})

// 하단 관련사이트 버튼
$('.family_btn').click(function(){
  $('.family_list').toggleClass('show');
})

// 메뉴 버튼
$('.menu_btn').click(function(){
  $('.header_wrapper').css('display','none')
  $('html').css('overflow','hidden')
  $('.group_menu').addClass('on');
})
$('.menu_closebtn').click(function(){
  $('.header_wrapper').css('display','block')
  $('html').css('overflow','auto')
  $('.group_menu').removeClass('on');
})

$('.menugnb_close').click(function(e){
  e.preventDefault();

  if ($(this).hasClass('on')) {
      $(this).removeClass('on').siblings('.depth2').stop().slideUp();
  } else {
      $('.menugnb_close').removeClass('on').siblings('.depth2').stop().slideUp();
      $(this).addClass('on').siblings('.depth2').stop().slideDown();
  }
})