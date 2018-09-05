const numFibonacciRecursion = parseInt(prompt('Enter number of fibonacci'));
const yourNumRecursion = fibonacciRecursion(numFibonacciRecursion);
alert(yourNumRecursion);

function fibonacciRecursion(n){
    if(n<=1){
        return n;
    }
        return (fibonacciRecursion(n-1)+fibonacciRecursion(n-2));
}