// Coding challenge #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
let n=5
let map = new Map()
let ans =[]
while(ans.length<n){
   let a = getRndInteger(1,n)
   while(map.has(a)){
    a=getRndInteger(1,n)
   }

   ans.push(a)
   map.set(a,1)
}

console.log(ans)