import React, { Fragment, Component } from 'react';
import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import './App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <div className="container">
                    <Users />
                </div>
            </Fragment>
        );
    }
}


export default App;
