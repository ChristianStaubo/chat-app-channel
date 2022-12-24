import React, { useEffect, useRef, useState } from 'react'
import reactImg from '../logo192.png'
import SendMessage from './SendMessage'
import { collection, addDoc, serverTimestamp, getDocs, orderBy, query, onSnapshot, limitToLast  } from "firebase/firestore"
import { db, auth } from '../firebase';
import SignOut from './SignOut';
import Message from './Message';
const Messages2 = ({user}) => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
  
    useEffect(() => {
      const querySnapshot = query(collection(db, 'messages'), orderBy('timestamp'),limitToLast(50));
      const unsubscribe = onSnapshot(querySnapshot, (querySnapshot) => {
        let messages = [];
        querySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messages);
      });
      return () => unsubscribe();
    }, []);
  
    return (
      <div className='flex flex-col'>
        <div className='h-[80vh] mt-10  bg-gray-800 w-full md:w-[50%] md:mx-auto text-white flex flex-col items-start overflow-y-auto overflow-x-hidden  '>
          {messages &&
            messages.map((message) => (
              <Message key={message.id} message={message} user={user} />
            ))}
            
        </div>
        <SendMessage />
        
        
      </div>
    );
  };
  
  export default Messages2;



{/* <div className=' rounded-xl mr-2 flex flex-row gap-2  max-w-[70%]  py-2 my-2 self-start '>
            <img src={reactImg} className='h-8 w-8 rounded-full bg-gray-100  ml-1 self-end mb-1' />
            <div className='bg-gray-400 rounded-xl py-2 px-1 my-2 '>
                <h1 className='text-gray-800 pb-1'>Christian</h1>
                <p className='break-all'>What is up guys guys guys guys guys guys guys  </p>
            </div>
            
        </div>

        <div className=' rounded-xl mr-2 flex flex-row gap-2  max-w-[70%]  py-2 my-2 self-start '>
            <img src={reactImg} className='h-8 w-8 rounded-full bg-gray-100  ml-1 self-end mb-1' />
            <div className='bg-gray-400 rounded-xl py-2 px-1 my-2 '>
                <h1 className='text-gray-800 pb-1'>Christian</h1>
                <p className='break-all'>What is up guys guys guys guys guys guys guys  </p>
            </div>
            
        </div>
        <div className=' rounded-xl mr-2 flex flex-row-reverse gap-2  max-w-[70%]  py-2 my-2 self-end '>
            <div>
                <p className='bg-blue-600 rounded-xl py-2 px-1 my-2  break-all'>What is up guys guys guys guys guys guys gussssssssssssssssssssssssssssssssssssssssss  </p>
            </div>
            
        </div> */}