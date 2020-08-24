// Get object values as an array and thus the length of array:
const coolObject = { a: 1, b: 2, c: 3, d: 'america', e: ['hi', 4, 5] };

console.log(Object.values(coolObject)); // [ 1, 2, 3, 'america', [ 'hi', 4, 5 ] ]
console.log(Object.values(coolObject).length); // 5

// --> <-- \\
