async function getdata() {
    //simulate getting data from server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 7000);
    })

}

async function getdata() {
    //simulate getting data from server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
      console.log(x)
      return(99)
}

async function main() {

    console.log("loading module")

    console.log("do something else")

    console.log("load data")

    let data = await getdata()

    console.log(data)

    console.log("process data")

    console.log("task2")
}
main()