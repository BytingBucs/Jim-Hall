var main = function () {
	"use strict";

	console.log("Hello World!");

$.getJSON("cards/aceOfSpades.json",
function (card) {
	// create an element to hold the card
	var $cardParagraph = $("<p>");

	// add text to the paragraph element

	$cardParagrapgit sh.text(card.rank + " of  " + card.suit);

	// append the card paragraph to main

	$("main").append($cardParagraph);

	console.log(card);
});

} 
$(document).ready(main); 