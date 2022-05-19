/*
 * Author: Shayan Bathaee & Kenny Losier
 * Created: 18 May, 2022
 * Description: This file contains the JavaScript code for our Lab 13 Assignment
 * Files:
 *  lab.js - The file you are in right now. Contains the JavaScript code for this lab
 *  index.html - Contains description of the lab, including challenges, problems
 *               and results. This file also contains the linked JavaScript file
 *           and CSS file.
 *  lab.css - This file contains the stylesheet for index.html
 *
 * Licence: Public Domain
 */

// FizzBuzzBoom function of multiples of 3, 5, 7
function fizzBuzzBoom(maxNum, factorObj) {
    $('#output').empty(); // clear output
    for (var num=0; num<maxNum; num++) { // for every number < maxNum
      var result = "";
      for (var factor in factorObj) { // iterate through dictionary
        if ((num % factor) == 0) { // if num is divisible by the key
          result += factorObj[factor]; // add the value to the string
        }
      }
      if (result) { // if result is not empty
        output = " - " + result + "!"; // format string
      }
      $('#output').append("<p class='numLine'>" + num + output + "</p>"); // append the number and our phrases to our output
      output = ""; // reset output string
    }
}

function printObj(factorObj) {
  $('#output').append("<p>" + JSON.stringify(factorObj) + "</p>");
  for (var factor in factorObj) {
    $('#output').append("<p>" + factor + "</p>");
  }
}

$("#submitBtn").click(function() {
  // get user input into dictionary
  var factorObj = {};
  factorObj[$("#num0").val()] = $("#text0").val();
  factorObj[$("#num1").val()] = $("#text1").val();
  factorObj[$("#num2").val()] = $("#text2").val();
  factorObj[$("#num3").val()] = $("#text3").val();
  factorObj[$("#num4").val()] = $("#text4").val();
  var maxNum = $("#max").val();
  // call fizz buzz function
  fizzBuzzBoom(maxNum, factorObj);
});
