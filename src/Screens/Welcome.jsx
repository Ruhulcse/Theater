import React from 'react'
import "../style.css"
function Welcome() {
    return (
        <div className="container">
            <h1 style={{margin: "0"}}>.</h1>
            <h1 style={{color: "white", fontSize: "570%"}}>CineWest</h1>
            <h2 style={{color: "white", fontSize: "300%"}}>Welcome</h2>
            <p style={{color: "white",  fontSize: "140%", }}>
            Ready for a night out? Be our guest CineWest. 
            Sporting 5 screens and open 7days a week, 
            we are here for your entertainment!</p>
            <br></br>
            <br></br>
            <a href="#" style={{color:"black", fontSize:"220%"}}>Book Ticketes Now</a>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <a href="#" style={{color:"red", fontSize:"220%"}}>Time Remaining for order: 10:00</a>
        </div>
    )
}

export default Welcome
