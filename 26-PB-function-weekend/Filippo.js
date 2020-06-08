'use strict';

const findTheday = (date) => {
    const dayNumber = date.getDay();
    switch (dayNumber) {   
        case 1:   
        case 2:   
        case 3:    
        case 4:
        case 5:
            console.log("Its a week day!");
            break;
        case 6:
        case 0:
                console.log("Its weekend!");
            break;
        default:  
        console.log("Its an error case! Something went wrong");
    }
}
const date = new Date('Jun 8 2020');
findTheday(date)