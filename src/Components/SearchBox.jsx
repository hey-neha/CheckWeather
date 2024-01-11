import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../App.css";
import { useState } from "react";

const SearchBox = ({updateInfo}) => {
  let [city, setCity] = useState("");
  let [error,setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "69fe3e31538ce0a60e7b5fb7b1eb32be";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      let result = {
        city:city,
        temp: jsonResponse.main.temp,
        maxTemp: jsonResponse.main.temp_max,
        minTemp: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        name: jsonResponse.name,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      /* console.log(error); */
      return error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSUbmit = async (event) => {
    try {
      event.preventDefault();
    console.log(city);
    setCity("");
     let Newinfo = await getWeatherInfo();
     updateInfo(Newinfo);
      
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="searchbox">
      <form onSubmit={handleSUbmit}>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          required=""
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      {
        error &&  <p style={{color:"red"}}>No such place exists</p>
      }
      </form>
    </div>
  );
};

export default SearchBox;
