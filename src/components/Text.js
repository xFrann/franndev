import React from 'react'
import css from '../css/text.css'

export default function Text(props) {

  return (
    <div className='text-container'>
        <div className='title'>
            <h1>{props.title}</h1>
        </div>

        <div className='content'>
            {/* 
                There's no user input that can alter the json file on disk from where the text is loaded
                So this tag should be safe as long as the children of the Text tag cannot be modified by the user.
            */}
            <p dangerouslySetInnerHTML={{__html: props.children}}></p>
        </div>

    </div>
  )
}
