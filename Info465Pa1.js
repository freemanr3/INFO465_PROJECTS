// This program calculates the mean and median of a list of integers entered by the user.
// The user can type 'q' to finish entering numbers and see the results.

const numbers = []; // Array to store the numbers entered by the user
let input; // Variable to store user input

console.log("Welcome! Please enter integers one by one.");
console.log("Type 'q' to quit and calculate the results.");

while (true) {
    // Ask the user for input
    input = prompt("Enter a number (or 'q' to quit): ").trim();

    // Check if the user wants to quit
    if (input.toLowerCase() === 'q') {
        break;
    }

    // Try to convert the input to a number
    const number = parseInt(input, 10);

    // Check if the input is a valid number
    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid integer.");
    } else {
        // Add the valid number to the array
        numbers.push(number);
    }
}

// Function to calculate the mean of an array of numbers
function calculateMean(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0); // Add all numbers together
    return sum / numbers.length; // Divide by the number of numbers
}

// Function to calculate the median of an array of numbers
function calculateMedian(numbers) {
    numbers.sort((a, b) => a - b); // Sort the numbers in ascending order
    const mid = Math.floor(numbers.length / 2); // Find the middle index

    if (numbers.length % 2 === 0) {
        // If there are an even number of numbers, return the average of the two middle ones
        return (numbers[mid - 1] + numbers[mid]) / 2;
    } else {
        // If there are an odd number of numbers, return the middle one
        return numbers[mid];
    }
}

// Check if the user entered any valid numbers
if (numbers.length === 0) {
    console.log("No valid numbers entered. Program will exit.");
} else {
    // Display the results
    console.log("Numbers entered:", numbers);
    console.log("Mean (average):", calculateMean(numbers).toFixed(2)); // Show mean with 2 decimal places
    console.log("Median:", calculateMedian(numbers));
}
