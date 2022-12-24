import React from 'react'
import { auth } from '../firebase'
import { signOut  } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function SignOut({setUser}) {
    let navigate = useNavigate()
    const navigateToLogin = () => {
      navigate('/')
      
    }
    const handleSignOut = (e) => {
        e.preventDefault()
        
        signOut(auth).then(() => {
          // Sign-out successful.
          console.log('Signed out')
          setUser(null)
          navigateToLogin()
          
          
        }).catch((error) => {
          // An error happened.
        });
      }
  return (
    <button className='bg-yellow-500 w-[50%] md:w-[10%] self-center rounded my-2' onClick={handleSignOut}>Log out</button>
  )
}

export default SignOut