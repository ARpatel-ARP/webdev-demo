console.log('This is promise');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("no random no. supportd")

    }
    else {
        setTimeout(() => {
            console.log("i am done")
            resolve("Harry")
        }, 5000);

    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.1) {
        reject("no random no. supportd 2")

    }
    else {
        setTimeout(() => {
            console.log("i am done")
            resolve("Harry bhai")
        }, 5000);

    }
})
let prom3 = Promise.race([prom1, prom2])

prom3.then((a) => {
    console.log(a)

}).catch((err) => {
    console.log(err)

}
)


