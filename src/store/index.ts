import {createStore, combineReducers} from 'redux';
import { usersReducer } from './users/reducer';

const reducer = combineReducers({
    users: usersReducer
});

const store = createStore(
    reducer, 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const state = store.getState();
export type StoreStateType = typeof state;

export {
    store,
};