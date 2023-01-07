//11 write a function that returns the string of shortest length if an array is passed a parameter.
           

var arr = ["Divya", "Aravind", "Rubina", "Rama", "Suriya", "Aishwarya"];

console.log(arr.reduce((a, b) => a.length <= b.length ? a : b))

