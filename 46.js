// Coding challenge #46-b. Find the maximum number in a jagged array of numbers or array of numbers
let ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
// let minNumb = -9
// console.log(typeof ar)
// for(let i=0; i<ar.length; i++){

//     if((typeof ar[i])=='object'){
//         for(let j=0; j<ar[i].length; j++){
//             if((typeof ar[i][j])=='object'){
//                 for(let k=0; k<ar[i][j].length; k++){
//                     if(ar[i][j][k]>minNumb){
//                         minNumb=ar[i][j][k]
//                     }

//                 }
//             }
//             else if(ar[i][j]>minNumb){
//                 minNumb  = ar[i][j]
//             }
//         }

//     }
//     else if(ar[i]>minNumb){
//         minNumb=ar[i]
//     }
// }
// console.log(minNumb)


function solve(ar){
    if(typeof ar === 'object'){
        let max = -1
        for(let i=0;i<ar.length;i++){
            let numb = solve(ar[i])
            if(numb>max){
                max=numb
            }
        }
        return max
    }else{
        return ar
    }
}

console.log(solve(ar))