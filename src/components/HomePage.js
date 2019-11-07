//instaimage-client/components/HomePage.js
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Link to="/Register">Register as a new user</Link>
                <button>Log in if you have already registered</button>
            </div>
        )
    }
}
