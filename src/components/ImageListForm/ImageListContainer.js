//instaimage-clien/src/components/ImageListForm/ImageListContainer.js
import React, { Component } from 'react'
import ImageList from './ImageList'
import { connect } from 'react-redux'
import { getImages } from '../../actions/image'

export class ImageListContainer extends Component {
    componentDidMount() {
        this.props.getImages()
        console.log('ImageListContainer', this.props)
      }
    render() {
        
        return (
            
            <div>
                <ImageList images={this.props.image}/>
            </div>
            
        )
    }
}

function mapStateToProps (state) {
    return { 
        auth: state.auth,
        username: state.user,
        image: state.image
        }
  }
  
  const mapDispatchToProps = { getImages }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ImageListContainer)
