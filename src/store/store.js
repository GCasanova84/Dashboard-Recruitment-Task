import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { usersReducer } from '../reducers/usersReducer';

const reducers = combineReducers({
    users: usersReducer
});


export const store = createStore(
    reducers,
    applyMiddleware( thunk )
);