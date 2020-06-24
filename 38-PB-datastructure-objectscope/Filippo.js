"use strict";

//1
const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    method: function (){
        return this.firstName + " " + this.lastName+ " " +"is a student in class "+ this.class;
    }
};
console.log(student.method())

//2
const person = { 
    firstName: "John", 
    lastName: "Smith", 
    age: 12,
    job: "kid",
    city: "Portomaggiore",
    method: function (){
        return this.firstName+ " " +this.lastName+ "is a "+this.age+" year old "+this.job+" living in "+this.city;
    },

    /* Object.keys() returns an array whose elements are strings 
    corresponding to the enumerable properties found directly upon object. 
    The ordering of the properties is the same as that 
    given by looping over the properties of the object manually. */
    
    lengthMethod: function(){
        return Object.keys(person).length;
    }
};
console.log(person.method());

//bonus
console.log(person.lengthMethod())