// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

function checkPrime(value){
    for(let i=2;i<value;i++){
        let rem=value%i
        if(rem===0){
            return false
        }
    }
    return true
}

function solve(nPrime,AtStart){
    let a=[];
    let count=nPrime
    while (a.length<AtStart) {
            if(checkPrime(count)===true){
                a.push(count)
            }
            count++
        }
        
    return a
}
let z = solve(2,10)
console.log(z)