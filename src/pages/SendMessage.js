import React from 'react'
import { collection, addDoc, serverTimestamp, getDocs  } from "firebase/firestore"
import { db, auth } from '../firebase';
function SendMessage() {

    const handleSend = async (e) => {
        e.preventDefault()
        console.log(auth)
        console.log(auth.currentUser.email)
        try {
            const docRef = await addDoc(collection(db, "messages"), {
              text: 'First message',
              name: auth.currentUser.email,
              timestamp: serverTimestamp()
              
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    const getMessages = async (e) => {
        const querySnapshot = await getDocs(collection(db, "messages"));
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data())
        });
    }
  return (
    <div>
        <form>
            <input type='text' placeholder='Send Message' />
            <button type='submit' onClick={handleSend}>Send</button>
        </form>
        <button onClick={getMessages}>Get Messages</button>
    </div>
  )
}

export default SendMessage