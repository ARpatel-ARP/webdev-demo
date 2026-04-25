//problem2//
// let arr = [2,4,5,5,6,7,8,8,9]
// console.log(arr)
// let i = 0
// function double(arr) {
//     for (let i = 0; i < 9 ; i++) {
        
//         if (arr[i] == arr[i+1]) {
//             arr.push(i || i+1)
            
            
//         }
//         else {
//             arr.push(i)
            
//         }
//     }
    
// }double(arr)

// console.log(arr)


let arr = [2,4,5,5,6,7,8,8,9]
console.log(arr)
function double(arr) {
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] == arr[i+1]) {
            // arr.push(i || i+1)
            continue;
            
            
        }
        else {
            console.log(arr[i] + arr[i]) 
            return arr           
        }
    }
    
}
double(arr)
// console.log(arr)