let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b> clicked</b>"

})

button.addEventListener("contextmenu", ()=>{
    alert("warning")
    document.querySelector(".box").innerHTML = "<b> clicked</b>"

})
