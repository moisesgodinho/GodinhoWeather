"use client";

import styles from "./FiveDaysForecast.module.css";

const { forecast, tittle, listItem, imgLi, tempMinMax, weekday, dateString } =
  styles;

const FiveDaysForecast = ({ title, data }) => {
  return (
    <>
      <section className={forecast}>
        <p className={tittle}>{title}</p>
        <ul>
          {data.map((d, index) => (
            <li key={index} className={listItem}>
              <div className={tempMinMax}>
                <img
                  className={imgLi}
                  src={`${d.icon}`}
                  alt="weather icon"
                  loading="lazy"
                />
                <div>
                  <p>{`${d.temp_max}°`}</p>
                  <p>{`${d.temp_min}°`}</p>
                </div>
              </div>

              <p className={dateString}>{d.date}</p>
              <p className={weekday}>{d.title}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default FiveDaysForecast;
