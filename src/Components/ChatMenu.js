import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import ChatMenuDropdown from './ChatMenuDropdown'

export default function ChatMenu() {
  return (
    <div
      className='bg-slate-100
                    h-12
                    px-3
                    border-l
                    flex
                    justify-between'
    >
      <div>
        <p>
          User Name
        </p>
        <p
          className='text-sm
                      text-slate-400'
        >
          last seen
        </p>
      </div>
      <div
        className='h-full
                  flex
                  items-center'
      >
        <AiOutlineSearch
          className='text-slate-500 
                     w-10
                     h-10
                     p-2
                     cursor-pointer
                     hover:text-slate-400'
        />

        <input
          id="chat-search"
          placeholder="Search"
          className="w-full
                   px-3
                   py-1.5
                   text-base
                   font-normal
                   text-gray-700
                   bg-slate-200
                   bg-clip-padding
                   border border-solid border-gray-300
                   rounded
                   transition
                   ease-in-out
                   my-1
                   mx-2.5
                   focus:text-gray-700 
                   focus:bg-white 
                   focus:border-blue-600 
                   focus:outline-none"
        />
        <ChatMenuDropdown />

      </div>
    </div>
  )
}
