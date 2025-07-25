// // console.log("js is connected");
// //chapter 9
// //1. 
// var studentNames = [];
// //2.
// var studentNames = new Array();
// //3.
// var fruits = ["Apple", "Banana", "Cherry"];
// //4.
// var numbers = [10, 20, 30, 40];
// //5.
// var flags = [true, false, true, false];
// //6.
// var mixedArray = ["John", 25, true, null];
// //7.
// // Declare and initialize the array
// var qualifications = [
//     "SSC",
//     "HSC",
//     "BCS",
//     "BS",
//     "BCOM",
//     "MS",
//     "M. Phil.",
//     "PhD"
// ];

// // Write heading
// document.write("Qualifications in Pakistan:<br><br>");

// // Write each qualification as a numbered list
// for (var i = 0; i < qualifications.length; i++) {
//     document.write((i + 1) + ") " + qualifications[i] + "<br />");
// }
//8.
// Arrays to store student names and their scores
// var studentNames = ["Ali", "Sara", "Ahmed"];
// var studentScores = [420, 380, 450];

// // Total marks
// var totalMarks = 500;

// // Display results
// for (var i = 0; i < studentNames.length; i++) {
//     let percentage = (studentScores[i] / totalMarks) * 100;
//     document.write(
//         "Score of " + studentNames[i] + " is " + studentScores[i] +
//         ". Percentage: " + percentage.toFixed(2) + "%<br />"
//     );
// }

//9.
// Step 1: Initialize the array with some color names
 
//10.
// Step 1: Store student scores in an array
// var studentScores = [320, 230, 480, 120];

// // Step 2: Display original array
// document.write("Original Scores: " + studentScores.join(", ") + "<br /><br />");

// // Step 3: Sort the array in ascending order
// studentScores.sort(function(a, b) {
//     return a - b;
// });

// // Step 4: Display sorted array
// document.write("Sorted Scores (Ascending): " + studentScores.join(", "));
//11.
// Step 1: Initialize an array with city names
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// // Step 2: Copy 3 elements to selectedCities array (e.g., from index 1 to 3)
// var selectedCities = cities.slice(1, 4);  // Includes index 1, 2, and 3

// // Step 3: Display both arrays
// document.write("Cities List: " + cities.join(", ") + "<br /><br />");
// document.write("Selected Cities List: " + selectedCities.join(", "));

//12.
// Step 1: Declare and initialize the array
// var arr = ["This", " is", " my", " cat"];

// // Step 2: Use join() to create a single string
// var singleString = arr.join("");

// // Step 3: Display the result
// document.write("Array: " + arr.join(", ") + "<br /><br />");
// document.write("String: " + singleString);
//13.
// // Step 1: Declare and initialize the array
// var arr = ["This", " is", " my", " cat"];

// // Step 2: Use join() to create a single string
// var singleString = arr.join("");

// // Step 3: Display the result
// document.write("Array: " + arr.join(", ") + "<br><br>");
// document.write("String: " + singleString);

//14.
// Step 1: Create an empty array to act as a queue
// var queue = [];

// // Step 2: Store values one by one (First In)
// queue.push("Keyboard");
// queue.push("Mouse");
// queue.push("Printer");
// queue.push("Monitor");

// // Step 3: Display values in FIFO order (First Out)
// document.write("Devices:<br /><br />");

// for (let i = 0; i < queue.length; i++) {
//     document.write(queue[i] + "<br />");
// }

// // Optional: Dequeue and show each one being "removed"
// document.write("<br>Processing (FIFO):<br><br>");
// while (queue.length > 0) {
//     let device = queue.shift();  // Remove the first item
//     document.write("Out: " + device + "<br />");
// }

//15.
// Step 1: Store phone manufacturers in an array
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Step 2: Start writing the select menu
// document.write('<label for="phones">Choose a phone manufacturer: </label>');
// document.write('<select id="phones" name="phones">');

// Step 3: Loop through the array to create <option> elements
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write('<option value="' + manufacturers[i].toLowerCase() + '">' + manufacturers[i] + '</option>');
// }

// Step 4: Close the select menu
// document.write('</select>');

// ---------chapter 10 array and loop---------------------
//1.
// var multiArray = [];
// // or explicitly as array of arrays but empty
// var multiArray2 = [[], [], []];  // 3 empty arrays inside

// //2.
// var matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];


//3.
// Program to print numeric counting from 1 to 10

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

//4.
// // Prompt user for the table number
// var tableNumber = parseInt(prompt("Enter the number to print its multiplication table:"));

// // Prompt user for the length of the table
// var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// // Print the multiplication table
// console.log(`Multiplication Table of ${tableNumber} up to ${tableLength}:`);

// for (var i = 1; i <= tableLength; i++) {
//     console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
// }

// //5.
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

//6.

// //a.
// document.write("<h3>Counting:</h3>");
// for (var i = 1; i <= 15; i++) {
// document.write(i + (i < 15 ? ", " : ""));
// }

// //b.
// document.write("<h3>Reverse Counting:</h3>");
// for (var i = 10; i >= 1; i--) {
// document.write(i + (i > 1 ? ", " : ""));
// }

// //c.
// document.write("<h3>Even:</h3>");
// for (var i = 0; i <= 20; i += 2) {
// document.write(i + (i < 20 ? ", " : ""));
// }

// //d.
// document.write("<h3>d. Odd:</h3>");
// for (var i = 1; i < 20; i += 2) {
// document.write(i + (i < 19 ? ", " : ""));
// }

// //e.
// document.write("<h3>e. Series:</h3>");
// for (var i = 2; i <= 20; i += 2) {
// document.write(i + "k" + (i < 20 ? ", " : ""));
// }

// //7.
//     // Define the array
//  var A = ["cake", "apple pie", "cookie", "chips", "patties"];

//  // Prompt user for input
//   var userInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();

// // Search for the item in the array
// var found = false;

// for (var i = 0; i < A.length; i++) {
//  if (A[i].toLowerCase() === userInput) {
// found = true;
// document.write("Yes, " + userInput + " is <strong>available</strong> at index " + i + " in our bakery.");
//  break;
//  }
// }

//  // If item not found
// if (!found) {
// document.write("We are sorry. " + userInput + " is <strong>not available</strong> in our bakery.");
// }

//8.
    // Given array
//         var A = [24, 53, 78, 91, 12];

//         // Assume the first number is the largest
//         var largest = A[0];

//         // Loop through the array to find the largest number
//         for (var i = 1; i < A.length; i++) {
//             if (A[i] > largest) {
//         largest = A[i];
//     }
// }

//         // Display the result
// document.write("Array items: " + A.join(", ") + "<br />");
// document.write("The largest number is: " + largest);

//9.

    // // Given array
    //     var A = [24, 53, 78, 91, 12];

    //     // Assume the first number is the smallest
    //     var smallest = A[0];

    //     // Loop through the array to find the smallest number
    //     for (var i = 1; i < A.length; i++) {
    //         if (A[i] < smallest) {
    //             smallest = A[i];
    //         }
    //     }

    //     // Display the result
    //     document.write("Array items: " + A.join(", ") + "<br />");
    //     document.write("The smallest number is: " + smallest);

//10.
//    document.write("<h3>Multiples of 5 from 1 to 100:</h3>");

//         for (var i = 1; i <= 100; i++) {
//             if (i % 5 === 0) {
//                 document.write(i + (i < 100 ? ", " : ""));
//             }
//         }

                //  <----------- complee ------->
