import React from 'react';

import '../styles/Status.scss';
import Modal from './Modal';

const Status: React.FC = () => {
  const [title, setTitle] = React.useState<string>('Прежде чем действовать, надо понять');
  const [show, setShow] = React.useState<boolean>(false);
  const onClose = (): void => setShow(false);

  const handlerStatusChange = (title: React.SetStateAction<string>) => {
    setTitle(title);
  }

  return (
    <>
      <div className='title'>
        <h1 className='title__top top'>
          <span className='top__span'>Здравствуйте,</span> Человек №3596941
        </h1>
        <span
          className='title__status-btn'
          onClick={() => setShow(true)}>
          Сменить статус
        </span>
        <Modal onClose={onClose} show={show} onChange={handlerStatusChange} title={title} />
        <div className='title__status-box'>
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};

export default Status;