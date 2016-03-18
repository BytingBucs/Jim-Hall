var main = function () 
{
	"use strict";

	

		var url= "http://api.flickr.com/services/feeds/photos_public.gne?" + "tags=dogs&format=json&jsoncallback=?";

	$.getJSON(url, function (flickrResponse){
		flickrResponse.items.forEach(function (photo){

		var displayMessage = function(messageIndex)
		{
			var $img = $("<img>").text([messageIndex]).hide();
			$(".img").empty();

			$img.attr("src", photo.media.m);

			$("main .photos").append($img);

			$img.fadeIn();


			setTimeout(function ()
			{
				messageIndex = messageIndex + 1;
				displayMessage(messageIndex);
			}, 3000);
		};
		});
		//displayMessage(0);
		});
	};


$(document).ready(main); 