import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { auth } from '../firebase'
let email = '123@gmail.com'
let password = 'password123'
const handleSignUp = (e) => {
  e.preventDefault()
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user
    console.log(user)
    // ...
  })
  .catch((error) => {
    console.log(error)
    const errorCode = error.code
    const errorMessage = error.message
    // ..
  });
}
function SignUp() {
  return (
    <button onClick={handleSignUp}>Sign up</button>
  )
}

export default SignUp