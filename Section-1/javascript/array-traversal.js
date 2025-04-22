const arr = [1,2,3,4,5,6,7,8,9,10];

// For Loop

for(let i = 4; i < arr.length; i++){
    // console.log(arr[i]);
}

// For Of Loop

for(let i of arr){
    // console.log(i);
}

// For Each Loop

arr.forEach((a, b, c) => {
    // console.log(a, b, c);
})

const sqr = [];

arr.forEach((e) => {
    sqr.push(e * e);
})

console.log(sqr);

const even = [];

arr.forEach((e) => {
    if(e % 2 == 0){
        even.push(e);
    }
});

console.log(even);


const prices = [340, 810, 1450, 990, 120]

// Find the sum of all the prices in the array

let sum = 0;

prices.forEach( (e) => {
    sum = sum + e;
})

console.log(sum);

// Store all the prices in a new array which are greater than 500
const greaterThan500 = [];

// Add 18% GST to all the prices in the array and store them in a new array
const gst = [];

// Add 12% discount to all the prices in the array and store them in a new array
const discount = [];