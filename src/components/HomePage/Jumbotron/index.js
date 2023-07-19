import React from 'react'
import './index.scss'
import jumb from '../../../assets/img/jumbotron.png'

const Jumbotron = () => {
  return (
    <div className='jumbotron'>
        <div className='left'>
            <div className='text'>
                <h1>Онлайн <span id='h1'>репетитор</span> к вашим услугам</h1>
                <span>Зарегистрируйтесь прямо сейчас и начните обучаться уже сегодня </span>
            </div>
            <div className='button'>
                <button>Войти как ученик</button>
                <button>Войти как специалист</button>
            </div>
            <div className='scores'>
                <div className='score'>
                    <span className='score__num'>10+</span>
                    <span className='score__text'>Лет опыта на рынке</span>
                </div>
                <div className='score'>
                    <span className='score__num'>1000+</span>
                    <span className='score__text'>Специалистов готовые вам помочь</span>
                </div>
                <div className='score'>
                    <span className='score__num'>10000+</span>
                    <span className='score__text'>Выпускников окончив ОРТ и другие предметы на отлично</span>
                </div>
            </div>
        </div>
        <div className='right'>
            <img src={jumb} alt='Kids'/>
        </div>
    </div>
  )
}

export default Jumbotron