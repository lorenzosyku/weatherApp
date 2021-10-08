import React from 'react';
import moment from "moment";

function ThisWeeksForecast({weatherInfo}) {
  return (
    <div className="weather__forecast">

          <div className="day__forecast">
            <h4>{weatherInfo && weatherInfo && moment.unix(weatherInfo?.list[1]?.dt).format('ll')}</h4>
            <h4>{`Temp: ${weatherInfo?.list[1]?.feels_like?.day} °F`}</h4>
            <br />
            <h4>{`${weatherInfo?.list[1]?.weather[0]?.description} `}</h4>
            <img className="weather__icon" src={`http://openweathermap.org/img/wn/${weatherInfo?.list[1]?.weather[0]?.icon}@2x.png`} alt="weather" />
          </div>

          <div className="day__forecast">
            <h4>{weatherInfo && weatherInfo && moment.unix(weatherInfo?.list[2]?.dt).format('ll')}</h4>
            <h4>{`Temp: ${weatherInfo?.list[2]?.feels_like?.day} °F`}</h4>
            <br />
            <h4>{`${weatherInfo?.list[2]?.weather[0]?.description} `}</h4>
            <img className="weather__icon" src={`http://openweathermap.org/img/wn/${weatherInfo?.list[2]?.weather[0]?.icon}@2x.png`} alt="weather" />
          </div>

          <div className="day__forecast">
              <h4>{weatherInfo && weatherInfo && moment.unix(weatherInfo?.list[3]?.dt).format('ll')}</h4>
              <h4>{`Temp: ${weatherInfo?.list[3]?.feels_like?.day} °F`}</h4>
              <br />
              <h4>{`${weatherInfo?.list[3]?.weather[0]?.description} `}</h4>
              <img className="weather__icon" src={`http://openweathermap.org/img/wn/${weatherInfo?.list[3]?.weather[0]?.icon}@2x.png`} alt="weather" />
          </div>

          <div className="day__forecast">
            <h4>{weatherInfo && weatherInfo && moment.unix(weatherInfo?.list[4]?.dt).format('ll')}</h4>
           <h4>{`Temp: ${weatherInfo?.list[4]?.feels_like?.day} °F`}</h4>
           <br />
           <h4>{`${weatherInfo?.list[4]?.weather[0]?.description} `}</h4>
           <img className="weather__icon" src={`http://openweathermap.org/img/wn/${weatherInfo?.list[4]?.weather[0]?.icon}@2x.png`} alt="weather" />
          </div>

          <div className="day__forecast">
            <h4>{weatherInfo && weatherInfo && moment.unix(weatherInfo?.list[5]?.dt).format('ll')}</h4>
            <h4>{`Temp: ${weatherInfo?.list[5]?.feels_like?.day} °F`}</h4>
            <br />
            <h4>{`${weatherInfo?.list[5]?.weather[0]?.description} `}</h4>
            <img className="weather__icon" src={`http://openweathermap.org/img/wn/${weatherInfo?.list[5]?.weather[0]?.icon}@2x.png`} alt="weather" />
          </div>

          <div className="day__forecast">
            <h4>{weatherInfo && weatherInfo && moment.unix(weatherInfo?.list[6]?.dt).format('ll')}</h4>
            <h4>{`Temp: ${weatherInfo?.list[6]?.feels_like?.day} °F`}</h4>
            <br />
            <h4>{ `${weatherInfo?.list[6]?.weather[0]?.description} `}</h4>
            <img className="weather__icon" src={`http://openweathermap.org/img/wn/${weatherInfo?.list[6]?.weather[0]?.icon}@2x.png`} alt="weather" />
          </div>

        </div>
  )
}

export default ThisWeeksForecast
