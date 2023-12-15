import { React, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "./Form.css";

function Form() {
  const INPUT_TYPE_TEXT = "text";
  const INPUT_TYPE_NUMBER = "number";
  const INPUT_TYPE_CHECKBOX = "checkbox";
  const CONTROL_PASSWORD_TEXT = "Подтверждаю пароль";
  const INPUT_PLASEHOLDER_NAME = "Имя";
  const INPUT_PLASEHOLDER_SURNAME = "Фамилия";
  const INPUT_PLASEHOLDER_PHONE = "Номер телефона";
  const INPUT_PLASEHOLDER_EMAIL = "Email";
  const INPUT_PLASEHOLDER_PASSWORD = "Пароль";
  const INPUT_PLASEHOLDER_PASSWORD_CHECK = "Повторите пароль";
  const BUTTON_TEXT = 'Продолжить';
  const INPUT_NAME_NAME = "name";
  const INPUT_NAME_SURNAME = "surname";
  const INPUT_NAME_PHONE = "phone";
  const INPUT_NAME_EMAIL = "email";
  const INPUT_NAME_PASSWORD = "password";
  const INPUT_NAME_PASSWORD_CHECK = "passwordCheck";
  const INPUT_NAME_PASSWORD_CONTROL = "passwordControl";

  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    passwordCheck: "",
    passwordControl: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
    console.log(form.password)
    console.log(form.passwordCheck)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name){
      alert('Имя не может быть пустым')
      return;
    }

    if (!form.surname){
      alert('Фамилия не может быть пустым')
      return;
    }

    if (!form.phone){
      alert('Номер телефона не может быть пустым')
      return;
    }

    if (!form.email){
      alert('Email не может быть пустым')
      return;
    }

    if (
      form.password !== form.passwordCheck ||
      form.password === "" 
    ) {
      alert("Пароли не совпадают или пустые");
      return;
    } 

    if (!form.passwordControl) {
      alert("Подтвердите пароль");
      return;
    } 

    alert("Данные отправлены на регистрацию и приведены в консоле");
    console.log(form)
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-inner">
        <Input
          type={INPUT_TYPE_TEXT}
          name={INPUT_NAME_NAME}
          placeholder={INPUT_PLASEHOLDER_NAME}
          value={form.name}
          onChange={handleInputChange}
        />
        <Input
          type={INPUT_TYPE_TEXT}
          name={INPUT_NAME_SURNAME}
          placeholder={INPUT_PLASEHOLDER_SURNAME}
          value={form.surname}
          onChange={handleInputChange}
        />
        <Input
          type={INPUT_TYPE_NUMBER}
          name={INPUT_NAME_PHONE}
          placeholder={INPUT_PLASEHOLDER_PHONE}
          value={form.phone}
          onChange={handleInputChange}
        />
        <Input
          type={INPUT_TYPE_TEXT}
          name={INPUT_NAME_EMAIL}
          placeholder={INPUT_PLASEHOLDER_EMAIL}
          value={form.email}
          onChange={handleInputChange}
        />
        <Input
          type={INPUT_TYPE_TEXT}
          name={INPUT_NAME_PASSWORD}
          placeholder={INPUT_PLASEHOLDER_PASSWORD}
          value={form.password}
          onChange={handleInputChange}
        />
        <Input
          type={INPUT_TYPE_TEXT}
          name={INPUT_NAME_PASSWORD_CHECK}
          placeholder={INPUT_PLASEHOLDER_PASSWORD_CHECK}
          value={form.passwordCheck}
          onChange={handleInputChange}
        />
        <Input
          type={INPUT_TYPE_CHECKBOX}
          name={INPUT_NAME_PASSWORD_CONTROL}
          checked={form.passwordControl}
          labelText={CONTROL_PASSWORD_TEXT}
          onChange={handleInputChange}
        />
      </div>
      <Button buttonText={BUTTON_TEXT} onClick={() => handleSubmit} />
    </form>
  );
}

export default Form;