const fs = require("fs")
console.log(fs)

console.log("starting")
fs.writeFile("raut.txt", "Ankit Raut the invincible guy", () => {
    console.log("writing")
    fs.readFile("raut.txt", (error, data) => {
        console.log(error, data.toString)

    }
    )
    fs.appendFile("harry", "harrybodo",) (e, d) => {



    }
    

}
)
console.log("ending")