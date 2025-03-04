/* type Role = {
    role: "manager" | "founder"
}
type Permissions = {
    permissions: "admin" | "user"
}
type User = Role & Permissions;

const user: User = {
    role: "founder",
    permissions: "admin"
}
console.log("userObject", user) */

// object types with interfaces

/* interface Animal {
    species: string;
    breed?: string;
    age: number;
    weight?: number;
    name: string;
}

const animal: Animal = {
    species: "cats",
    age: 1,
    name: "Chase",
    breed: "Wiskas",
    weight: 2
}
console.log("animal", animal) */


interface Cars {
    color: string;
    wheels: number;
    transmitions: "manual" | "automatic";
    fuelType: "diesel" | "petrol";
    startEngine: () => string;

}

const car: Cars = {

    color: "grey",
    wheels: 4,
    transmitions: "automatic",
    fuelType: "petrol",
    startEngine: function () {
        return "Start the engine";
    }

}
const carStartEngine = car.transmitions;
console.log("car", car.startEngine());


// get object keys

const keys = Object.keys(car);
console.log("keys", keys);

// get object values
const values = Object.values(car);
console.log("values", values);

// object assign 2 objects in one

const colorObj = { color: 'black' }
const backgroundObj = { background: 'white' }
const assignedObj = Object.assign({}, colorObj, backgroundObj);
console.log("assinedObj", assignedObj);

export { }