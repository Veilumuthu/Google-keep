import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import AddNotes from '../components/AddNotes';
import EditNotes from '../components/EditNotes'
import About from '../components/About';
import createHistory from 'history/createBrowserHistory';
import Header from '../navbar/Header';
import '../styles/style.css';

export const history = createHistory();
const AppRouter = () => (
    <Router history={history}>
        <Header />
        <div className="container">
            <Switch>
                <Route path='/' component={AddNotes} exact={true} />
                <Route path='/edit/:id' component={EditNotes} />
                <Route path='/about' component={About} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;