import React, { Component } from 'react'
import UserItem from './UserItem'

const userStyle = {
    display: 'flex',
    justifyContent: 'center'
}

export default class Users extends Component {
    state = {
        users: [
            {
                id: 49936087,
                login: 'TigorLazuardi',
                avatar_url: 'https://avatars3.githubusercontent.com/u/49936087?v=4',
                html_url: 'https://github.com/TigorLazuardi'
            },
            {
                id: 50327438,
                login: "andreassosilo",
                avatar_url: "https://avatars0.githubusercontent.com/u/50327438?v=4",
                html_url: "https://github.com/andreassosilo"
            }
        ]
    }

    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

