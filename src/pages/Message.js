import React from 'react'

function Message({message,user}) {
    console.log('User => ',user)
    console.log('Message => ',message)
    if (message.name !== user.email) {
        return (
            <div className=' rounded-xl mr-2 flex flex-row gap-2  max-w-[70%]  py-2 my-2 self-start '>
            
            <div className='bg-gray-400 rounded-xl py-2 px-1 my-2 '>
                <h1 className='text-gray-800 pb-1'>{message.name}</h1>
                <p className='break-all'>{message.text}</p>
            </div>
            
        </div>
        )
    }
    
    return (
        <div className=' rounded-xl mr-2 flex flex-row-reverse gap-2  max-w-[70%]  py-2 my-2 self-end '>
            <div>
                <p className='bg-blue-600 rounded-xl py-2 px-1 my-2  break-all'>{message.text}</p>
            </div>
            
        </div> 
    )

}
export default Message

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

        