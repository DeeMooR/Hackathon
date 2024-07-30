import React, { useState } from 'react'
import { useAppDispatch } from 'src/store';
import { setReceiverEmailAPI } from 'src/store/requests';
import { emailImage } from 'src/assets';
import './Newsletter.css'

export const Newsletter = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');

  const clickBth = () => {
    dispatch(setReceiverEmailAPI(email));
  }

  return (
    <div className='newsletter'>
      <div className="wrapper">
        <div className="newsletter__photo-info">
          <img src={emailImage} className='newsletter__photo' alt="photo" />
          <div className="newsletter__text-fields">
            <div className="newsletter__text">
              <h2>Узнавайте первым о новых событиях</h2>
              <p>Введите почту и получайте уведомления о мероприятиях в БГУИР</p>
            </div>
            <div className="newsletter__fields">
              <input type="email" className='input-dark newsletter__input' onChange={(e: any) => setEmail(e.target.value)} placeholder='Эл. почта' />
              <button className='second-button newsletter__button' onClick={clickBth}>Получать уведомления на почту</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
