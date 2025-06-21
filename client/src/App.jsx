// client/src/App.js
import React from 'react';
import WeatherSearch from './components/WeatherSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast App</h1>
        <WeatherSearch />
      </header>
    </div>
  );
}

export default App;