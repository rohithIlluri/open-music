import React from 'react';  
import "./Login.css";
import {loginUrl} from './spotify';

function Login() {
    return (
        <div className="login"> 
            <img
             src="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80" 
             alt=""
             />      
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>  

        </div>
    )
}

export default Login
