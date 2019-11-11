import React, { Component } from 'react'
import ImageForm from './ImageForm'

export default class ImageFormContainer extends Component {

    state = {
        title: '',
        url: ''
      }

    onChange = (event) => {
        console.log("ONCHANGE")
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    render() {
        return (
            <div>
                <ImageForm onChange={this.onChange}
                 values={this.state}
                />
            </div>
        )
    }
}
