// Data types count -8

//Data types:
//1. String

// console.log(document)

//String type examples

// 2. Number

// 1, 23456, 2344566, 40, 9

// console.log(1,2,3,4)

// 3. Boolean
// console.log("" || 2)
// false
// true

// 4. Symbol

// const sym1 = Symbol();
// const sym2 = Symbol("foo");
// const sym3 = Symbol("foo");
// console.log(sym3)
//  /, {}, !,?,*

//JavaScript new version: es6 -   Ecma Script 6

//alert("hello world")

//BigInt
//big number

// const alsoHuge = BigInt(9007199254740991)

// console.log()

//underfined

//empty values

//  console.log(user2)

// Array

// console.log(array[0].children);

//  цикл это какя то последовательность которая может повторяться несколько разю Вплоть до бесконечности

// 1. for
// 2.while

// for (let i=0; i<=5; i++ ) {
//     console.log(i)
// }

// for(let i=1; i<=10; i++) {
//     console.log(i)
// }

//const fruites = ["apple", "banana", "ananas", "pinch", "avokado"];

//let newArray = [];

// console.log("New Array");

// for (let i = 0; i < fruites.length; i++) {
//   newArray.push(fruites[i]);
// }
// console.log("New Array", newArray);

// let i =0;

// while (i<fruites.length) {
//   newArray.push(fruites[i]);
//   i++;
// }

// console.log(newArray)

// types of data and means which are fals
// fals, 0, "", null, udenfined

//const values= ["Dima", 23, 45, false, "Rusya", "",null, undefined, 0, 0.1]

//let falseValues = []

//r(let i = 0; i <= values. length; i++) {
// if (values[i])

//const p= document. createElement("last-p")

//p.textContent = "last-p"
//document. querySelector ()

// const practiceAreasBlock = document.getElementById("practice-areas-block");
// const practiceAreasLink = document.getElementById("practice-areas");

// practiceAreasLink.addEventListener("mouseover", (event) => {
//   practiceAreasBlock.style.display = "flex";
// });

// practiceAreasLink.addEventListener("mouseout", (event) => {
//   practiceAreasBlock.style.display = "none";
// });

// function
//functions :
// Declaration
//

// document.getElementById("emailForm").addEventListener("submit", function (event) {
//   event.preventDefault();

//   const serviceID = "service_fjxxm96"; // Ваш service_id из EmailJS
//   const templateID = "template_6pz12df"; // Ваш template_id из EmailJS

//   const templateParams = {
//     to_email: document.getElementById("to").value,
//     subject: document.getElementById("subject").value,
//     message: document.getElementById("message").value,
//   };

//   emailjs.send(serviceID, templateID, templateParams).then(
//     function (response) {
//       console.log("SUCCESS!", response.status, response.text);
//       alert("Email sent successfully!");
//     },
//     function (error) {
//       console.log("FAILED...", error);
//       alert("Failed to send email. Please try again.");
//     },
//   );
// });

//const array = [1. 2];
//
// const array = ["Pen", "Bag", "Pencil", "Eraser"];

// array.includes("Bag");

// console.log(array.includes("Book"));

// fetch('https://jsonplaceholder.typicode.com/photos/')
//       .then(response => response.json())
//       .then(json => console.log(json))

// const array=[1,2,3,4,5,6,7]
// function getconsole(num) {
// const str="#"
// console.log(str.repeat(num) )
// }
// for (let i = 0; i < array.length; i++) {
//   getconsole(array[i])
// }

//   function getalert() {
//     alert('Hello world');

// }

// getalert(

// function req1() {
//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// we print the title and the body of the post recived

// req1()

// let js = "amazing"

// const sum=5**5
// console.log(sum)

// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// console.log(person.firstName)

// console.log(person.eyeColor)

// const car = {model:"BMW", color:"black", title:7777};

// console.log(car.model)

// car.color = "white";

// console.log(car.color)

Boolean(10 > 9);

console.log(10 > 9);

// let airplane = {
//     name: "Turkish airlanes", model: "Boing 777", direction: "Bishkek-Istambul", comander: {
//         gender: "male", age: 45, height: "85ft", weight: "95kg", eyeColore: "blu"
//     }
// }

// airplane.comander.weight = "90kg";

// console.log(airplane )

// let fruits = ["apple", "banana", "cherry"];

// // Output the array
// console.log(fruits);

// let fruits = ["apple", "banana", "cherry"];

// // Output the array
// console.log(fruits);

// let animals = [
//   {
//     name: "Lio",
//     age: 10,
//     color: "yellow",
//   },
//   {
//     name: "tiger",
//     age: 15,
//     color: "motley",
//   },
// ];

// console.log(animals[1]);

// animals.push( {name: "dinasaor",
// age: 15,
// color: "motley"})


// console.log(animals);

// const animals = ["lio", "tiger", "dog", "cat"];
// console.log (animals.toString() );

// const cars = ["toyota", "mercedec", "honda"]
// console.log (cars.join("+"))

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  console.log(fruits.pop())

//  const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  fruits.push("Kiwi");
//  console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log (fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");
// console.log (fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift("Banana");
// fruits.push("Banana")
// console.log (fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift("Mango");
// fruits.push("Mango")
// fruits.shift("Apple");
// fruits.push("Apple")
// fruits.shift("Orange");
// fruits.push("Orange")
// fruits.shift("Banana");
// fruits.push("Banana")
// console.log (fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse())

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren)

// const a = [5,6,7,8,9,10]
// const b = [1,2,3,4]
// const a_b = b.concat(a)
// console.log(a_b)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 2, "Lemon", "Kiwi");
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pinch"];
// fruits.splice(2, 3, "Lemon", "Kiwi", "Orange", "Carrot", "Watermelon");
// console.log(fruits)

// const myArr = [[[1,2],[3,4],[5,6]]];
// const newArr = myArr.flat();
// console.log(newArr)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1,3,4);
// console.log(citrus)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
// const citrus = fruits.slice(3,5)
// console.log(citrus)

const numbers=[1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
    
// } 

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // for(let i = 10; i > 5; i++){
      
// //     console.log(i);
// }

for(let i = 1; i <= 10; i) {
    console.log(i);
}