//instaimage-client/components/HomePage.js
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
//import ImageListContainer from './ImageListForm/ImageListContainer'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Link to="/Register">Register as a new user</Link>
                <Link to="/Login"> Log in if you have already registered</Link>
                
            </div>
        )
    }
}
