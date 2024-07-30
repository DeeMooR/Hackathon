import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Header, Footer, Newsletter, MiniCard } from 'src/components';
import { IEvent } from 'src/interface'
import { mainImage } from 'src/assets';
import './MainPage.css'

export const MainPage = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const {eventsNext, eventsPast} = useSelector((state: any) => state.main);

  return (
    <>
      <Header/>
      <div className="wrapper">
        <section className="mainSection">
          <div className="mainSection__info">
            <h1><span>Расписание</span> мероприятий в БГУИР</h1>
            <div className="mainSection__text-button">
              <p className='mainSection__text'>Список мероприятий всех типов, от всех факультетов, с гибкой сортировкой и возможностью зарегистрироваться</p>
              <button className='button mainSection__button'>Смотреть ближайшие события</button>
            </div>
          </div>
          <img src={mainImage} className='mainSection__image' alt="bsuir" />
        </section>
        <section className='eventsSection'>
          <h2>Ближайшие мероприятия</h2>
          <div className="eventsSection__events">
            {eventsNext.slice(0, 3).map((obj: IEvent, i: number) => 
              <MiniCard obj={obj} key={i} isDeleteSmall={i === 2}/>
            )}
          </div>
          <button className='button eventsSection__button' onClick={() => navigate('/next')}>Смотреть будущие мероприятия</button>
        </section>
        <section className='eventsSection'>
          <h2>Прошедшие мероприятия</h2>
          <div className="eventsSection__events">
            {eventsPast.slice(0, 3).map((obj: IEvent, i: number) => 
              <MiniCard obj={obj} key={i} isDeleteSmall={i === 2}/>
            )}
          </div>
          <button className='button eventsSection__button' onClick={() => navigate('/past')}>Смотреть прошлые мероприятия</button>
        </section>
        <section className="mapSection">
          <h2>Карта корпусов</h2>
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A8df2e81712e171e182d9da4acd2de8361ccee6c301d8d1e327261d367f98df93&amp;source=constructor" 
            className='mapSection__map'
          />
        </section>
      </div>
      <Newsletter/>
      <Footer/>
    </>
  )
}
