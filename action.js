$(document).ready(function(){
	$("#orb").click(function(){
		if($(this).hasClass("sun"))
		{
			$(this).removeClass("sun").addClass("noon");
		}
		else if($(this).hasClass("noon") )
		{
			$(this).removeClass("noon").addClass("moon");
			$("#moonspot1").addClass("visible");
			$("#moonspot2").addClass("visible");
			$("#moonspot3").addClass("visible");
		}
		else{
			$("#moonspot1").removeClass("visible");
			$("#moonspot2").removeClass("visible");
			$("#moonspot3").removeClass("visible");
			$(this).removeClass("moon").addClass("sun");
			
		}
		if ($('#sky').hasClass('day'))
		{
		    $('#sky').removeClass('day').addClass('mid-day');
		}
		else if ($('#sky').hasClass('mid-day'))
		{
		    $('#sky').removeClass('mid-day').addClass('night');
		}
		else {
		    $('#sky').removeClass('night').addClass('day');
		}
	});
});