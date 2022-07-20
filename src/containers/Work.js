import React from 'react'
import WorkCard from '../components/WorkCard'
import oracleLogo from '../assets/organizations/oracle.svg'
import franndevLogo from '../assets/frann.dev.SVG'
import data from '../assets/pageContent.json'


export default function Work() {
  return (
    <div className='work-container'>
      <div className='work-cards'>
        <WorkCard organization="Oracle" src={oracleLogo} role="L1 Technical Support" date='July 2021 - Now'>
          {data.work.oracle.description}
        </WorkCard>
        <WorkCard organization='No Organization' role="Freelancer" date='September 2020'>
          {data.work.freelancer.description}
        </WorkCard>
      </div>
    </div>
  )
}
