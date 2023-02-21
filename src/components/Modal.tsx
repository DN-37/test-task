import React from 'react';
import '../styles/Modal.scss';

type ModalProps = {
    onClose: () => void;
    show: boolean;
    onChange: (value: string) => void;
    title: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, show, onChange, title }) => {

    if (!show) {
        return null;
    }

    const handlerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return (
        <div className='modal' onClick={onClose}>
            <div
                className='modal__content'
                onClick={e => e.stopPropagation()}>
                <div className='modal__header'>
                    <h3 className='modal__title'>
                        Изменение статуса
                    </h3>
                </div>
                <div className='modal__body'>
                    <input
                        className='modal__body_input'
                        value={title}
                        type='text'
                        onChange={handlerNameChange}
                    ></input>
                </div>
                <div className='modal__footer'>
                    <button
                        onClick={onClose}
                        className='modal__footer_close'>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;