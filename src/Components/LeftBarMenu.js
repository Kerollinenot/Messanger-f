import React from 'react'
import LeftbarDropdown from './LeftbarDropdown'

export default function LeftBarMenu() {
  return (
    <div className="flex h-12 items-center justify-start">
      <input
        id="leftbar-search"
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
      <LeftbarDropdown />

    </div>
  )
}
