/**
 * Homepage scroll and stick
 */
$(".extra").each(function() {
	var t = $(this).position().top;
	var n = parseInt($(this).attr("order")) * 26;
	$(this).attr("pos",t);
	$(this).attr("scroll",t-n);
});

$(window).scroll(function(e) {
	var s = $(this).scrollTop();
	$(".extra").each(function() {
		var t = $(this).attr("pos");
		var l = $(this).attr("scroll");
		var n = parseInt($(this).attr("order")) * 26 + 5;
		if (l < s) {
			$(this).css("position","fixed").css("top",n).css("right","8%");
			$(this).find(".up").show();
		} else {
			$(this).css("position","relative").css("top",0).css("right","");
			$(this).find(".up").hide();
		}
	});
});