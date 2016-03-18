var main = function () 
{
	"use strict";

	$(".search-field button").on("click", function(event) {
		var $search_field = $(""),
		search_text = $(".search-field input").val();
	

	var url= "http://api.flickr.com/services/feeds/photos_public.gne?" + "tags=" +search_text+ "&format=json&jsoncallback=?";




	$.getJSON(url, function (flickrResponse)
	{


		flickrResponse.items.forEach(function (photo)
		
		{
				


			//create a new jQuery element to hold the image
			var $img = $("<img>").hide();


			
			// set the attribute to the url
			// contained in the response
			$img.attr("src", photo.media.m);
				
			$(".img").empty();
				
			// attach the img tag to the main
			// photos element
			$("main .photos").append($img);					
			$img.fadeIn();
			
			setTimeout(function ()
				{
					
				}, 1000);
			});
	
		});
		
	});

};

$(document).ready(main); 