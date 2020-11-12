import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './router/AppRouter';
import { startSetNotes } from './redux/action'
import { login, logout } from './redux/auth';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { firebase } from './firebase/firebase';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

let hasRender = false;
const renderApp = () => {
    if (!hasRender) {
        ReactDOM.render(jsx, document.getElementById('root'))
        hasRender = true;
    }
}


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetNotes()).then(() => {
            renderApp();
            if (history.location.pathname === "/") {
                history.push("/notes")
            }
        })
    } else {
        store.dispatch(logout());
        renderApp();
        history.push("/")
    }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
