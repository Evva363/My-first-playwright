function greet(): void {
    console.log("Hello Function");
}
function multiplyNums(numberOne: number, numberTwo: number): number {
    return numberTwo * numberOne;
}

multiplyNums(2, 5);
greet();

function DisplayGreeting(firstName: string, lastName: string, age: number): string {
    return `Hello, Mr.${lastName}, ${firstName}. You are ${age} years old.`;
}
const greeting: string = DisplayGreeting("Ivan", "Ivanov", 30)
console.log(greeting);
