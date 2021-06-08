import React, { useState,useEffect } from 'react'
import Fuse from 'fuse.js'
import Timer from './Timer';

function Search() {
    const [movielist, setMobilist] = useState([
        {
            id: 1,
            name: "Harry Potter and the Deathly Hallows: part 2"
        },
        {
            id: 2,
            name: "Harry Potter and the Sorcerer's Stone"
        },
        {
            id: 3,
            name: "Harry Potter and the Chamber of secret"
        }
        ,{
            id: 4,
            name: "Spider-Man:Homecoming"
        }
        ,
        {
            id: 5,
            name: "Tom & Jerry"
        }
        ,
        {
            id: 6,
            name: "The Empty Man"
        }
    ])
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const fuse = new Fuse(movielist, {
          keys: ['name'],
        });
        const results = fuse.search(searchTerm).map(({ item }) => item);
        if (
          movielist.length > 0 &&
          searchTerm.length >= 0 &&
          results.length > 0
        ) {
          setMobilist(results);
        } else {
          setMobilist(movielist);
        }
      }, [movielist,searchTerm]);
    const searchMovie = (e) =>{
        e.preventDefault();
        console.log("submitted");
    }
    const movie = (item) =>{
        console.log(item);
        localStorage.setItem('moviename',item);
    }
    return (
        <div className="container">
            <h1 style={{color: "white", fontSize: "570%" , margin: "0", paddingTop: "8%"}}>CineWest</h1>
            <h2 style={{color: "white", fontSize: "300%"}}>Select movie</h2>
            <form class="form-inline" onSubmit={searchMovie}>
            <label for="pwd">Find Movie by title</label>
            <input
             type="text"
             id="pwd"
             placeholder=""
             name="q"
             onChange={(e) => setSearchTerm(e.target.value)}
             />
            <button type="submit">Find</button>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <div>
            {movielist.map((item)=>(
               <li>
                    <a href="/seat" style={{color:"black",fontSize:"19px"}} onClick={movie(item.name)}>{item.name}</a>
                    <br></br>
                    <br></br>
               </li>
            ))}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           <Timer/>
        </div>
    )
}

export default Search

