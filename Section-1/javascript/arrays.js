const arr = [ 'abc', 45, true, undefined];

console.log(arr);

console.log(typeof arr); // object

console.log(arr.length);

console.log(Array.isArray(arr));

const movies = ['Superman: The Legacy', 'Captain America: Brave New World', 'Chhaava', 'Jaat', 'Badass Ravi Kumar'];

console.log(movies.length);

// Indexing

console.log(movies[4]);
console.log(movies.indexOf('Qwerty')); // -1 means not found
console.log(movies.at(-2));

console.log(movies);

// Replace an element
movies[2] = 'Chhaava 2';
console.log(movies);

// slicing
console.log(movies.slice(1, 3)); // [ 'Captain America: Brave New World', 'Chhaava 2' ]
console.log(movies.slice(1, 300));
console.log(movies.slice(-5, -2)); // [ 'Captain America: Brave New World', 'Chhaava 2', 'Jaat' ]

// add an element

movies.push('Avengers: The Kang Dynasty'); // add to the end
// console.log(movies.push('Avengers: The Kang Dynasty'));
movies.unshift('Avengers: Secret Wars'); // add to the beginning
console.log(movies);

// remove an element
movies.pop(); // remove from the end
movies.shift(); // remove from the beginning
console.log(movies);

//splice
// movies.splice(2, 1); // remove 1 element from index 2
// movies.splice(2, 1, 'Badass Ravi Kumar 2'); // remove 1 element from index 2 and add 'Badass Ravi Kumar' 
movies.splice(2, 0, 'Badass Ravi Kumar 2'); // add 'Badass Ravi Kumar' at index 2
console.log(movies);

