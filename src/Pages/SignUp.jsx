import { Link } from 'react-router-dom';
import './CSS/SignUp.css';

const SignUp = () => {
    return ( 
        <div className="loginReg">
            <div className="loginReg-container">
                <h1>Register</h1>
                <div className="loginReg-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="loginReg-login">Already have an account?  
                <Link style={{ textDecoration: 'none'}}  to='/login'><span>Login here!</span></Link></p>
                <div className="loginReg-agree">
                    <input type="checkbox" name="" id="" />
                    <p>I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
     );
}
 
export default SignUp;