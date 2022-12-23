import React, { useState } from 'react'
import { collection, addDoc, serverTimestamp, getDocs  } from "firebase/firestore"
import { db, auth } from '../firebase';
function SendMessage() {
    const [message,setMessage] = useState('')
    const [storedMessages,setStoredMessages] = useState([])
    const handleSend = async (e) => {
        e.preventDefault()
        console.log(auth)
        console.log(auth.currentUser.email)
        try {
            const docRef = await addDoc(collection(db, "messages"), {
              text: message,
              name: auth.currentUser.email,
              timestamp: serverTimestamp()
              
            });
            console.log("Document written with ID: ", docRef.id);
            console.log(docRef)
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    const getMessages = async (e) => {
        const querySnapshot = await getDocs(collection(db, "messages"));
        let messagesArr = []
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data())
        messagesArr.push(doc.data())
        });
        setStoredMessages([...message, messagesArr])
    }
    console.log(storedMessages)
  return (
    <div>
        <form>
            <input value={message} onChange={(e) => setMessage(e.target.value)} type='text' placeholder='Send Message' />
            <button type='submit' onClick={handleSend}>Send</button>
        </form>
        <button onClick={getMessages}>Get Messages</button>
    </div>
  )
}

export default SendMessage