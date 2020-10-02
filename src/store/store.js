import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import notesReducer from '../redux/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
export default () => {
    const store = createStore(
        combineReducers({
            notes: notesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))      
    );
    return store;
}