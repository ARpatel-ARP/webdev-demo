let obj = {
    a : 1,
    b : " Harrry"
}
console.log(obj)

class animal {
    constructor(name) {
        this.name = name
        console.log("object is created...")
        
    }
    eats(){
        console.log("eating")
    }
    jumps(){
        console.log("jumping japack")
    }
}

class lion extends animal {
    constructor(name) {
        super()
        this.name = name
        console.log("the lion")
        
    }
    eats(){
        super.eats()
        console.log("eating")
    }
}
let a = new animal("husky");
console.log(a)

let l = new lion("shera")
console.log(l)

