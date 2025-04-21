num = 124

if (num % 2 == 0 || num % 2 == 1){
    // j = 'something';
    // console.log(j);
    // let a = 'nice';
    // const pi = 3.14
    console.log("Even Number");
}else{
    console.log("Odd Number");
}

// console.log(j);
// console.log(a);
// console.log(pi);

age= 18

if(age>= 18){
    console.log("Adult");
}else{
    console.log("Baccha Hai Abhi");
}

// WAP to check if a number is a perfect square or not.
const num1 = 17;
const root = num1 ** 0.5;
console.log(root);


if (Number.isInteger(root)){
    console.log(num1 + " is a perfect square.");
}else{
    console.log(num1 + " is not a perfect square.");
}
