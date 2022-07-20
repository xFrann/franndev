import React from 'react'

/**
 * 
 * @param {{color: string, width: string}} props
 * Creates a thin horizontal line with defined parameters.
 * @returns Div tag styles as a thin horizontal line
 */
export default function Separator(props) {

  return (
    <div style={{width: `${props.width ? props.width : "100%"}`, height: "1px", backgroundColor: `${props.color}`, margin: "1rem 0rem"}}>

    </div>
  )
}
