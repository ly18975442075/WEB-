$(document).ready(function(){
	$("#popular").css("border-bottom","2px solid #00a1d6");	
	$(".weekly-list").hide();
	$(".history-list").hide();
	$("#popular").click(function(){
		$(".nav-tabs__item").css("border-bottom","2px solid transparent");
		$(this).css("border-bottom","2px solid #00a1d6");
		$(".popular-list").fadeIn(600);
		$(".weekly-list").hide();
		$(".history-list").hide();
	});
	$("#weekly").click(function(){
		$(".nav-tabs__item").css("border-bottom","2px solid transparent");
		$(this).css("border-bottom","2px solid #00a1d6");
		$(".popular-list").hide();
		$(".weekly-list").fadeIn(600);
		$(".history-list").hide();
	});
	$("#history").click(function(){
		$(".nav-tabs__item").css("border-bottom","2px solid transparent");
		$(this).css("border-bottom","2px solid #00a1d6");
		$(".popular-list").hide();
		$(".weekly-list").hide();
		$(".history-list").fadeIn(600);
	});
	$("p.video-name").click(function(){
		var  link=$(this).parent().siblings().children("a").attr("href");
		window.open(link);
	})
})