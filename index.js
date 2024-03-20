#! /usr/bin/env node
import inquirer from "inquirer";
const answere = await inquirer.prompt([
    {
        message: "Enter the first number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter the second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "select the operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "division", "multiplication"],
    },
]);
//conditional statement
if (answere.operator === "Addition") {
    console.log(answere.firstNumber + answere.secondNumber);
}
else if (answere.operator === "Subtraction") {
    console.log(answere.firstNumber - answere.secondNumber);
}
else if (answere.operator === "division") {
    console.log(answere.firstNumber / answere.secondNumber);
}
else if (answere.operator === "multiplication") {
    console.log(answere.firstNumber * answere.secondNumber);
}
