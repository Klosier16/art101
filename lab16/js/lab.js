/*
 * Author: Shayan Bathaee & Kenny Losier
 * Created: 30 May, 2022
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

var comicID;

$("#activate").click(function() {
  comicID = Math.floor(Math.random() * 2624); // generate a random comic ID up to their most recent comic
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/" + comicID + "/info.0.json",
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successfully
    success: function(data) {
        // put the image into the HTML document
        var comicObj = {
          img: data["img"],
          title: data["title"],
          alt: "Comic #" + comicID
        };
        if ($("#comicImg").length == 0) {
          $("#output").append("<img src='" + comicObj.img + "' alt='" + comicObj.alt + ": " + comicObj.title + "' width=600px id='comicImg'>");
          $("#output").append("<p id=caption>" + comicObj.alt + ": " + comicObj.title + "</p>");
        }
        else {
          $("#comicImg").replaceWith("<img src='" + comicObj.img + "' alt='" + comicObj.alt + ": " + comicObj.title + "' width=600px id='comicImg'>");
          $("#caption").replaceWith("<p id=caption>" + comicObj.alt + ": " + comicObj.title + "</p>");
        }
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // log error
        console.log("Error:", textStatus, errorThrown);
    }
  })
});


$("#previous").click(function() {
  if ($("#comicImg").length == 0) {
    comicID = 2625;
  }

  if (comicID > 1) {
    comicID = comicID - 1;
  }
  else {
    comicID = 2624;
  }

  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/" + comicID + "/info.0.json",
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successfully
    success: function(data) {
        // put the image into the HTML document
        var comicObj = {
          img: data["img"],
          title: data["title"],
          alt: "Comic #" + comicID
        };
        if ($("#comicImg").length == 0) {
          $("#output").append("<img src='" + comicObj.img + "' alt='" + comicObj.alt + ": " + comicObj.title + "' width=600px id='comicImg'>");
          $("#output").append("<p id=caption>" + comicObj.alt + ": " + comicObj.title + "</p>");
        }
        else {
          $("#comicImg").replaceWith("<img src='" + comicObj.img + "' alt='" + comicObj.alt + ": " + comicObj.title + "' width=600px id='comicImg'>");
          $("#caption").replaceWith("<p id=caption>" + comicObj.alt + ": " + comicObj.title + "</p>");
        }
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // log error
        console.log("Error:", textStatus, errorThrown);
    }
  })
});

$("#next").click(function() {
  if ($("#comicImg").length == 0) {
    comicID = 0;
  }

  if (comicID < 2624) {
    comicID = comicID + 1;
  }
  else {
    comicID = 1;
  }

  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/" + comicID + "/info.0.json",
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successfully
    success: function(data) {
        // put the image into the HTML document
        var comicObj = {
          img: data["img"],
          title: data["title"],
          alt: "Comic #" + comicID
        };
        if ($("#comicImg").length == 0) {
          $("#output").append("<img src='" + comicObj.img + "' alt='" + comicObj.alt + ": " + comicObj.title + "' width=600px id='comicImg'>");
          $("#output").append("<p id=caption>" + comicObj.alt + ": " + comicObj.title + "</p>");
        }
        else {
          $("#comicImg").replaceWith("<img src='" + comicObj.img + "' alt='" + comicObj.alt + ": " + comicObj.title + "' width=600px id='comicImg'>");
          $("#caption").replaceWith("<p id=caption>" + comicObj.alt + ": " + comicObj.title + "</p>");
        }
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // log error
        console.log("Error:", textStatus, errorThrown);
    }
  })
});
