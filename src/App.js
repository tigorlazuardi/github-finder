import React, { Fragment, Component } from 'react';
import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import './App.css';
import axios from './config/axios'

class App extends Component {
    state = {
        users: [],
        loading: false
    }

    async componentDidMount() {
        this.setState({ loading: true })
        const { data } = await axios.get('/users')
        console.log(data)
        this.setState({ loading: false, users: data })
    }

    render() {
        return (
            <Fragment>
                <NavBar />
                <div className="container">
                    <Users loading={this.state.loading} users={this.state.users} />
                </div>
            </Fragment>
        );
    }
}


export default App;
