// Arrays

let numbersArray: number[] = [1, 2, 3, 4, 5];
let stringAndNumsArr: (number | string)[] = [1, "Papaya", "Guavas", 2, "3"];

let fruits: string[] = ["Apples", "Oranges", "Bananas", "Coconuts"];
let FirstEl: string = fruits[1];
let SecondEl: string = fruits[3];

fruits.push("Mango");
console.log("fruits", fruits)

numbersArray.pop()
console.log("numbersArrays", numbersArray);

fruits.shift();
console.log("fruits", fruits)

numbersArray.unshift(5)
console.log("numbersArrays", numbersArray);

let multiplyNumbers: number[] = numbersArray.map((element) => element * 2);
console.log("multiplyNumbers", multiplyNumbers);

let filterNumsArray = numbersArray.filter(element => element > 2)
console.log("filterNumsArray", filterNumsArray);