var main = function () {

     "use strict";

 

     var url = "http://jimbarrell.com/fsw/getJSON.php?table=Issues";

     var $issueRows=$("");

     $.getJSON(url, function (Issues) {

          

           Issues.forEach(function (issue) {

             $issueRows+="<tr><td>"+ ;

             issue.ID+"</td><td>" + ;

…

             issue.Description+"</td><td>" +           

             issue.RelatedIssue+"</td><td>&nbsp;</td></tr>";

             //$list.append($contact);

           });

           $("#tblIssues tbody").append($issueRows);

     });

 

    

    

     var url = "http://jimbarrell.com/fsw/getJSON.php?table=Contacts";

     var $rows=$("");

     $.getJSON(url, function (Contacts) {

          

           Contacts.forEach(function (contact) {

             $rows+="<tr><td>"+

             contact.ID+"</td><td>" +

             contact.FirstName+"</td><td>" +

..

             contact.BusinessPhone+"</td></tr><td>&nbsp;</td>";

             //$list.append($contact);

           });

           $("#tblContacts tbody").append($rows);

     });

    

 

};

 

$(document).ready(main);