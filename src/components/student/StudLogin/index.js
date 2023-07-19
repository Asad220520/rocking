import React from "react";
import "./index.scss";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const StudLogin = () => {
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
            <div className="login__block-input">
              <label htmlFor="al">Пароль</label>
              <input type="password" />
              <RiLockPasswordFill className="icon" />
              <BsEyeSlash className="glaza" />
            </div>
            <div className="login__block-btn">
              <p style={{ width: "300px" }}>
                У вас нет учетной записи?{" "}
                <Link to={"/studRegistr"}>Создайте учетную запись!</Link>
              </p>
              <h4 style={{ width: "180px" }}>Забыли пароль?</h4>
            </div>
            <div className="login__block-button">
              <button>Войти</button>
              <Link to={"/repLogin"}>
                <button
                  style={{ background: "none", border: "1px solid #fff" }}
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
