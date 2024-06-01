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
            <img src="public/quality.svg" className={imgHigh} alt="" />
            <p className={textHigh}>Air Quality</p>
          </div>
        </div>

        <div className={porDoSol}>
          <p className={tittleHigh}>Nascer e Por do Sol</p>
          <div className={sol}>
            <div className={highlightsView}>
              <img src="public/sunrise.svg" className={imgHigh} alt="" />
              <p className={textHigh}>{sunrise}</p>
            </div>
            <div className={highlightsView}>
              <img src="public/sunset.svg" className={imgHigh} alt="" />
              <p className={textHigh}>{sunset}</p>
            </div>
          </div>
        </div>

        <div className={pressureAtm}>
          <p className={tittleHigh}>Pressão Atmosferica</p>
          <div className={highlightsView}>
            <img src="public/pressure.svg" className={imgHigh} alt="" />
            <p className={textHigh}>{`${pressure} atm`}</p>
          </div>
        </div>

        <div className={visibilidade}>
          <p className={tittleHigh}>Visibilidade</p>
          <div className={highlightsView}>
            <img src="public/visibility.svg" className={imgHigh} alt="" />
            <p className={textHigh}>{`${visibility} km`}</p>
          </div>
        </div>

        <div className={umidade}>
          <p className={tittleHigh}>Umidade</p>
          <div className={highlightsView}>
            <img src="public/humidity.svg" className={imgHigh} alt="" />
            <p className={textHigh}>{`${humidity}%`}</p>
          </div>
        </div>

        <div className={feelsLike}>
          <p className={tittleHigh}>Sensação Térmica</p>
          <div className={highlightsView}>
            <img src="public/thermostat.svg" className={imgHigh} alt="" />
            <p className={textHigh}>{`${feels_like}°C`}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodaysHighLights;
