import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import indivi from "../../assets/img/individu.png";
import "./index.scss";
import CourseCard from "../../components/HomePage/CourseCard";
const CategoriGroPage = () => {
  const numberOfCourseCards = 5;
  return (
    <div id="categoriGroPage">
      <Header />
      <div className="container">
        <div className="categoriGroPage">
          <div className="categoriGroPage__block">
            <div class="categoriGroPage__block-text">
              <h1>
                Лучшие онлайн <span>групповые</span> занятия для тебя
              </h1>
              <li>
                Найди своего индивидуального репетитора <br /> прямо здесь!
              </li>
            </div>
            <div class="categoriGroPage__block-img">
              <img src={indivi} alt="" />
            </div>
          </div>
          <div className="items">
            {Array.from({ length: numberOfCourseCards }).map((_, index) => (
              <CourseCard key={index} />
            ))}
          </div>
          <div className="items">
            {Array.from({ length: numberOfCourseCards }).map((_, index) => (
              <CourseCard key={index} />
            ))}
          </div>
          <div className="items">
            {Array.from({ length: numberOfCourseCards }).map((_, index) => (
              <CourseCard key={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoriGroPage;
