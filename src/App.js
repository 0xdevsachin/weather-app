import React , {useEffect, useState} from 'react';
import './App.css';
import Name from './name'
import Temp from './temp'


function App(){

const KEY = 'e43c2712bc66c1f08e9850200ff3e8d1';


const [data, setdata] = useState({});
const [query, setquery] = useState('');
const [city, setCity] = useState('London');


const input_query = (e) =>{
  setquery(e.target.value)
}
const searchcity = (e)=>{
  e.preventDefault();
  setCity(query)
}

  useEffect(() => {
    const getweather = async ()=>{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
      const req = await response.json();
      setdata(req);
    }
    getweather();
}, [city]);

  return(
    <div className='maindiv'>
     <div className='mainbox'>
   <form onSubmit={searchcity}>
   <input className='search-box' placeholder='Enter City' onChange={input_query}  type='text'></input>
      <button className='search-btn' type='submit' >Search</button>
   </form>
     </div>
  {!data.sys ? (
    <div className="errorbox">
      <div className="econtent">
        <h1> &#128577; Sorry, City Was Not found </h1>
      </div>
    </div>
  ): (
    <div>
    <Name cityname ={data.name} countryname={data.sys.country} />
<Temp temprature = {data.main.temp} desc={data.weather[0].description} humid = {data.main.humidity} wind={data.wind.speed}
  sunrise = {data.sys.sunrise} sunset = {data.sys.sunset} clouds = {data.clouds.all} rain = {data.main.temp_max}
/> 
    </div>
  )
  }
    </div>
  );
}

export default App;

