import React, { useState } from 'react';
import './App.css';
import { Search } from './components/Search/Search';
import { Detail } from './components/Detail/Detail';
import { About } from './components/About/About';
import { Tab } from './components/Tab/Tab';

export function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeTab, setActiveTab] = useState('weather');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setErrorMessage('');
  };

  const fetchWeatherData = async (search) => {
    const apiKey = '5cb17f6af3c54d7b8a9124501230611';
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${search}&aqi=no`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      console.log(data);

      if (data.location && data.location.name.toLowerCase() !== search.toLowerCase()) {
        setErrorMessage('City not found. Please try again.');
        resetWeatherData();
        return;
      }

      if (data.error && data.error.code === 1006) {
        setErrorMessage('City not found. Please try again.');
        resetWeatherData();
        return;
      }

      if (!data.location || !data.current) {
        throw new Error('Invalid response from the server');
      }

      setWeatherData(data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('City not found. Please try again.');
      resetWeatherData();
    }
  };

  const resetWeatherData = () => {
    setWeatherData(null);
  };

  const handleReturnToMainScreen = () => {
    setActiveTab('weather');
  };

  return (
    <>
      <div className='weather'>
        <Tab activeTab={activeTab} onTabChange={handleTabChange} />
        {activeTab === 'weather' && (
          <>
            <Search onSearch={fetchWeatherData} />
            {weatherData ? (
              <Detail weatherData={weatherData} onReset={resetWeatherData} />
            ) : (
              <div id="error-message" style={{ color: 'red' }}>
                {errorMessage}
              </div>
            )}
          </>
        )}

        {activeTab === 'about' && (
          <About onReturn={handleReturnToMainScreen} />
        )}
      </div>
    </>
  );
}
