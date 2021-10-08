import React from 'react'

function WeatherDetails({weatherInfo}) {

  return (
    <div className="weather__details">   
      <h3>{`Humidity: ${weatherInfo?.list[0]?.humidity} %`}</h3>
      <h3>{`Pressure: ${weatherInfo?.list[0]?.pressure} mb`}</h3>        
      <h3>{`Wind Speed: ${weatherInfo?.list[0]?.speed} knots`}</h3>
      <h3>{`Temp-max: ${weatherInfo?.list[0]?.temp?.max} °F`}</h3>
      <h3>{`Temp-min: ${weatherInfo?.list[0]?.temp?.min} °F`}</h3>
    </div>
  )
}

export default WeatherDetails
