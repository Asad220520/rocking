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
import { Link } from "react-router-dom";

const StudLogin = () => {
  const [glaza, setGlaza] = useState(true);
  return (
    <div id="login">
      <div className="container">
        <div className="login">
          <div className="login__block">
            <h1>Вход для студента</h1>
            <div className="login__block-input">
              <label htmlFor="al">Почта</label>
              <input type="email" required />
              <AiOutlineMail className="icon" />
            </div>
            {glaza ? (
              <div className="login__block-input">
                <label htmlFor="al">Пароль</label>
                <input type="password" />
                <RiLockPasswordFill className="icon" />
                <AiOutlineEyeInvisible
                  className="glaza"
                  onClick={() => setGlaza(!glaza)}
                />
              </div>
            ) : (
              <div className="login__block-input">
                <label htmlFor="al">Пароль</label>
                <input type="text" />
                <RiLockPasswordFill className="icon" />
                <AiOutlineEye
                  className="glaza"
                  onClick={() => setGlaza(!glaza)}
                />
              </div>
            )}
            <div className="login__block-btn">
              <p style={{ width: "300px" }}>
                У вас нет учетной записи?{" "}
                <Link to={"/studRegistr"}>
                  <span>Создайте учетную запись!</span>
                </Link>
              </p>
              <Link to={'/forgatPassStud'} style={{ width: "180px" }}>
                <h4>Забыли пароль?</h4>
              </Link>
            </div>
            <div className="login__block-button">
              <button>Войти</button>
              <Link to={"/repLogin"}>
                <button
                className="btn"
                >
                  Я не студент!
                </button>
              </Link>
            </div>
            <span>или</span>
            <div className="login__block-icon">
              <FcGoogle size={"30px"} />
              <BsTwitter size={"30px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudLogin;
