function addNums(a, b) {
    c = a + b;
    // console.log(c);
}

// console.log(c);
addNums(45, 87);


//2nd way to declare a function

const getAvg = function (m1, m2, m3) {
    const avg = (m1 + m2 + m3) / 3;
    return avg;
}

const result = getAvg(45, 78, 90);

// console.log(result);

//3rd way to declare a function
// Arrow function

const factorial = (n) => {
    let f = 1;

    for (let i = 1; i <= n; i++) {
        f = f * i;
        // console.log(f);
    }
    return f;
}

const fact = factorial(170);
// console.log(fact);

const divisible = (a, b) => {
    for (let i = a; i <= b; i++) {
        if (i % 7 == 0 && i % 11 == 0) {
            console.log(i);
            // return i;
        }
    }
}

const result1 = divisible(1, 500);
// console.log(result1);