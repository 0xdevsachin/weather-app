import React from 'react'
import './App.css';

function names({cityname, countryname}) {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return ( <div className = 'name' >
        <h1> {cityname}, {countryname} </h1>
        <p>{date}</p> </div>
    );
}

export default names;