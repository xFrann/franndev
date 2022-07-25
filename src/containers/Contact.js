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
            <a href="https://www.instagram.com/frann.dev/"> 
              <img src={instagram} width="30px" height="30px"></img>
            </a>
          </div>

          <div className='github-container'>
            <a href="https://github.com/xFrann">
              <img src={github} width="30px" height="30px"></img>
            </a>
          </div>

          <div className='linkedin-container'>
            <a href="https://www.linkedin.com/in/frangumadalin215/">
              <img src={linkedin} width="30px" height="30px"></img>
            </a>
          </div>

        </div>
      </Page>
    </div>
  )
}
