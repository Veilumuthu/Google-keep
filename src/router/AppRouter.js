import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import AddNotes from '../components/AddNotes';
import EditNotes from '../components/EditNotes'
import LoginPage from '../components/Authentication/LoginPage';
import About from '../components/About';
import createHistory from 'history/createBrowserHistory';
import '../styles/style.css';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true} />
                <PrivateRoute path='/notes' component={AddNotes} />
                <PrivateRoute path='/edit/:id' component={EditNotes} />
                <PrivateRoute path='/about' component={About} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;