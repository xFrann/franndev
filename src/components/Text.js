import React from 'react'
import css from '../css/text.css'

export default function Text(props) {
  return (
    <div className='text-container'>
        <div className='title'>
            <h1>{props.title}</h1>
        </div>

        <div className='content'>
            <p>{props.children}</p>
        </div>

    </div>
  )
}
