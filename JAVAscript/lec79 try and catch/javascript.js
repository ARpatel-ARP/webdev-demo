let a = prompt("enter the first no.")

let b = prompt("enter the second no.")


if(isNaN(a) || isNaN(b)){
    throw SyntaxError("not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main() {
    
       let x = 56 
    
    try {
        console.log("the sum is ", sum*x)
        return true
        
    } catch (error) {
        console.log("error 404")
        return false
    }
    finally{
        console.log("files being closed")
    }
    
}

let c = main()
