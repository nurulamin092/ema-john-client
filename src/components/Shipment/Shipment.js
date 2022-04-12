import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    // const navigate = useNavigate();
    const location = useLocation();
    const handleNameBlur = (e) => {
        setName(e.target.value);
    }

    const handleAddressBlur = (e) => {
        setAddress(e.target.value);
    }
    const handlePhoneBlur = (e) => {
        setPhone(e.target.value);
    }
    const handleCreateUser = (e) => {
        e.preventDefault();
        const shipping = { name, email, address, phone }
        console.log(shipping);
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'> Shipping Information </h1>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="name"> Name </label>
                        <input onBlur={handleNameBlur} type="text" name='name' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email"> Email </label>
                        <input value={user?.email} readOnly type="email" name='email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name='address' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name='phone' required />
                    </div>
                    {/*  <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    } */}
                    <input className='form-submit' type="submit" value='Add Shipping' />
                </form>


            </div>
        </div>
    );
};

export default Shipment;