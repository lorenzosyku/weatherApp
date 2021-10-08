import React from 'react';
import { WiDaySunny, WiMoonWaningCrescent4 } from "react-icons/wi";

function WeatherTemps({weatherInfo}) {
  return (
    <div className="weather__temps">
      <h3><WiDaySunny size="2em" color="cornflowerblue"/>{`${weatherInfo?.list[0]?.temp?.day } °F`}</h3>
      <h3><WiMoonWaningCrescent4 size="2em" color="cornflowerblue"/>{`${weatherInfo?.list[0]?.temp?.night} °F`}</h3>
    </div>
  )
}

export default WeatherTemps
