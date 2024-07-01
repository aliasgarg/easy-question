// Coding challenge #53. Calculate 70! with high precision (all digits)
function fun(value) {
    let ans = 1;
for(let i=1; i<=70; i++) {
    ans = ans*i 
}
return ans;
}
let b = fun()
console.log(b)

