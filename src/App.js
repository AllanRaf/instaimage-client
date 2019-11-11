import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import RegisterFormContainer from './components/RegisterForm/RegisterFormContainer'
import LoginFormContainer from './components/LoginForm/LoginFormContainer'
import ImageFormContainer from './components/ImageForm/ImageFormContainer'

class App extends Component {
  render() {
    return (
      
        <div>
          <Route exact path="/" component = {HomePage} />
          <Route path="/Register" component = {RegisterFormContainer}/>
          <Route path="/Login" component = {LoginFormContainer} />
          <Route path="/Image" component = {ImageFormContainer} />
        </div>

    );
  }
}

export default App
