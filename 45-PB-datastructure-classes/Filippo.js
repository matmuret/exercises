/* #### 1. Person Class
* Create a class called `Person` which accepts the name of a person as a string, 
and his/her age as a number. The `Person` class should have a method called 
describe which returns a string with the following syntax: "name, age years old". 
So, for example, if John is 19 years old, 
then the function describe of his object will return "John, 19 years old". */

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.greeting = function () {
            return `"${name}, ${age} years old"`;
        }

    }

}
const filippo = new Person("Filippo", 37);
console.log(filippo);
person = new Person("Filippo", 37);
console.log("// 1", person.greeting())

/* #### 2. Volume
* Write a JavaScript program to get the volume of a cylinder 
with four decimal places using a class. 
* **Note**: Volume of a cylinder : `V = πr^2h` - r is the 
radius and h is the height of the cylinder.
*/
class CylinderVolume {
    constructor(r, h /* ,p=3.14 */ ) {
        this.r = r
        this.h = h
        /* this.p=p */
        this.calcVolume = function () {
            let result = r * r * Math.PI /* p */ * h
            return result.toFixed(4)
        }

    }

}
volumeOne = new CylinderVolume(5, 5);
console.log("// 2", volumeOne.calcVolume())

/* #### 4. TV Class
* Create a TV class with properties like brand, channel and volume.
* Specify brand in a constructor parameter. Channel should be 1 by default. 
Volume should be 50 by default.
* Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
* Add a method to set the channel randomly. Let's say the TV has only 50 channels.
* Add a method to reset TV so it goes back to channel 1 and volume 50. 
* It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, 
volume 75". */
class TVchannel {
    constructor(brand = "Panasonic", channel = 1, volume = 50) {
        this.brand = brand
        this.channel = 1 //hardcoding
        this.volume = 50 //hardcoding
        this.volumeIncrease = function () {
            if (volume > 0 || volume < 100) {
                let volumm = volume + 1
                return `Panasonic at channel ${channel}, volume ${volumm}`
            } else {
                return "Error!"
            }
        }
        this.randomChannel = function () {
            let randomchannel = Math.floor(Math.random() * 50);
            return `Panasonic at channel ${randomchannel}, volume ${volume}`
        }
        this.reset = function () {
            channel = 1
            volume = 50
            return `Panasonic at channel ${channel}, volume ${volume}`
        }


    }

}
TV = new TVchannel(5, 5);
console.log("// 4", TV.volumeIncrease())
console.log("// 4", TV.randomChannel())
console.log("// 4", TV.reset())