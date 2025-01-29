// JavaScript Program for User Input and Condition Checking
// This program prompts users to enter integers, then checks if the product of any two entered numbers equals a third number.
// It includes error handling for invalid inputs and follows Git version control best practices.

const readline = require('readline');

// Create an interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = []; // Array to store user-entered integers

// Function to prompt user for input
function promptUser() {
    rl.question('Enter an integer (or "q" to quit): ', (input) => {
        if (input.toLowerCase() === 'q') { // Check if user wants to quit
            checkCondition(); // Evaluate condition before exiting
            rl.close();
            return;
        }
        
        let num = parseInt(input); // Convert input to integer
        if (isNaN(num)) { // Error handling for non-numeric input
            console.log('Error: Please enter a valid integer.');
        } else {
            numbers.push(num); // Store valid integer in the array
        }
        promptUser(); // Recursively prompt for next input
    });
}

// Function to check if any two numbers multiply to form a third number
function checkCondition() {
    if (numbers.length < 3) { // Condition check: at least three numbers needed
        console.log('Condition was not met (not enough numbers).');
        return;
    }
    
    // Iterate over all possible pairs of numbers
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            for (let k = 0; k < numbers.length; k++) {
                if (i !== k && j !== k && numbers[i] * numbers[j] === numbers[k]) {
                    console.log(`Condition is met: ${numbers[i]} x ${numbers[j]} = ${numbers[k]}`);
                    return;
                }
            }
        }
    }
    console.log('Condition was not met.');
}

// Start program execution
console.log('Welcome! Enter integers and type "q" or "Q" to quit.');
promptUser();

/*
Git Commands:

# Navigate to the local repository
git clone <your-repo-url> # If not already cloned
cd <your-repo-directory>

# Pull latest changes
git pull origin main

# Create a new branch for adding the script
git checkout -b new-feature

# Add the JavaScript program
nano script.js  # Or use a preferred code editor

# Stage and commit changes
git add script.js
git commit -m "Added JavaScript program for number condition checking"

# Merge branch back into main
git checkout main
git merge new-feature

# Push changes to GitHub
git push origin main

# Check Git history
git log --oneline
*/
