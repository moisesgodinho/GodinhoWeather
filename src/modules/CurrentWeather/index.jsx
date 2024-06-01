import styles from "./CurrentWeather.module.css";

const {
  currentWeather,
  tittle,
  climaNow,
  temperatura,
  graus,
  imgPrevisao,
  textoPrevisao,
  cidade,
} = styles;

const CurrentWeather = ({
  weather: { temp, description, name, country, localDate, formattedLocalTime },
}) => {
  return (
    <>
      <section className={currentWeather} id="currentWeather">
        <p className={tittle}>Agora</p>
        <div className={climaNow} id="climaNow">
          <p className={temperatura}>{`${temp}°`}</p>
          <p className={graus}>C</p>
          <img
            className={imgPrevisao}
            src={`src/assets/icons/03d.png`}
            alt="chuva"
          />
        </div>
        <p className={textoPrevisao}>{`${description}`}</p>

        <p className={cidade}>{`${name}, ${country}`}</p>

        <p className={cidade}>{localDate}</p>
        <p className={cidade}>{formattedLocalTime}</p>
      </section>
    </>
  );
};

export default CurrentWeather;
