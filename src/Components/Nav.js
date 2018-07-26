import React from 'react'

export default function Nav(props) {
    return (
        <div className="nav-container">
         {props.children}
        </div>
    )
}