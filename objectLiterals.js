// Math Object
// Math.abs(-10);
// Math.pow(2, 3);


// let num = Math.random();
// num = num * 10;
// num = Math.floor(num);
// num = num + 1;
// GENERATE A RANDOM NUMBET BETWEEN 1 AND 100

// let num = Math.floor(Math.random() * 100) + 1;
// console.log(num);

// let num2 = Math.floor(Math.random()*5)+1;
// console.log(num2);


//  /*
// **********GUESSING GAME********

//User enter a maximum number then tries to guess a random number between 1 and thet maximum no
// */

// const max = prompt("Enter the Maximum Number");
// console.log(`Maximum Number is ${max}`);
// let random = Math.floor(Math.random()*max)+1;
// console.log(`Random Number is ${random}`);

// let guess = prompt("Guess the Random Number");
// while (true) {
//     if (guess == "quite") {
//         console.log("user Quite");
//         break;
//     }
//     if (guess == random) {
//         console.log("Correct Guess!");
//         break;
//     }
//     else if (guess < random){
//         guess = prompt("Your guess was to small: Guess large number");
//     }
//     else {
//         guess = prompt("Your guess was to large: Guess smaller number!");
//     }
    // else {
    //     guess = prompt("YOur Guess was wrong!");
    // }
//}

/*  Create a PROGRAM THAT GENERATE A RANDOM NUMBER REPRESENTING  A DICE */

// let dice = Math.floor(Math.random()*6)+1;
// console.log(`The dice roll is ${dice}`);



/*   CREATE AN OBJECT REPRESENTING A CAR  THAT STORE THE FOLLOWING PROPERTIES LIKE
CAR:NAME,MIDEL,COLOR
 
PRINTS THE CAR NAME
*/

let car ={
    name: "TAta Nexon",
    model: "2020",
    color: "white"
}
console.log(`Car's Name is: ${car.name}`);



/*   CREATE AN OBJECT PERSON WITH THEIR NAME, AGE, AND CITY.
EDIT THEIR CITY'S ORIGINAL VALUE TO CHANGE IT TO "NEW YORK"
ADD  A NEW PROPERTY COUNTRY AND SET IT TO "UNITED STATES"
*/

let person = {
    name: "Nitesh kumar",
    age: 23,
    city: "New Delhi"
}
person.city = "New York";
person.country ="United States";
console.log(person);