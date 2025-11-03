function greetings(){
  // Ask the user for their name
  let name = prompt("What is your name?");

  // Ask the user for their current age
  let age = parseInt(prompt("How old are you?"));

  // Get the current year
  let currentYear = new Date().getFullYear();

  // Calculate birth year
  let birthYear = currentYear - age;

  // Calculate age in five years
  let ageInFiveYears = age + 5;

  // Display the result
  alert(
    `Welcome to the practical world, ${name}!\n` +
    `Your current age is ${age}.\n` +
    `You were born in ${birthYear}.\n` +
    `In five years, you will be ${ageInFiveYears} years old.`
  );

}

console.log(greetings())