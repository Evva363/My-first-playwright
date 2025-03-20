let fruits2: string[] = ['Apple', 'Banana', 'Peach', 'Watermelon'];

//for of loop access only array values
/* for (let fruit of fruits2) {
    console.log("fruit", fruit);
}
export {}; */

//for of over array of numbers 

/* let numbers: number[] = [10, 20, 30, 40];
for (let number of numbers) {
    console.log(`${number} plus 5 is ${number + 5}`);
}
export {}; */

/* let message: string = "Hello world!";
for (let letter of message) {
    console.log("Letter", letter)
}
export { };
 */
interface Student {
    name: string,
    lastName: string,
    age: number
}

const student = { name: "Pesho", lastName: "Petrov", age: 20 };
for (let key in student) {
    console.log(key)
}

export { };