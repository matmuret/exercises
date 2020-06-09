"use strict";

const howManyDays = (date) => {
    const month = date.getMonth();
    const day = date.getDate();
    switch (month) {
        case 0: // january
        case 2: // march 
        case 4: // may
        case 6: // july
        case 7: // august
        case 9: // october
        case 11: // december
            console.log(31 - day);
            break;
        case 1:
            console.log(28 - day);
            break;
        case 3: // april
        case 5: // june
        case 8: // september
        case 10: // november
            console.log(30 - day);
            break;
        default:
            console.log("Its an error case! Something went wrong");
    }
}
const date = new Date('1982-11-4');
howManyDays(date);