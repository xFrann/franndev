import React from 'react'

export default function Page(props) {

  const style = {
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 0px"
  }

  return (
    <div style={style}>
      {props.children}
    </div>
  )
}
