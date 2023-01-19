import React from 'react'
import { TiTick } from 'react-icons/ti'
import { TiTickOutline } from 'react-icons/ti'

export default function ChatTab() {
  return (
    <div className='bg-slate-100
                    p-2.5
                    flex
                    hover:bg-slate-200
                    hover:cursor-pointer
                    relative'
    >
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        alt="Avatar"
        className="rounded-full 
                   w-11"
      />

      <div className='ml-3'>
        <p>
          User Name
        </p>

        <p className='text-sm
                      text-slate-400'
        >
          message
        </p>
      </div>

      <div
        className='absolute 
                   top-0
                   right-0 
                   flex
                   p-2'
      >

        <TiTick
          className='text-green-500
                     hidden'
        />

        <TiTickOutline
          className='text-green-500'
        />

        <p
          className='text-slate-400
                     text-sm'
        >
          2:03
        </p>
      </div>
    </div >
  )
}
