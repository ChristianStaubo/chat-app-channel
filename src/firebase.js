// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore, onSnapshot, query } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// let listAllUsers = (nextPageToken) => {
//   // List batch of users, 1000 at a time.
//   getAuth()
//     .listUsers(1000, nextPageToken)
//     .then((listUsersResult) => {
//       console.log('LISTING USERS')
//       listUsersResult.users.forEach((userRecord) => {
//         console.log('user', userRecord.toJSON());
//       });
//       if (listUsersResult.pageToken) {
//         // List next batch of users.
//         listAllUsers(listUsersResult.pageToken);
//       }
//     })
//     .catch((error) => {
//       console.log('Error listing users:', error);
//     });
// };
// Start listing users from the beginning, 1000 at a time.

// const findUsers = () => {
//   const querySnapshot = query(collection(db, 'takenUsernames'));
//       const unsubscribe = onSnapshot(querySnapshot, (querySnapshot) => {
        
//         querySnapshot.forEach((doc) => {
//           if (username === doc.username) {
//             return false
//           }
//         });
//         setMessages(messages);
//       });
//       return () => unsubscribe();
// }

// const handleSend = async (e) => {
//   e.preventDefault()

//   try {
//       const docRef = await addDoc(collection(db, "usernames"), {
//         name: username
        
//       });
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
    
// }



// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
// export const listUsers = listAllUsers(app)