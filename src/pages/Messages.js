import React from 'react'
import reactImg from '../logo192.png'
function Messages() {
  return (
    <div className='h-screen  bg-gray-800 w-full text-white flex flex-col items-start '>
        <div className=' rounded-xl mr-2 flex flex-row-reverse gap-2  max-w-[70%]  py-2 my-2 self-end '>
            <div>
                
                <p className='bg-blue-600 rounded-xl py-2 px-1 my-2'>What is up guys guys guys guys guys guys guys  </p>
            </div>
            
        </div>
        <div className='bg-gray-400 rounded-xl max-w-[70%] my-2 py-2 px-2 items-end break-words'>
            <p>What is up guys my name is Christian this is working I believe good. Let's see if we require more margin</p>
        </div>
        <div className=' rounded-xl mr-2 flex flex-row gap-2  max-w-[70%]  py-2 my-2 self-start '>
            <img src={reactImg} className='h-8 w-8 rounded-full bg-gray-100  ml-1 self-end mb-1' />
            <div className='bg-blue-600 rounded-xl py-2 px-1 my-2 '>
                <h1 className='text-gray-800 pb-1'>Christian</h1>
                <p className=''>What is up guys guys guys guys guys guys guys  </p>
            </div>
            
        </div>
        

    </div>
  )
}

export default Messages



// <div className={own ? "message own" : "message otherPerson"}>
//     <div className="messageTop">
//       { !own && currentFriend && <img
//         className="messageImg"
//         src={currentFriend ? currentFriend.favSongs[0].albumUrl : null}
//         alt={currentFriend?.favSongs[0].title}
//         key={`${message._id}${message.createdAt}`}
//       />}
//       <p className="messageText">{message.text}</p>
//     </div>
//     <TimeAgo date={message.createdAt} live={true} maxPeriod="30s"/>
//   </div>