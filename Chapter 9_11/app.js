// 1. Write a program to take “city” name as input from user.
//  If user enters “Karachi”, welcome the user like this: 
//  “Welcome to city of lights”

document.write("<h2>Question No.1</h2>");
document.write("<p>Write a program to take 'city' name as input from the user. If the user enters 'Karachi', welcome them like this: 'Welcome to city of lights'.</p>");

var city = prompt("Enter your city name:");
if (city !== null && city.toLowerCase() === "karachi") {
document.write("<h4>Answer: Welcome to city of lights</h4>");
} else {
document.write("<h4>Answer: Please select the correct city</h4>");
}

document.write("<hr>"); // 
        

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir.
// If the user is female, give the message: Good Morning Ma’am.

document.write("<h2>Question No.2</h2>");
document.write("<p>Write a program to take 'gender' as input from the user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma'am.</p>");

var gender = prompt("Write your gender (male/female):");

if (gender !== null && gender.toLowerCase() === "male") {
document.write("<h4>Answer: Good Morning Sir.</h4>");
} else if (gender !== null && gender.toLowerCase() === "female") {
document.write("<h4>Answer: Good Morning Ma'am</h4>");
} else {
document.write("<h4>Answer: Please enter a valid gender name</h4>");
}

document.write("<hr>"); // for seperate

// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
// Signal color Message
// Red      :   Must Stop
// Yellow   :   Ready to move
// Green    :   Move now

document.write("<h2> Question No.3" + "<br></h2>")
document.write("3. Write a program to take input color of road traffic signal from the user & show the message according to this table: Signal color Message (Red -  Must Stop),  (Yellow- Ready to move), (Green- Move now)")

color = prompt("Enter the traffic signal color Red-Yellow-Green");

if (color.toLowerCase() === "red") {
    document.write("<h4>Answer: Must Stop<h4>");
}   else if (color.toLowerCase() === "yellow") {
    document.write("<h4>Answer: Ready to move<h4>") ;
}   else if (color.toLowerCase() === "green") {
    document.write("<h4>Answer: Move now<h4>");
}   else {
    document.write("<h4>Answer: Invalid color<h4>");
}

document.write("<hr>"); // for seperate

              
// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less 
// than 0.25litres,
// show the message “Please refill the fuel in your car”


document.write("<h2> Question No.4" + "<br></h2>")
document.write("4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car" + "<br>")

var fuel = parseFloat(prompt("Fill the remaining fuel in car(Litres)")); // Using ("parseFloat")convert into float.

if (fuel < 0.25) {
    document.write("<h4>Answer: Please refill the fuel in your car<h4>");
}   else if (fuel > 50) {
    document.write("<h4>Answer: My Car Tank is not enough storage<h4>");
} else { 
    document.write("<h4>Answer: My Car fuel level is ok<h4>");
}

document.write("<hr>"); // for seperate


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
    document.write("Given condition for variable a is true")
}


document.write("<h2> Question No.5- Condition # A" + "<br></h2>")

var a = 4;
if (++a === 5) {
    alert("Given condition for variable a is true")
    document.write("Given condition for variable a is true")
}

document.write("<hr>"); // for seperate


document.write("<h2> Question No.5- Condition # A" + "<br></h2>")

var b = 82;
if (b++ === 83){
    alert("Given condition for variable b is true");
    document.write("Given condition for variable b is true")
}

document.write("<h2> Question No.5- Condition # B" + "<br></h2>")
b = 82;
if (b++ === 83) {
    alert("Given condition for variable b is true");
    document.write("Given condition for variable b is false");
} else {
    alert("Given condition for variable b is false")
    document.write("Given condition for variable b is false")
}


// // c. var c = 12;
// // if (c++ === 13){
// // alert("condition 1 is true");
// // }

// document.write("<h2> Question No.5- Condition # C-1" + "<br></h2>")
// c = 12;
// if (c++ === 13) {
//     alert("Condition C-1 is true")
//     document.write("Condition C-1 is false")
// } else {
//     alert("Condition C-1 is false")
//     document.write("Condition C-1 is false")
// }

// // c. var c = 12;
// // if (c === 13){
// // alert("condition 2 is true");
// // }

// document.write("<h2> Question No.5- Condition # C-2" + "<br></h2>")
// // c is now 13
// if (c === 13) {
//     alert("Condition C-2 is true")
//     document.write("Condition C-2 is true")
// } else {
//     alert("Condition C-2 is true")
//     document.write("Condition C-2 is true")
// }

// document.write("<h2> Question No.5- Condition # C-3" + "<br></h2>")
// // c is now 13
// if (++c < 14) { // now c is 14 ( 14 < 14)
//     alert("condition c-3 is true");
//     document.write("condition c-3 is true");
// } else {
//     alert("condition c-3 is false")
//     document.write("condition c-3 is false")
// }


// document.write("<h2> Question No.5- Condition # C-4" + "<br></h2>")
// // c is now 14
// if (c === 14) {
//     alert("condition C-4 is true");
//     document.write("condition C-4 is true");
// } else {
//     alert("condition C-4 is false");
//     document.write("condition C-4 is false");
// }


// //  d. var materialCost = 20000;
// // var laborCost = 2000;
// // var totalCost = materialCost + laborCost;
// // if (totalCost === laborCost + materialCost){
// // alert("The cost equals");
// // }

// document.write("<h2> Question No.5- Condition # D" + "<br></h2>")

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// } else {
//     alert("condition D is false");
//     document.write("The Total Cost is not equals.");
// }

// // e. if (true){
// // alert("True");
// // }
// // if (false){
// // alert("False");

// document.write("<h2> Question No.5- Condition # E" + "<br></h2>")

// if (true) {
//     alert("True");
//     document.write("The condition E is true")
// }
// if (false) {
//     alert("False");
//     document.write("The condition E is false")
// }


// //

// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// }


















