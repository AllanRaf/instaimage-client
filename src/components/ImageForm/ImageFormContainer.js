import React, { Component } from 'react'
import ImageForm from './ImageForm'
import { postImage, getImages } from '../../actions/image'
import { logoutuser } from '../../actions/users'
import { connect } from 'react-redux'
import ImageListContainer from '../ImageListForm/ImageListContainer'

export class ImageFormContainer extends Component {

    state = {
        title: '',
        url: ''
      }

    onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log('adding new image')
        this.props.postImage(this.state)
        console.log('ADDED NEW IMAGE')
        this.props.getImages()
        console.log('GOT NEW IMAGES')
        this.setState({
          title: '',
          url: '',
        })
    }

    logout =() =>{
      this.props.logoutuser()
      this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <ImageForm 
                name={this.props.auth.name}
                onChange={this.onChange}
                 onSubmit={this.onSubmit}
                 values={this.state}
                 logout={this.logout}
                 
                />
                <ImageListContainer />
            </div>
        )
    }
}

function mapStateToProps (state) {
  return { 
            auth: state.auth,
            image: state.image,
            username: state.user
  }
}

export default connect(mapStateToProps, { postImage, logoutuser, getImages })(ImageFormContainer)
