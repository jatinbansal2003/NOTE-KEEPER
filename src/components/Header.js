import React from 'react'

function Header({handleToggle}) {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button onClick={()=>handleToggle((preMode)=>!preMode)} className='save'>Toggle Mode</button>
        </div>
    )
}

export default Header
