import React, { useState } from 'react'
import { collection, addDoc, serverTimestamp, getDocs  } from "firebase/firestore"
import { db, auth } from '../firebase';
function SendMessage({scroll}) {
    const [message,setMessage] = useState('')
    const [storedMessages,setStoredMessages] = useState([])
    const handleSend = async (e) => {
        e.preventDefault()
        if (message === '') {
          return
        }
      
        try {
            const docRef = await addDoc(collection(db, "messages"), {
              text: message,
              name: auth.currentUser.displayName,
              timestamp: serverTimestamp()
              
            });
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          setMessage('')
          scroll.current.scrollIntoView({behavior: 'smooth'})
    }

    const getMessages = async (e) => {
        const querySnapshot = await getDocs(collection(db, "messages"));
        let messagesArr = []
        querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        // console.log(doc.data())
        messagesArr.push(doc.data())
        });
        setStoredMessages([...message, messagesArr])
    }
  return (
    <div className='bg-gray-800 h-full w-full md:w-[50%] md:mx-auto text-white flex flex-col items-start sticky bottom-0   '>
        <form className='w-full mx-2 flex justify-between items-center'>
            <input className='w-full rounded text-black' value={message} onChange={(e) => setMessage(e.target.value)} type='text' placeholder='Send Message' />
            <button className=' my-5 py-1 ml-5 mr-4 px-4  rounded bg-blue-700 sendBtn' type='submit' onClick={handleSend}>Send</button>
        </form>
    </div>
  )
}

export default SendMessage