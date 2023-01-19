import React from 'react'
import { CgMenu } from 'react-icons/cg'

export default function Dropdown() {
    const toggleDropdown = () => {
        document.querySelector('#leftbar-menu').classList.toggle('hidden')
    }

    return (
        <div className="relative
                        inline-block
                        text-left
                        m-1"
        >
            <div>
                <CgMenu
                    id='leftbar-dropdown-btn'
                    className='text-slate-500 
                               w-10
                               h-10
                               p-2
                               cursor-pointer
                               hover:text-slate-400'
                    onClick={toggleDropdown} />
            </div>

            <div
                id="leftbar-menu"
                data-role="dropdown"
                className="absolute 
                           hidden
                           right-0 
                           z-10 
                           mt-2 
                           w-56 
                           origin-top-right 
                           rounded-md 
                           bg-white 
                           shadow-lg 
                           ring-1 
                           ring-black 
                           ring-opacity-5 
                           focus:outline-none 
                           focus:border-transparent 
                           focus:ring-0 
                           transition
                           ease-in-out"
            >
                <div className="py-1" role="none">
                    <a
                        href="/"
                        id="menu-item-0"
                        className="text-gray-700 
                                   block 
                                   px-4 
                                   py-2 
                                   text-sm"
                    >
                        Create chat
                    </a>
                    {/* <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Settings</a> */}
                    {/* <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Exit</a> */}
                    <form method="POST" action="#" role="none">
                        <button
                            type="submit"
                            id="menu-item-3"
                            className="text-gray-700
                                       block
                                       w-full
                                       px-4
                                       py-2
                                       text-left 
                                       text-sm"
                        >
                            Sign out
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
