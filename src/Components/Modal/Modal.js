import React from "react";
import './Modal.css';
import cancel from './cancel.svg';
import plus from './plus.svg';
import info from './Info Square.svg'
import database from "../../FirebaseData/firebaseInit";
import {addDoc, collection} from "firebase/firestore";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addCommentFirebase, isSending} from "../../Redux/reducers/commentReducer";
import Spinner from "../Spinner";


const Modal = (props) => {
    const writeUserData = (formData) => {
        props.addCommentFirebase(formData);
    }

    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => {
            props.setActive(false)
        }}>
            {!props.isSending ?
                <div className={props.active ? "modal_content active" : "modal_content"}
                     onClick={e => e.stopPropagation()}>
                    <div className="modal_header">
                        <p className="modal_reviews">Отзыв</p>
                        <img className='cancelImage' src={cancel} onClick={() => props.setActive(false)}/>
                    </div>
                    <p className="whatIsYourName">Как вас зовут?</p>
                    <ModalReduxForm onSubmit={writeUserData}/>
                </div> : <Spinner/>}
        </div>
    )

}

const CommentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="nameAndPhotoInputs">
                <Field name={"userName"} component={'input'} type={'text'} className="nameInput"
                       placeholder={'Имя Фамилия'}/>
                <button className="addPhoto">
                    <img className="plus" src={plus} width={14.3} height={14.3}/>
                    <p>Загрузить фото</p>
                </button>
            </div>
            <p className="everythingLike">Все ли вам понравилось?</p>
            <Field component={"textarea"} name="comment" placeholder={'Напишите пару слов о вашем опыте...'}></Field>
            <div className='footerModal'>
                <button className="sendButton">Отправить отзыв
                </button>
                <div className='fMod'>
                    <img className='info' src={info} width={15.42} height={15.42}/>
                    <p className='moderation'>Все отзывы проходят модерацию в течение 2 часов</p>
                </div>
            </div>
        </form>
    )
}

const ModalReduxForm = reduxForm({
    form: "commentForm"
})(CommentForm);

const mapStateToProps = (state) => ({
    isSending: state.commentReducer.isSending
})
export default connect(mapStateToProps, {addCommentFirebase})(Modal)