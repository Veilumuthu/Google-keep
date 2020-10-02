import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { startSetNotes } from './redux/action'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/store';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetNotes()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'))
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
