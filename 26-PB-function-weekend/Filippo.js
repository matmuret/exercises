const findTheday = (date) => {
    const dayNumber = date.getDay();
    switch (dayNumber) {
        case 0:
            console.log("Its Sunday!");
            break; // MUST HAVE FOR ALL THE CASES NORMALLY 
        case 1:
            console.log("Its Monday");
            break;
        case 2:
            console.log("Its Tuesday");
            break;
        case 3:
            console.log("Its Wednesday");
            break;
        case 4:
            console.log("Its Thursday");
            break;
        case 5:
            console.log("Its Friday!");
            break;
        case 6:
            console.log("Its Saturday");
            break;
    }
}
const date = new Date('Jun 8 1984');
findTheday(date)