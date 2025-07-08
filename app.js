// 1. Write a program to take “city” name as input from user.
//  If user enters “Karachi”, welcome the user like this: 
//  “Welcome to city of lights”

var city = prompt("Enter your city name:");
if (city !== null && city.toLowerCase() === "karachi") {
    document.write("Welcome to city of lights");
} else {
    document.write("Please select the correct city</h4>");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir.
// If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Write your gender (male/female):");

if (gender !== null && gender.toLowerCase() === "male") {
    document.write("Good Morning Sir.");
} else if (gender !== null && gender.toLowerCase() === "female") {
    document.write("Good Morning Ma'am");
} else {
    document.write("Please enter a valid gender name");
}

// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
// Signal color Message
// Red      :   Must Stop
// Yellow   :   Ready to move
// Green    :   Move now


color = prompt("Enter the traffic signal color Red-Yellow-Green");

if (color.toLowerCase() === "red") {
    document.write("Must Stop");
} else if (color.toLowerCase() === "yellow") {
    document.write("Ready to move");
} else if (color.toLowerCase() === "green") {
    document.write("Move now");
} else {
    document.write("Invalid color");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less 
// than 0.25litres,
// show the message “Please refill the fuel in your car”

var fuel = parseFloat(prompt("Fill the remaining fuel in car(Litres)")); // Using ("parseFloat")convert into float.

if (fuel < 0.25) {
    document.write("Please refill the fuel in your car");
} else if (fuel > 50) {
    document.write("My Car Tank is not enough storage");
} else {
    document.write("My Car fuel level is ok");
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

// a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
    document.write("Given condition for variable a is true")
}

// b 
var b = 82;
if (b++ === 83) {
    alert("Given condition for variable b is true");
    document.write("Given condition for variable b is true")
}

// c. 
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
};

// e. 
if (true) {
    alert("True")
};

if (false) {
    // alert("False")
};

// f.
if ("car" < "cat") {
    alert("car is smaller than cat");
}


// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:


var sub1 = +prompt("enter your subject 1 marks");
var sub2 = +prompt("enter your subject 2 marks");
var sub3 = +prompt("enter your subject 3 marks");

var total_Marks = 300;

// var subject1Percentage = (subject1 / total_Marks) * total_Marks;
// var subject2Percentage = (subject2 / total_Marks) * total_Marks;
// var subject3Percentage = (subject3 / total_Marks) * total_Marks;
var total_Obtain_Marks = sub1 + sub2 + sub3;
var percentage = (total_Obtain_Marks / total_Marks) * 100

// console.log("Percentage of Subject 1 is " + subject1Percentage);
// console.log("Percentage of Subject 2 is " + subject2Percentage);
// console.log("Percentage of Subject 3 is " + subject3Percentage);

// var totalPrcnt = subject1Percentage + subject2Percentage + subject3Percentage;

if (percentage >= 80) {
    console.log("Total Obtained Marks :" + total_Obtain_Marks);
    console.log("Percentage :" + percentage);
    console.log("Grade : A+");
    console.log("Remarks : Excellent");
} else if (percentage >= 70) {
    console.log("Total Obtained Marks :" + total_Obtain_Marks);
    console.log("Percentage :" + percentage);
    console.log("Grade : A");
    console.log("Remarks : Good");
} else if (percentage >= 60) {
    console.log("Total Obtained Marks :" + total_Obtain_Marks);
    console.log("Percentage :" + percentage);
    console.log("Grade : C");
    console.log("Remarks : Not bad");
} else if (percentage >= 50) {
    console.log("Total Obtained Marks :" + total_Obtain_Marks);
    console.log("Percentage :" + percentage);
    console.log("Grade : D");
    console.log("Remarks : Poor");
} else if (percentage < 50) {
    console.log("Total Obtained Marks :" + total_Obtain_Marks);
    console.log("Percentage :" + percentage);
    console.log("You are Fail");
    console.log("Remarks : You need to Improve.");
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correctanswer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var scrtNum = 7;
var userGuessed = +prompt("Guess the number between 1 - 10")

if (scrtNum === userGuessed) {
    console.log("Bingo! Correct answer");
} else if (scrtNum > userGuessed) {
    console.log("A little bit up, please. Close enough to the correct answer");
} else if (scrtNum < userGuessed) {
    console.log("A little bit down, please Close enough to the correct answer");
} else {
    console.log("Enter number in range 1-10.");
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

var req_number = prompt("Enter the number");
if (req_number % 3 == 0) {
    console.log("Your number is divisible by 3");
} else {
    console.log("Your number is not divisible by 3");
}

// 9. Write a program that checks whether the given input is an even number or an odd number.

var res_num = prompt("Enter number to check even or odd");
if (res_num % 2 == 0) {
    console.log("Your number is even.");
} else {
    console.log("Your number is odd.");
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = prompt("Enter the Temperature");
if (temp >= 40) {
    console.log("It is too hot outside.");
} else if (temp >= 30) {
    console.log("The Weather today is Normal.");
} else if (temp >= 20) {
    console.log("Today's Weather is cool.");
} else if (temp >= 10) {
    console.log("OMG! Today's weather is so Cool.");
}

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var first_number = +prompt("Enter your first number")
var second_number = +prompt("Enter your second number")
var operator = prompt("Enter the operator (e.g. + - / * %)");

if (operator == "+") {
    console.log(first_number + second_number);
} else if (operator == "-") {
    console.log(first_number - second_number);
} else if (operator == "/") {
    console.log(first_number / second_number);
} else if (operator == "*") {
    console.log(first_number * second_number);
} else if (operator == "%") {
    console.log(first_number % second_number);
} else {
    console.log("Please enter the correct operator.");
}

// 12. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number,uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

var char = prompt("Enter a single character (number or string)");

if (char.length !== 1) {
    console.log("Please enter exactly one character.");
} else {
    var code = char.charCodeAt(0);

    if (code >= 48 && code <= 57) {
        console.log("You entered a number.");
    } else if (code >= 65 && code <= 90) {
        console.log("You entered an uppercase letter.");
    } else if (code >= 97 && code <= 122) {
        console.log("You entered a lowercase letter.");
    } else {
        console.log("You entered a special character or something else.");
    }
}

// 13. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var first_integer = +prompt("Enter the first number");
var second_integer = +prompt("Enter the second number");

if (first_integer > second_integer) {
    console.log(first_integer + " is larger than " + second_integer + ".");
} else if (first_integer === second_integer) {
    console.log("Both numbers are equal.");
} else {
    console.log(second_integer + " is larger than " + first_integer + ".");
}


// 14. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var inputNumber = +prompt("Enter the number to check if it's positive or negative.");

if (inputNumber > 0) {
    console.log("Your number is Positive.");
} else if (inputNumber === 0) {
    console.log("Your number is 0.");
} else if (inputNumber < 0) {
    console.log("Your number is Negative.");
} else {
    console.log("Please enter a valid number.");
}

// 15. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var userChar = prompt("Enter any character to check if it's a vowel or consonant.");

if ("aeiouAEIOU".includes(userChar)) {
    console.log("Your character is a vowel.");
} else {
    console.log("Your character is a consonant.");
}


// 16. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches theoriginal password”. Show “Incorrect password” otherwise.

var correctPass = "smit@01";
var userPass = prompt("Enter your password");

if (userPass == correctPass) {
    console.log("Correct! The password you entered matches the original password");
} else if (userPass == " ") {
    console.log("Please enter your password.");
} else {
    console.log("Please Enter the valid password.");
}

// 17. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day"; else greeting = "Good evening";}


var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// 18. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

var time = +prompt("Enter time in 24-hour format (like 1900 for 7 PM):");

if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
} else {
    console.log("Please enter a valid time between 0000 and 2359.");
}




























