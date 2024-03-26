#! /usr/bin/env node

import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
    {message:"Guessed Your Number 1-10 =", type:"number", name:"Guessed_Number"}
])

if(answer.Guessed_Number === randomNumber){
    console.log(`Your Guessed Number is Correct`);
}
else{
    console.log(`Your Guessed Number is Wrong`);
}

