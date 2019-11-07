import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import RegisterFormContainer from './components/RegisterForm/RegisterFormContainer'



class App extends Component {
  render() {
    return (
      
        <div>
          <Route exact path="/" component = {HomePage} />
          <Route path="/Register" component = {RegisterFormContainer}/>
        </div>

    );
  }
}

export default App
