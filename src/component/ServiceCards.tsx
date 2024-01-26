import React from 'react'

type propstype={
    title:string;
    icon:any
    discription:string
    Link:any
}
export default function ServiceCards(props:propstype) {
    let {title,icon,discription,Link}=props
  return <>
  <div className='text-center'>
    {icon}
  </div>
  <h1>{title}</h1>
  <p>{discription}</p>
  <a href="#" className='text-decoration-none fs-3 text-white '>{Link}</a>

  </>
    
  
}
