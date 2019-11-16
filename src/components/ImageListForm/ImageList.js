//instaimage-clien/src/components/ImageListForm/ImageList.js
import React from 'react'

export default function ImageList(props) {
    console.log('ImageList', props)
        return (
            <div>
                <h2>Here are a list of images</h2>
                {props.images&&props.images.map( (image) => 
                    <div key = {image.id} className="flex-column">
                    <h3>{image.title}</h3>
                    <img className="border border-primary rounded w-50 h-50"  src = {image.url} alt = {image.title} /> 
                    <div>This image was posted by <strong>{image.User?image.User.username:<p>loading...</p>}</strong></div>                
                    </div>
                )
                    }
            </div>
        )
    
}
