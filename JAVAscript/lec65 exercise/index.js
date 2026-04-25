console.log("factorial calculator")

let a = 6;

function facfor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
       fac = fac * index
        
    }
    return fac
}
console.log(facfor(a))