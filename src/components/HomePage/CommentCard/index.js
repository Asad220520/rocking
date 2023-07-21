import React from "react";
import commentPhoto from '../../../assets/img/commentPhoto.png';
import stars from '../../../assets/img/stars.svg'
import './index.scss';
import CommentButton from "./CommentButton";

const CommentCard = () => {
  return (
      <div className="item">
        <div className="itemInfo">
          <img className="photo" src={commentPhoto} alt="profilePhoto"/>
          <div className="itemInfoText">
            <b>Aleksandra</b>
            <p>Москва, Россия</p>
          </div>
        </div>
        <div className="itemText">
          <img className="stars" src={stars} alt="stars"/>
          <p>Я хочу выразить огромную благодарность репетиторскому сайту за их профессионализм и качественные услуги. За последние несколько месяцев мой опыт занятий с репетиторами на этом сайте был невероятно позитивным и результативным.

            С самого начала моего поиска репетитора, сайт предоставил широкий выбор квалифицированных специалистов в различных предметах. <span id='more'>Удобный интерфейс и система фильтров помогли мне быстро отобрать репетиторов, соответствующих моим требованиям.
            Я с уверенностью могу сказать, что репетиторы, с которыми я работал на этом сайте, были на высшем уровне.

            Они проявили не только глубокие знания в своих предметах, но и владение педагогическими методиками, которые помогли мне легко усвоить сложный материал. Они были терпеливыми и всегда находили подход к моему индивидуальному учебному стилю.

            Сайт регулярно предоставлял возможность оставлять отзывы и оценки репетиторов после каждого занятия. Это было для меня полезным инструментом, так как я мог делиться своим опытом и помогать другим студентам сделать правильный выбор.

            Благодаря этому сайту, я не только значительно улучшил свои знания в учебе, но и повысил уверенность в своих силах. Моя успеваемость заметно улучшилась, и я больше не испытываю тревогу перед экзаменами.</span></p>
          <CommentButton/>

        </div>
      </div>
  );
}

export default CommentCard;
