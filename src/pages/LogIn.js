import React from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { auth } from '../firebase'
let email = '123@gmail.com'
let password = 'password123'

const handleSignIn = (e) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user
      console.log('Signed in user => ', user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })
  }
  
  const handleSignOut = (e) => {
    e.preventDefault()
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Signed out')
    }).catch((error) => {
      // An error happened.
    });
  }

function LogIn() {
  return (
    <div>
        <button onClick={handleSignIn}>Log in</button>
        <button onClick={handleSignOut}>Log out</button>
    </div>
       
  )
}

export default LogIn