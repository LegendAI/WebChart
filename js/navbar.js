$(function(){
	$(".navbar-nav").find("li").mouseover(function(){
		this.css("cursor","pointer");
	})
	$(".navbar-nav").find("li").eq(0).click(function(){
		var distance=$("#info").offset().top;
		$('#divnav').removeClass("in");
		$('html,body').animate({
			scrollTop:distance-80
		},300);
	})
	$(".navbar-nav").find("li").eq(1).click(function(){
		
		$('#divnav').removeClass("in");
		var distance=$("#bonusBase").offset().top;
		
		$('html,body').animate({
			scrollTop:distance-80
		},300);
	})
	$(".navbar-nav").find("li").eq(2).click(function(){
		
		$('#divnav').removeClass("in");
		var distance=$("#productRatio").offset().top;
		
		$('html,body').animate({
			scrollTop:distance-80
		},300);
	})
	$(".navbar-nav").find("li").eq(3).click(function(){
		
		$('#divnav').removeClass("in");
		var distance=$("#productBonus").offset().top;
		
		$('html,body').animate({
			scrollTop:distance-80
		},300);
	})
	$(".navbar-nav").find("li").eq(4).click(function(){
		
		$('#divnav').removeClass("in");
		var distance=$("#otherBonus").offset().top;
		
		$('html,body').animate({
			scrollTop:distance-80
		},300);
	})
	$(".navbar-nav").find("li").eq(5).click(function(){
		
		$('#divnav').removeClass("in");
		var distance=$("#frozenBonus").offset().top;
		
		$('html,body').animate({
			scrollTop:distance-80
		},300);
	})
	$(".navbar-nav").find("li").eq(6).click(function(){
		
		$('#divnav').removeClass("in");
		var distance=$("#summaryBonus").offset().top;
		
		$('html,body').animate({
			scrollTop:distance-80
		},300);
	})
	
	
})
