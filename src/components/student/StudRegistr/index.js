import React, { useState } from "react";
import "./index.scss";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { PiGenderFemaleFill } from "react-icons/pi";
import { MdAccountCircle, MdElderly } from "react-icons/md";
import { Link } from "react-router-dom";

const StudRegistr = () => {
  const [glaza, setGlaza] = useState(true);
  return (
    <div id="studRegister">
      <div className="container">
        <div className="studRegister">
          <div className="studRegister__block">
            <h1>Регистрация для студента</h1>
            <div className="studRegister__block-info">
              <div style={{ width: "100%" }}>
                <label htmlFor="al">Фио</label>
                <MdAccountCircle className="icons" />
                <input type="text" />
              </div>
              <div style={{ width: "100%" }}>
                <label htmlFor="al">Возраст</label>
                <AiOutlineMail className="iconsemail" />
                <input type="number" />
              </div>
            </div>
            <div className="studRegister__block-info">
              <div style={{ width: "100%" }}>
                <label htmlFor="al">Почта</label>
                <PiGenderFemaleFill className="gender" />
                <input type="email" />
              </div>
              <div style={{ width: "100%" }}>
                <label htmlFor="al">Пол</label>
                <MdElderly className="elderly" />
                <input type="text" />
              </div>
            </div>
            <div className="studRegister__block-input">
              <label htmlFor="al">Номер телефона</label>
              <input type="number" />
              <AiOutlineMail className="icon" />
            </div>
            {glaza ? (
              <div className="studRegister__block-input">
                <label htmlFor="al">Пароль</label>
                <input type="password" />
                <RiLockPasswordFill className="icon" />
                <AiOutlineEyeInvisible
                  className="glaza"
                  onClick={() => setGlaza(!glaza)}
                />
              </div>
            ) : (
              <div className="studRegister__block-input">
                <label htmlFor="al">Пароль</label>
                <input type="text" />
                <RiLockPasswordFill className="icon" />
                <AiOutlineEye
                  className="glaza"
                  onClick={() => setGlaza(!glaza)}
                />
              </div>
            )}
            <div className="studRegister__block-btn">
              <p style={{ width: "300px" }}>
                У вас уже есть учетная запись?
                <Link to={"/studLogin"}>
                  <span>Войти!</span>
                </Link>
              </p>
              <Link style={{ width: "180px" }} to={"/forgatPassstud"}>
                <h4>Забыли пароль?</h4>
              </Link>{" "}
            </div>
            <div className="studRegister__block-button">
              <button>Зарегистрироваться</button>
              <Link to={"/repRegistr"}>
                <button className="btn">Я не студент!</button>
              </Link>
            </div>
            <span>или</span>
            <div className="studRegister__block-icon">
              <FcGoogle size={"30px"} />
              <BsTwitter size={"30px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudRegistr;
