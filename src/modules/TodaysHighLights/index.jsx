import styles from "./TodaysHighLights.module.css";

const {
  todaysHighlight,
  tittleHigh,
  highlightsView,
  airQuality,
  porDoSol,
  pressureAtm,
  visibilidade,
  umidade,
  feelsLike,
  imgHigh,
  textHigh,
  sol,
} = styles;

const TodaysHighLights = ({
  weather: { sunrise, sunset, pressure, humidity, feels_like, visibility },
}) => {
  return (
    <>
      <section className={todaysHighlight}>
        <div className={airQuality}>
          <p className={tittleHigh}>Qualidade do Ar</p>
          <div className={highlightsView}>
            <img
              src="src/assets/icons/quality.svg"
              className={imgHigh}
              alt=""
            />
            <p className={textHigh}>Air Quality</p>
          </div>
        </div>

        <div className={porDoSol}>
          <p className={tittleHigh}>Nascer e Por do Sol</p>
          <div className={sol}>
            <div className={highlightsView}>
              <img
                src="src/assets/icons/sunrise.svg"
                className={imgHigh}
                alt=""
              />
              <p className={textHigh}>{sunrise}</p>
            </div>
            <div className={highlightsView}>
              <img
                src="src/assets/icons/sunset.svg"
                className={imgHigh}
                alt=""
              />
              <p className={textHigh}>{sunset}</p>
            </div>
          </div>
        </div>

        <div className={pressureAtm}>
          <p className={tittleHigh}>Pressão Atmosferica</p>
          <div className={highlightsView}>
            <img
              src="src/assets/icons/pressure.svg"
              className={imgHigh}
              alt=""
            />
            <p className={textHigh}>{`${pressure} atm`}</p>
          </div>
        </div>

        <div className={visibilidade}>
          <p className={tittleHigh}>Visibilidade</p>
          <div className={highlightsView}>
            <img
              src="src/assets/icons/visibility.svg"
              className={imgHigh}
              alt=""
            />
            <p className={textHigh}>{`${visibility} km`}</p>
          </div>
        </div>

        <div className={umidade}>
          <p className={tittleHigh}>Umidade</p>
          <div className={highlightsView}>
            <img
              src="src/assets/icons/humidity.svg"
              className={imgHigh}
              alt=""
            />
            <p className={textHigh}>{`${humidity}%`}</p>
          </div>
        </div>

        <div className={feelsLike}>
          <p className={tittleHigh}>Sensação Térmica</p>
          <div className={highlightsView}>
            <img
              src="src/assets/icons/thermostat.svg"
              className={imgHigh}
              alt=""
            />
            <p className={textHigh}>{`${feels_like}°C`}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodaysHighLights;
