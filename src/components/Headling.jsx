import React from "react";
import "./Headling.css";

function Heading() {
  return (
    <div className="heading-wrapper">
      <h1 className="heading__title">Создание аккаунта</h1>
      <p className="heading__subtitle">
        Введите свои данные, чтобы создать аккаунт в сервисе
      </p>
    </div>
  );
}

export default Heading;
