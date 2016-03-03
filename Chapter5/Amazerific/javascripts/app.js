var main = function (toDoObjects) 
{  // now main has access to our toDo List!
	"use strict";
    var toDos = toDoObjects.map(function (todo)
    {
        return toDo.description;
    });
    
};
 

$(document).ready(function()
{
    $.getJSON("todos.json", function (toDoObjects) 
    {
        // call main with the to-dos as an argument
        main(toDoObjects);
    });
});

        var toDos = ["Get groceries",
                    "Make up some new ToDos",
                    "Prep for Monday's class",
                    "Answer emails",
                    "Take Gracie to the park",
                    "Finish writing this book"];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);
        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $submit,
                backward;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                for (backward = toDos.length-1; backward >= 0; backward--) {
                    $content.append($("<li>").text(toDos[backward]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if (element.parent().is(":nth-child(3)")){
                // THIS IS THE TAGS TAB CODE
                console.log("the tags tab was clicked!");
            } else if ($element.parent().is(":nth-child(4)")) {
                $input = $("<input>"),
                $submit = $("<submit>").text("Submit");
                $submit.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });
                $content = $("<div>").append($input).append($submit);
         
            }

            $("main .content").append($content);
            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");


$(document).ready(main);