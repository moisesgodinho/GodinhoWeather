import { useRef } from "react";
import styles from "./HourlyForecast.module.css";

const {
  hourlyForecast,
  hourly,
  tittle,
  hourlyContent,
  tittleHigh,
  imgLi,
  textoLi,
  listItem,
  ulHourly,
  tempAndWind,
} = styles;

const HourlyForecast = ({ title, data }) => {
  return (
    <section className={hourlyForecast}>
      <p className={tittle}>{title}</p>

      <div className={tempAndWind}>
        <ul className={ulHourly}>
          {data.map((d, index) => (
            <li key={index} className={listItem}>
              <div className={hourly}>
                <div className={hourlyContent}>
                  <p className={tittleHigh}>{d.title}</p>
                  <img className={imgLi} src={`${d.icon}`} alt="weather icon" />
                  <p className={textoLi}>{`${d.temp}°C`}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className={ulHourly}>
          {data.map((d, index) => (
            <li key={index} className={listItem}>
              <div className={hourly}>
                <div className={hourlyContent}>
                  <p className={tittleHigh}>{d.title}</p>
                  <img
                    className={imgLi}
                    style={{ transform: `rotate(${d.deg}deg)` }}
                    src={`public/direction.png`}
                    alt="wind direction"
                  />
                  <p className={textoLi}>{`${d.speed}km/h`}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HourlyForecast;
