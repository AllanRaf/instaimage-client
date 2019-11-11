//instaimage-clien/src/components/LoginForm/LoginForm.js
import React from 'react'

export default function LoginForm(props) {
    return(<form onSubmit={props.onSubmit}>
            <h1>Log in to the Insta Image App</h1>
            <label>Email</label>
            <br />
            <input type="text" name="email" onChange={props.onChange}/>
            <br />
            <label>Password</label>
            <br />
            <input type="password" name="password" onChange={props.onChange} />
              <br />
             <button type = "submit">Log In</button>
    </form>
    );
}