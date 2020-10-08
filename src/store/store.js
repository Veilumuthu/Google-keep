import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import notesReducer from '../redux/notesReducer';
import filterReducer from '../redux/filterReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
export default () => {
    const store = createStore(
        combineReducers({
            notes: notesReducer,
            filters:filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))      
    );
    return store;
}