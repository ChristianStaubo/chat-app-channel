import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { auth } from '../firebase'
import { useNavigate } from "react-router-dom";
// import {listUsers} from '../firebase'
function FormLogIn({setUser}) {
    let navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [err,setErr] = useState(false)
    const handleSignIn = (e) => {
      e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user
          console.log('Signed in user => ', user)
          // listUsers()
          setUser(auth.currentUser)
          setErr(false)
          navigate('/messages')
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          setErr(true)
          const errorMessage = error.message
          console.log(errorMessage,errorCode)
        })
      }

      const navigateToSignUp = () => {
        navigate('/signUp')
      }
  return (
    <div>

    
    <div className={`${!err ? 'mt-[50%] sm:mt-44 flex rounded-lg bg-gray-800 w-[95%] md:w-[30%] mx-auto' : 'mt-10 flex rounded-lg bg-gray-800 border-2 border-red-500 w-[95%] md:w-[30%] mx-auto'}`}>
        <form className='flex flex-col justify-center items-center gap-4 w-full '>
            <h1 className='text-3xl font-bold pb-2 text-white'>Log in</h1>
            {err ? <p className='text-red-500'>Invalid email or password</p> : ''}
            <div className='flex flex-col m-2 '>
              <label className=' text-gray-300' htmlFor='email'>Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='py-2 w-72 px-2 rounded-md  bg-gray-300' type='text'  />
            </div>
            
            <div className='flex flex-col m-2'>
              <label className='text-gray-300' htmlFor='password'>Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-72 px-2 rounded-md py-2  bg-gray-300' type='password'  />
            </div>
            

            <div>
                <p className='text-gray-300'>Don't have an account? <span className='text-blue-400 hover:cursor-pointer' onClick={navigateToSignUp}>Sign up</span></p>
            </div>
            <button type='submit'onClick={handleSignIn} className='text-gray-300 my-5 py-2 w-72 rounded bg-blue-800'>Log in</button>
            
            
            
        </form>
    </div>
    <footer>
       
       <div className='waves'>
           <div className='wave' id='wave1'></div>
           <div className='wave' id='wave2'></div>
           <div className='wave' id='wave3'></div>
           <div className='wave' id='wave4'></div>
           <div className="notWave"></div>
           

       </div>
       </footer>
    </div>
  )
}

export default FormLogIn