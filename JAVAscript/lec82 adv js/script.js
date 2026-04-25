async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(34)
        }, 1000);
    })
    
}
 function sum(a,b,c) {
    return a+b+c
    
}
(async function main() {

    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)
    let [x, y, ...rest] = [1,5,5,7,8,9,0]
    console.log("x=",x)
    console.log("y=",y)
    console.log("rest=",rest)

    let obj = {
        a:1,
        b:2,
        c:3
    }
    let{a,b} = obj
    console.log(a,b)
    
    let arr = [1,3,4]
    console.log(sum(...arr))    
    
        
            
            
        
    
})()
    

