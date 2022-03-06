$(document).ready(function() {	

	//select all the a tag with name equal to modal
	$('a[name=modal]').click(function(e) {
		//Cancel the link behavior
		e.preventDefault();
		
		//Get the A tag
		var au = $(this).attr('id');
		var id = "#dialog";
	
		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		
		//transition effect		
		$('#mask').fadeTo("slow",0.8);	
	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
              
		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
	
		$(id).html(//"<a href='#' class='close'><img src='img/close.png'></img></a>" +
				"<audio controls autoplay> " +
				"<source src='audio/" + au + ".mp3'> " + 
				"<source src='audio/" + au + ".ogg'> " + 
				"</audio> " +
				"<a href='audio/" + au + ".wma'><img src='img/download.png' alt='скачать в высоком качестве' title='скачать в высоком качестве' /></a>"
				);

		//if close button is clicked
		$('.window .close').click(function (e) {
			//Cancel the link behavior
			e.preventDefault();
			
			$('#mask').hide();
			$('.window').hide();
			$('.window').html("");
		});		
		
		//transition effect
		$(id).fadeIn(1000); 
	
	});
	
	
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
		$('.window').html("");
	});			
	

	$(window).resize(function () {
	 
 		var box = $('#boxes .window');
 
        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
      
        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight});
               
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        box.css('top',  winH/2 - box.height()/2);
        box.css('left', winW/2 - box.width()/2);
	 
	});	
	
});
