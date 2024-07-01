// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array
function name(value1, value2){
    let c = [];
    for(let i=0; i<value1.length; i++){
        c.push(value1[i])
    }
    for(let j=0; j<value2.length; j++){
        c.push(value2[j])
    }

    return c
    
}
let a = name([1,2,3,4], [5,6,7,8,9])
console.log(a)