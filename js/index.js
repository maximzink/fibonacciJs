const numFibonacci = parseInt(prompt('Enter number of fibonacci'));
const yourNum = fibonacci(numFibonacci);
alert(yourNum);

const numFibonacciRecursion = parseInt(prompt('Enter number of fibonacci'));
const yourNumRecursion = fibonacciRecursion(numFibonacciRecursion);
alert(yourNumRecursion);

const numFibonacciArr = parseInt(prompt('Enter number of fibonacci'));
const yourNumArr = fibonacciArr(numFibonacciArr);
alert(yourNumArr);

function fibonacci(n) {
    let firstNumber = 1;
    let secondNumber = 1;
    for (let i = 3; i <= n; i++) {
        let nextNum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextNum;
    }
    return secondNumber;
}

function fibonacciRecursion(n){
    if(n<=1){
        return n;
    }
        return (fibonacciRecursion(n-1)+fibonacciRecursion(n-2));
}

function fibonacciArr(n) {
  let  fArr = [0,1];
  for(let i = 2; i<=n; i++){
      fArr.push(fArr[i-1]+fArr[i-2]);
    }
   const num =fArr.pop();
   return num;
}
