import React from 'react'
import Page from '../components/Page'
import Text from '../components/Text'
import data from '../assets/pageContent.json'
export default function Projects() {

  return (
    <Page>
      <Text title={data.projects.ngpanel.title}>
        {data.projects.ngpanel.description}
      </Text>
    </Page>
  )
}
