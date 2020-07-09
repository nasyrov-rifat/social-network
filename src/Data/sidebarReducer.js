let initializationState = {
    friends: [
        {userName: 'Natasha', id: 1},
        {userName: 'Andrey', id: 2},
        {userName: 'Konstantin', id: 3},
        {userName: 'Aleksey', id: 4},
        {userName: 'Vladimir', id: 5}
    ]
}

let sidebarReducer = (state = initializationState, action) => {
    return state;
};

export default sidebarReducer;