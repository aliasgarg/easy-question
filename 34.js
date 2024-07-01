// "Create a function, that will return an array (of string), with the words inside the text"
let myStr = "Create a function, that will return an array (of string), with the words inside the text"
 let a =[]
function fun(value){
    let a=value.split(' ')
    return a
}
let b = fun("Create a function, that will return an array (of string), with the words inside the text")
console.log(b)
