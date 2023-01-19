import React from 'react'
import ChatMenu from './ChatMenu'
import Message from './Message'

export default function Chat() {
  return (
    <div
      className="grow-[4] 
                    bg-cover 
                    bg-[url('/src/Images/background-chat.png')]"
    >
      <ChatMenu />
      <Message />
    </div>
  )
}
