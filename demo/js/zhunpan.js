$(document).ready(function () {
	var scrollTop = $(document).scrollTop() + 100;
	if (scrollTop > 748) {
		$(".guide").addClass("gtop");
	} else {
		$(".guide").removeClass("gtop");
	}
	setInterval("ab()", 2000);
});
function ab() {
	var leng = $(".roll ul li").length - 1;
	if (leng > 0) {
		var li = $(".roll ul li").eq(0);
		var wid = $(".roll ul li").eq(0).width();
		var text = $(".roll ul li").eq(0).text();
		$(".roll ul li").eq(0).animate({
			"margin-left" : "-" + wid + "px"
		}, 1900, function () {
			$('.roll ul li').eq(0).remove();
			$("<li>" + text + "</li>").appendTo(".roll ul");
		});
	}
}
$(window).scroll(function () {
	var scrollTop = $(document).scrollTop() + 100;
	if (scrollTop > 790) {
		$(".guide").addClass("gtop");
	} else {
		$(".guide").removeClass("gtop");
	}
});
$(".guide li").click(function () {
	$(this).animate({
		height : "55px"
	}, 600);
	$(this).siblings().animate({
		height : "30px"
	}, 600);
});
$(".rule, .return ,.add").click(function () {
	var a = $(this).attr("data-height");
	if (a != -1) {
		$("body,html").animate({
			"scrollTop" : "" + a + "px"
		}, 600);
	}
});
$(".login").click(function () {
	if (!$(this).hasClass("over")) {		
		$(".zhuanti1gz").fadeIn(300);
	}
});
$(".address a").click(function () {
	var myDate = new Date(Date.parse($("#now").val()));
	if (myDate > new Date(Date.parse("2016-05-30 17:00:00"))) {
		cjtsshow(11);
	} else {
		cjtsshow(10);
	}
});
$(".Sub").click(function () {
	var name = $(this).parents().find(".name").val();
	var addr = $(this).parents().find(".addr").val();
	var phone = $(this).parents().find(".phone").val();
	if (!name) {
		$(this).parents().find(".name").focus();
	} else if (!addr) {
		$(this).parents().find(".addr").focus();
	} else if (!(/^1[3|4|5|7|8]\d{9}$/.test(phone))) {
		$(this).parents().find(".phone").focus();
	} else {}
	
});
function showpopup(e) {
	$(".zhuanti1gz").fadeIn(300);
	$("#zhuanti_0" + e + "").fadeIn(300);
}
function hidepopup(e) {
	$(".zhuanti1gz").fadeOut(300);
	$("#zhuanti_0" + e + "").fadeOut(300);
}
function cjtsshow(e) {
	$("html").css("overflow-x", "hidden");
	$("#cjtshide" + e + "").fadeIn(300);
	$("body,html").animate({
		"scrollTop" : "900px"
	}, 600);
}
function cjtshide(e) {
	$("html").css("overflow-x", "auto");
	$("#cjtshide" + e + "").fadeOut(300);
}
function lottery(e) {
	$(".zpr").rotate({
		angle : 0,
		duration : 5000,
		animateTo : 1680 + 45 * e,
		easing : $.easing.easeInOutExpo,
		callback : function () {
			cjtsshow(e);
		}
	});
}
