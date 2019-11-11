//instaimage-client/components/RegisterFormContainer.js
import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import { connect } from 'react-redux'
import registeruser from '../../actions/users'

export class RegisterFormContainer extends Component {
    state = { username:'',
            email: '', 
            password: '',
            isValid: true }

    onSubmit = (event) => {
        //user tries to register as a new user
        event.preventDefault()
        
        if(this.state.email === ''||this.state.password ===''){
          //error message if any of the fields are empty
          this.setState({isValid: false})
        }else{
          this.props.registeruser(this.state.username, this.state.email, this.state.password);
          this.props.history.push('/Login');
        }
    }
      //capture data when user enters information in required fields
      onChange = (event) => {
        this.setState({isValid: true})
        console.log('eventtargets', event.target.name, 1000)
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

export default connect(null, { registeruser })(RegisterFormContainer)