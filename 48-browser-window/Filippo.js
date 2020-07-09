'use strict';

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

    let userNum = prompt('Guess a number between 1-10:')
    for (let i = 1; i < 4; i++) {

        if ( parseInt(userNum) === randomNum) {
            alert(`Success, the number was ${randomNum}! Attempts: ${i}`)
            break
        } else if (i<3){
            userNum = prompt('Wrong!!!Try again!')
        } else {
            alert(`Sorry, you failed! The number was ${randomNum}`)

        }
    }
    