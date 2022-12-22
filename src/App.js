import './App.css';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { auth } from './firebase'
import SendMessage from './pages/SendMessage';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import { useState } from 'react';
import SignOut from './pages/SignOut';
import Form from './pages/Form';
// let email = '123@gmail.com'
// let password = 'password123'
// const handleSignUp = (e) => {
//   e.preventDefault()
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user
//     console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     console.log(error)
//     const errorCode = error.code
//     const errorMessage = error.message
//     // ..
//   });
// }

// const handleSignIn = (e) => {
//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user
//     console.log('Signed in user => ', user)
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code
//     const errorMessage = error.message
//   })
// }

// const handleSignOut = (e) => {
//   e.preventDefault()
//   signOut(auth).then(() => {
//     // Sign-out successful.
//     console.log('Signed out')
//   }).catch((error) => {
//     // An error happened.
//   });
// }


function App() {
  const [user,setUser] = useState(auth.currentUser)
  console.log(user)
  return (
    <div className="App">
      <h1 className='text-4xl font-bold text-center'>Firebase Chat Room!</h1>
      {/* <div className='mt-10 bg-blue-500'>
        <SignUp />
        {
          !user ? <LogIn  setUser={setUser}/> : <SignOut setUser={setUser}/>
        }
      </div> */}
      <Form />
      
      {/* <SendMessage /> */}
    </div>
  );
}

export default App;
