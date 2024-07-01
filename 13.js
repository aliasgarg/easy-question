// Coding challenge #13: Find the maximum number in an array of numbers
let a = Number.MIN_SAFE_INTEGER
let myArr = [1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<myArr.length; i++){
    if(myArr[i]>a){
        a=myArr[i]
    }
}

console.log(a)