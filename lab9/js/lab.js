/*
 * Author: Shayan Bathaee & Kenny Losier
 * Created: 02 May, 2022
 * Description: This file contains the JavaScript code for our Lab 8 Assignment
 * Files:
 *  lab.js - The file you are in right now. Contains the JavaScript code for this
 *           lab.
 *  index.html - Contains description of the lab, including challenges, problems
 *               and results. This file also contains the linked JavaScript file
 *  lab.css - This file contains the stylesheet for index.html
 *
 * Licence: Public Domain
 */

// exponent - takes in two integers, a base and a power, and performs the
// operation (base)^(pwr) using a for loop
function exponent(base, pwr) {
    var result = 1; // start with 1
    for (var i = 0; i < pwr; i++) { // multiply by base `pwr` times
        result = result * base;
    }
    return result;
}

// this code is outside of the main function so it can be viewed in the console
var arr = [5, 6, 12, 7, -3, 4]; // initialize an array

// test the exponent function
console.log("Testing the exponent function:");
console.log("4^2 = " + exponent(4, 2));
console.log("8^1 = " + exponent(8, 1));
console.log("100^0 = " + exponent(100, 0));
console.log("(-2)^3 = " + exponent(-2, 3));

var exponentArr = arr.map(exponent); // use map on the array with exponent as a callback

// create an array containing the number of digits in each element (exculding negative sign)
var digits = arr.map(function(x) {
    var num = x; // create num to operate on
    var num = num.toString(); // convert to string
    num.split(""); // convert to array
    var result = 0;
    for (var i = 0; i < num.length; i++) { // increment counter if digit is not a negative sign
        if (num[i] != '-') {
            result += 1;
        }
    }
    return result; // return the counter
})


// main - contains the main program to be run in the HTML file
function main() {
  var outputEl = document.getElementById("output"); // get the output div
  var outputString = "<pre>";
  outputString += "Testing exponent function: <br>";
  outputString += "4^2 = " + exponent(4, 2) + "<br>";
  outputString += "8^1 = " + exponent(8, 1) + "<br>";
  outputString += "100^0 = " + exponent(100, 0) + "<br>";
  outputString += "(-2)^3 = " + exponent(-2, 3) + "<br><br>";

  var arr = [5, 6, 12, 7, -3, 4]; // initialize an array

  outputString += ("Initial Array: " + arr + "<br>");
  outputString += ("Exponent Array: " + arr.map(exponent) + "<br>");

  // Count the number of digits in each element (excluding negative sign)
  var digits = arr.map(function(x) {
      var num = x; // create num to operate on
      var num = num.toString(); // convert to string
      num.split(""); // convert to array
      var result = 0;
      for (var i = 0; i < num.length; i++) { // increment counter if digit is not a negative sign
          if (num[i] != '-') {
              result += 1;
          }
      }
      return result; // return the counter
  })

  outputString += ("Digits Array: " + digits + "<br>");
  outputString += "</pre>";

  outputEl.innerHTML = outputString;
}
