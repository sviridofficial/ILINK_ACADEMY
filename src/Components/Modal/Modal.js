import React, {useState} from "react";
import './Modal.css';
import cancel from './cancel.svg';
import info from './Info Square.svg'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addCommentFirebase, isSending} from "../../Redux/reducers/commentReducer";
import Spinner from "../Spinner";
import FileInput from "./FileInputCustom/FileInput";
import jpgIcon from './jpgIcon.svg';
import deleteIcon from './Delete.svg';


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

                </div>
                : <Spinner/>}
        </div>
    )

}

const CommentForm = (props) => {
    const [span, setSpan] = useState(null);
    const deleteImg = () => {
        setSpan(false);
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="nameAndPhotoInputs">
                <Field name={"userName"} component={'input'} type={'text'} className="nameInput"
                       placeholder={'Имя Фамилия'}/>
                <FileInput span={span} setSpan={setSpan}/>
            </div>
            {span ? <div className="file">
                <img src={jpgIcon}/>
                <div className="fileOutput">
                    <span id="custom-text">{span}</span>
                    <div className="straight"></div>
                </div>
                <svg onClick={deleteImg} id="deleteImage" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M16.3694 7.90705C16.3694 7.96371 15.9253 13.581 15.6716 15.9451C15.5127 17.3959 14.5775 18.2759 13.1746 18.3009C12.0966 18.325 11.0414 18.3333 10.0032 18.3333C8.901 18.3333 7.82309 18.325 6.77678 18.3009C5.42088 18.2684 4.4848 17.3709 4.33406 15.9451C4.07309 13.5727 3.63706 7.96371 3.62895 7.90705C3.62085 7.73622 3.67596 7.57373 3.78781 7.44206C3.89803 7.3204 4.05688 7.24707 4.22383 7.24707H15.7826C15.9488 7.24707 16.0995 7.3204 16.2186 7.44206C16.3297 7.57373 16.3856 7.73622 16.3694 7.90705Z" fill="#EB5757"/>
                    <path d="M17.5 4.98068C17.5 4.63819 17.2301 4.36986 16.9059 4.36986H14.4762C13.9818 4.36986 13.5522 4.01821 13.442 3.52239L13.3059 2.91492C13.1154 2.18077 12.4581 1.66663 11.7206 1.66663H8.2802C7.53458 1.66663 6.88378 2.18077 6.68603 2.95491L6.55879 3.52323C6.44775 4.01821 6.01821 4.36986 5.52464 4.36986H3.09488C2.76988 4.36986 2.5 4.63819 2.5 4.98068V5.29733C2.5 5.63149 2.76988 5.90814 3.09488 5.90814H16.9059C17.2301 5.90814 17.5 5.63149 17.5 5.29733V4.98068Z" fill="#EB5757"/>
                </svg>
            </div> : null}


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