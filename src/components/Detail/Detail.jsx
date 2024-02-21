import React from 'react'
import './Detail.css'

export function Detail({ weatherData, onReset }) {
  const { location, current } = weatherData;

  return (
    <>
      <div className="country">
        <p className="country-city">{`${location.country}, ${location.name}`}</p>
      </div>
      <div className="time">{new Date().toLocaleTimeString()}</div>
      <div className="dateT">{new Date().toLocaleDateString()}</div>
      <div className="icon">
        <img src={`https:${current.condition.icon}`} alt="weather" />
      </div>
      <div className="temperature">
        <span>{`${current.temp_c} °C`}</span>
      </div>
      <div className="weather-feature">
        <div className="windy">
          <i className="bi bi-wind"></i>&nbsp;
          <span>{`${current.wind_kph} km/h`}</span>
        </div>
        <div className="humid">
          <i className="bi bi-water"></i>&nbsp;
          <span>{`${current.humidity} %`}</span>
        </div>
      </div>
      <div className="weather-feels">
        <div className="feels-like">{`Feels like: ${current.feelslike_c} °C`}</div>
        <div className="uv" style={{ color: 'green' }}>{current.uv}</div>
      </div>
    </>

  );
}
