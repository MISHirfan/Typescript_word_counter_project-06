#! /usr/bin/env node
// importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
// display a colurful welcome message
console.log(chalk.bold.cyanBright("\n \t\t coding with Mehwish - Word Counter"));
console.log("=".repeat(60));
// prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter a sentence",
    }
]);
// trimming the sentence and splitting into words based on "spaces"
let words = answer.sentence.trim().split("");
// analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.yellowBright(words.length)}`));
console.log("=".repeat(60));
