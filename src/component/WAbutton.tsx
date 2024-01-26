import React from 'react'
type  propstype={
    title:string,
    className:string
}
const WAbutton = (props:propstype) => {
    let {title,className}=props
  return (
   <button className={className}>{title}</button>
  )
}

export default WAbutton