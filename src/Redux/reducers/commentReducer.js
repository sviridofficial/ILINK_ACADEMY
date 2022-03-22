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
        default:
            return state;
    }
}
export default commentReducer;
