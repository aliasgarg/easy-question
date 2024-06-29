// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
let a=0;
for(let i=11; i<30; i++){
    let rem=i%2;
    if(rem!==0){
        a=i+a
      
    } 
    
}
console.log(a)