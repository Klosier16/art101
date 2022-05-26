/*
 * Author: Shayan Bathaee & Kenny Losier
 * Created: 25 May, 2022
 * Description: This file contains the JavaScript code for our Lab 15 Assignment
 * Files:
 *  lab.js - The file you are in right now. Contains the JavaScript code for this lab
 *  index.html - Contains description of the lab, including challenges, problems
 *               and results. This file also contains the linked JavaScript file
 *           and CSS file.
 *  lab.css - This file contains the stylesheet for index.html
 *
 * Licence: Public Domain
 */

$("#activate").click(function() {
  var randomID = Math.floor(Math.random() * 2624); // generate a random comic ID up to their most recent comic
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/" + randomID + "/info.0.json",
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successfully
    success: function(data) {
        // put the image into the HTML document
        var img_link = data["img"];
        if ($("#comicImg").length == 0) {
          $("#output").append("<img src='" + img_link + "' alt='comic' width=600px id='comicImg'>");
        }
        else {
          $("#comicImg").replaceWith("<img src='" + img_link + "'alt='comic' width=600px id='comicImg'>");
        }
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // log error
        console.log("Error:", textStatus, errorThrown);
    }
  })
});
