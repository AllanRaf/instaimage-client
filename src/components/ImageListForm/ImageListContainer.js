//instaimage-clien/src/components/ImageListForm/ImageListContainer.js
import React, { Component } from 'react'
import ImageList from './ImageList'
import { connect } from 'react-redux'
import { getImages, deleteImage } from '../../actions/image'

export class ImageListContainer extends Component {
    componentDidMount() {
        //display list off all images
        console.log("COMP CHECK")
        this.props.getImages()
      }

    onDeleteImage = (event)=>{
        console.log('deleting image', event.target.id)
        this.props.deleteImage(event.target.id)
        this.props.getImages()
    }
    render() {
        
        return (
            <div>
                <ImageList images={this.props.image}
                            auth={this.props.auth}
                            deleteImage={this.onDeleteImage}/>
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
  
  const mapDispatchToProps = { getImages, deleteImage }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ImageListContainer)
