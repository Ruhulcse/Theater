import React from 'react'
import Timer from './Timer';

function Summary() {
    const movie = localStorage.getItem('moviename');
    const firstperson = localStorage.getItem('one');
    const secondperson = localStorage.getItem('two');
    const thirdperson = localStorage.getItem('three');
    const fourthperson = localStorage.getItem('four');
    const fivthperson = localStorage.getItem('five');
    const sixthperson = localStorage.getItem('six');
    const popcorn = localStorage.getItem('popcorn');
    const cola = localStorage.getItem('cola')
    const next = () =>{
        localStorage.setItem('order',"yes");
        window.location.href = '/';
    }
    return (
        <div className="container">
         <h1 style={{color: "white", fontSize: "570%" , margin: "0", paddingTop: "8%"}}>CineWest</h1>
         <h2 style={{ fontSize: "300%"}}>Thank you for your booking</h2>
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
         <div className="row">
                <div className="left"> 
                <br></br>
                <br></br>
                <br></br>
                 <Timer/>
                 </div>
                <div className="right"> 
                <br></br>
                <br></br>
                 <button type="submit" form="form1" value="Submit" style={{padding:"2%",borderRadius:"22%",fontSize:"130%"}} onClick={next}>Next</button>
                </div>
              </div>
        </div>
    )
}

export default Summary
