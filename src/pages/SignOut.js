import React from 'react'
import { auth } from '../firebase'
import { signOut  } from "firebase/auth";
function SignOut({setUser}) {

    const handleSignOut = (e) => {
        e.preventDefault()
        signOut(auth).then(() => {
          // Sign-out successful.
          console.log('Signed out')
          setUser(null)
        }).catch((error) => {
          // An error happened.
        });
      }
  return (
    <button onClick={handleSignOut}>Log out</button>
  )
}

export default SignOut