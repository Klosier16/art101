/*
 * Author: Shayan Bathaee & Kenny Losier
 * Created: 09 May, 2022
 * Description: This file contains the JavaScript code for our Lab 10 Assignment
 * Files:
 *  lab.js - The file you are in right now. Contains the JavaScript code for this
 *           lab.
 *  index.html - Contains description of the lab, including challenges, problems
 *               and results. This file also contains the linked JavaScript file
 *  lab.css - This file contains the stylesheet for index.html
 *
 * Licence: Public Domain
 */

 // nameSort - A function that takes the user's input and sorts the letters of their
 // name alphabetically.
 function nameSort(username) {
   // splits the string into an array, with our array now being defined
   var nameArray = username.split("");
   // sorts the array in alphabetical order
   var nameArraySorted = nameArray.sort();
   var nameSorted = nameArraySorted.join("");
   return nameSorted;
 }

 // swap - swaps the elements at index1 and index2 in the array
 function swap(index1, index2, array) {
   // creates new temporary variable to store the array element at index1
   var temp = array[index1];
   // changes the array element at index1 to the element at index2
   array[index1] = array[index2];
   // changes the array element at index2 to our temporary variable for this function
   array[index2] = temp;
 }

 // anagram - A function that takes the user's input and sorts the letters of their
 // name randomly into an anagram
 function anagram(name) {
   // splits the string into anarray, with our array now being defined
   var nameArray = name.split("");
   // defines new variable length, which is the length of our new array
   var length = nameArray.length;
   // for loop starting at i = 0, increment i until the length is reached
   for (var i = 0; i < length; i++) {
     // defines new variable, randomNum, which generates a random number 0-1
     var randomNum = Math.random();
     // defines new variable, randomIndex, which takes the randomNum and multiplies
     // it by the length - 1, because the index starts at 0, and will not exist
     // at the length
     var randomIndex = randomNum * (length - 1);
     // rounds our variable randomIndex
     randomIndex = Math.round(randomIndex);
     // swaps the current element that we are at with the position our randomly
     // generated position
     swap(i, randomIndex, nameArray);
   }
   // defines new variable, anagram, which joins our elements together and returns
   var anagram = nameArray.join("");
   return anagram;
 }


 // spacedAnagram - creates an anagram of each word in the input, keeping the
 // spaces in the same places they were originally
 function spacedAnagram(name) {
   var nameArray = name.split("");   // turn the input into an array
   var length = nameArray.length;    // get the length
   var finalArray = [];              // initialize output variables
   var strArray = [];

   for (var i = 0; i < length; i++) {                // for every element
     if (nameArray[i] == " ") {                      // if the element is a space
       finalArray.push(anagram(strArray.join("")));  // push the current string into our output
       strArray = [];                                // reset the string
     }
     else if (i == (length - 1)) {                   // if we are at the last element
       strArray.push(nameArray[i]);                  // push last element into string
       finalArray.push(anagram(strArray.join("")));  // push last string into output
     }
     else {
       strArray.push(nameArray[i]);                  // push element into string
     }
   }

   var correctArray = finalArray.join(" ");          // join the output with spaces between
   return correctArray;                              // return result
 }

// Assign buttons
var spacedAnagramListen = document.getElementById("spacedAnagramBtn");
var randomAnagramListen = document.getElementById("randomAnagramBtn");
var sortListen = document.getElementById("sortBtn");

// define actions for buttons
function spacedAnagramBtn() {
  // prompt user
  var name = window.prompt("What is your name?");
  // call spacedAnagram
  var result = spacedAnagram(name);
  // write output
  var outputEl = document.getElementById("output");
  var resultOut = document.getElementById("resultOut");
  var resultOut = document.createElement("p");
  resultOut.innerHTML = result;
  outputEl.appendChild(resultOut);
  return;
}

function randomAnagramBtn() {
  // prompt user
  var name = window.prompt("What is your name?");
  // call spacedAnagram
  var result = anagram(name);
  console.log(result);
  // write output
  var outputEl = document.getElementById("output");
  var resultOut = document.getElementById("resultOut");
  var resultOut = document.createElement("p");
  resultOut.innerHTML = result;
  outputEl.appendChild(resultOut);
  return;
}

function sortBtn() {
  // prompt user
  var name = window.prompt("What is your name?");
  // call spacedAnagram
  var result = nameSort(name);
  // write output
  var outputEl = document.getElementById("output");
  var resultOut = document.getElementById("resultOut");
  var resultOut = document.createElement("p");
  resultOut.innerHTML = result;
  outputEl.appendChild(resultOut);
  return;
}

// create event listeners
spacedAnagramListen.addEventListener('click', spacedAnagramBtn);
randomAnagramListen.addEventListener('click', randomAnagramBtn);
sortListen.addEventListener('click', sortBtn);
