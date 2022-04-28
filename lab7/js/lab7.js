/*
 * Author: Shayan Bathaee & Kenny Losier
 * Created: 27 April, 2022
 * Description: This file contains the JavaScript code for our Lab 7 Assignment
 * Files:
 *  lab.js - The file you are in right now. Contains the JavaScript code for this
 *           lab.
 *  index.html - Contains description of the lab, including challenges, problems
 *               and results. This file also contains the linked JavaScript file
 *  lab.css - This file contains the stylesheet for index.html
 *
 * Licence: Public Domain
 */

 // myFunc - A function that takes the user's input and sorts the letters of their
 // name alphabetically.
function myFunc(username) {
  // splits the string into an array, with our array now being defined
  var nameArray = username.split("");
  // sorts the array in alphabetical order
  var nameArraySorted = nameArray.sort();
  var nameSorted = nameArraySorted.join("");
  return nameSorted;
}

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
  // splits the string into an array, with our array now being defined
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



function spacedAnagram(name) {
  // defines new variable nameArray and assigns it to the input split into an array
  var nameArray = name.split("");
  // defines new variable length which takes the array and retrieves the length
  var length = nameArray.length;
  // defines new variable finalArray and declares it as an array
  var finalArray = [];
  // defines new variable strArray and declares it as an array
  var strArray = [];
  // for loop starting at i = 0, increment i until the length is reached
  for (var i = 0; i < length; i++) {
    // if statement - if the elements within the array reach a space, then
    if (nameArray[i] == " ") {
      //
      finalArray.push(anagram(strArray.join("")));
      // redefines strArray as an array for rest of the function
      strArray = [];
    }
    // else if statement saying if the element is equal to the 1 less than the
    // length,
    else if (i == (length - 1)) {
      strArray.push(nameArray[i]);
      finalArray.push(anagram(strArray.join("")));
    }
    // else statement - if not everything else before, then take the strArray
    // and
    else {
      strArray.push(nameArray[i]);
    }
  }
  // define the final variable, correctArray and set it to the finalArray, joined
  // back as a string with spacing
  var correctArray = finalArray.join(" ");
  // return the defined variable, correctArray
  return correctArray;
}

// input
var username = window.prompt("Hello! What is your full name?");

//output
var nameSorted = myFunc(username);
document.writeln("Here is your name in alphabetical order: " + nameSorted + "<br>");
document.writeln("Here is an anagram of your name: " + anagram(username) + "<br>");
document.writeln("Here is an anagram with correct spaces and lettering: " + spacedAnagram(username) + "<br>");
