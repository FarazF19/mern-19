// Arrays
const arrow = () => {
    return true;
};

const arrays = [1, "one", true, null, undefined, [1, 2], { age: 24 }, arrow];

console.log(arrays[5][1]); // Accessing nested array element

// push
arrays.push("newElement");
console.log(arrays); // Adding a new element at the end

// pop
arrays.pop();
console.log(arrays); // Removing the last element

// shift
arrays.shift();
console.log(arrays); // Removing the first element

// unshift
arrays.unshift("firstElement");
console.log(arrays); // Adding a new element at the beginning

// includes
console.log(arrays.includes(true)); // Checking if the array includes a value

// indexOf
console.log(arrays.indexOf("one")); // Finding the index of a value

// Array Destructuring
const [first, second] = arrays;
console.log(first, second);

// Object Destructuring
const person = {
    name: 'Fraz',
    age: 25,
    gender: "Male",
    array: [1, 2],
    address: {
        city: "Jacobabad",
    },
    func: function () {
        return "Hello"
    }
};

const { name, age, gender, array, address: { city }, func: personFunc } = person;
console.log(name, age, gender, array, city, personFunc());
