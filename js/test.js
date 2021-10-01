
// Cantidad de números que deseamos imprimir
const number = parseInt(prompt('Enter the number of terms: '));

//var limit = number;

var fibo = [0, 1];
    console.log('Serie de Fibonacci')
    console.log(fibo);
    for (let i = 2; i <= number; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
        
    }
    document.write(fibo);
alert("La serie de fibonacci es la siguiente: " + fibo)
