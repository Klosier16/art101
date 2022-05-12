/*
 * Author: Shayan Bathaee & Kenny Losier
 * Created: 11 May, 2022
 * Description: This file contains the JavaScript code for our Lab 10 Assignment
 * Files:
 *  lab.js - The file you are in right now. Contains the JavaScript & jQuery
 *           code for this lab.
 *  index.html - Contains description of the lab, including challenges, problems
 *               and results. This file also contains the linked JavaScript file
 *           and CSS file.
 *  lab.css - This file contains the stylesheet for index.html
 *
 * Licence: Public Domain
 */

// assign elements to variables
challenges = $("#challenge");
problems = $("#problems");
results = $("#results");

// create buttons below those elements
challenges.append("<button id='challengesBtn' type='button'>Click to see our Challenge</button>");
challenges.append("<button id='challengesColor' type='button'>Change button color</button>");
problems.append("<button id='problemsBtn' type='button'>Click to see our Problems</button>");
problems.append("<button id='problemsColor' type='button'>Change button color</button>");
results.append("<button id='resultsBtn' type='button'>Click to see our Results</button>");
results.append("<button id='resultsColor' type='button'>Change button color</button>");

// assign functionality to the buttons
$("#challengesBtn").click(function() {
  if ($("#challengeText").length == 0) {
      challenges.append("<p id='challengeText'>Here was our challenge:<br>The challenge for " +
      "this lab was to experiment and become more familiar with and experienced with jQuery. " +
      "In particular, we applied this to buttons and event listeners. We were tasked with creating " +
      "buttons that can be clicked to see our challenges, results, and problems. Along with this, we " +
      "went even further to add buttons that change the colors of other buttons.</p>");
  }
});
$("#challengesColor").click(function() {
  $("#challengesBtn").toggleClass("yellow");
});
$("#problemsBtn").click(function() {
  if ($("#problemsText").length == 0) {
      problems.append("<p id='problemsText'>Here were our problems:<br> One of our main " +
      "obstacles that we discovered while implementing the buttons and the paragraphs appended " +
      "to them was that the buttons could infinitely generate the text associated with them. We had " +
      "to implement an if statment that took us a while to figure out. We also did not properly " +
      "format our jQuery functions with semicolons at the end at first. Finally, at the start of calling " +
      "our defined ids, we did not include the pound sign (#), which resulted in no visible or accessible " +
      "buttons until we reworked that.</p>");
  }
});
$("#problemsColor").click(function() {
  $("#problemsBtn").toggleClass("red");
});
$("#resultsBtn").click(function() {
  if ($("#resultsText").length == 0) {
      results.append("<p id='resultsText'>Here were our results:<br>Everything you see on this " +
      "website are the results for this lab. Please enjoy clicking around, changing button colors, " +
      "and viewing our Problems and Challenges!");
  }
});
$("#resultsColor").click(function() {
  $("#resultsBtn").toggleClass("green");
});
