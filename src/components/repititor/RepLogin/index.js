import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsEyeSlash, BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordFill } from "react-icons/ri";
import "./index.scss";
import { Link } from "react-router-dom";
const RepLogin = () => {
  return (
    <div id="repLogin">
      <div className="container">
        <div className="repLogin">
          <div className="repLogin__block">
            <h1>Вход для специалиста</h1>
            <div className="repLogin__block-input">
              <label htmlFor="al">Почта</label>
              <input type="email" required />
              <AiOutlineMail className="icon" />
            </div>
            <div className="repLogin__block-input">
              <label htmlFor="al">Пароль</label>
              <input type="password" />
              <RiLockPasswordFill className="icon" />
              <BsEyeSlash className="glaza" />
            </div>
            <div className="repLogin__block-btn">
              <p style={{ width: "300px" }}>
                У вас нет учетной записи? <span>Создайте учетную запись!</span>
              </p>
              <h4 style={{ width: "180px" }}>Забыли пароль?</h4>
            </div>
            <div className="repLogin__block-button">
              <button>Войти</button>
              <Link to={'/studLogin'}>
                <button
                  style={{ background: "none", border: "1px solid #fff" }}
                >
                  Я не специалист!
                </button>
              </Link> 
            </div>
            <span>или</span>
            <div className="repLogin__block-icon">
              <FcGoogle size={"30px"} />
              <BsTwitter size={"30px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepLogin;
