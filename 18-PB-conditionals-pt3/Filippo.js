//1a
let aleezaAvarege = (89 + 120 + 103) / 3;
let lisAvarage = (116 + 94 + 123) / 3;
console.log(aleezaAvarege);
console.log(lisAvarage);

//1b
if (lisAvarage > aleezaAvarege) {
    console.log(`Lisa's team wins because its scores average  is ${lisAvarage.toFixed(2)}
 which is more than Aleeza's team one ${aleezaAvarege.toFixed(2)} `);
} else {
    console.log(`Aleeza's team wins because its scores average is ${aleezaAvarege.toFixed(2)}
 which is more than lisa's team one, ${lisAvarage.toFixed(2)} `);
}

//1c
aleezaAvarege = (70 + 80 + 100) / 3;
lisAvarage = (106 + 104 + 90) / 3;

if (lisAvarage > aleezaAvarege) {
    console.log(`Lisa's team wins because its scores average is ${lisAvarage.toFixed(2)}
    which is more than Aleeza's team one ${aleezaAvarege.toFixed(2)} `);
} else if (lisAvarage === aleezaAvarege) {
    console.log(`Lisa's team and Aleeza's team have the same scores avarege: respectively  ${lisAvarage.toFixed(2)} = ${aleezaAvarege.toFixed(2)}`);
} else {
    console.log(`Aleeza's team wins because its scores average is ${aleezaAvarege.toFixed(2)}
    which is more than lisa's team one, ${lisAvarage.toFixed(2)}`);
}

//1d
let maryAvarage = (97 + 134 + 105) / 3;
if (lisAvarage > aleezaAvarege && lisAvarage > maryAvarage) {
    console.log(`Lisa's team wins because its scores average is ${lisAvarage.toFixed(2)}
    which is more than Aleeza's team one -${aleezaAvarege.toFixed(2)}- and Mary's team one -${maryAvarage.toFixed(2)}-`)
} else if (maryAvarage > lisAvarage && maryAvarage > aleezaAvarege) {
    console.log(`Mary's team wins because its scores average is -${maryAvarage.toFixed(2)}- which is more than Aleeza's team one -${aleezaAvarege.toFixed(2)}- 
    and lisa's team one -${lisAvarage.toFixed(2)}-`);
} else if (aleezaAvarege > lisAvarage && aleezaAvarege > maryAvarage) {
    console.log(`Aleeza's team wins because its scores average is -${aleezaAvarege.toFixed(2)}-
    which is more than Mary's team one -${maryAvarage.toFixed(2)}- and lisa's team one -${lisAvarage.toFixed(2)}-`)
} else if (aleezaAvarege === lisAvarage && aleezaAvarege === maryAvarage) {
    console.log(`Aleeza's team scores average is -${aleezaAvarege.toFixed(2)} like 
    Mary's team one -${maryAvarage.toFixed(2)}- and lisa's team one -${lisAvarage.toFixed(2)}-`)
} else if (aleezaAvarege === maryAvarage && aleezaAvarege < lisAvarage) {
    console.log(`Aleeze and Mary are the winners with the same scores avarege ${maryAvarage.toFixed(2)} while Mary's team scores are just ${lisAvarage.toFixed(2)}`)
} else if (aleezaAvarege === lisAvarage && aleezaAvarege < maryAvarage) {
    console.log(`Aleeze and Lisa are the winners with the same scores avarege ${aleezaAvarege.toFixed(2)} while Mary's team scores are just ${maryAvarage.toFixed(2)}`)
} else if (maryAvarage === lisAvarage && aleezaAvarege < aleezaAvarege) {
    console.log(`Mary and Lisa are the winners with the same scores avarege ${maryAvarage.toFixed(2)} while Aleeza's team scores are just ${aleezaAvarege.toFixed(2)}`)
}

//1e 
maryAvarage = (80 + 124 + 65) / 3;
aleezaAvarege = (70 + 70 + 100) / 3;
lisAvarage = (100 + 90 + 90) / 3;

if (lisAvarage > aleezaAvarege && lisAvarage > maryAvarage) {
    console.log(`Lisa's team wins because its scores average is -${lisAvarage.toFixed(2)}-
    which is more than Aleeza's team one -${aleezaAvarege.toFixed(2)}- and Mary's team one -${maryAvarage.toFixed(2)}-`)
} else if (maryAvarage > lisAvarage && maryAvarage > aleezaAvarege) {
    console.log(`Mary's team wins because its scores average is -${maryAvarage.toFixed(2)}-
    which is more than Aleeza's team one -${aleezaAvarege.toFixed(2)}- and lisa's team one -${lisAvarage}-`)
} else if (aleezaAvarege > lisAvarage && aleezaAvarege > maryAvarage) {
    console.log(`Aleeza's team wins because its scores average is -${aleezaAvarege.toFixed(2)}-
    which is more than Mary's team one -${maryAvarage.toFixed(2)}- and lisa's team one -${lisAvarage}-`)
} else if (aleezaAvarege === lisAvarage && aleezaAvarege === maryAvarage) {
    console.log(`Aleeza's team scores average is -${aleezaAvarege.toFixed(2)} like 
    Mary's team one -${maryAvarage.toFixed(2)}- and lisa's team one -${lisAvarage.toFixed(2)}-`)
} else if (aleezaAvarege === maryAvarage && aleezaAvarege < lisAvarage) {
    console.log(`Aleeze and Mary are the winners with the same scores avarege ${maryAvarage.toFixed(2)} while Mary's team scores are just ${lisAvarage.toFixed(2)}`)
} else if (aleezaAvarege === lisAvarage && aleezaAvarege < maryAvarage) {
    console.log(`Aleeze and Lisa are the winners with the same scores avarege ${aleezaAvarege.toFixed(2)} while Mary's team scores are just ${maryAvarage.toFixed(2)}`)
} else if (maryAvarage === lisAvarage && aleezaAvarege < aleezaAvarege) {
    console.log(`Mary and Lisa are the winners with the same scores avarege ${maryAvarage.toFixed(2)} while Aleeza's team scores are just ${aleezaAvarege.toFixed(2)}`)
}