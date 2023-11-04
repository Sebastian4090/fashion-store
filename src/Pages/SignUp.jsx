import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/SignUp.css';

const SignUp = (props) => {

    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const onNameChange = (event) => {
        setName(event.target.value);
        console.log('name', name);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
        console.log('email', email)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
        console.log('password', password);
    }

    const onSubmitSignIn = () => {
        if (document.getElementById('agreement').checked) { 
            fetch('localhost:5174/sign-up', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    props.loadUser(user);
                    props.onRouteChange('signedIn');
                }
            })
        } else {
            alert('You must agree to the terms of use & privacy policy!');
        }
    }

    return ( 
        <div className="loginReg">
            <div className="loginReg-container">
                <h1>Register {name}</h1>
                <div className="loginReg-fields">
                    <input type="text" placeholder="Your Name" name="name" id="name" onChange={onNameChange}/>
                    <input type="email" placeholder="Email Address" name="email-address" id="email-address" onChange={onEmailChange}/>
                    <input type="password" placeholder="Password" name="password" id="password" onChange={onPasswordChange}/>
                </div>
                <button onClick={onSubmitSignIn}>Continue</button>
                <p className="loginReg-login">Already have an account?  
                <Link style={{ textDecoration: 'none'}}  to='/login'><span>Login here!</span></Link></p>
                <div className="loginReg-agree">
                    <input type="checkbox" name="agreement" id="agreement" />
                    <p>I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
     );
}
 
export default SignUp;