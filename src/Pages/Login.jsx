import './CSS/Login.css';

const Login = () => {
    return ( 
        <div className="loginReg">
            <div className="loginReg-container">
                <h1>Login</h1>
                <div className="loginReg-fields">
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
            </div>
        </div>
     );
}
 
export default Login;