import React from 'react'
import "../style.css"
import Timer from './Timer'
function Welcome() {
    var today = new Date();
    let hour = today.getHours()*60*60;
    var minutes = today.getMinutes()*60;
    var seconds = today.getSeconds();
    let result = hour+minutes+seconds;
    result+=10*60;
    localStorage.setItem('endtime',result);
    let check = localStorage.getItem('order')?true:false;
    const movie = localStorage.getItem('moviename');
    const firstperson = localStorage.getItem('one');
    const secondperson = localStorage.getItem('two');
    const thirdperson = localStorage.getItem('three');
    const fourthperson = localStorage.getItem('four');
    const fivthperson = localStorage.getItem('five');
    const sixthperson = localStorage.getItem('six');
    const popcorn = localStorage.getItem('popcorn');
    const cola = localStorage.getItem('cola')
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
            <a href="/booking" style={{color:"black", fontSize:"220%"}}>Book Ticketes Now</a>
            {!check?(<div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Timer/>
                </div>):(
                <div>
                 <h2 style={{ fontSize: "300%"}}>Privious booking on this site</h2>
                <li style={{fontSize: "160%"}}>{movie}</li>
                <li style={{fontSize: "160%"}}>Seats:
                    <p style={{fontSize: "70%"}}>1. {firstperson}</p>
                    <p style={{fontSize: "70%"}}>2. {secondperson}</p>
                    <p style={{fontSize: "70%"}}>3. {thirdperson}</p>
                    <p style={{fontSize: "70%"}}>4. {fourthperson}</p>
                    <p style={{fontSize: "70%"}}>5. {fivthperson}</p>
                    <p style={{fontSize: "70%"}}>6. {sixthperson}</p>
                </li>
                <li style={{fontSize: "160%"}}>Popcorn: {popcorn}</li>
                <li style={{fontSize: "160%"}}>Number of Cola: {cola}</li>
                </div>
            )}
        </div>
    )
}

export default Welcome
