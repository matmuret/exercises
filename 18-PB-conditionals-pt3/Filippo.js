//1a
let aleezaAvarege = (89 + 120 + 103) / 3;
let lisAvarage = (116 + 94 + 123) / 3;
console.log(aleezaAvarege);
console.log(lisAvarage);

//1b
if (lisAvarage > aleezaAvarege) {
    console.log(`Lisa's team wins because its average score is ${lisAvarage.toFixed(2)},
 which is more than Aleeza's team score ${aleezaAvarege.toFixed(2)} `);
} else {
    console.log(`Aleeza's team wins because its average score is ${aleezaAvarege.toFixed(2)},
 which is more than lisa's team score, ${lisAvarage.toFixed(2)} `);
}

//1c
aleezaAvarege = (70 + 80 + 100) / 3;
lisAvarage = (106 + 104 + 90) / 3;

if (lisAvarage > aleezaAvarege) {
    console.log(`Lisa's team wins because its average score is ${lisAvarage.toFixed(2)},
     which is more than Aleeza's team score ${aleezaAvarege.toFixed(2)} `);
} else if (lisAvarage === aleezaAvarege) {
    console.log(`Lisa's team and Aleeza's team have the same avarege score: respectively  ${lisAvarage.toFixed(2)} = ${aleezaAvarege.toFixed(2)}`);
} else {
    console.log(`Aleeza's team wins because its average score is ${aleezaAvarege.toFixed(2)},
     which is more than lisa's team score, ${lisAvarage.toFixed(2)}`);
}

//1d
let maryAvarage = (97 + 134 + 105) / 3;
if (lisAvarage > aleezaAvarege && lisAvarage > maryAvarage) {
    console.log(`Lisa's team wins because its average scores is -${lisAvarage.toFixed(2)}-
     which is more than Aleeza's team scores -${aleezaAvarege.toFixed(2)}- and Marys'team scores -${maryAvarage.toFixed(2)}-`)
} else if (maryAvarage > lisAvarage && maryAvarage > aleezaAvarege) {
    console.log(`Mary's team wins because its average scores is -${maryAvarage.toFixed(2)}- which is more than Aleeza's team scores -${aleezaAvarege.toFixed(2)}- 
        and lisa's team scores -${lisAvarage.toFixed(2)}-`);
} else if (aleezaAvarege > lisAvarage && aleezaAvarege > maryAvarage) {
    console.log(`Aleeza's team wins because its average scores is -${aleezaAvarege.toFixed(2)}-
    which is more than Mary's team scores -${maryAvarage.toFixed(2)}- and lisa's team scores -${lisAvarage.toFixed(2)}-`)

} else {
    console.log(`Aleeza's team average scores is -${aleezaAvarege.toFixed(2)} like 
        Mary's team scores -${maryAvarage.toFixed(2)}- and lisa's team scores -${lisAvarage.toFixed(2)}-`)
}

//1elet 
maryAvarage = (80 + 124 + 65) / 3;
aleezaAvarege = (70 + 70 + 100) / 3;
lisAvarage = (100 + 90 + 90) / 3;

if (lisAvarage > aleezaAvarege && lisAvarage > maryAvarage) {
    console.log(`Lisa's team wins because its average scores is -${lisAvarage.toFixed(2)}-
     which is more than Aleeza's team scores -${aleezaAvarege.toFixed(2)}- and Marys'team scores -${maryAvarage.toFixed(2)}-`)
} else if (maryAvarage > lisAvarage && maryAvarage > aleezaAvarege) {
    console.log(`Mary's team wins because its average scores is -${maryAvarage.toFixed(2)}-
        which is more than Aleeza's team scores -${aleezaAvarege.toFixed(2)}- and lisa's team scores -${lisAvarage}-`)
} else if (aleezaAvarege > lisAvarage && aleezaAvarege > maryAvarage) {
    console.log(`Aleeza's team wins because its average scores is -${aleezaAvarege.toFixed(2)}-
    which is more than Mary's team scores -${maryAvarage.toFixed(2)}- and lisa's team scores -${lisAvarage}-`)

} else {
    console.log(`Aleeza's team average scores is -${aleezaAvarege.toFixed(2)} like 
        Mary's team scores -${maryAvarage.toFixed(2)}- and lisa's team scores -${lisAvarage.toFixed(2)}-`)
}