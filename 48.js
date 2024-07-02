// Coding challenge #48. Create a function to return the longest word(s) in a string

let text =fun("Create a functions to return the longest word(s) in a sentance")
console.log(text)

function fun(value) {
    let b = [];
    let a = value.split(" ");
    for(let i=0; i<a.length; i++){
       if(b.length<a[i].length){
        b.length = a[i].length
       }
    }
    return b.length
}