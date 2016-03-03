var main = function () 
{
	"use strict";

	var url= "http://api.flickr.com/services/feeds/photos_public.gne?" + "tags=dogs&format=json&jsoncallback=?";

	$.getJSON(url, function (flickrResponse)
	{
		flickrResponse.items.forEach(function (photo)
		{
			//create a new jQuery element to hold the image
			var $img = $("<img>").hide();
			
			// set the attribute to the url
			// contained in the response
			$img.attr("src", photo.media.m);

			// attach the img tage to the main
			// photos element
			$("main .photos").append($img);
			$img.fadeIn();
		});
		
	});

};

$(document).ready(main); 