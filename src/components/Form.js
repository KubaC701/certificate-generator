import React, { useState } from "react";
import Input from "./Input";
import "./Form.css";

const Form = ({ data, setData, style, setSuccessful }) => {
  const [errors, setErrors] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    !data.name && setErrors((prevState) => [...prevState, "name"]);
    !data.surname && setErrors((prevState) => [...prevState, "surname"]);
    !data.place && setErrors((prevState) => [...prevState, "place"]);
    !data.competition &&
      setErrors((prevState) => [...prevState, "competition"]);
    if (!data.name || !data.surname || !data.place || !data.competition) {
      setSuccessful(false);
      console.log('asd');
    } else {
      console.log('asssd');
      setSuccessful(true);
    }
  };
  return (
    <form className="form" style={style} onSubmit={handleSubmit}>
      <Input
        id="name"
        data={data}
        setData={setData}
        label="Imię"
        error={errors.includes("name")}
      />
      <Input
        id="surname"
        data={data}
        setData={setData}
        label="Nazwisko"
        error={errors.includes("surname")}
      />
      <Input
        id="place"
        data={data}
        setData={setData}
        type="number"
        label="Zajęte miejsce"
        error={errors.includes("place")}
      />
      <Input
        id="competition"
        data={data}
        setData={setData}
        label="Nazwa konkursu"
        error={errors.includes("competition")}
      />
      <button type="submit" className="form__button">
        Dalej
      </button>
    </form>
  );
};

export default Form;
