import React, { useState } from 'react'
import Timer from './Timer';

function Snacks() {
    const movie = localStorage.getItem('moviename');
    const firstperson = localStorage.getItem('one');
    const secondperson = localStorage.getItem('two');
    const thirdperson = localStorage.getItem('three');
    const fourthperson = localStorage.getItem('four');
    const fivthperson = localStorage.getItem('five');
    const sixthperson = localStorage.getItem('six');
    const [popcorn, setPopcorn] = useState("salty");
    const [cola, setCola] = useState("");
    const card = () =>{
        localStorage.setItem('popcorn',popcorn);
        localStorage.setItem('cola',cola);
    }
    const next = () => {
      window.location.href = '/summary';
    }
    return (
        <div className="container">
            <div className="row">
                <div className="left"> 
                    <h1 style={{color: "white", fontSize: "570%" , margin: "0", paddingTop: "8%"}}>CineWest</h1>
                 </div>
                <div className="right"> 
                    <p style={{color: "white", fontSize: "150%" , margin: "0", paddingTop: "8%"}}>ordering busy</p>
                    <p style={{color: "white", fontSize: "150%" , margin: "0", }}>{movie}</p>
                    <br></br>
                    <p style={{color: "white", fontSize: "150%" , margin: "0", }}>1. {firstperson}</p>
                    <p style={{color: "white", fontSize: "150%" , margin: "0", }}>2. {secondperson}</p>
                    <p style={{color: "white", fontSize: "150%" , margin: "0", }}>3. {thirdperson}</p>
                    <p style={{color: "white", fontSize: "150%" , margin: "0", }}>4. {fourthperson}</p>
                    <p style={{color: "white", fontSize: "150%" , margin: "0", }}>5. {fivthperson}</p>
                    <p style={{color: "white", fontSize: "150%" , margin: "0", }}>6. {sixthperson}</p>
                </div>
              </div>
              <h1 style={{color: "white", fontSize: "300%" , margin: "0", paddingTop: "26%"}}>Order Snacks</h1>
              <div className="row">
                <div className="left">
                    <div className="row">
                    <div className="left"> 
                    <p style={{color: "white", fontSize: "200%" , margin: "0", paddingTop: "26%"}}>PopCorn</p><select
                          className="form-control select2"
                          style={{ width: '80%' }}
                          value={popcorn}
                          onChange={(e) => setPopcorn(e.target.value)}
                        >
                          <option value="Salty">Salty</option>
                          <option value="non Salty">Non Salty</option>
                    </select>
                    </div>
                    <div className="right">
                    <p style={{color: "white", fontSize: "200%" , margin: "0", paddingTop: "26%"}}>Cola</p>
                     <input
                        type="text"
                        id="pwd"
                        placeholder=""
                        name="q"
                        onChange={(e) => setCola(e.target.value)}
                        />
                    </div>
                    </div>
                 </div>
                <div className="right" style={{marginTop:"7%"}}>
                 <button type="submit" form="form1" value="Submit" style={{padding:"2%",borderRadius:"22%",fontSize:"130%"}} onClick={card}>Add to Card</button>
                </div>
              </div>
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

export default Snacks
