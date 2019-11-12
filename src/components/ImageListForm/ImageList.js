//instaimage-clien/src/components/ImageListForm/ImageList.js
import React from 'react'

export default function ImageList(props) {
    console.log('ImageList', props)
        return (
            <div>
                Here are a list of images
                {props.images&&props.images.map( (image) => 
                    <div>
                    <h3>{image.title}</h3>
                    <img key = {image.title} src = {image.url} alt = {image.title} /> 
                    <p>This image was posted by {image.userId}</p>                
                    </div>
            )
            }
            </div>
        )
    
}
