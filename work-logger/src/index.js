import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom';
import { Switch } from 'react-router';
import UserAddPage from './pages/UserAdd';
import HomePage from './pages/Home';
import UserListPage from './pages/UserList';
import UserEditPage from './pages/UserEdit';
import LoginPage from './pages/Login';
import BookAddPage from './pages/BookAdd';
import BookListPage from './pages/BookList';
import BookEditPage from './pages/BookEdit';

ReactDOM.render((

    <Router history={hashHistory}>
        <Switch>
            <Route path="/" exact strict component={HomePage} />
            <Route path="/userAdd" exact strict component={UserAddPage} />
            <Route path="/userList" exact strict component={UserListPage} />
            <Route path="/user/edit/:id" component={UserEditPage} />
            <Route path="/bookAdd" component={BookAddPage} />
            <Route path="/bookList" component={BookListPage} />
            <Route path="/book/edit/:id" component={BookEditPage} />
            <Route path="/login" exact strict component={LoginPage} />
        </Switch>

    </Router>

), document.getElementById('app'));
