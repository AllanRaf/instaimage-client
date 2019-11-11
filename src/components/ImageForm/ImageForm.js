import React from 'react'

export default function ImageForm(props) {

        return(<form >
            <h1>Add an image</h1>
            <label>Title</label>
            <br />
            <input type="text" onChange={props.onChange}/>
            <br />
            <label>URL</label>
            <br />
            <input onChange = {props.onChange} name="url" value={props.values.url}/>
              <br />
             <button type = "submit">Submit</button>
        </form>)
    
}
