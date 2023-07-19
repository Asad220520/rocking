import React from "react";
import "./index.scss";
import vk from "../../assets/img/VK.png";
import fb from "../../assets/img/Facebook.png";
import insta from "../../assets/img/Instagram.png";
import yt from "../../assets/img/youtube.png";

function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header__top">
            <div className="logo">Online Academy</div>
            <div className="contact">
              <a href="#">
                <img src={vk} alt="ВКонтакте" />
              </a>
              <a href="#">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="#">
                <img src={insta} alt="Instagram" />
              </a>
              <a href="#">
                <img src={yt} alt="Youtube" />
              </a>
            </div>
          </div>
          <div className="header__bottom">
            <span className="header__text">УЧИТЬСЯ ЛЕГКО</span>
            <nav className="header__nav">
              <a href="#">Главная</a>
              <a href="#categoriesSolo">
                Индивидуальные уроки
              </a>
              <a href="#categoriesGroup">Групповые уроки</a>
              <a href="#footer">ОТЗЫВЫ</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
