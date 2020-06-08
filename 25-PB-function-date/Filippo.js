const event = (today, future) => {
    let day = future.getDate();
    let month = future.getMonth();
    let year = future.getFullYear();
    if (future > today) {
        console.log(`Your book to the event for the ${day}-${month}-${year} is already guaranteed!`)
    } else {
        console.log(`select a future date!`);
    }
}
const future = new Date('Jun 10 2020');

event(today, future);


/*
I was wondering.....

const event = (future) => {
    let today = new Date();
    if (future > today) {
        console.log(`Your book to the event for the ${future} is already guaranteed!`)
    } else {
        console.log(`select a future date!`);
    }
}
event('Jun 10 2020');*/