import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'> Login </h1>
                <form action="">
                    <div className='input-group'>
                        <label htmlFor="email"> Email </label>
                        <input type="email" name='email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
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