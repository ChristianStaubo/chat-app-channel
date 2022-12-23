import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { auth } from '../firebase'
import { useNavigate } from "react-router-dom";
// let email = '123@gmail.com'
// let password = 'password123'

function Form({setUser}) {
  let navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleSignUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user
      console.log(user)
      setUser(user)
      // ...
    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code
      const errorMessage = error.message
      // ..
    });
  }

  const navigateToLogin = () => {
    navigate('/')
  }
  return (
    <div className=' mt-10 flex rounded-lg bg-gray-800 w-full md:w-[30%] mx-auto'>
        <form className='flex flex-col justify-center items-center gap-4 w-full '>
            <h1 className='text-3xl font-bold pb-2 text-white'>Sign up</h1>
            <div className='flex flex-col m-2 '>
              <label className=' text-gray-300' htmlfor='email'>Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='py-2 w-72 px-2 rounded-md  bg-gray-300' type='text'  />
            </div>
            
            <div className='flex flex-col m-2'>
              <label className='text-gray-300' htmlfor='password'>Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-72 px-2 rounded-md py-2  bg-gray-300' type='password'  />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-gray-300' htmlfor='password'>Verify password</label>
              <input className='w-72 px-2 rounded-md py-2 bg-gray-300' type='password'  />
            </div>

            <div>
                <p className='text-gray-300'>Have an account? <span className='text-blue-400' onClick={navigateToLogin}>Log in</span></p>
            </div>
            <button type='submit' className='text-gray-300 my-5 py-2 w-72 rounded bg-blue-800' onClick={handleSignUp}>Sign up</button>
            
            
            
        </form>
    </div>
  )
}

export default Form