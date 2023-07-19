import React from "react";
import "./index.scss";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const StudRegistr = () => {
  return (
    <div id="studRegister">
      <div className="container">
        <div className="studRegister">
          <div className="studRegister__block">
            <h1>Регистрация для студента</h1>
            <div className="studRegister__block-info">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="studRegister__block-info">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="studRegister__block-input">
              <label htmlFor="al">Почта</label>
              <input type="email" required />
              <AiOutlineMail className="icon" />
            </div>

            <div className="studRegister__block-input">
              <label htmlFor="al">Пароль</label>
              <input type="password" />
              <RiLockPasswordFill className="icon" />
              <BsEyeSlash className="glaza" />
            </div>
            <div className="studRegister__block-btn">
              <p style={{ width: "300px" }}>
                У вас нет учетной записи? <span>Создайте учетную запись!</span>
              </p>
              <h4 style={{ width: "180px" }}>Забыли пароль?</h4>
            </div>
            <div className="studRegister__block-button">
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
