// Coding challenge #22: Reverse an array

function name(value){
    let b = [];
    for(let i=value.length-1; i>=0; i--){
        
    let a = value[i];
   
    b.push(a);
  
    
}
return b
}
let myArr = name([1,2,3,4,5,6,7,2,5,6,9,8,9,8,9])
console.log(myArr)