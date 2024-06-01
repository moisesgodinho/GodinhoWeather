import { useState } from "react";
import styles from "./Header.module.css";

const {
  header,
  logo,
  search,
  inputCidade,
  botaoBusca,
  imgBusca,
  currentLocalization,
  localizationCurrent,
} = styles;

function Header({ setQuery, setUnits }) {
  const [city, setCity] = useState("");
  const handleSeachClick = () => {
    if (city !== "") setQuery({ q: city });
    setCity("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSeachClick();
    }
  };
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <header id="header" className={header}>
      <p className={logo}>GodinhoClima</p>

      <div id="search" className={search}>
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          className={inputCidade}
          placeholder="Procurar cidade"
        />
        <button onClick={handleSeachClick} className={botaoBusca}>
          <img
            className={imgBusca}
            src="https://www.svgrepo.com/show/488200/find.svg"
            alt="pesquisar"
          />
        </button>
      </div>

      <button onClick={handleLocationClick} className={currentLocalization}>
        <img
          className={localizationCurrent}
          src="https://img.icons8.com/ios-filled/50/center-direction.png"
          alt="center-direction"
        />
        <p>Localização Atual</p>
      </button>
    </header>
  );
}

export default Header;
