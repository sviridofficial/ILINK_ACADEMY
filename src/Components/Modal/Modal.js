import React from "react";
import './Modal.css';
import cancel from './cancel.svg';
import plus from './plus.svg';
import info from './Info Square.svg'

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => {
            setActive(false)
        }}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                <div className="modal_header">
                    <p className="modal_reviews">Отзыв</p>
                    <img className='cancelImage' src={cancel} onClick={() => setActive(false)}/>
                </div>
                <p className="whatIsYourName">Как вас зовут?</p>
                <div className="nameAndPhotoInputs">
                    <input type={'text'} className="nameInput" placeholder={'Имя Фамилия'}/>
                    <button className="addPhoto">
                        <img className="plus" src={plus} width={14.3} height={14.3}/>
                        <p>Загрузить фото</p>
                    </button>
                </div>
                <p className="everythingLike">Все ли вам понравилось?</p>
                <textarea placeholder={'Напишите пару слов о вашем опыте...'}></textarea>
                <div className='footerModal'>
                    <button className="sendButton">Отправить отзыв</button>
                    <div className='fMod'>
                        <img className='info' src={info} width={15.42} height={15.42}/>
                        <p className='moderation'>Все отзывы проходят модерацию в течение 2 часов</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;