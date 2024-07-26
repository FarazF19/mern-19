// Example using Rest Operator with Arrays
function sum(...numbers) {
    // The rest operator collects all remaining elements into an array
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// Example using Spread Operator with Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];


console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example using Rest Operator with Objects
const person = {
    name: 'Fraz',
    age: 25,
    city: 'Jacobabad',
    profession: 'Developer'
};

const { name, ...rest } = person;
// The rest operator collects all remaining properties into a new object

console.log(name); // Output: Fraz
console.log(rest); // Output: { age: 25, city: 'Jacobabad', profession: 'Developer' }

// Example using Spread Operator with Objects
const address = {
    street: '123 Main St',
    city: 'Jacobabad'
};

const personWithAddress = { ...person, ...address };
// The spread operator spreads properties of person and address into a new object

console.log(personWithAddress);
// Output: { name: 'Fraz', age: 25, city: 'Jacobabad', profession: 'Developer', street: '123 Main St' }


