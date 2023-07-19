import React from 'react'
import './index.scss'
import solo1 from '../../../assets/img/categories.jpg'
import Btn from './Btn/index'

const CategoriesSolo = () => {
  return (
    <div className='categoriesSolo' id='categoriesSolo'>
        <h1>Лучшие индивидуальные занятия</h1>
        <div className='items'>
            <div className='item'>
                <div className='item__top'>
                    <img src={solo1} alt=''/>
                    <span>Онлайн репетитор по математике по 1 - 9 класс, подготовка к НЦТ и ОРТ</span>
                </div>
                <div className='item__bottom'>
                    <span className='price'>1000 Руб</span>
                    <span className='notprice'>1500 Руб</span>
                    <span className='mentor'>Maxim</span>
                </div>
                <Btn/>
            </div>
            <div className='item'>
                <div className='item__top'>
                    <img src={solo1} alt=''/>
                    <span>Онлайн репетитор по алгебре для подготовки на НЦТ, ОРТ и экзаменов</span>
                </div>
                <div className='item__bottom'>
                    <span className='price'>1500 Руб</span>
                    <span className='notprice'>2300 Руб</span>
                    <span className='mentor'>Evgenii</span>
                </div>
                <Btn/>
            </div>
            <div className='item'>
                <div className='item__top'>
                    <img src={solo1} alt=''/>
                    <span>Онлайн репетитор по биологий для учеников по 4 - 11 классов, подготовка к экзаменам</span>
                </div>
                <div className='item__bottom'>
                    <span className='price'>2100 Руб</span>
                    <span className='notprice'>2600 Руб</span>
                    <span className='mentor'>Alberto</span>
                </div>
                <Btn/>
            </div>
            <div className='item'>
                <div className='item__top'>
                    <img src={solo1} alt=''/>
                    <span>Онлайн репетитор по географий для учеников по 4 - 11 классов, помощь с домашкой и подготовка к экзаменам</span>
                </div>
                <div className='item__bottom'>
                    <span className='price'>1890 Руб</span>
                    <span className='notprice'>2000 Руб</span>
                    <span className='mentor'>Kamila</span>
                </div>
                <Btn/>
            </div>
            <div className='item'>
                <div className='item__top'>
                    <img src={solo1} alt=''/>
                    <span>Онлайн репетитор по географий для учеников по 4 - 11 классов, помощь с домашкой и подготовка к экзаменам</span>
                </div>
                <div className='item__bottom'>
                    <span className='price'>1890 Руб</span>
                    <span className='notprice'>2000 Руб</span>
                    <span className='mentor'>Kamila</span>
                </div>
                <Btn/>
            </div>
            <div className='item'>
                <div className='item__top'>
                    <img src={solo1} alt=''/>
                    <span>Онлайн репетитор по математике по 1 - 9 класс, подготовка к НЦТ и ОРТ</span>
                </div>
                <div className='item__bottom'>
                    <span className='price'>1000 Руб</span>
                    <span className='notprice'>1500 Руб</span>
                    <span className='mentor'>Maxim</span>
                </div>
                <Btn/>
            </div>
            <div className='item'>
                <div className='item__top'>
                    <img src={solo1} alt=''/>
                    <span>Онлайн репетитор по биологий для учеников по 4 - 11 классов, подготовка к экзаменам</span>
                </div>
                <div className='item__bottom'>
                    <span className='price'>2100 Руб</span>
                    <span className='notprice'>2600 Руб</span>
                    <span className='mentor'>Alberto</span>
                </div>
                <Btn/>
            </div>
            <div className='item'>
                <div className='item__top'>
                    <img src={solo1} alt=''/>
                    <span>Онлайн репетитор по алгебре для подготовки на НЦТ, ОРТ и экзаменов</span>
                </div>
                <div className='item__bottom'>
                    <span className='price'>1500 Руб</span>
                    <span className='notprice'>2300 Руб</span>
                    <span className='mentor'>Evgenii</span>
                </div>
                <Btn/>
            </div>
        </div>
    </div>
  )
}

export default CategoriesSolo