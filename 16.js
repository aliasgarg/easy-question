// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime

function vishal(value){
    for(let i=2; i<value; i++){
        if(value%i==0){
            return false
        
        }

    }
        return true
}
let a = vishal(17);
if(a===true){
    console.log("prime hai")
}
else{
    console.log("prime nahi hai")
}


