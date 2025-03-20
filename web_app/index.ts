/* // let vs const
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

console.log("stringValue", stringValue); */

//Ternary operator

/* const isPositiveNum = 5 > 0 ? "The number is positive" : "The number is negative";
console.log(typeof isPositiveNum);

const age: number = 30;
const myName: string = "Pesho";

const personDescription = age < 40
    ? `${myName} is yonger than 40. He is ${age} old.`
    : `${myName} is older than 40. He is ${age} old.`

console.log("personDescription", personDescription);

const personName = "His name is Pesho";
console.log("personName", personName); */

//If else statement

/* if (age < 40) {
    console.log('Age is lower than 40');
}
else {
    console.log('Age is greater than 40');
} */

/* const num: number = 50;

if (num < 10) {
    console.log('Number is lower than 10.');
}
else if (num > 100) {
    console.log('Number is greater than 100');
}
else { console.log("The number is between 10 and 100!") };


//type Aliases

type PersonInfoType = string | number;
const personNameInf: PersonInfoType = "Ivan";
const personAgeInf: PersonInfoType = "25"; */

/* type Status = "approved" | "rejected" | "pending" | "fullfiled";
const currentStatus: Status = "fullfiled"
 */
type PersonData = {
    name: string;
    lastName: string;
    age: number;
    city: "Sofia" | "Plovdiv" | "Varna";
}

/* function displayPersonData({ name, lastName, age }: PersonData) {
    return `${name} ${lastName} is ${age} years old.`
} */

