import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Header from './Header';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="">
      <Header />
      <div className='max-w-[600px] mx-auto my-16 p-4 bg-indigo-50 rounded-lg'>
        <h1 className='text-2xl font-bold py-4'>Account</h1>
        <p>Email: {user && user.email}</p>
        <button onClick={handleLogout} className='px-5 py-2 my-4 bg-black hover:bg-gray-800 text-white rounded-lg'>
          Log uit
        </button>
      </div>
    </div>
  );
};

export default Account;
