
// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

function fun(value1, value2){
    let ans1;
    let ans2;
    let z = []
    for(let i=0; i<value1.length; i++){
        let flag= true;
        ans1 = value1[i]
       for(let j=0; j<value2.length; j++){
        ans2 = value2[j]
        if(ans2===ans1){
            flag = false
            break;
        }
       
    
    }
    if(flag===true){
        z.push(value1[i])
    }
    }
    return z
}

let a = fun([1,2,3,6,5,9,87,41,3,4,8,4,6,7,96], [4,5,6,5,98,47,1,3,56,4,78,92,1,3,2])
console.log(a)