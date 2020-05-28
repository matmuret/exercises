//1
let determiner = 5;
if (determiner < 0) {
    let x = "less than 0";
    console.log(x);
} else {
    let x = "Greater or equal to 0";
    console.log(x);
};


//2
let updater;
if (determiner >= 0) {
    updater = "Greater or equal to 0";
    let message = "Positive Integer";
    console.log(message);
} else {

     updater = "less than 0";
    
};
console.log(updater);
//3
console.log(message)
/*it's not possible to console.log "message" out of
the Block Scope -curly brackets- cause it has been declared inside 
the Block Scope -curly brackets-*/  

//4
/*considering example n2 I couldn't use the ternary option cause we have
more than one variable depending on just one condition, we can not declare
these variables outside the Block Scope otherwise they wouldn change depending
on the if/else condition */
