import React from 'react'
import ChatTabsContainer from './ChatTab'
import LeftBarMenu from './LeftBarMenu'

export default function LeftBar() {

    return (
        <div className='grow max-w-sm'>
            <LeftBarMenu />
            <ChatTabsContainer />
        </div>
    )
}
