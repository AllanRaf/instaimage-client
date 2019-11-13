//instaimage-client/components/LoginFormContainer.js
import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import { login } from '../../actions/auth'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class LoginFormContainer extends Component {
    onSubmit = event => {
        event.preventDefault();
        this.props.login(this.state.email, this.state.password);
      };
    onChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
    };

    render() {
        console.log('this.props.state',this.props)
        if(this.props.auth){
            return <Redirect to='/Image' />
        }else{
        return (
            <div>
                <LoginForm
                onChange={this.onChange}
                onSubmit={this.onSubmit}/>
            </div>
        )
    }
    }
}

function mapStateToProps (state) {
    return { 
              auth: state.auth
        }
  }

export default connect(mapStateToProps, { login })(LoginFormContainer)