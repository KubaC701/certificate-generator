import React from "react";
import svg from "../sad.svg";
import "./Sad.css";

const Sad = ({ style, setDecision }) => {
  return (
    <div className="sad" style={style}>
      <h1 className="sad__header">O nie! Jeśli zmienisz zdanie, daj znać!</h1>
      <img src={svg} alt="Witaj" className="sad__image" />
      <button
        type="button"
        className="form__button"
        onClick={() => setDecision(true)}
      >
        Jednak chcę
      </button>
    </div>
  );
};

export default Sad;
