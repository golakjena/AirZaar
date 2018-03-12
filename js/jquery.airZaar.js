;(function($){
	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			var display = $(".topNav").css("display");
			if(display == "none"){
				$(this).addClass("navClose");
				$(".topNav").stop(true, true).fadeIn(300);
				$("html, body").css({
					overflow:"hidden"
				});
			}
			else{
				$(this).removeClass("navClose");
				$(".topNav").stop(true, true).fadeOut(300);
				$("html, body").css({
					overflow:"visible"
				});
			}
		});
	}

	function collapsePanel(elmClick, dvShowHide){
		$(elmClick).on("click", function(){
			var dvWidth = parseInt($(dvShowHide).css("width"));
			var leftPos = parseInt($(dvShowHide).css("left"));

			if(leftPos == 0){
				$(this).addClass("hidePanel");
				$(this).animate({
					left:0
				}, 300);
				$(dvShowHide).animate({
					left:-dvWidth
				}, 300);
			}
			else{
				$(this).removeClass("hidePanel");
				$(this).animate({
					left:dvWidth
				}, 300);
				$(dvShowHide).animate({
					left:0
				}, 300);
			}
		});
	}

	function collapsePanel2(elmClick, dvShowHide){
		$(elmClick).on("click", function(){
			var dvWidth = parseInt($(dvShowHide).css("width"));
			var leftPos = parseInt($(dvShowHide).css("left"));
  			$(".btnSideBar").toggleClass("hidePanel");

			if(leftPos == 0){
				$(dvShowHide).animate({
					left:-dvWidth
				}, 300);
			}
			else{
				$(dvShowHide).animate({
					left:0
				}, 300);
			}
		});
	}

	function collapsePanel3(elmClick, dvShowHide){
		$(elmClick).on("click", function(){
			var dvWidth = parseInt($(dvShowHide).css("width"));
			var leftPos = parseInt($(dvShowHide).css("left"));
			$(".btnSideBar").toggleClass("hidePanel");

			if(leftPos == 0){
				$(dvShowHide).animate({
					left:-dvWidth
				}, 300);
			}
			else{
				$(dvShowHide).animate({
					left:0
				}, 300);
			}
		});
	}

	function measurementNav(){
		$(".btnMeasurePanel").on("click", function(){
			var dvWidth = parseInt($(".dvMeasurement").css("width"));
			if(dvWidth == 174){
				$(this).addClass("hidePanel");
				$(".dvMeasurement").animate({
					width:54
				}, 300);
			}
			else{
				$(this).removeClass("hidePanel");
				$(".dvMeasurement").animate({
					width:174
				}, 300);
			}
		});
	}

	function weatherNav(){
		$(".btnWeatherNav").on("click", function(){
			var dvWidth = parseInt($(".bxWeatherOuter").css("width"));
			var rightPos = parseInt($(".bxWeatherOuter").css("right"));

			if(rightPos == -224){
				$(this).addClass("hidePanel");
				$(this).animate({
					right:dvWidth
				}, 300);
				$(".bxWeatherOuter").animate({
					right:0
				}, 300);
			}
			else{
				$(this).removeClass("hidePanel");
				$(this).animate({
					right:0
				}, 300);
				$(".bxWeatherOuter").animate({
					right:-dvWidth
				}, 300);
			}
		});
	}

	function leftNav(){
		$(".btnLeftNav").on("click", function(){
			var left = parseInt($(".dvLeft").css("left"));
			if(left == -250){
				$(this).addClass("hidePanel");
				$(this).animate({
					left:250
				}, 300);
				$(".dvLeft").animate({
					left:0
				}, 300);
			}
			else{
				$(this).removeClass("hidePanel");
				$(this).animate({
					left:0
				}, 300);
				$(".dvLeft").animate({
					left:-250
				}, 300);
			}
		});
	}

	function projectDetailsNav(){
		$(".mesureList li a").each(function(){
			$(this).on("click", function(){
				var display = $(this).next("ul").css("display");
				$(".subNavActive").removeClass("subNavActive");
				
				if($(this).next("ul").length > 0 && display == "none"){
					$(".subUL").slideUp(300);
					$(this).next(".subUL").slideDown(300);
					$(this).addClass("subNavActive");
				}
				else{
					$(".subUL").slideUp(300);
					$(this).next(".subUL").slideUp(300);
					$(this).removeClass("subNavActive");
				}
				//return false;
			});
		});
	}

	$(function(){
		mobileNav();
		collapsePanel($(".collapsablePanel"), $(".airMap"));
		collapsePanel($(".btnCollapsable"), $(".dvProjects"));

		if($(".dvAnalysisSettings").length > 0){
			collapsePanel2($(".btnSideBar"), $(".dvAnalysisSettings"));	
		}
		if($(".dvConstraints").length > 0){
			collapsePanel2($(".btnSideBar"), $(".dvConstraints"));	
		}
		if($(".dvShotPlanning").length > 0){
			collapsePanel2($(".btnSideBar"), $(".dvShotPlanning"));	
		}
		if($(".dvMeasurementOuter").length > 0){
			collapsePanel2($(".btnSideBar"), $(".dvMeasurementOuter"));	
		}

		if($(".dvAnalysisSettings").length > 0){
			collapsePanel2($(".btnCloseSlidebar"), $(".dvAnalysisSettings"));	
		}
		if($(".dvConstraints").length > 0){
			collapsePanel2($(".btnCloseSlidebar"), $(".dvConstraints"));	
		}
		if($(".dvShotPlanning").length > 0){
			collapsePanel2($(".btnCloseSlidebar"), $(".dvShotPlanning"));	
		}

		measurementNav();
		leftNav();
		weatherNav();
		projectDetailsNav();
	});

})(jQuery);




