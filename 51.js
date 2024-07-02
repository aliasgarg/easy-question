// Coding challenge #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.

let myStr = "himanshu"
let ans =[]
let map = new Map()
for(let i=0; i<myStr.length; i++){
    let currkey = myStr[i]
    
    if(map.has(currkey)){
        let currvalue = map.get(currkey)
        map.set(currkey,currvalue+1)
    }
    else{
        map.set(currkey,1)
    }
        
}
let a = map.keys()
for(let i of a){
    let Obj = {}
    let currFreq = map.get(i)
    Obj[i] = currFreq
    ans.push(Obj)
}
console.log(ans)
