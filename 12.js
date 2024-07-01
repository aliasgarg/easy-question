// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
let myArr = [1,-2,-3,4,5,-6,7,-8,9,-10]
let myArr2 = []
for(let i =0; i<myArr.length; i++){
    if(myArr[i]>0){
        myArr2.push(myArr[i])
    }
    
}
console.log(myArr2)

// let result = myArr.filter(myArr[i]>0)
// console.log(result)