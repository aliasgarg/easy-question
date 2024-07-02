// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
function fun(value1, value2){
    let b = []; 
    solver(value1,value2,b)
    solver(value2,value1,b)
    return b
}

function solver(arr1, arr2, ans){
    for(let k=0; k<arr1.length; k++){
        let ans3 =arr1[k]
        let flag=true
        for(let l=0; l<arr2.length; l++){
            let ans4 =arr2[l]
            if(ans3===ans4){
                flag=false
                break
            }
        }
        if(flag===true){
            ans.push(ans3)
        }
    }
}

let a= fun([1,2,3,4,5], [7,8,9,4,5,3])
console.log(a)