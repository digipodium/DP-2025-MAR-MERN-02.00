const nums = [8, 5, 7, 2, 4, 6, 3, 1, 9];

const sqr = nums.map((n) => { return n * n });

console.log(sqr);

const prices = [340, 810, 1450, 990, 120];

const gst = prices.map((p) => { return (p * 0.18) + p })

console.log(gst);

const prices2 = ['₹340.41', '₹810.23', '₹1450.80', '₹990.68', '₹120.37'];

const intPrice = prices2.map((p) => { return (p.slice(1)) });

console.log(intPrice);

const even = nums.filter((n) => { return (n % 2 == 0) });
console.log(even);

const greaterThan500 = prices.filter((p) => { return (p >= 500) });
console.log(greaterThan500);

const brands = ['Apple', 'Samsung', 'OnePlus', 'Nokia', 'Sony', 'LG', 'Motorola', 'Xiaomi', 'Vivo', 'Oppo'];

const upper = brands.map((u) => { return u.toUpperCase() });
console.log(upper);

const names = ['Bubli', 'Rinkiya', 'Chinkiya', 'Pinki', 'Kalu']

const longNames = names.filter((n) => { return (n.length > 5) });
console.log(longNames);

const fullNames = ['Vishal Kushwaha', 'Pawan Sharma', 'Chirag Saxena', 'Faizan Ansari', 'Satish Yadav']

const firstNames = fullNames.map((f) => { return f.split(' ')[0] });
console.log(firstNames);

console.log(fullNames.includes('Vishal Kushwaha'));

const decimals = [2.8, 45.2, 12.5, 7.9, 3.4, 8.1];

//Convert to integers then filter the even numbers

console.log(decimals.map((d) => parseInt(d)).filter((d) => d % 2 == 0));


//reduce method = it is used to reduce the array to a single value by applying a function to each element of the array.
//It takes two arguments: a callback function and an initial value. The callback function takes two arguments: an accumulator and the current value. The initial value is optional and is used as the starting point for the reduction.

const arr = [1,2,3,4,5];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

