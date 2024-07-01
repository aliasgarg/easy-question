// Coding challenge #36. Create a function that converts a string to an array of characters

// let a = myStr.split(" ")
// console.log(a)
function fun(value){
   let b = [] 
   let a = value.split(" ");
  for(let i=0; i<a.length; i++){
    b.push(...a[i])
  }
  return b
}
let myStr = fun("my name is vishal, garg")
console.log(myStr)
