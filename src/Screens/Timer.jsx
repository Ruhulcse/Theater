import React from 'react'

function Timer() {
    var today = new Date();
    let hour = today.getHours()*60*60;
    var minutes = today.getMinutes()*60;
    var seconds = today.getSeconds();
    let result = hour+minutes+seconds;
    let uptime = localStorage.getItem('endtime');
    result = uptime - result;
    function time_convert(time)
     { 
        var minutes = Math.floor(time / 60);
        var seconds = time - minutes * 60;
      return minutes + ":" + seconds;         
     }
    return (
        <div>
             <a href="!#" style={{color:"red", fontSize:"200%"}}>Time Remaining for order: {time_convert(result)}</a>
        </div>
    )
}

export default Timer
