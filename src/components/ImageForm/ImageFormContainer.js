import React, { Component } from 'react'
import ImageForm from './ImageForm'
import { postImage } from '../../actions/image'
import { connect } from 'react-redux'
import ImageListContainer from '../ImageListForm/ImageListContainer'

export class ImageFormContainer extends Component {

    state = {
        title: '',
        url: ''
      }

    onChange = (event) => {
        console.log("ONCHANGE", event.target.name, event.target.value)
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    onSubmit = (event) => {
        event.preventDefault()
        console.log('adding new image')
        this.props.postImage(this.state)
        this.setState({
          title: '',
          url: '',
        })
    }
    render() {
        return (
            <div>
                
                <ImageForm onChange={this.onChange}
                 onSubmit={this.onSubmit}
                 values={this.state}
                />
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

export default connect(mapStateToProps, { postImage })(ImageFormContainer)
