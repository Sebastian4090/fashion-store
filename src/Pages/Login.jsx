import { useState } from 'react';
import './CSS/Login.css';

const Login = () => {

    return ( 
        <div className="login">
            <div className="login-container">
                <h1>Login</h1>
                <div className="login-fields">
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
            </div>
        </div>
     );
}
 
export default Login;