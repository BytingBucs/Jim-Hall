var main = function (toDoObjects) {
    "use strict";

    var toDos,
        tabs;


    toDos = toDoObjects.map(function (toDo) {
        return toDo.description;
    });

    //tabs = [];

    tabs.forEach(function (tab) {
        var $aElement = $("<a>").attr("href",""),
        $spanElement = $("<span>").text(tab.name);

        $aElement.append($spanElement);

        // create a click handler for this element
        $aElement.on("click", function () {
            var $content;
                

            $(".tabs a span").removeClass("active");
            $spanElement.addClass("active");
            $("main .content").empty();



            

            tabs.push({
                "name":"Newest",
                "content":function() {
                    $content = $("<ul>");
                    for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                    return $content;
                }
            }
        });
             tabs.push({
                "name":"Oldest",
                "content":function() {
                    $content = $("<ul>");
                    toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                })
            }
        });

            tabs.push({
                "name":"Tags",
                "content":function() {
                var tags = [];

                toDoObjects.forEach(function (toDo) {
                    toDo.tags.forEach(function (tag) {
                        if (tags.indexOf(tag) === -1) {
                            tags.push(tag);
                        }
                    });
                });
                console.log(tags);

                var tagObjects = tags.map(function (tag) {
                    var toDosWithTag = [];

                    toDoObjects.forEach(function (toDo) {
                        if (toDo.tags.indexOf(tag) !== -1) {
                            toDosWithTag.push(toDo.description);
                        }
                    });

                    return { "name": tag, "toDos": toDosWithTag };
                });

                tagObjects.forEach(function (tag) {
                    var $tagName = $("<h3>").text(tag.name),
                        $content = $("<ul>");


                    tag.toDos.forEach(function (description) {
                        var $li = $("<li>").text(description);
                        $content.append($li);
                    });

                    $("main .content").append($tagName);
                    $("main .content").append($content);
                });

            } 
        });    
            tabs.push({
                "name":"Add",
                "content":function() {
                var $input = $("<input>").addClass("description"),
                    $inputLabel = $("<p>").text("Description: "),
                    $tagInput = $("<input>").addClass("tags"),
                    $tagLabel = $("<p>").text("Tags: "),
                    $button = $("<button>").text("+");

                $button.on("click", function () {
                    var description = $input.val(),
                        tags = $tagInput.val().split(","),
                        newToDo= {"description":description, "tags":tags};
                                 

                    //toDoObjects.push({"description":description, "tags":tags});

                    $.post("todos", newToDo, function(result){
                        $input.val("");
                        $tagInput.val("");

                        $(".tabs a:first span").trigger("click");
                });

            });

            }

        });


            $content = tab.content();
            

            $("main .content").append($content);

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(function () {
    $.getJSON("todos.json", function (toDoObjects) {
        main(toDoObjects);
    });
});