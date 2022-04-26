/*
 * Author: Shayan Bathaee & Kenny Losier
 * Created: 20 April, 2022
 * Description: This file contains the JavaScript code for our Lab 5 assignment
 * Files:
 *  lab.js - The file you are in right now. Contains the JavaScript code for this
 *           lab.
 *  index.html - Contains description of the lab, including challenges, problems
 *               and results. This file also contains the output from our
 *  lab.css - This file contains the stylesheet for index.html
 *
 * Licence: Public Domain
 */

// define car class
class Car {
 constructor(make, model, color, year) {
   this.make = make;
   this.model = model;
   this.color = color;
   this.year = year;
 }
 age() {
   return 2022 - this.year;
 }
}

// create a car object for Shayan and Kenny
shayanCar = new Car("Lexus", "LS 430", "White", 2001);
kennyCar = new Car("Nissan", "Sentra", "Silver", 2017);

// write output
document.writeln("Shayan's Car: <br>");
document.writeln("Make: " + shayanCar.make + "<br>");
document.writeln("Model: " + shayanCar.model + "<br>");
document.writeln("Color: " + shayanCar.color + "<br>");
document.writeln("Year: " + shayanCar.year + "<br>");
document.writeln("Age: " + shayanCar.age() + "<br>");
document.writeln("<br>");

document.writeln("Kenny's Car: <br>");
document.writeln("Make: " + kennyCar.make + "<br>");
document.writeln("Model: " + kennyCar.model + "<br>");
document.writeln("Color: " + kennyCar.color + "<br>");
document.writeln("Year: " + kennyCar.year + "<br>");
document.writeln("Age: " + kennyCar.age() + "<br>");
