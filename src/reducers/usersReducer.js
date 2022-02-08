export const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_USERS':
            return [...state, ...action.payload.users];
        case 'CREATE_USER':
            return [...state, action.payload.user];
        case 'UPDATE_USER':
            return state.map(user => {
                if (user.id === parseInt(action.payload.user.id)) {
                    return {
                        ...user,
                        ...action.payload.user
                    }
                } else {
                    return {
                        ...user
                    }
                }
            });
        case 'DELETE_USER':
            return state.filter(user => user.id !== parseInt(action.payload.id));
        default:
            return state;
    }
};