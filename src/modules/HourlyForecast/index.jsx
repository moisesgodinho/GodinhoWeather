import { useLayoutEffect, useRef } from "react";
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
  const tempAndWindRef = useRef(null);

  useLayoutEffect(() => {
    const tempAndWindElement = tempAndWindRef.current;

    if (!tempAndWindElement) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      tempAndWindElement.classList.add("active");
      tempAndWindElement.style.cursor = "grabbing";
      startX = e.pageX - tempAndWindElement.offsetLeft;
      scrollLeft = tempAndWindElement.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      tempAndWindElement.classList.remove("active");
    };

    const handleMouseUp = () => {
      isDown = false;
      tempAndWindElement.classList.remove("active");
      tempAndWindElement.style.cursor = "grab";
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - tempAndWindElement.offsetLeft;
      const walk = x - startX; // * 1; // Ajuste a velocidade de rolagem
      tempAndWindElement.scrollLeft = scrollLeft - walk;
    };

    tempAndWindElement.addEventListener("mousedown", handleMouseDown);
    tempAndWindElement.addEventListener("mouseleave", handleMouseLeave);
    tempAndWindElement.addEventListener("mouseup", handleMouseUp);
    tempAndWindElement.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      if (tempAndWindElement) {
        tempAndWindElement.removeEventListener("mousedown", handleMouseDown);
        tempAndWindElement.removeEventListener("mouseleave", handleMouseLeave);
        tempAndWindElement.removeEventListener("mouseup", handleMouseUp);
        tempAndWindElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []); // A dependência vazia garante que o efeito seja executado apenas uma vez, após a montagem

  return (
    <section className={hourlyForecast}>
      <p className={tittle}>{title}</p>

      <div className={tempAndWind} ref={tempAndWindRef}>
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
                    src={`src/assets/icons/direction.png`}
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
