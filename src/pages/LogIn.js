import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { auth } from '../firebase'
let email = '123@gmail.com'
let password = 'password123'


  
  
function LogIn({setUser}) {

  const handleSignIn = (e) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user
      console.log('Signed in user => ', user)
      setUser(auth.currentUser)
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })
  }

  return (
    <div>
         <button onClick={handleSignIn}>Log in</button>
        
        
    </div>
       
  )
}

export default LogIn