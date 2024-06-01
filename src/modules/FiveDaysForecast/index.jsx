import styles from "./FiveDaysForecast.module.css";

const {
  forecast,
  tittle,
  listItem,
  imgLi,
  tempMinMax,
  weekday,
  dateString,
  temps,
} = styles;

const FiveDaysForecast = ({ title, data }) => {
  return (
    <>
      <section className={forecast}>
        <p className={tittle}>{title}</p>
        <ul>
          {data.map((d, index) => (
            <li key={index} className={listItem}>
              <div className={tempMinMax}>
                <div>
                  <img
                    className={imgLi}
                    src={`${d.icon}`}
                    alt="weather icon"
                    loading="lazy"
                  />
                </div>
                <div className={temps}>
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
