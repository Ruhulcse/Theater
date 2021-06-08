import React from 'react'

function Timer() {
    var today = new Date();
    let hour = today.getHours();
    let currentTime = hour*60+today.getMinutes();
    let time = 24*60;
    let result = time - currentTime;
    let hr = result/60;
    let minut = parseInt(result%60);
    function time_convert(num)
     { 
     var hours = Math.floor(num / 60);  
     var minutes = num % 60;
     return hours + ":" + minutes;         
     }
    return (
        <div>
             <a href="!#" style={{color:"red", fontSize:"200%"}}>Time Remaining for order: {time_convert(result)}</a>
        </div>
    )
}

export default Timer
