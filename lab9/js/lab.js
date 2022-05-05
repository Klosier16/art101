/*
 * Author: Shayan Bathaee & Kenny Losier
 * Created: 04 May, 2022
 * Description: This file contains the JavaScript code for our Lab 9 Assignment
 * Files:
 *  lab.js - The file you are in right now. Contains the JavaScript code for this
 *           lab.
 *  index.html - Contains description of the lab, including challenges, problems
 *               and results. This file also contains the linked JavaScript file
 *  lab.css - This file contains the stylesheet for index.html
 *
 * Licence: Public Domain
 */


 function main() {
   var outputEl = document.getElementById("output");         // Finds our "output" id in html file and assign the variable outputEl

   let new1El = document.createElement("button");            // create a new element "blueButton" and assign the variable new1El
   new1El.id = "blueButton";                                 // assign the button the id "blueButton"
   new1El.style.backgroundColor = "Blue";                    // format the button style
   new1El.style.color = "White";
   new1El.innerHTML = "Blue Button";                         // write "Blue Button" on the button
   new1El.onclick = function() {                             // create a text element that says you pressed the blue button
     var buttonText = document.getElementById("buttonTextBlue");
     var buttonText = document.createElement("p");
     buttonText.style.color = "Blue";                        // style the text element
     buttonText.style.backgroundColor = "White";
     buttonText.innerHTML = "You pressed the blue button!";
     outputEl.appendChild(buttonText);
     return;
   };
   outputEl.insertBefore(new1El, outputEl.firstChild);       // insert the new element before outputEl

   let new2El = document.createElement("button");            // create a new element "redButton" and assign the variable new2El
   new2El.id = "redButton";                                  // assign the button the id "blueButton"
   new2El.style.backgroundColor = "Red";                     // format the button style
   new2El.style.color = "White";
   new2El.innerHTML = "Red Button";                          // write "Red Button" on the button
   new2El.onclick = function() {                             // create a text element that says you pressed the red button
     var buttonText = document.getElementById("buttonTextRed");
     var buttonText = document.createElement("p");
     buttonText.style.color = "Red";                         // style the text element
     buttonText.style.backgroundColor = "White";
     buttonText.innerHTML = "You pressed the red button!";
     outputEl.appendChild(buttonText);
     return;
   };
   outputEl.insertBefore(new2El, outputEl.firstChild);       // insert the new element before outputEl

   return;
 }
