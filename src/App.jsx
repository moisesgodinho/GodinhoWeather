import { useEffect, useState } from "react";
import "./App.css";
import Container from "./modules/Container";
import CurrentWeather from "./modules/CurrentWeather";
import FiveDaysForecast from "./modules/FiveDaysForecast";
import Header from "./modules/Header";
import HourlyForecast from "./modules/HourlyForecast";
import TodaysHighLights from "./modules/TodaysHighLights";
import getFormattedWeatherDate from "./services/weatherService";

function App() {
  const [query, setQuery] = useState({ q: "nagatoro" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormattedWeatherDate({ ...query, units }).then((data) => {
      setWeather(data);
      console.log(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <>
      <Header setQuery={setQuery} setUnits={setUnits} />
      <Container>
        {weather && (
          <>
            <CurrentWeather weather={weather} />
            <FiveDaysForecast title="Próximos 5 Dias" data={weather.daily} />
            <HourlyForecast title="Próximas Horas" data={weather.hourly} />
            <TodaysHighLights weather={weather} />
          </>
        )}
      </Container>
    </>
  );
}

export default App;
