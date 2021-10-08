import React from 'react';
import moment from "moment";

function CityInfo({weatherInfo, image}) {
  return (
    <div className="city__info">
      <h1>{`${weatherInfo?.city?.name} , ${weatherInfo?.city?.country}`}</h1>
      <h2>{weatherInfo && moment.unix(weatherInfo?.list[0]?.dt).format('LL')}</h2>
      <img className="weather__icon" src={image} alt="weather" />
      <h1><i>{`${weatherInfo?.list[0]?.weather[0]?.description} `}</i></h1>
    </div>
  )
}

export default CityInfo
