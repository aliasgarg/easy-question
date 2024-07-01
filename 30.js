
// Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string

function fun(value1, value2){
    let len1=value1.length
    let len2 = value2.length
    let index1=len1-1
    let index2=len2-1
    let carry = 0
    let ans=''
    while(index1 >=0 && index2 >= 0){
        let firstNumber = Number(value1[index1])
        let secondNumber = Number(value2[index2])
        let add = firstNumber + secondNumber + carry
        carry= Math.floor(add/10)
        ans=ans+String(add%10)
        index1--;
        index2--;
    }
    
    while(index1>=0){
        let firstNumber = Number(value1[index1])
        let add = firstNumber  + carry
        carry= Math.floor(add/10)
        ans=ans+String(add%10)
        index1--;
    }

    while(index2>=0){
        let firstNumber = Number(value2[index2])
        let add = firstNumber  + carry
        carry= Math.floor(add/10)
        ans=ans+String(add%10)
        index2--;
    }

    if(carry>0){
        ans= ans+String(carry)
    }

    let a= reverse(ans)
    return a

}

function reverse(s){
    let ans =''
    for(let i=s.length-1;i>=0;i--){
        ans+=s[i]
    }
    return ans
}

let b = fun("1257475686796579078603", "1245489456416213946416191614196163419416216494621612965496264916164163")
console.log(b)