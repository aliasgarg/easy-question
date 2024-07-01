// Coding challenge #18: Print the first 100 prime numbers

//  first 100 tak kasie print kare 

for(let i=0; i<=100; i++){
  let z = fun(i);
  if(z!==undefined){
    console.log(z)

  }
  
        function fun(value){for(let j=2; j<100; j++){
            let rem=value%j
            if(rem===0){
                return 
            }

       
    }
    return value
}
    
}

