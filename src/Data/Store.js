import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! It is my first post!', likes: 21},
                {id: 2, message: 'How are you?', likes: 15}
            ],
            newPostText: '',
        },
        dialogsPage: {
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
            ],
            messagesText: '',
        },
        friendsPage: {
            friends: [
                {userName: 'Natasha', id: 1},
                {userName: 'Andrey', id: 2},
                {userName: 'Konstantin', id: 3},
                {userName: 'Aleksey', id: 4},
                {userName: 'Vladimir', id: 5}
            ]
        }
    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.friendsPage = sidebarReducer(this._state.friendsPage, action);
        this._callSubscriber(this._state);
    }
};

export default store;