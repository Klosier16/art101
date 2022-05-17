/*
 * Author: Shayan Bathaee & Kenny Losier
 * Created: 16 May, 2022
 * Description: This file contains the JavaScript code for our Lab 10 Assignment
 * Files:
 *  lab.js - The file you are in right now. Contains the JavaScript code for this lab
 *  index.html - Contains description of the lab, including challenges, problems
 *               and results. This file also contains the linked JavaScript file
 *           and CSS file.
 *  lab.css - This file contains the stylesheet for index.html
 *
 * Licence: Public Domain
 */

// sortingHat - takes in a name and outputs the house they belong to
function sortingHat(name) {
    var length = name.length; // get the length of the name
    var mod = length % 4;     // remainder of length/4
    if (mod == 0) {           // use if statements to decide which house they belong in
      return "Hufflepuff";
    }
    else if (mod == 1) {
      return "Slytherin";
    }
    else if (mod == 2) {
      return "Ravenclaw";
    }
    else if (mod == 3) {
      return "Gryffindor";
    }
}

// grabs the name input from the text entry box and outputs the house, and a description of
// the house (in the HTML document)
$("#sortButton").click(function() {
  var name = $("#input").val();   // get name
  var result = sortingHat(name);  // get hogwarts house

  // select the proper output using the result from sortingHat()
  if (result == "Hufflepuff") {
    if ($("#out").length == 0) {  // if output doesn't already exist, append it
      $("#output").append("<p id='out'>The Sorting Hat has sorted you into <span id='hufflepuff'>Hufflepuff!</span></p>");
    }
    else {                        // if output exists, replace it
      $("#out").replaceWith("<p id='out'>The Sorting Hat has sorted you into <span id='hufflepuff'>Hufflepuff!</span></p>");
    }
    if ($("#description").length == 0) {  // if description doesn't already exist, append it
      $("#output").append("<p id='description'>Hufflepuff is where you will find the most trustworthy and hardworking students. In " +
      "fact, out of all the houses Hufflepuff has produced the least number of dark witches and wizards. The badger " +
      "is the symbol of this house, the colours are yellow and black, the Head of House is Professor Pomona Sprout " +
      "and the common room can be found near the kitchens in Hogwarts.</p>");
    }
    else {                                // if description exists, replace it
      $("#description").replaceWith("<p id='description'>Hufflepuff is where you will find the most trustworthy and hardworking students. In " +
      "fact, out of all the houses Hufflepuff has produced the least number of dark witches and wizards. The badger " +
      "is the symbol of this house, the colours are yellow and black, the Head of House is Professor Pomona Sprout " +
      "and the common room can be found near the kitchens in Hogwarts.</p>");
    }
  }

  if (result == "Slytherin") {
    if ($("#out").length == 0) {
      $("#output").append("<p id='out'>The Sorting Hat has sorted you into <span id='slytherin'>Slytherin!</span></p>");
    }
    else {
      $("#out").replaceWith("<p id='out'>The Sorting Hat has sorted you into <span id='slytherin'>Slytherin!</span></p>");
    }
    if ($("#description").length == 0) {
      $("#output").append("<p id='description'>Slytherin house has an unfortunate reputation. While it is true that a lot of dark " +
      "witches and wizards were sorted into Slytherin, not all who belong to this house are bad. In fact, there " +
      "are a lot of excellent qualities the Sorting Hat looks for in potential Slytherins and Merlin himself even " +
      "belonged to this misunderstood house!</p>");
    }
    else {
      $("#description").replaceWith("<p id='description'>Slytherin house has an unfortunate reputation. While it is true that a lot of dark " +
      "witches and wizards were sorted into Slytherin, not all who belong to this house are bad. In fact, there " +
      "are a lot of excellent qualities the Sorting Hat looks for in potential Slytherins and Merlin himself even " +
      "belonged to this misunderstood house!</p>");
    }
  }

  if (result == "Ravenclaw") {
    if ($("#out").length == 0) {
      $("#output").append("<p id='out'>The Sorting Hat has sorted you into <span id='ravenclaw'>Ravenclaw!</span></p>");
    }
    else {
      $("#out").replaceWith("<p id='out'>The Sorting Hat has sorted you into <span id='ravenclaw'>Ravenclaw!</span></p>");
    }
    if ($("#description").length == 0) {
      $("#output").append("<p id='description'>If you are looking for the brainiest students, you would find them in Ravenclaw " +
      "(with a couple of notable exceptions like Hermione Granger). The Ravenclaw colours are blue and bronze, " +
      "the emblem is an eagle, the Head of House is Professor Filius Flitwick and the common room sits at the " +
      "top of Ravenclaw Tower behind an enchanted knocker.</p>");
    }
    else {
      $("#description").replaceWith("<p id='description'>If you are looking for the brainiest students, you would find them in Ravenclaw " +
      "(with a couple of notable exceptions like Hermione Granger). The Ravenclaw colours are blue and bronze, " +
      "the emblem is an eagle, the Head of House is Professor Filius Flitwick and the common room sits at the " +
      "top of Ravenclaw Tower behind an enchanted knocker.</p>");
    }
  }

  if (result == "Gryffindor") {
    if ($("#out").length == 0) {
      $("#output").append("<p id='out'>The Sorting Hat has sorted you into <span id='gryffindor'>Gryffindor!</span></p>");
    }
    else {
      $("#out").replaceWith("<p id='out'>The Sorting Hat has sorted you into <span id='gryffindor'>Gryffindor!</span></p>");
    }
    if ($("#description").length == 0) {
      $("#output").append("<p id='description'>Gryffindor house is where you would find the pluckiest and most daring students " +
      "(there is a reason the house symbol is the brave lion). The house colours are scarlet and gold, the common " +
      "room lies up in Gryffindor Tower and the Head of House is Professor Minerva McGonagall.</p>");
    }
    else {
      $("#description").replaceWith("<p id='description'>Gryffindor house is where you would find the pluckiest and most daring students " +
      "(there is a reason the house symbol is the brave lion). The house colours are scarlet and gold, the common " +
      "room lies up in Gryffindor Tower and the Head of House is Professor Minerva McGonagall.</p>");
    }
  }
});
