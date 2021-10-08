import React,{ useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import axios from "axios";


function Banner({WeatherInfo, setWeatherInfo}) {

  const inputRef = useRef(null);
  
  useEffect(() => {
    getForecast();
    //eslint-disable-next-line
  }, []);

  function getForecast(e){
    e?.preventDefault();

    var options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
      params: {
        q: inputRef.value || 'san francisco,us',
        units: 'imperial'
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '59e7bd3068msh80b87035f48ec39p178ff4jsn5e318dbe560a'
      }
    };
    

    axios
    .request(options)
    .then((response)=>{
      setWeatherInfo(response.data);
      console.log(response.data)
    })
    .catch((error)=>{
      alert("Location not found");
    });
  }


  return (
    <div className="weather__form">
      <form type='submit'> 
        <input 
          className="input__city"
          ref={inputRef} 
          type="text" 
          placeholder="City" 
        />
        <button 
          className="search__button"
          onClick={getForecast} 
          type="submit">
          < FaSearch 
            className="search__icon"
            size="2em" color="cornflowerblue" 
          />        
        </button>
      </form>  
    </div>
  )
}

export default Banner
