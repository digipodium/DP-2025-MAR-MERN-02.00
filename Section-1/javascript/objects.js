const user = {
    name: 'Raju',
    email: 'raju@gmail.com',
    password: 'abc123',
}

console.log(user);

console.log(user.name);
console.log(user['email']);

user.name = 'Raju Kumar';
console.log(user);

user.address = 'Lucknow';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand: 'Samsung',
    model: 'S25 Ultra',
    price: 121000,
    colors: ['Graphite', 'Snow', 'Ocean', 'Mint', 'Cherry'],
}

console.log(smartphone.colors[2]);

console.log(smartphone.colors.push('Titanium'));

console.log(smartphone.colors);

smartphone.colors[0] = 'Yellow';

console.log(smartphone.colors);

smartphone.colors.shift();
console.log(smartphone.colors);

const smartphoneArray = [
    {
        brand: 'Samsung',
        model: 'S25 Ultra',
        price: 121000,
        colors: ['Graphite', 'Snow', 'Ocean', 'Mint', 'Cherry'],
    },
    {
        brand: 'Apple',
        model: 'iPhone 14 Pro Max',
        price: 139900,
        colors: ['Space Black', 'Silver', 'Gold', 'Deep Purple'],
    },
    {
        brand: 'OnePlus',
        model: 'OnePlus 11',
        price: 59999,
        colors: ['Eternal Green', 'Titan Black'],
    },
];

console.log(smartphoneArray[1]);


