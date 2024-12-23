import readlineSync from 'readline-sync';

// Simulating the assembly program's behavior
function multiplyNumbers(num1, num2) {
  let result = 0;
  // Simulating the assembly multiplication loop
  for (let i = 0; i < num2; i++) {
    result += num1;
  }
  return result;
}

// Main program
function main() {
  // Get first number
  console.log('Enter first number (3 digits): ');
  const num1 = parseInt(readlineSync.question(''));

  // Get second number
  console.log('Enter second number (3 digits): ');
  const num2 = parseInt(readlineSync.question(''));

  // Validate input
  if (isNaN(num1) || isNaN(num2) || 
      num1 < 100 || num1 > 999 || 
      num2 < 100 || num2 > 999) {
    console.log('Please enter valid 3-digit numbers');
    return;
  }

  // Calculate result
  const result = multiplyNumbers(num1, num2);

  // Display result
  console.log(`Result: ${result}`);
}

main();