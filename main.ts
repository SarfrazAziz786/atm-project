#!/usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;   //dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
    {

    name : "pinCode",
    message : "Enter Your Pin Code",
    type:"number"
}
]
);

if (pinAnswer.pinCode === myPin) {

    console.log("Correct Pin Code");
    
    let operationAns = await inquirer.prompt (
        {
        name : "operation",
        message : "Please select option",
        type : "list",
        choices : ["withdraw"  , "check balance" , "fast cash withdraw" ]
         }
    );
         
         
    if (operationAns.operation === "withdraw"){

        let amountAns = await inquirer.prompt(
            [{
                name : "amount",
                message : "Enter your amount",
                type : "number"

            }]

                                             );
            
     if (amountAns.amount > myBalance){

        console.log("Insufficient Balance");
        
     }   else {

        myBalance -= amountAns.amount
    }
      
     
     console.log(`your current balance is: ${myBalance}`);
     

    } else if (operationAns.operation === "check balance"){

        console.log(`your current balance is: ${myBalance}`);
        
    }

    
    if (operationAns.operation === "fast cash withdraw") {
        let fastWithdraw = await inquirer.prompt(
            [{
                name : "fast",
                message : "Please select withdraw amount",
                type : "list",
                choices : [ "5000" , "10000" , "15000" , "20000" ]
            }]
        )
            if(fastWithdraw.fast === "5000"){

                if (fastWithdraw.fast  > myBalance){

                console.log("Insufficient Balance");
                
             } else {  
                myBalance -= 5000
                console.log(`your current balance is: ${myBalance}`);
                
             }
                // myBalance -= 5000
            } else if(fastWithdraw.fast === "10000"){
                if (fastWithdraw.fast  > myBalance){

                    console.log("Insufficient Balance");
                    
                 } else {  
                    myBalance -= 10000
                    console.log(`your current balance is: ${myBalance}`);
                    
                 }

                
            } else if(fastWithdraw.fast === "15000"){
                
                if (fastWithdraw.fast  > myBalance){

                    console.log("Insufficient Balance");
                    
                 } else {  
                    myBalance -= 15000
                    console.log(`your current balance is: ${myBalance}`);
                    
                 }


            } else if(fastWithdraw.fast === "20000"){
                if (fastWithdraw.fast  > myBalance){

                    console.log("Insufficient Balance");
                    
                 } else {  
                    myBalance -= 20000
                    console.log(`your current balance is: ${myBalance}`);
                    
                 }
                
            }
            
            
            

        
    }




}
 else {

    console.log("Incorrect pin");
    
};





 
