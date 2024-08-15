import React, { FC } from 'react'
import { ModalTemplate } from 'src/modals';
import './ModalDelete.css'

interface IModalDelete {
  isOpen: boolean,
  closeModal: () => void,
  deleteEvent: () => void
}

export const ModalDelete:FC<IModalDelete> = ({ isOpen, closeModal, deleteEvent }) => {
  return (
    <ModalTemplate closeModal={closeModal}>
      <div className="modalDelete">
        <h2>Удалить мероприятие?</h2>
        <div className="modalDelete__buttons">
          <button className='second-button button-delete' onClick={deleteEvent}>Да, удалить</button>
          <button className='second-button button-cancel' onClick={closeModal}>Нет, оставить</button>
        </div>
      </div>
    </ModalTemplate>
  )
}
