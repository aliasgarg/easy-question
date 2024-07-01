// Coding challenge #20: Rotate an array to the left 1 position
// let myArr = ;
// let a = [];
function name(value){
    let c = value.shift()
   value.push(c);
  
return value
}

let a = name([1,2,3,4,5,6,7,8,9,11])
console.log(a)