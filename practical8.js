//Program to print numbers from 1-10
// function PrintNumber(){
//     for(let i=1;i<=10;i++){
//         console.log(i);
//     }
// }
// PrintNumber()



//program to print even numbers in given array
// function showevennumbers(Numbers){
//     for(let i=0;i<Numbers.length;i++){
//         if (Numbers[i]%2==0){
//             console.log(Numbers[i]);
//         }
//     }
// }
// var Numbers=[1,2,3,4,5,6,7,8,9,10,11,12]
// showevennumbers(Numbers)



//program to delete occurance of an element in an array
// function deletenumber(arr,num1){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==num1){
//             arr.splice(i,1);
//         }
//     }
//     return arr
// }
// let arr=[1,2,2,3,4,5,2,6,7,8,2,9]
// arr=deletenumber(arr,2)
// console.log(deletenumber(arr));



//program to count digit
// function digitCount(num) {
//     var count=0; 
//     while(num!=0){
//       num=Math.floor(num/10);
//       count++;
//     }
//     return count;
//   }
// console.log(digitCount(83675)); 



//program to do sum
// function Sum(num) {
//     var sum=0;
//     while(num!=0){
//     sum += num % 10;
//     num = Math.floor(num/10);
//     }
//     return sum;
//   }
// console.log(Sum(436)); 



//program to reverse the element
// const myArray=[1,2,3,4,5,6,7,8,9,10]
// for(let i=myArray.length-1;i>=0;i--){
//     console.log(myArray[i]);
// }


//Program to print odd and even with a message
// for (let i=1; i<=10;i++){
//     if (i%2==0){
//         console.log(i,"Even Number");
//     }
//     else{
//         console.log(i,"Odd number");
//     }
// }




//program to do sum of an array
// let myArray=[1,2,3,4,5,6,7,8,9,10]
// let sum=0
// for (let i=0;i<myArray.length;i++){
//     sum+=myArray[i]
// }
// console.log("Sum of array: "+sum);



//program to do square of an given array
// const numbers=[2,3,4,5,6]
// let squarenumber=[]
// for (let i=0;i<numbers.length;i++){
//     squarenumber.push(numbers[i]*numbers[i])
// }
// console.log("Original array: "+numbers);
// console.log("Squared array: "+squarenumber);



//program to find the max number of a given array
// const num1=[1,2,3,4,5,6,7,8,9,10]
// let maxnum=num1[0]
// for (let i=1;i<num1.length;i++){
//     if(num1[i]>maxnum){
//         maxnum=num1[i]
//     }
// }
// console.log("Max Number from the given array: "+maxnum);



//program to find the smallest number of a given array
// const num1=[1,2,3,4,5,6,7,8,9,10,0]
//     let smallestnum=num1[0]
//     for (let i=1;i<num1.length;i++){
//         if(num1[i]<smallestnum){
//             smallestnum=num1[i]
//         }
//     }

// console.log(smallestnum)