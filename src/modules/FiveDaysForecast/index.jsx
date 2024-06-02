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
  forecastContent,
} = styles;

const FiveDaysForecast = ({ title, data }) => {
  return (
    <>
      <section className={forecast}>
        <p className={tittle}>{title}</p>
        <div className={forecastContent}>
          {data.map((d, index) => (
            <div key={index} className={listItem}>
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
              <div className={dateString}>
                <p>{d.date}</p>
              </div>
              <div className={weekday}>
                <p>{d.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FiveDaysForecast;
