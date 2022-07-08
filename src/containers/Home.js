import React from 'react'
import Text from '../components/Text'
import data from "../assets/pageContent.json"
export default function Home() {


  return (
    <div>

        <Text title={data.home.introduction.title}>{data.home.introduction.content}</Text>


    </div>
  )
}
