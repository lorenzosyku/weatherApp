import React, { useEffect, useState} from 'react';
import ThisWeeksForecast  from "./ThisWeeksForecast";
import WeatherDetails from './WeatherDetails';
import WeatherTemps from './WeatherTemps';
import CityInfo from './CityInfo';
import Banner from './Banner';


function WeatherForecast() {
  
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [background, setBackground] = useState('')
  const [image, setImage] = useState("");

  useEffect(() => {
    determineBackground();
    
    //eslint-disable-next-line
  }, [weatherInfo]);

  const determineBackground = (e) => { 
    e?.preventDefault();

    if(weatherInfo?.list[0]?.weather[0]?.main === 'Rain'){
      setBackground(`https://images.unsplash.com/photo-1501691223387-dd0500403074?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbiUyMHdpbmRvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60`)
    }
    if(weatherInfo?.list[0]?.weather[0]?.main === 'Clouds'){
      setBackground(`https://images.unsplash.com/photo-1505533542167-8c89838bb19e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60`)
    }
    if(weatherInfo?.list[0]?.weather[0]?.main === 'Clear'){
      setBackground(`https://images.unsplash.com/photo-1617142137869-325955e2d3cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsZWFyJTIwc2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60`)
    }
    if(weatherInfo?.list[0]?.weather[0]?.main === "Snow"){
      setBackground(`https://images.unsplash.com/photo-1431036101494-66a36de47def?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60`)
    }
  }

  useEffect(() => {
    determineImage(); 
    //eslint-disable-next-line
  }, [weatherInfo]);

  const determineImage = (e) => {
    e?.preventDefault();

    setImage(
      `http://openweathermap.org/img/wn/${weatherInfo?.list[0]?.weather[0]?.icon}@2x.png`
    );
  };

  return (
    
      <div className="weather__app"
        style={{backgroundImage: `url(${background})` }}
      > 
        <Banner
          weatherInfo={weatherInfo}
          setWeatherInfo={setWeatherInfo}
        />

        <CityInfo 
          weatherInfo={weatherInfo}
          image={image}
        />

        <WeatherTemps 
          weatherInfo={weatherInfo}
        />

        <WeatherDetails 
          weatherInfo={weatherInfo}
        />

        <ThisWeeksForecast 
          weatherInfo={weatherInfo}
        />

      </div>
  );
}

export default WeatherForecast
