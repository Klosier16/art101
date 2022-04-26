/*
 * Author: Shayan Bathaee & Kenny Losier
 * Created: 25 April, 2022
 * Description: This file contains the JavaScript code for our Lab 6 Assignment
 * Files:
 *  lab.js - The file you are in right now. Contains the JavaScript code for this
 *           lab.
 *  index.html - Contains description of the lab, including challenges, problems
 *               and results. This file also contains the linked JavaScript file
 *  lab.css - This file contains the stylesheet for index.html
 *
 * Licence: Public Domain
 */

 // Define Variables:
kennyTransport = ["Nissan Sentra", " Walk", " Bus", " Rides from friends",
" Uber/Lyft"];

kennyMainRide = {
  make: "Nissan",
  model: "Sentra",
  color: "Silver",
  year: "2017",
  age: function() {
      return 2022 - this.year;
  }
}

shayanTransport = ["Walk", " Bike", " Car", " Bus", " Plane", " Uber"];

shayanMainRide = {
  make: "Lexus",
  model: "LS 430",
  color: "White",
  year: 2001,
  age: function() {
      return 2022 - this.year;
  }
}


// Output
document.writeln("Kinds of transportation Kenny uses: ", kennyTransport, "</br>");
document.writeln("Kenny's Main Ride: <pre>",
  JSON.stringify(kennyMainRide, null, '\t'), "</pre><br>");

document.writeln("Kinds of transportation Shayan uses: " + shayanTransport + "<br>");
document.writeln("Shayan's Main Ride: <pre>",
  JSON.stringify(shayanMainRide, null, '\t'), "</pre><br>");

document.writeln("For loop iterating through our transportation arrays:<br><br>");

document.writeln("Kenny's Transport:<br>")
for (let i = 0; i < kennyTransport.length; i++) {
  document.writeln((i + 1) + ". " + kennyTransport[i] + "<br>");
}
document.writeln("<br>");

document.writeln("Shayan's Transport:<br>")
for (let i = 0; i < shayanTransport.length; i++) {
  document.writeln((i + 1) + ". " + shayanTransport[i] + "<br>");
}
document.writeln("<br>");
