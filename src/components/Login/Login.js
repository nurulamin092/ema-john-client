import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, error, loading] = useSignInWithEmailAndPassword(auth)
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }
    const handleUserSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/shop')
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'> Login </h1>
                <form onSubmit={handleUserSignIn}>
                    <div className='input-group'>
                        <label htmlFor="email"> Email </label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value='Login' />
                </form>
                <p>
                    New to ema-john? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className='line-contain'>
                    <div>
                        <hr />
                    </div>
                    Or
                    <div><hr /></div>
                </div>
                <div className='sm-contain'>
                    <img src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg" alt="" />
                    <p>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;