import React from 'react'
import "./Card.css"

const Cards = (props) => {
    return (
        <div className='card'>
            <img src="https://imgs.search.brave.com/6tvrjX4ZFGmaVVps55U2T1G7BTa_gRry7O12M0ers3E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waXNj/ZXMuYmJ5c3RhdGlj/LmNvbS9pbWFnZTIv/QmVzdEJ1eV9VUy9k/YW0vcGFuZWwtUEUt/MjY3OTI1MC1MMi1M/YXB0b3BzLVdpbmRv/d3MtZ3JhZGllbnRf/bHY0LWZhMGIwODM4/LTI4OWUtNGRhNi05/MWJhLThlYzVmYzg1/MjhkZi5qcGc7bWF4/SGVpZ2h0PTk2MDtt/YXhXaWR0aD05NjA_/Zm9ybWF0PXdlYnA" alt="" width={90} height={70} 
            style={{border:"2px solid aqua"}}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Cards
