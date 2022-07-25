import React from 'react'
import Text from '../components/Text'
import data from '../assets/pageContent.json'
import Page from '../components/Page'
import instagram from '../assets/social-media-images/instagram.svg'
import github from '../assets/social-media-images/github.svg'
import linkedin from '../assets/social-media-images/linkedin.svg'
import '../css/contact.css'

export default function Contact() {
  return (
    <div>
      <Page>
        <Text title={data.contact.title}>{data.contact.content}</Text>
      </Page>

      <Page>
        <div className='social-container'>
          <div className='ig-container'>
            <a href="https://www.instagram.com/frann.dev/" aria-label='frann.dev instagram page'> 
              <img src={instagram} width="30px" height="30px" alt='frann.dev instagram page'></img>
            </a>
          </div>

          <div className='github-container'>
            <a href="https://github.com/xFrann" aria-label='frann.dev github page'>
              <img src={github} width="30px" height="30px" alt='frann.dev github page'></img>
            </a>
          </div>

          <div className='linkedin-container'>
            <a href="https://www.linkedin.com/in/frangumadalin215/" aria-label='frann.dev linkedin page'>
              <img src={linkedin} width="30px" height="30px" alt='frann.dev linkedin page'></img>
            </a>
          </div>

        </div>
      </Page>
    </div>
  )
}
