const numFibonacciArr = parseInt(prompt('Enter number of fibonacci'));
const yourNumArr = fibonacciArr(numFibonacciArr);
alert(yourNumArr);

function fibonacciArr(n) {
  let  fArr = [0,1];
  for(let i = 2; i<=n; i++){
      fArr.push(fArr[i-1]+fArr[i-2]);
      
   }
   const num =fArr.pop();
   return num;
}



