// Coding challenge #23: Reverse a string

function name(value){
    let a = []
    for(let i=value.length-1; i>=0; i--){
       a.push(value[i])

    }

    return a.join('')
}
let myStr = name("vishal")
console.log(myStr)