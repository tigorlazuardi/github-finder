import React, { Fragment, Component } from 'react'
import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import './App.css'
import axios from './config/axios'

class App extends Component {
  state = {
    users: [],
    loading: false,
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const { data } = await axios.get('/users')
    console.log(data)
    this.setState({ loading: false, users: data })
  }

  searchUsers = async (text) => {
    this.setState({ loading: true })
    const { data } = await axios.get(`/search/users?q=${text}`)
    this.setState({ loading: false, users: data.items })
  }

  clearUsers = () => this.setState({ users: [], loading: false })

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </Fragment>
    )
  }
}

export default App
