import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile  } from "firebase/auth";
import { auth, db } from '../firebase'
import { useNavigate } from "react-router-dom";
import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';


function Form({setUser}) {
  let navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [username,setUsername] = useState('')
  const [err,setErr] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')
//   const checkIfUsernameExists = () => {
//     const querySnapshot = query(collection(db, 'takenUsernames'));
//         const unsubscribe = onSnapshot(querySnapshot, (querySnapshot) => {
          
//           querySnapshot.forEach((doc) => {
//             console.log(doc.data())
//             if (username === doc.username) {
//               console.log('USERNAME ALREADY TAKEN')
//               return
//             }
//           });
          
//         });
//         return () => unsubscribe();
//   }


//   const addUsernameToTaken = async (e) => {
//   e.preventDefault()

//   try {
//       const docRef = await addDoc(collection(db, "takenUsernames"), {
//         name: username
        
//       });
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
    
// }


  const handleSignUp = (e) => {
    e.preventDefault()
    console.log(auth)
    // checkIfUsernameExists()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user
      console.log('User before => ',user.displayName)
      updateProfile(user, {
        displayName: username
      }).then(() => {
        // addUsernameToTaken()
        console.log('User updated => ',user.displayName)
        // ...
      }).catch((error) => {
        setErrorMessage(error.message)
        setErr(true)
        console.log(error)
      });
      console.log(userCredential)
      setUser(user)
      navigate('/messages')
      // ...
    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code
      const errorMessage = error.message
      if (error.code === 'auth/weak-password') {
        setErrorMessage('Password should be at least 6 characters')
      }
      if (error.code === 'auth/invalid-email') {
        setErrorMessage('Invalid email address')
      }

      
      setErr(true)
      console.log(errorMessage,`ERROR CODE : ${errorCode}`)
      // ..
    });
  }

  const navigateToLogin = () => {
    navigate('/')
  }
  return (
    <div>

    
    <div className={`${!err ? 'mt-10 flex rounded-lg bg-gray-800 w-[95%] md:w-[40%] lg:w-[30%] mx-auto' : 'mt-10 flex rounded-lg bg-gray-800 border-2 border-red-500 w-[95%] md:w-[40%] lg:w-[30%] mx-auto'}`}>
        <form className='flex flex-col justify-center items-center gap-4 w-full '>
            <h1 className='text-3xl font-bold pb-2 text-white'>Sign up</h1>
            {err ? <p className='text-red-500'>{errorMessage}</p> : ''}
            <div className='flex flex-col m-2 '>
              <label className=' text-gray-300' htmlfor='email'>Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='py-2 w-72 px-2 rounded-md  bg-gray-300' type='text'  />
            </div>

            <div className='flex flex-col m-2 '>
              <label className=' text-gray-300' htmlfor='username'>Username</label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} className='py-2 w-72 px-2 rounded-md  bg-gray-300' type='text'  />
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
                <p className='text-gray-300'>Have an account? <span className='text-blue-400 hover:cursor-pointer' onClick={navigateToLogin}>Log in</span></p>
            </div>
            <button type='submit' className='text-white my-5 py-2 w-72 rounded bg-[#7074bc] hoverBtnInverted' onClick={handleSignUp}>Sign up</button>
            
            
            
        </form>
    </div>
    <footer>
       
       <div className='waves'>
           <div className='wave signUp'  id='wave1'></div>
           <div className='wave signUp' id='wave2'></div>
           <div className='wave signUp' id='wave3'></div>
           <div className='wave signUp' id='wave4'></div>
           <div className="notWave"></div>
           

       </div>
       </footer>
    </div>
  )
}

export default Form