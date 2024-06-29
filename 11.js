// Coding challenge #11: Calculate the average of the numbers in an array of numbers
let myArr = [1,2,3,4,5,6,7,8,9,10]
let ans = 0
for(let i=0; i<myArr.length; i++){
    ans=ans+myArr[i]
}
let a = ans/myArr.length
console.log(a)