//instaimage-client/components/RegisterFormContainer.js
import React, { Component } from 'react'
import RegisterForm from './RegisterForm'

export default class RegisterFormContainer extends Component {
    state = { email: '', 
            password: '',
            isValid: true }

    onSubmit = (event) => {
        //user tries to register as a new user
        event.preventDefault()
        
        if(this.state.email === ''||this.state.password ===''){
          //error message if any of the fields are empty
          this.setState({isValid: false})
        }
    }
      //capture data when user enters information in required fields
      onChange = (event) => {
        this.setState({isValid: true})
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    render() {
        return (
            <div>
                <RegisterForm onSubmit={this.onSubmit}
                onChange={this.onChange}
                valid={this.state.isValid} />
            </div>
        )
    }
}
