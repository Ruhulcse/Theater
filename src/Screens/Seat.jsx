import React, { useEffect, useState } from 'react'
import "../style.css"
import Timer from './Timer';
function Seat() {
    const movie = localStorage.getItem('moviename');
    const [one ,setOne] = useState("");
    const [two ,setTwo] = useState("");
    const [three ,setThree] = useState("");
    const [four ,setFour] = useState("");
    const [five ,setFive] = useState("");
    const [six ,setSix] = useState("");
    const seatBook = () =>{
        localStorage.setItem('one',one);
        localStorage.setItem('two',two);
        localStorage.setItem('three',three);
        localStorage.setItem('four',four);
        localStorage.setItem('five',five);
        localStorage.setItem('six',six);
        window.location.href = '/snacks';
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
                </div>
              </div>
              <h1 style={{color: "white", fontSize: "250%" , margin: "0", paddingTop: "18%"}}>Assign seats</h1>
              <p style={{color: "white", fontSize: "150%" , margin: "0", paddingTop: "2%"}}>Drag names to the right to fill up all available seats</p>
              <div className="row">
                <div className="left"> 
                    <h1 style={{color: "white", fontSize: "280%" , margin: "0", paddingTop: "8%"}}>Guests</h1>
                    <ul>
                        <li style={{fontSize: "160%"}}>Jef</li>
                        <li style={{fontSize: "160%"}}>Rob</li>
                        <li style={{fontSize: "160%"}}>Pieter</li>
                        <li style={{fontSize: "160%"}}>Zai</li>
                        <li style={{fontSize: "160%"}}>Louis</li>
                        <li style={{fontSize: "160%"}}>Rabbie</li>
                    </ul>
                 </div>
                <div className="right"> 
                    <p style={{color: "white", fontSize: "280%" , margin: "0", paddingTop: "8%"}}>Available seats (numbered)</p>
                     1.{one}<select
                          className="form-control select2"
                          style={{ width: '100%' }}
                          value={one}
                          onChange={(e) => setOne(e.target.value)}
                        >
                          <option selected="selected" value="">
                          </option>
                          <option value="Jef">Jef</option>
                          <option value="Rob">Rob</option>
                          <option value="Pieter">Pieter</option>
                          <option value="Zai">Zai</option>
                          <option value="Louis">Louis</option>
                          <option value="Rabbie">Rabbie</option>
                    </select>
                    2.{two}<select
                          className="form-control select2"
                          style={{ width: '100%' }}
                          value={two}
                          onChange={(e) => setTwo(e.target.value)}
                        >
                          <option selected="selected" value="">
                          </option>
                          <option value="Jef">Jef</option>
                          <option value="Rob">Rob</option>
                          <option value="Pieter">Pieter</option>
                          <option value="Zai">Zai</option>
                          <option value="Louis">Louis</option>
                          <option value="Rabbie">Rabbie</option>
                    </select>
                    3.{three}<select
                          className="form-control select2"
                          style={{ width: '100%' }}
                          value={three}
                          onChange={(e) => setThree(e.target.value)}
                        >
                          <option selected="selected" value="">
                          </option>
                          <option value="Jef">Jef</option>
                          <option value="Rob">Rob</option>
                          <option value="Pieter">Pieter</option>
                          <option value="Zai">Zai</option>
                          <option value="Louis">Louis</option>
                          <option value="Rabbie">Rabbie</option>
                    </select>
                    4.{four}<select
                          className="form-control select2"
                          style={{ width: '100%' }}
                          value={four}
                          onChange={(e) => setFour(e.target.value)}
                        >
                          <option selected="selected" value="">
                          </option>
                          <option value="Jef">Jef</option>
                          <option value="Rob">Rob</option>
                          <option value="Pieter">Pieter</option>
                          <option value="Zai">Zai</option>
                          <option value="Louis">Louis</option>
                          <option value="Rabbie">Rabbie</option>
                    </select>
                    5.{five}<select
                          className="form-control select2"
                          style={{ width: '100%' }}
                          value={five}
                          onChange={(e) => setFive(e.target.value)}
                        >
                          <option selected="selected" value="">
                          </option>
                          <option value="Jef">Jef</option>
                          <option value="Rob">Rob</option>
                          <option value="Pieter">Pieter</option>
                          <option value="Zai">Zai</option>
                          <option value="Louis">Louis</option>
                          <option value="Rabbie">Rabbie</option>
                    </select>
                    6.{six}<select
                          className="form-control select2"
                          style={{ width: '100%' }}
                          value={six}
                          onChange={(e) => setSix(e.target.value)}
                        >
                          <option selected="selected" value="">
                          </option>
                          <option value="Jef">Jef</option>
                          <option value="Rob">Rob</option>
                          <option value="Pieter">Pieter</option>
                          <option value="Zai">Zai</option>
                          <option value="Louis">Louis</option>
                          <option value="Rabbie">Rabbie</option>
                    </select>
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
                 <button type="submit" form="form1" value="Submit" style={{padding:"2%",borderRadius:"22%",fontSize:"130%"}} onClick={seatBook}>Next</button>
                </div>
              </div>
        </div>
    )
}

export default Seat
