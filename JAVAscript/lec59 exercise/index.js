// FAULTY CALCULATOR //
console.log("Faulty Calculator.");
let random = Math.random();
console.log(random);
const a = Number(prompt("Enter number 1 :"));
const b = Number(prompt("Enter number 2 :"));
console.log("Select operation : ");
console.log("+. Addition");
console.log("-. Substraction");
console.log("*. Multiplication");
console.log("/. Division");
const choose = Number(prompt("Enter operation to perform : "));
if(random<0.1){
    if(choose == "+"){
        alert(a - b);
    }
    else if(choose == "-"){
        alert(a / b);
    }
    else if(choose == "*"){
        alert(a + b);
    }
    else if(choose == "/"){
        alert(a ** b);
    }
    else{
        alert("Enter valid operation")
    }
}
else{
    if(choose == "+"){
        alert(a + b);
    }
    else if(choose == "-"){
        alert(a - b);
    }
    else if(choose == "*"){
        alert(a * b);
    }
    else if(choose == "/"){
        alert(a / b);
    }
    else{
        alert("Enter valid operation")
    }
}