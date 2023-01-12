import React from 'react'
import Chat from './Chat'
import LeftBar from './LeftBar'

export default function AppWindow() {
  return (
    <div>
      <LeftBar/>
      <Chat/>
    </div>
  )
}
