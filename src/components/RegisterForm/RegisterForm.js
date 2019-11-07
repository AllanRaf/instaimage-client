import React from 'react'


export default function RegisterForm(props){

    return(<form>
            <h1>Sign Up to post images</h1>
            <label>Email</label>
            <br />
            <input type="text" name="email" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" name="password"/>
              <br />
            <button type = "submit">Create New User</button>
  
    </form>
    );
}
