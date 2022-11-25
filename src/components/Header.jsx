import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
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
  )
}

export default Header