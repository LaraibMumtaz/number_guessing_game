#! /usr/bin/env node
import inquirer from "inquirer"



//computer will generate number



//user input for guessing number


//compare user input with computer generated number and show result

const randomNumber=Math.floor(Math.random()*10+1)

const answer=await inquirer.prompt([

    {

        name:"userGuessedNumber",
        type:"number",
        message:"please guess a number btw 1 to 10:",


    },


]);

if (answer.userGuessedNumber===randomNumber){

    console.log("congragulation you won the game!")

}
else{
    console.log("you guessed the wrong number")
}