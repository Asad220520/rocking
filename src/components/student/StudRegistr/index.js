import React, { useState } from "react";
import axios from "axios";
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
import { MdAccountCircle, MdAddIcCall, MdElderly } from "react-icons/md";
import { Link } from "react-router-dom";

const StudRegistr = () => {
  const [glaza, setGlaza] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/register-student",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error registering student:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div id="studRegister">
      <div className="container">
        <div className="studRegister">
          <div className="studRegister__block">
            <h1>Регистрация для студента</h1>
            <div className="studRegister__block-info">
              <div style={{ width: "100%" }}>
                <label htmlFor="firstName">Фио</label>
                <MdAccountCircle className="icons" />
                <input type="text" name="firstName" onChange={handleChange} />
              </div>
              <div style={{ width: "100%" }}>
                <label htmlFor="lastName">Возраст</label>
                <AiOutlineMail className="iconsemail" />
                <input type="text" name="lastName" onChange={handleChange} />
              </div>
            </div>
            <div className="studRegister__block-info">
              <div style={{ width: "100%" }}>
                <label htmlFor="email">Почта</label>
                <input type="email" name="email" onChange={handleChange} />
                <PiGenderFemaleFill className="gender" />
              </div>
              <div style={{ width: "100%" }}>
                <label htmlFor="al">Пол</label>
                <MdElderly className="elderly" />
                <input type="text" />
              </div>
            </div>
            <div className="studRegister__block-input">
              <label htmlFor="phone">Номер телефона</label>
              <input
                type="text"
                name="phone"
                pattern="[0-9]+"
                onChange={handleChange}
              />
              <MdAddIcCall className="icon" />
            </div>
            {glaza ? (
              <div className="studRegister__block-input">
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                <RiLockPasswordFill className="icon" />
                <AiOutlineEyeInvisible
                  className="glaza"
                  onClick={() => setGlaza(!glaza)}
                />
              </div>
            ) : (
              <div className="studRegister__block-input">
                <label htmlFor="password">Пароль</label>
                <input type="text" name="password" onChange={handleChange} />
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
              <button onClick={handleSubmit}>Зарегистрироваться</button>
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
