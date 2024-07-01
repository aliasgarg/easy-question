// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion
let a = 0;
let b = 1

for(let i=1; i<20; i++){
   let c= a+b;
   a=b;
   b=c;
   console.log(c)
}
