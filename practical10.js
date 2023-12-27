//using a for loop iterate numbers from 1-10 and with the help of break statement break it when it reach 6
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i === 6) {
//       // use 'break' here to exit the loop when i is 5
//       break;
//     }
//   }



//while loop that prints even numbers from 1-10 exit the loop if the number is 8 using 'break'
// let num = 2;
// while (num <= 10) {
//   console.log(num);
//   if (num === 8) {
//     break;
//   }
//   num += 2;
// }



//While loop to prompt the user to enter number between 1-5 and it will keep prompting until user enter 3
// const prompt=require("prompt-sync")({sigint:true}); 
// let userInput;
// do {
//   userInput = parseInt(prompt("Enter a number between 1 and 5:"));
//   console.log("User entered:", userInput);
//   if (userInput === 3) {
//     break;
//   }
// } while (true); 



//Iterate over each element of an array using for of loop
// const favfruits=["apple","mango","cherry","guava","custard apple"]
// for(const fruit of favfruits){
//     console.log(fruit);
// }



//sum of even numbers of an array with the help of foreach method
// const numbers=[1,2,3,4,5,6,7,7]
// let sumofeven=0
// numbers.forEach(numbers=>{
//     if(numbers%2===0){
//         sumofeven+=numbers
//     }
// })
// console.log("Sum of even numbers: ",sumofeven);



//Given an array to filter out the the numbers which are less than 10 with the help of filter method
// const numbers=[5,12,8,15,3,10,7,20]
// const filternumber=numbers.filter(numbers=>numbers>=10)
// console.log(filternumber);



//print new array of even numbers with the help of filter method
// const numbers=[1,2,3,4,5,6,7,8,9,14,34,55]
// const evennumbers=numbers.filter(numbers=>numbers%2===0)
// console.log(evennumbers);


//creating set
// const createset=new Set(["Java","Python","JavaScript","Material-UI"])
// console.log(createset);


//adding new element and remove one of them
// const language=new Set(["Python","Java","JavaScript","Bootstrap"])
// add1=language.add("C++")
// add2=language.add("ruby")
// console.log("Set after adding more languages: ",language);

// language.delete('C++')
// console.log("Set after removing C++: ",language);



//checking size of a set
// const checksize=new Set(["Sweety","Megha","Anjali","Sonu","Irfan"])
// const Size=checksize.size
// console.log(Size);



//conver an array of element into set
// const givenarray=["Red","Yellow","Pink","Blue","Green","Black"]
// const converSet=new Set(givenarray)
// console.log(converSet);



