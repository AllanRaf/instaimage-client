import React from 'react'


export default function RegisterForm(props){

    return(<form onSubmit={props.onSubmit}>

                <h1>Sign Up to post images</h1>
                <label>Email</label>
                <br />
                <input type="text" name="email" onChange={props.onChange}/>
                <br />
                <label>Password</label>
                <br />
                <input type="password" name="password" onChange={props.onChange}/>
                <br />
                <button type = "submit">Create New User</button>

                {props.valid?<p>Please complete the fields above</p>:<p>Email/password must not be empty</p>}
            </form>
    );
}
