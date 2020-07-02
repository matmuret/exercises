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
            let result = r * r * Math.PI * h
            return result.toFixed(4)
        }

    }

}
volumeOne = new CylinderVolume(5, 5);
console.log("// 2", volumeOne.calcVolume())