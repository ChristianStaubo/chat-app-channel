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
    <button className='text-white my-5 py-2 w-72 rounded bg-[#7074bc] self-center hoverBtn  ' onClick={handleSignOut}>Log out</button>
  )
}

export default SignOut