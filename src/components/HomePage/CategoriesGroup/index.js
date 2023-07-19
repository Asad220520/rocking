import React from 'react'
import './index.scss'
import group1 from '../../../assets/img/categories.jpg'
import Btn from '../CategoriesSolo/Btn/index'

const CategoriesGroup = () => {
  return (
    <div className='categoriesGroup' id='categoriesGroup'>
        <h1>Лучшие групповые занятия</h1>
        <div className='items'>
            <div className='item'>
                <div className='item__top'>
                    <img src={group1} alt=''/>
                    <span>Групповое занятие: по английскому, уровень A2, урок 1 из 50 </span>
                    <p>чт, 12:00 – 14:55</p>
                </div>
                <div className='item__bottom'>
                    <span className='price'>1000 Руб</span>
                    <span className='notprice'>1500 Руб</span>
                    <span className='mentor'>Jordani</span>
                </div>
                <Btn/>
            </div>
            <div className='item'>
                <div className='item__top'>
                    <img src={group1} alt=''/>
                    <span>Групповое занятие: по историй урок 49 из 50 (6 класс)</span>
                    <p>пт, 15:00 – 17:55</p>
                </div>
                <div className='item__bottom'>
                    <span className='price'>500 Руб</span>
                    <span className='notprice'>890 Руб</span>
                    <span className='mentor'>Davido</span>
                </div>
                <Btn/>
            </div>
            <div className='item'>
                <div className='item__top'>
                    <img src={group1} alt=''/>
                    <span>Групповое занятие: по математике урок 9 из 50 (11 класс)</span>
                    <p>пн, 19:00 – 21:55</p>
                </div>
                <div className='item__bottom'>
                    <span className='price'>900 Руб</span>
                    <span className='notprice'>3200 Руб</span>
                    <span className='mentor'>Nikolaii</span>
                </div>
                <Btn/>
            </div>
            <div className='item'>
                <div className='item__top'>
                    <img src={group1} alt=''/>
                    <span>Групповое занятие: по английскому, уровень B1, урок 1 из 50 </span>
                    <p>пн, 9:00 – 11:55</p>
                </div>
                <div className='item__bottom'>
                    <span className='price'>1790 Руб</span>
                    <span className='notprice'>2100 Руб</span>
                    <span className='mentor'>Aizireki</span>
                </div>
                <Btn/>
            </div>
            <div className='item'>
                <div className='item__top'>
                    <img src={group1} alt=''/>
                    <span>Групповое занятие: по английскому, уровень TOEFL, урок 1 из 50 </span>
                    <p>ср, 21:00 – 23:55</p>
                </div>
                <div className='item__bottom'>
                    <span className='price'>4000 Руб</span>
                    <span className='notprice'>5600 Руб</span>
                    <span className='mentor'>Kamila</span>
                </div>
                <Btn/>
            </div>
            <div className='item'>
                <div className='item__top'>
                    <img src={group1} alt=''/>
                    <span>Групповое занятие: по русскому языку, урок 1 - 50, (8 класс)</span>
                    <p>сб, 16:00 – 18:55</p>
                </div>
                <div className='item__bottom'>
                    <span className='price'>2900 Руб</span>
                    <span className='notprice'>3200 Руб</span>
                    <span className='mentor'>Natalyi</span>
                </div>
                <Btn/>
            </div>
            <div className='item'>
                <div className='item__top'>
                    <img src={group1} alt=''/>
                    <span>Групповое занятие: по математике урок 9 из 50 (11 класс)</span>
                    <p>пн, 19:00 – 21:55</p>
                </div>
                <div className='item__bottom'>
                    <span className='price'>900 Руб</span>
                    <span className='notprice'>3200 Руб</span>
                    <span className='mentor'>Nikolaii</span>
                </div>
                <Btn/>
            </div>
            <div className='item'>
                <div className='item__top'>
                    <img src={group1} alt=''/>
                    <span>Групповое занятие: по алгебре, урок 45 - 50, (10 класс)</span>
                    <p>пн, 9:00 – 11:55</p>
                </div>
                <div className='item__bottom'>
                    <span className='price'>500 Руб</span>
                    <span className='notprice'>1600 Руб</span>
                    <span className='mentor'>Migelo</span>
                </div>
                <Btn/>
            </div>
        </div>
    </div>
  )
}

export default CategoriesGroup