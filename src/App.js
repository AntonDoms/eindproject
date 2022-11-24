import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { Route, Routes, Link } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading">
                Webshop
              </a>
              <div className='flex md:flex md:flex-grow flex-row-reverse gap-4 text-lg float-right'>
                <Link to='/signup' className=''>
                  Register
                </Link>
                <Link to='/' className=''>
                   Log in
                </Link>
              </div>
            </div>
          </nav>
        </section>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
