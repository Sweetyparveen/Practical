//Basic example of an array in javascript
// let language = ["HTML","CSS","Javascript"] 
// console.log(language)



//creating an array with the help of new constructor
// let language = new Array() 
// language[0] = "HTML"
// language[1] = "CSS"
// language[2] = "Javascript"
// language[3] = "Python"
// console.log(language)


// const sports_array= ["cricket", "football", "competitive-programming"];
// console.log('Sports Game=', sports_array);

// const fruits_array = ["Apple","Banana","Custard Apple"];
// console.log('myArray=', fruits_array);

// const Number_array = [420, 10, 1, 12, 102];
// console.log('score=', Number_array);


const sports = new Array("cricket", "football", "competitive-programming");
console.log('sports=', sports);

const myArray = new Array();
console.log('myArray=', myArray);

const points = new Array();
console.log('points=', points);

const score = new Array(140, 200, 21, 53, 245, 20);
console.log('score=', score);


var numbers = [3, 7];

// Add the two numbers in the array
var sum = numbers[0] + numbers[1];

// Display the result
console.log("The sum is: " + sum);


var numbers = [3, 7, 12, 5];

// Initialize the sum
var sum = 0;

// Iterate through the array and add each number to the sum
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// Display the result
console.log("The sum is: " + sum);


var numbers = [3, 7, 2, 5];

// Initialize the product
var product = 1; // Initialize to 1 because multiplying by 0 would always result in 0

// Iterate through the array and multiply each number with the product
for (var i = 0; i < numbers.length; i++) {
    product *= numbers[i];
}

// Display the result
console.log("The product is: " + product);

var numbers = [3, 7];

// Add the two numbers in the array
var product = numbers[0] * numbers[1];

// Display the result
console.log("The product of two number is: " + product);

//mesauring the length of array
var array = [10, 20, 30]
var arrayLength = array.length;
console.log(arrayLength)

//adding an elewment in the end of an array
var array = [1, 2, 3];
array.push(4);
console.log(array)

//finding the index of an element
var my_Array = ['apple', 'banana', 'orange'];
var indexOfBanana = my_Array.indexOf('banana');
console.log(indexOfBanana)




//concatenation of two arrays
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var concatenatedArray = array1.concat(array2); 
console.log(concatenatedArray)