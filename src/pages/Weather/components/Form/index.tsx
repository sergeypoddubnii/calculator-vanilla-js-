import React, {
  useState,
  FormEvent,
  ChangeEvent,
  useRef,
  useEffect,
} from "react";
import { useDispatch } from "react-redux";
import { FormInput, Input } from "./styledForm";
import { getInfoCity } from "../../../../redux/weather/actions";

const Form = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  // focus on input
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getInfoCity(value));
    setValue("");
  };

  return (
    <FormInput onSubmit={handleSubmit}>
      <Input ref={inputRef} type="text" value={value} onChange={handleChange} />
      <button type="submit">search</button>
    </FormInput>
  );
};

export default Form;
