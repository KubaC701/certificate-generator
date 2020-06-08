import React, { useState, useEffect } from "react";
import svg from "../welcome.svg";
import "./Welcome.css";

const Welcome = ({ setDecision }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  useEffect(() => {
    setIsVisible(true);
    const buttons = setTimeout(() => {
      setIsHeaderVisible(false);
    }, 2000);
    return () => {
      clearTimeout(buttons);
    };
  }, []);
  return (
    <div className="welcome" style={{ opacity: isVisible ? 1 : 0 }}>
      <div className="welcome__header__wrapper">
        <h1
          className="welcome__header"
          style={{ opacity: isHeaderVisible ? 1 : 0 }}
        >
          Witaj
        </h1>
        <p
          className="welcome__question"
          style={{ opacity: isHeaderVisible ? 0 : 1 }}
        >
          Czy chcesz wygenerować dyplom?
        </p>
      </div>
      <img src={svg} alt="Witaj" className="welcome__image" />
      <div className="welcome__buttons">
        <button
          className="welcome__button welcome__button--secondary"
          onClick={() => setDecision(false)}
          style={{ opacity: isHeaderVisible ? 0 : 1 }}
        >
          Nie, zabierz mnie stąd
        </button>
        <button
          className="welcome__button welcome__button--primary"
          onClick={() => setDecision(true)}
          style={{ opacity: isHeaderVisible ? 0 : 1 }}
        >
          Tak, oczywiście!
        </button>
      </div>
    </div>
  );
};

export default Welcome;
