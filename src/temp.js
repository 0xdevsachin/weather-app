import React from 'react'
import './App.css'

function temp({temprature, desc, humid, wind, sunrise, sunset, clouds, rain}){
    var max_temp = parseInt(rain - 273.15);
    var newdeg = parseInt(temprature - 273.15)
    var sec = sunrise
    var sec2 = sunset
    var date = new Date(sec * 1000);
    var date2 = new Date(sec2 * 1000);
    var timestr = date.toLocaleTimeString();
    var timestr2 = date2.toLocaleTimeString();
    return(
        
        <div className='temprature'>
            <div className="data">
                <h1>{newdeg} &#176; C</h1>
                <p>{desc}</p>
            </div>
            <div className="details">
                <div>
                <h4>{humid}%</h4>
                <p>Humidity</p></div>
                <div>
                <h4>{wind} m/s</h4>
                <p>Wind</p></div>
                <div>
                <h4>{timestr}</h4>
                <p>Sunrise</p></div>
                <div>
                <h4>{clouds} %</h4>
                <p>Cloudiness</p></div>
                <div>
                <h4>{max_temp} &#176; C</h4>
                <p>Highest Temp</p></div>
                <div>
                <h4>{timestr2}</h4>
                <p>Sunset</p></div>
            </div>
        </div>
    );
}

export default temp;