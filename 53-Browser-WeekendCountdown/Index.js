let display = document.querySelector(".display")
let form= document.querySelector("form")
let inp= document.querySelector("input")
let h1=document.querySelector("h1")
let myDate = new Date()
myDay = myDate.getDay()
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(weekDay.indexOf('Saturday'))
console.log(weekDay.indexOf(weekDay[myDay]))
dayLeft = weekDay.indexOf('Saturday') - weekDay.indexOf(weekDay[myDay])

function handler(event){
    console.log("ciao")
    event.preventDefault()//just with the form in order to stop the page from refreshing
    h1.innerText = `Hello ${inp.value}. Today is  ${weekDay[myDay]}. Only ${dayLeft} days left until the Weekend!`
    inp.value = ``    
   
}
form.addEventListener("submit",handler) 
 