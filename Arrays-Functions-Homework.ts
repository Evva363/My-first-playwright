// Create an array of strings and add a new element at the end of the array. Log the result.
let alphabetic1: string[] = ["Alpha", "Beta", "Gamma"]
alphabetic1.push("Delta");
console.log("alphabetic", alphabetic1);


// Create an array of numbers and remove the first element from the array. Log the result.
let alphabetic2: string[] = ["Alpha", "Beta", "Gamma"]
alphabetic2.shift();
console.log("alphabetic", alphabetic2);


// Use the map method to create a new array and divide each number by 2  “num / 2” from [1, 2, 3, 4, 5].
// Log the result.
let newArraynumbers1: number[] = [1, 2, 3, 4, 5];
let numResult: number[] = newArraynumbers1.map(num => num / 2);
console.log(numResult);


// Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. 
// Log the result.
let newArraynumbers2: number[] = [3, 7, 1, 9, 12, 4];
let filterNums = newArraynumbers2.filter(num => num > 5)
console.log("filterNumsArray", filterNums);


//Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.
const arrayNumbers: number[] = [9, 3, 7, 2, 8, 5];
arrayNumbers.sort();
console.log(arrayNumbers);


//Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. 
// Log the result.
const fruitsArr: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(fruitsArr.slice(0, 3));


// Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] .
// Log the result.
const transport: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
transport.splice(1, 2);
console.log(transport);


// Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them.
// Use if/else statement to find the largest number. Log the result.
function findLargest(num1: number, num2: number, num3: number): number {
    if (num1 < num2) {
        if (num2 < num3) {
            return num3;
        }
        else {
            return num2;
        }
    }
    else if (num1 < num3) {
        return num3;
    }
    else {
        return num1;
    }
}

const result = findLargest(54, 66, 66)
console.log(result);


//Write a function “convertToCentimeters”  which receives parameter “inches” 
// and add default value it and convert to centimeters. 
// Log the result with default parameter and with passed parameter.
function convertToCentimeters(inches: number = 1): number {
    let centimeters: number = inches * 2.54;
    return centimeters;
}
console.log(convertToCentimeters());
console.log(convertToCentimeters(32));


//Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. 
// If height is not provided, assume the shape is a square.
function calculateArea(width: number, height?: number): number {
    let area: number = height ? width * height : width * width;
    return area;
}

console.log("rectangle", calculateArea(3, 5));
console.log("sqare", calculateArea(3));