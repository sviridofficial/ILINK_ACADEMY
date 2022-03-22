import {collection, getDocs, getFirestore} from "firebase/firestore";

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
    ]
}
const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addComment':
            return {
                ...state
            }
        case 'setAllComments':
            return {
                ...state,
                comments: [...action.comments]
            }
        default:
            return state;
    }
}

export const setAllComments = (comments) => ({
    type: 'setAllComments',
    comments: comments
})
export const getComments = () => async (dispatch) => {
    let list = [];
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, "base"));
    querySnapshot.forEach((doc) => {
        list.push({
            username: doc.data().name,
            date: doc.data().date,
            comment: doc.data().comment
        })
    });
    dispatch(setAllComments(list));
}


export default commentReducer;
