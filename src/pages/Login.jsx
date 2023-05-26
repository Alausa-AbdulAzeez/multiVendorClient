import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-screen bg-gray-50  flex flex-col py-12  sm:px-6 lg:px-8'>
      <h1 className='text-center text-3xl font-bold mt-6'>
        Login to your account
      </h1>
      <div className='h-auto bg-white rounded-lg  mx-auto px-4 py-8 mt-8 sm:w-full sm:max-w-md sm:px-10'>
        <form className='space-y-6'>
          <div>
            <label
              htmlFor='email'
              className='text-sm font-medium text-gray-700'
            >
              Email address
            </label>
            <div className='mt-1'>
              <input
                type='email'
                name='email'
                required
                placeholder='example@gmail.com'
                className='w-full border border-gray-200 rounded px-3 py-2 focus:outline-none  focus:border-blue-300 placeholder-slate-400 '
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='password'
              className='text-sm font-medium text-gray-700 '
            >
              Password
            </label>
            <div className='mt-1 relative'>
              <input
                type='password'
                name='password'
                required
                placeholder='User Password'
                className='w-full border border-gray-200 rounded px-3 py-2 focus:outline-none  focus:border-blue-300 placeholder-slate-400 '
              />
              <AiOutlineEye className='absolute right-2 top-1/3 cursor-pointer' />
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className=' flex mt-1 items-center'>
              <input
                type='checkbox'
                name='rememberMe'
                id='rememberMe'
                className='mr-2'
              />
              <label
                htmlFor='rememberMe'
                className='text-sm font-medium text-gray-700 cursor-pointer'
              >
                Remember me
              </label>
            </div>
            <Link to={'/forgotPassword'}>
              <div className='text-blue-500 text-sm font-semibold cursor-pointer hover:text-blue-700'>
                Forgot password?
              </div>
            </Link>
          </div>
          <button
            type='subimt'
            className='w-full text-center bg-blue-600 text-white rounded-md py-2 font-semibold'
          >
            Submit
          </button>
          <div className='text-sm'>
            Don't have an account?
            <Link to={'/signup'}>
              <span className='text-blue-500 text-sm font-semibold cursor-pointer hover:text-blue-700 ml-1'>
                Sign up
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
