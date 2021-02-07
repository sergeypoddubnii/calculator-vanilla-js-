import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormInput, Input } from "./styledForm";
import { getInfoCity } from "../../../../redux/weather/actions";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getInfoCity(value));
    setValue("");
  };
  return (
    <FormInput onSubmit={handleSubmit}>
      <Input type="text" value={value} onChange={handleChange} />
      <button type="submit">search</button>
    </FormInput>
  );
};

export default Form;
