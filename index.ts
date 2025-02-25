// let vs const
let number: number = 5;
number = 10;
console.log("number", number);

const message: string = 'Welcome'


// String
let welcomeMessage: string = "Hello, Peter!"
let test: string = 'Ivan';


let welcomeMessageLenght = welcomeMessage.length;
console.log("welcomeMessagelenght", welcomeMessageLenght);

console.log("Hello, Typescript!");


// string interpolation

let welcomeMessageDetails: string = 'My welcome message lenght is ${welcomeMessageLenght}';
let userWelcomeMessage: string = 'Welcome, ${test}'
console.log(welcomeMessageDetails)

// Number

let firstNumber: number = 10;
let secondNumber: number = 5;

let result: number = firstNumber - secondNumber;
console.log("result", result);

let isGreater: boolean = firstNumber > secondNumber;
console.log("isGreater", isGreater);

let isLower: boolean = firstNumber < secondNumber;
console.log("isLower", isLower);

let isEqual: boolean = firstNumber === secondNumber;
console.log("isEqual", isEqual);

let areNumbersEqualTo: boolean = 11 === firstNumber && 11 === secondNumber;
console.log("areNumbersEqualTo", areNumbersEqualTo);

let isAnyNumberEqualTo: boolean = 6 === firstNumber || 11 === secondNumber;
console.log("isAnyNumberEqualTo", isAnyNumberEqualTo);

let stringValue: any = 'Hello';
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 20, 30];

console.log("stringValue", stringValue);