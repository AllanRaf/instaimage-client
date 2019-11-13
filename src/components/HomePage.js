//instaimage-client/components/HomePage.js
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ImageListContainer from './ImageListForm/ImageListContainer'
import RegisterFormContainer from './RegisterForm/RegisterFormContainer'
import LoginFormContainer from './LoginForm/LoginFormContainer'
import ImageFormContainer from './ImageForm/ImageFormContainer'
import { connect } from 'react-redux'

export class HomePage extends Component {
    state ={
        register:false,
        login:false,
    }
    /*For SPA mode future implementation
    showForm = (event)=>{
        console.log('registering new user', event.target.name)
        this.setState({[event.target.name]: true})
    }*/
    render() {
        
        return (
            
            <div>
                <h1>Welcome to insta image</h1>
                <p>The app where you can share your favourite images online</p>
                {/*The code below was used to test SPA mode.
                this.props.auth?<h1>Post a picture</h1>:<button name="register" onClick={this.showForm}>Register as a new user</button>}
                {this.props.auth?<h1>Be creative</h1>:<button name="login" onClick={this.showForm}>Login as a new user</button>}
                {this.props.auth?<ImageFormContainer />:<h1>Create an account or login to post images</h1>}
                {this.state.register&&<RegisterFormContainer />}
                {this.state.login&&<LoginFormContainer />*/}
                <Link to="/Register"> Register </Link>
                <Link to="/Login"> Log in if you have already registered</Link>
                <ImageListContainer />
                
            </div>
        )
    }
}
function mapStateToProps (state) {
    return { 
              auth: state.auth
        }
  }

export default connect(mapStateToProps, )(HomePage)
