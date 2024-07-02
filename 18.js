// Coding challenge #18: Print the first 100 prime numbers

//  first 100 tak kasie print kare 

function checkPrime(value){
  for(let j=2; j<value; j++){
    let rem =value%j
    if(rem===0){
      return false;
    }
  }
  return true
}

function solve(){
  let a=[];
  for(let i=0; ;i++){
    if(checkPrime(i)===true)
      a.push(i)
  
    if(a.length>=100){
      break
    }
  }
  return a
}

let z=solve()
console.log(z)

