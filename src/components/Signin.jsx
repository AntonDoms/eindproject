import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Header from './Header';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
    <div className="">
      <Header />
      <div className='max-w-[500px] mx-auto my-16 p-4 bg-indigo-50 rounded-lg'>
        <div>
          <h1 className='text-2xl font-bold py-2'>Log in</h1>
          <p className='py-2'>
            Nog geen account?{' '}
            <Link to='/signup' className='font-bold underline'>
              Register
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>E-mail</label>
            <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Wachtwoord</label>
            <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
          </div>
          <button className='bg-black hover:bg-gray-800 w-full p-2 my-2 text-white rounded-lg'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
