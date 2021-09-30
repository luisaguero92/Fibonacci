// program to generate fibonacci series up to n terms

// take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// Cantidad de números que deseamos imprimir
//var limit = number;

var fibo = [0, 1];
    console.log('Fibo 3')
    console.log(fibo);
    for (let i = 2; i <= number; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
        document.write(fibo[i]);
    }


