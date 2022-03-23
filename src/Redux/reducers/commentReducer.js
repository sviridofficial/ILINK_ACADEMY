import {addDoc, collection, getDocs, getFirestore} from "firebase/firestore";
import database from "../../FirebaseData/firebaseInit";
import {type} from "@testing-library/user-event/dist/type";

let initialState = {
    comments: [{
        username: "Константин",
        date: "15.05.2001",
        comment: "Хороший сайтец бро!"
    }, {
        username: "Максим",
        date: "15.05.2001",
        comment: "Круто!"
    },
        {
            username: "Жека",
            date: "15.05.2001",
            comment: "Хароууш!"
        }
    ],
    isSending: false,
    isSuccessSend: false
}
const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addComment':
            return {
                ...state,
                comments: [action.comment, ...state.comments]
            }
        case 'setAllComments':
            return {
                ...state,
                comments: [...action.comments]
            }
        case 'isSending':
            return {
                ...state,
                isSending: true
            }
        case 'stopSending':
            return {
                ...state,
                isSending: false
            }
        case 'setFlashMessageSuccessSend':
            return {
                ...state,
                isSuccessSend: true
            }
        case 'setFlashMessageEnd':
            return {
                ...state,
                isSuccessSend: false
            }
        default:
            return state;
    }
}

export const setAllComments = (comments) => ({
    type: 'setAllComments',
    comments: comments
})

export const setFlashMessageSuccessSend = () => ({
    type: 'setFlashMessageSuccessSend'
})
export const setFlashMessageEnd = () => ({
    type: 'setFlashMessageEnd'
})
export const isSending = () => ({
    type: 'isSending'
})

export const stopSending = () => ({
    type: 'stopSending'
})
export const addComment = (comment) => ({
    type: 'addComment',
    comment: {
        username: comment.userName,
        date: new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear(),
        comment: comment.comment
    }
})
export const getComments = () => async (dispatch) => {
    let list = [];
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, "base"));
    querySnapshot.forEach((doc) => {
        list.push({
            username: doc.data().username,
            date: doc.data().date,
            comment: doc.data().comment
        })
    });
    dispatch(setAllComments(list));
}
export const addCommentFirebase = (formData) => async (dispatch) => {
    dispatch(isSending())
    const db = database;
    let date = new Date();
    const docRef = await addDoc(collection(db, "base"), {
        username: formData.userName,
        date: date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear(),
        comment: formData.comment
    })
    dispatch(addComment(formData))
    dispatch(stopSending());
    dispatch(setFlashMessageSuccessSend());
}


export default commentReducer;
