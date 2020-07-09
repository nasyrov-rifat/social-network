const ADD_MESSAGE = 'dialog/ADD_MESSAGE'

let initializationState = {
    DialogItem: [
        {id: 1, userName: 'Natasha'},
        {id: 2, userName: 'Andrey'},
        {id: 3, userName: 'Konstantin'},
        {id: 4, userName: 'Aleksey'},
        {id: 5, userName: 'Vladimir'}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I need your help!'}
    ]
}

let dialogReducer = (state = initializationState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                message: action.messagesText,
                id: 6
            };
            return  {...state,
            messages: [...state.messages, newMessage],
            }
        }
        default:
            return state;
    }
};

export default dialogReducer;

export const addMessage = (messagesText) => {
    return {type: ADD_MESSAGE, messagesText}
}