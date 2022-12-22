import React from 'react'

function Form() {
  return (
    <div className=' mt-10 flex rounded-lg bg-gray-800 w-full md:w-[30%] mx-auto'>
        <form className='flex flex-col justify-center items-center gap-4 w-full '>
            <h1 className='text-3xl font-bold pb-2 text-white'>Sign up</h1>
            <div className='flex flex-col m-2 '>
              <label className=' text-gray-300' for='email'>Email</label>
              <input className='py-2 w-72 px-2 rounded-md  bg-gray-300' type='text'  />
            </div>
            
            <div className='flex flex-col m-2'>
              <label className='text-gray-300' for='password'>Password</label>
              <input className='w-72 px-2 rounded-md py-2  bg-gray-300' type='password'  />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-gray-300' for='password'>Verify password</label>
              <input className='w-72 px-2 rounded-md py-2 bg-gray-300' type='password'  />
            </div>

            <div>
                <p className='text-gray-300'>Have an account? <span className='text-blue-400'>Log in</span></p>
            </div>
            <button type='submit' className='text-gray-300 my-5 py-2 w-72 rounded bg-blue-800'>Sign up</button>
            
            
            
        </form>
    </div>
  )
}

export default Form