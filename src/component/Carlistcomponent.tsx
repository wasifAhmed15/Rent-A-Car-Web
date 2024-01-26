import React from 'react'
import './Component.css'
type propstype={
    name:string,
    Price:number,
    img:any,

}
export default function Carlistcomponent(props:propstype) {
    let {name,Price,img}=props
  return (
    <div className='w-100  text-center'>
        <div className=''>
            <img src={img} alt="" className='w-full h-[120px] object-contain sm:translate-right-10 cardlistmotion'/>
        </div>
        <div className='space-y-2'>
            <p className='text-xl colorprimary font-semibold'>{name}</p>
        </div>
        <div>
            <p>${Price}</p>
            <p className="text-xl font-semibold ">12Km</p>
        </div>
        

    </div>
  )
}
