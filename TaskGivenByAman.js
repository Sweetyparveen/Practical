// Write a javascript function:
 
// Create an array of numbers of length 10.
// divide the array into two array where odd index numbers of the above array goes into 1st array and even in second.
// find the max value of each the array.
// find the index of max value from both the array and swap the values in the main array.





function My_Task() {
    let mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1st step to create an array of length 10
    let oddArray = mainArray.filter((_,index) => index % 2 !== 0); //This is an arrow func, it takes two parameters the current element and index, the index of the current element in the array
                                                                    //the condition check if the index is not divisible by 2 and checks the index is an odd number 
    let evenArray = mainArray.filter((_,index) => index % 2 === 0); //the condition check is the idex is divisible by 2 means it checks if the index is an even number
    console.log("Even array: "+evenArray);
    console.log("Odd array: "+oddArray);

    let maxOdd = Math.max(...oddArray); //spread used to expand element of an array
    let maxEven = Math.max(...evenArray);
    // console.log(maxOdd);
    // console.log(maxEven);


    // // Step 4: Find the index of the max values in the main array
    let indexMaxOdd = mainArray.indexOf(maxOdd);
    let indexMaxEven = mainArray.indexOf(maxEven);
    // console.log(indexMaxOdd);
    // console.log(indexMaxEven);

    console.log([mainArray[indexMaxOdd] , mainArray[indexMaxEven]] = [maxEven, maxOdd]);

    return mainArray;
}
console.log("Swapped Array: "+ My_Task());
// console.log(My_Task());