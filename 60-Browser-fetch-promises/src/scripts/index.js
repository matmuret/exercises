// The following line makes sure your styles are included in the project. Don't remove this.
/* import '../styles/main.scss'; */
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
let modal = document.getElementById("myModal")
let close = document.querySelector(".close")

let showModal = () => {
    let promise = new Promise((resolve, reject) => {

        resolve(setTimeout(() => {
            modal.style.display = "block"
        }, 1000))
        reject("err")
    })

    return promise
}

showModal()
    .then()
    .catch(err => console.log(err))

    close.addEventListener("click",()=>{modal.style.display = "none"})