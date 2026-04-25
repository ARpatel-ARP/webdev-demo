function createcard(title, cname, views, monthsold, duration, thumbnail){
    let viewsstr 
    if(views<100000){
        viewsstr = views/1000 + "k";
    }
    else if(views>1000000){
        viewsstr = views/1000000 + "M";

    }
    else {
        viewsstr = views/1000 + "k";
    }

    let html = `<div class="card">
            <img src=${thumbnail} alt"">
                <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h2>${title} </h1>
                <p>${cname} . ${viewsstr}views . ${monthsold} months ago</p>
        </div>
    `

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createcard("introduction to backend", "raitrage", 56800000, 7, "54:07", "https://i.ytimg.com/vi/W1y8blwMLxY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApxihT9RcRpz8nJcnN-6p0A3vXPA")