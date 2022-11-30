import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});

  const [location, setLocatin] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6d1169bfe3a713ab0b864f6e506689f7`;

  const searchLocaion = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocatin("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocatin(event.target.value)}
          onKeyPress={searchLocaion}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°F</p>
              ) : null}

              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="bold">{data.main.humidity.toFixed()}%</p>
              ) : null}

              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
        <footer className="footer">
          <p>
            Made with ❤️ By &nbsp;
            <a
              href="https://github.com/Stroller15"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="foot">Shubham Verma</span>
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
