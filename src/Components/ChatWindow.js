import React from 'react'
import Chat from './Chat'
import LeftBar from './LeftBar'

export default function ChatWindow() {
  return (
    <div className='flex 
                    border-2 
                    border-slate-300 
                    mx-auto 
                    mb-40 
                    w-9/12 
                    h-full
                    bg-slate-100'>
      <LeftBar/>
      <Chat/>
    </div>
  )
}
