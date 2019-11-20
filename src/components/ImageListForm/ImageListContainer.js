//instaimage-clien/src/components/ImageListForm/ImageListContainer.js
import React, { Component } from "react";
import ImageList from "./ImageList";
import { connect } from "react-redux";
import { getImages, deleteImage } from "../../actions/image";

export class ImageListContainer extends Component {
  componentDidMount() {
    //display list off all images
    this.props.getImages();
  }

  onDeleteImage = event => {
    this.props.deleteImage(event.target.id);
    this.props.getImages();
  };
  render() {
    return (
      <>
        <ImageList
          images={this.props.image}
          auth={this.props.auth}
          deleteImage={this.onDeleteImage}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    username: state.user,
    image: state.image
  };
}

const mapDispatchToProps = { getImages, deleteImage };

export default connect(mapStateToProps, mapDispatchToProps)(ImageListContainer);
