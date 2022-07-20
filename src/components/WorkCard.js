import React from 'react'
import css from '../css/workcard.css'
import Separator from './Separator'
import Text from './Text'
/**
 * 
 * @param {{organization: String, src: String, role: String, date: String}} props 
 * @returns 
*/
export default function WorkCard(props) {

  return (
    <div className='work-card'>
        <div className='inner-container'>
            <div className='work-card-header'>
                {props.src && <img className='org-logo' width="64px" height="64px" src={props.src}></img>}
                <div className='right-content'>
                    <h1>{props.role}</h1>
                    <div className='organization'>
                        <h2>{props.organization}</h2>
                    </div>
                </div>
            </div>
            <Separator width="50%" color='black'></Separator>
            <div className='date-container'>
                <p>{props.date}</p>
            </div>
            <div className='description'>
                <Text>{props.children}</Text>
            </div>
        </div>
    </div>
  )
}
