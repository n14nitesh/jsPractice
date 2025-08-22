// function hello(){
//     console.log("Hello, Nitesh");
// }
// hello();


// function printName(){
//     console.log("Nitesh");
// }
// printName();



// function print1to5(){
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }
// print1to5()


// function isAdult(){
//     let age = prompt("Enter your age");
//     if (age >18){
//         console.log("You are Adult");
//     }
//     else{
//         console.log("You are underage");
//     }
// }
// isAdult();



/*  Question
Create a function to print a poem
*/
// function poem(){
//     console.log("Twinkle, twinkle little star");
//     console.log("How i wonder what you are");
// }
// poem()


/* Question
Create a function to roll a dice & always return a number between 1 and 6
*/
// function rollDice(){
//     let dice = Math.floor(Math.random()*6)+1;
//     console.log(dice);
// }
// rollDice();




/*
Function with arguments
*/
// function printName(name){
//     console.log(name);
// }
// printName("Rah")

// function printInfo(Name, Age){
//     console.log(`Name: ${Name}, Age: ${Age}`);
// }
// printInfo("Nitesh",22);
// printInfo("Rahul",24);


// function sum(a,b){
//     console.log(a+b);
// }
// sum(444,433);



// /*     Question
// Create a function that gives the average of three number
// */

// function average(a,b,c){
//     let average = (a+b+c)/3;
//     console.log(average);
// }
// average(10,20,30);
// average(88,108,999);



// /*

// Create a function that print multiplication of Table of a number

// */

// function printTable(n){
//     for(let i=n; i<=n*10; i+=n){
       

//         console.log(i);
//     }
// }
// printTable(5);
// printTable(55);


/* 
Function with return keyword
*/

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(5,8));


// /*
// Create a function that retun the sum of number from 1 to n
// */

// function sum1toN(n){
//     let sum=0;
//     for(let i=1; i<=n; i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sum1toN(10));

// /*
// Create a function that return concatenation of all strings in an array
// */

// let str = ["Hello","Nitesh","How ","are","you"]; 
// function concat(str){
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// }

// console.log(concat(str));


// function calSum(a,b){
//     let sum = a+b;
//     console.log(sum);
// }
// calSum(5,6);



// let greet = "Hello";

// function changeGreet(){
//     let greet = "Nameste";
//     console.log(greet);
    
//     function innerGreet(){
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();


// const sum = function(a,b){
//     return a+b;
// }
// sum(6,3);


// const calculator = {
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }

// }



/*
write a js function that returns array elements larger than a number
*/
// let arr = [8,9,10,1,2,3,4,5,6,7];
// let num = 5;

// function largerNum(arr, num){
//     for (let i=0; i < arr.length; i++){
//         if (arr[i] > num){
//             console.log(arr[i]);
//         }
//     } 
// }
// largerNum(arr, num);


// /*
// Write a JavaScript function to extract unique characters from a string.
//  str = “abcdabcdefgggh”
//  ans = “abcdefgh”
// */

// let str = "abcdabcdefgggh";
// function uniqueChars(str){
//     let ans = "";
//     for (let i =0; i<str.length; i++){
//         if (ans.indexOf(str[i])==-1){
//             ans += str[i];
//         }
//     }
//     return ans;
// }
// uniqueChars(str);


// /*
// Write a JavaScript function that accepts a list of country names as input and
//  returns the longest country name as output.
//  Example : country = ["Australia", "Germany", "United States of America"]
//  output : "United States of America"
//  */

//  let country = ["Australia", "Germany", "United States of America"];

//  function longestName(country){
//     let ansIdx=0;
//     for (let i = 0; i < country.length; i++){
        
         
//     }
//  }


 /*
 Write a JavaScript function to count the number of vowels in a String argument.
 */

// let str = "Niteshkumar";

//  function countVowel(str){
//     let count = 0;
//     for (let i = 0; i < str.length; i++){
//         if (
//             str.charAt(i) == 'a' ||
//             str.charAt(i) == 'e' ||
//             str.charAt(i) == 'i' ||
//             str.charAt(i) == 'o' ||
//             str.charAt(i) == 'u'

//         ){
//             count++;
//         }
//     }
//     return count;
//  }




 /*
 Write a JavaScript function to generate a random number within a range (start,
 end)
 */

// let start = 11;
// let end = 44;

// function randomNumber(start, end){
//     return Math.floor(Math.random() * (end - start + 1)) + start;
// }
// console.log(randomNumber(start, end));



// const student = {
//     name: "Nitesh",
//     age: 25,
//     eng: 95,
//     math: 90,
//     phy: 85,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(avg);
//     }
// }


/*
Arrow function
*/

// const sum = (a,b) => {
//     console.log(a + b);
// }
// sum(77,77);


// const cube = (n) => {
//     console.log(n*n*n);
// }

// const pow = (a,b) => {
//     return a**b;

    
// }


// const mul = (a,b) => (a*b);


/**
 Write an arrow function that return square of number 'n'
 */
 
//  const square = (n) => {
//     return n*n;
//  }
//  console.log(square(5));


//  /*
//  Write a function that print "Hello world" 5 times at interval of 2's second each
//  */


//  let id = setInterval(() =>{
//     console.log("Hello World");
//  },2000);

//  setTimeout(() => {
//     clearInterval(id)
//  }, 10000);


// let arr = [1,2,3,4,5];

// let print = function(el){
//     console.log(el);
// };

// arr.forEach(print);


// arr.forEach(function(el){
//     console.log(el);
// });

// arr.forEach((el) =>{
//     console.log(el);
// });


// let arr2 =[{
//     name: "Nitesh",
//     age: 24,
// },
// {
//      name: "RAj",
//     age: 26,
// },
// {
//      name: "Ajjj",
//     age: 23,
// }];

// arr2.forEach(function(student){
//     console.log(student);
//     console.log(student.age);
// });

// //with arrow function
// arr2.forEach((student) => {
//     console.log(student.name);
// });



// let num = [1,2,3,4];

// let double = num.map(function(el){
//     return el*2;
// });
 
// let student = [{
//     name: "Niresh",
//     marks: 94,
// },
// {
//     name: "Raj",
//     marks: 92,
// },
// {
//     name: "Ajjju",
//     marks: 90
// }];

// let gpa = student.map((el) => {
//     return el.marks /10;
// });


// let nums =[1,2,3,4,5,6,7,8,2,10,12,11,6];

// let ans = nums.filter((el) => {
//     return el%2==0;
// });


// let arr = [1,2,3,4,5];
// let newArr = [...arr];
// console.log(newArr);

// let chars = [..."hello"];
// console.log(chars);

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];
// let nums =[...odd, ...even];
// console.log(nums);





// let data = {
//     email: "n@gmail.com",
//     name: "Nitesh",
//     password: 'abcd'
// };
// let copyData = {...data};
// console.log(copyData);
// let copyData1 = {...data, id:1234 ,country : "India"};
// console.log(copyData1);

// let obj1 = {...nums};





// function sum(...args){
//     return args.reduce((add, el) => add+el);
// }



// function sum(...args){
//     for(let i = 0; i< args.length; i++){
//         console.log("You gave us:", args[i]);
//     }
// }


// function min(msg,...args){
//     console.log(msg);
//     return args.reduce((min,el) => {
//         if(min > el){
//             return el;
//         }else{
//             return min;
//         }
//     });
// }



let names = ["tony","stark","peter","parker","bruce"];
let [winner, runnerUp,...loosers] =names;
console.log("winner is :",winner,"and", runnerUp,);
console.log("loosers are:", ...loosers);




let student = {
    name: "karan",
    age: 15,
    class: 10,
    subjects: ["math","science","english","Hindi"],
    username: "karan123",
    password: 'abcd'

};
let {username, password} =student;





/**
 *    QUESTIONS
  Square and sum the array elements using the arrow function and then find the
 average of the array.
 */

 let nums = [1,2,3,4,5];

 const square = nums.map((nums) => {
    return nums * nums;
 });
 console.log(square);

let sum = square.reduce((acc,el) => {
    return acc + el;
});
console.log(sum);

let avg = sum / nums.length;
console.log(avg);


/*
Create a new array using the map function whose each element is equal to the
 original element plus 5
*/

let number = [2,4,6,8,-2,-4];
let newNumber = number.map((el) => {
    return el + 5;
});
console.log(newNumber);


/**
  Create a new array whose elements are in uppercase of words present in the
 original array.
 */

 let strings = ["hello", "nitesh", "how", "are", "you"];
 let uppercase = strings.map((el) => {
    return el.toUpperCase();
 });
 console.log(uppercase);


 /* 
  Write a function called doubleAndReturnArgs which accepts an array and a
 variable number of arguments. The function should return a new array with the original
 array values and all of the additional arguments doubled
 */

 /**
  * Write a function called mergeObjects that accepts two objects and returns a new
 object which contains all the keys and values of the first object and second object

  */
 let obj1 = {
    a: 1,
    b: 2
 };
 let obj2 = {
    c: 3,
    d: 4
 };

 const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
    console.log(mergeObjects(obj1, obj2));