/* mport { Info } from "@mui/icons-material" */
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "../App.css";

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "wonderland",
    feelsLike: 11.16,
    humidity: 71,
    maxTemp: 12.05,
    minTemp: 12.05,
    name: "Delhi",
    temp: 12.05,
    weather: "smoke",
  });

  let updateInfo = (newInformation) => {
    setWeatherInfo(newInformation);
  };
  return (
    <div style={{ textAlign: "center" }} className="wrapper">
      <h2>Weather APP </h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;
