//4 write a function that accepts a number and returns the cube root of the number
           
function cuberoot(x)
{
return Math.cbrt(x, 1/3)
}
console.log(cuberoot(55))

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a number to get its cube root', num => {
       console.log("Cube Root of the given number is :"+Math.cbrt(num));
    readline.close();
  });