//instaimage-client/components/RegisterFormContainer.js
import React, { Component } from 'react'
import RegisterForm from './RegisterForm'

export default class RegisterFormContainer extends Component {
    render() {
        return (
            <div>
                This is the register form container
                <RegisterForm props={this.props} />

            </div>
        )
    }
}
