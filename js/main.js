// JavaScript Document

$(function () {
	
	// gnb
	$('.headertop .open').click(function () {
		$('.headertop .open').hide();
		$('.headertop .close').show();
		$('.gnb').stop().slideDown();
	});
	$('.headertop .close').click(function () {
		$('.headertop .close').hide();
		$('.headertop .open').show();
		$('.gnb').stop().slideUp();
	});
	
	
	// 검색창
	$('.search_icon').click(function () {
        $('.search').toggle();
        return false;
    });
	
});

   
   // 배너 슬라이드
   $(document).ready(function() {
	 var swiper = new Swiper('.main_visual .swiper-container',{
		slidesPerView:1,
		loop:true,
		autoplay:{
			delay:4000,
			disableOnInteraction:false,
		   },
		   
		   allowTouchMove:true,
		   
		   pagination:{
			el:'.main_visual .swiper-pagination',
			clickable:true,
		},
		
		breakpoints:{
			1025:{
				allowTouchMove:true,
			}
		}
	});	
	
	
	
	// 세번째 article 이미지 슬라이드
	
	var swiper2 = new Swiper('.article .swiper-container', {
		slidesPerView:1,
		sliderPerGroup:2,
		loop:true,
		loopFileGroupWithBlank:true,
		pagination: {
		},
		navigation: {
			nextEl:'.next',
			prevEl:'.prev',
		},
    });
	
	
	
	// 업버튼
   $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $("#up-btn").addClass("on");
        } else {
            $("#up-btn").removeClass("on");
        };
        $("#up-btn a").click(function(){   
            $("html, body").stop().animate({
                scrollTop: 0
            }, 1000);
            
        });
    });
	
	
	// 모바일 gnb
	$('.open-m').click(function () {
		$('.open-m').hide();
		$('.close-m').show();
		$('.gnb_m').stop().fadeIn(1000);
	});
	$('.close-m').click(function () {
		$('.close-m').hide();
		$('.open-m').show();
		$('.gnb_m').stop().fadeOut(1000);
	});
	
		
});