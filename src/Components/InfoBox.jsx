import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HotTubIcon from "@mui/icons-material/HotTub";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnySharpIcon from "@mui/icons-material/WbSunnySharp";

const InfoBox = ({ info }) => {
  /* let info = {
    city: "delhi",
    feelsLike: 11.16,
    humidity: 71,
    maxTemp: 12.05,
    minTemp: 12.05,
    name: "Delhi",
    temp: 12.05,
    weather: "smoke",
  }; */

  const Img_URL =
    "https://images.unsplash.com/photo-1545042679-41d22b2ca130?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  const Hot_URL =
    "http://www.howitworksdaily.com/wp-content/uploads/2015/07/bigstock-Heat-Wave-In-The-City-And-Hand-47540989.jpg";
  const Cold_URL =
    "https://tse2.mm.bing.net/th?id=OIP.8GqV7vX5-LIHPBulHe496wHaEo&pid=Api&P=0&h=220";
  const RAIN_URL =
    "https://tse3.explicit.bing.net/th?id=OIP.V5Wl7SWAjejL2j1VxjVs-gHaE7&pid=Api&P=0&h=220";

  return (
    <div className="InfoBox">
      {/* <h1 style={{ display: "flex", justifyContent: "center" }}>
        WeatherInfo-{info.weather}
      </h1> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 345, marginTop: "10px" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? Hot_URL
                : Cold_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnySharpIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temperature:{info.temp}&deg;C</div>
              <div>Humidity:{info.humidity}</div>
              <div>Max Temp:{info.maxTemp}</div>
              <div>Min Temp:{info.minTemp}</div>
              <div>name:{info.name}</div>
              <div>
                The weather can be described as <i>{info.weather}</i> and feels
                like:{info.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
