import React from 'react'
import Text from '../components/Text'
import data from "../assets/pageContent.json"
import Page from '../components/Page'


export default function Home() {


  return (
    <div>
        <Page><Text title={data.home.introduction.title}>{data.home.introduction.content}</Text></Page>
        <Page><Text title={data.home.about.title}>{data.home.about.content}</Text></Page>
        <Page><Text title={data.home.explore.title}>{data.home.explore.content}</Text></Page>
        <Page><Text title={data.home.time.title}>{data.home.time.content}</Text></Page>
    </div>
  )
}
