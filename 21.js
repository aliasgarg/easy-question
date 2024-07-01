// Coding challenge #21: Rotate an array to the right 1 position

function name(value){
    let b = value.pop()
    value.unshift(b);
    return value
}

let myArr =  name([1,2,3,4,5,6,7,8,9])
console.log(myArr)