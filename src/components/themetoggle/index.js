import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  var dayNight = "fa-sun";
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");

  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      <i className={`fa ${theme == "dark" ? "fa-sun" : "fa-moon"}`}></i>

    </div>
  );
};

export default Themetoggle;
