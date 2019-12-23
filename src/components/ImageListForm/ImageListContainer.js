//instaimage-clien/src/components/ImageListForm/ImageListContainer.js
import React, { Component } from "react";
import ImageList from "./ImageList";
import { connect } from "react-redux";
import { getImages, deleteImage, getImagesOneUser } from "../../actions/image";
import { followUser } from "../../actions/follow";

export class ImageListContainer extends Component {
  state = {
    oneUsersImages: ""
  };
  componentDidMount() {
    //display list off all images
    this.props.getImages();
  }

  onDeleteImage = event => {
    this.props.deleteImage(event.target.id);
    this.props.getImages();
  };
  onClickGetUserImages = event => {
    this.setState({ oneUsersImages: this.props.image[0].User.username });
    this.props.getImagesOneUser(event.target.id);
  };
  onClickGetAllImages = () => {
    this.setState({ oneUsersImages: "" });
    this.props.getImages();
  };
  onClickFollow = event => {
    console.log("follow the user", event.target.id);
    this.props.followUser(event.target.id);
  };
  render() {
    return (
      <>
        <ImageList
          oneUsersImages={this.state.oneUsersImages}
          images={this.props.image}
          auth={this.props.auth}
          deleteImage={this.onDeleteImage}
          getOneUsersImages={this.onClickGetUserImages}
          getAllImages={this.onClickGetAllImages}
          followUser={this.onClickFollow}
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

const mapDispatchToProps = {
  getImages,
  deleteImage,
  getImagesOneUser,
  followUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageListContainer);
