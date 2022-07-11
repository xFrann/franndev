import React from 'react'
import Text from '../components/Text'
import data from "../assets/pageContent.json"
import me from "../assets/me.jpeg"


export default function Home() {


  return (
    <div>
      
        <Text title={data.home.introduction.title}>{data.home.introduction.content}</Text>
        <Text title={data.home.about.title}>{data.home.about.content}</Text>
        <img src={me} width="400px" height="700px"></img>

    </div>
  )
}
