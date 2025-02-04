const readline = require('readline');

// Creates an interface to read and write to the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

// Function calculates the mean
function calculateMean(arr) {
  let sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

// Function calculates the median
function calculateMedian(arr) {
  arr.sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  
  if (arr.length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
}

// Function prompts the user for input
function promptUser() {
  rl.question('Enter a number (or "q" to quit): ', function(input) {
    if (input.toLowerCase() === 'q') {
      // Calculate and print mean and median when user quits
      let mean = calculateMean(numbers);
      let median = calculateMedian(numbers);
      console.log(`Mean: ${mean}`);
      console.log(`Median: ${median}`);
      rl.close(); // Close the input interface
    } else {
      // Checks if input is valid
      let num = parseInt(input);
      if (!isNaN(num)) {
        numbers.push(num); // Add the number to the array
      } else {
        console.log('Please enter a valid number');
      }
      
      // Continues  prompting the user
      promptUser();
    }
  });
}

// Starts the user input loop
promptUser();
